import express from 'express'
import db from '../db.js'

const router = express.Router()

// Validate and create a future booking
router.post('/:propertyId/book', (req, res) => {
    const { propertyId } = req.params
    const { tenantName, moveInDate } = req.body

    if (!tenantName || !moveInDate) {
        return res.status(400).json({ error: 'Tenant name and move-in date are required' })
    }

    // 1. Fetch property to validate vacating date
    db.get('SELECT * FROM properties WHERE id = ?', [propertyId], (err, property) => {
        if (err || !property) {
            return res.status(404).json({ error: 'Property not found' })
        }

        if (!property.vacatingDate) {
            return res.status(400).json({ error: 'This property does not have a future vacating date' })
        }

        const moveIn = new Date(moveInDate)
        const vacating = new Date(property.vacatingDate)

        // Ensure hours are stripped for accurate day comparison
        moveIn.setHours(0, 0, 0, 0)
        vacating.setHours(0, 0, 0, 0)
        const today = new Date()
        today.setHours(0, 0, 0, 0)

        if (moveIn <= today) {
            return res.status(400).json({ error: 'Move-in date must be in the future' })
        }

        if (moveIn < vacating) {
            return res.status(400).json({ error: `Move-in date must be on or after the vacating date (${property.vacatingDate})` })
        }

        if (property.reservationStatus === 'reserved') {
            return res.status(400).json({ error: 'This property already has an active reservation' })
        }

        // 2. Check for overlapping bookings
        db.get('SELECT id FROM bookings WHERE property_id = ? AND move_in_date = ?', [propertyId, moveInDate], (err, row) => {
            if (err) {
                return res.status(500).json({ error: 'Database validation error' })
            }

            if (row) {
                return res.status(400).json({ error: 'Another booking exists for this date' })
            }

            // 3. Create booking and update property status
            const bookingId = 'bkg_' + Date.now()
            const createdAt = new Date().toISOString().split('T')[0]

            db.serialize(() => {
                db.run('BEGIN TRANSACTION')

                db.run(
                    'INSERT INTO bookings (id, property_id, tenant_name, move_in_date, created_at) VALUES (?, ?, ?, ?, ?)',
                    [bookingId, propertyId, tenantName, moveInDate, createdAt]
                )

                db.run(
                    "UPDATE properties SET reservationStatus = 'reserved' WHERE id = ?",
                    [propertyId]
                )

                db.run('COMMIT', (err) => {
                    if (err) {
                        db.run('ROLLBACK')
                        return res.status(500).json({ error: 'Transaction failed' })
                    }

                    res.json({
                        message: 'Reservation confirmed',
                        bookingId,
                        propertyId
                    })
                })
            })
        })
    })
})

export default router
