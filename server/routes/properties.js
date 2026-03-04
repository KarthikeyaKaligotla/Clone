import express from 'express'
import db from '../db.js'

const router = express.Router()

// Get all properties
router.get('/', (req, res) => {
    db.all('SELECT * FROM properties', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' })
        }

        // Parse JSON strings back to objects
        const properties = rows.map(r => ({
            ...r,
            amenities: JSON.parse(r.amenities)
        }))

        res.json(properties)
    })
})

// Get single property with bookings
router.get('/:id', (req, res) => {
    const { id } = req.params

    db.get('SELECT * FROM properties WHERE id = ?', [id], (err, property) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' })
        }

        if (!property) {
            return res.status(404).json({ error: 'Property not found' })
        }

        // Parse amenities
        property.amenities = JSON.parse(property.amenities)

        // Get future bookings for this property
        db.all('SELECT * FROM bookings WHERE property_id = ?', [id], (err, bookings) => {
            if (err) {
                return res.status(500).json({ error: 'Database error fetching bookings' })
            }

            property.futureBookings = bookings.map(b => ({
                tenantName: b.tenant_name,
                moveInDate: b.move_in_date,
                createdAt: b.created_at
            }))

            res.json(property)
        })
    })
})

// Post new property
router.post('/', (req, res) => {
    const {
        title, location, rent, deposit, area, bhk, furnishing,
        floor, facing, description, amenities, postedBy,
        vacatingDate = null, reservationStatus = 'occupied'
    } = req.body

    const id = 'prop_' + Date.now()
    const postedDate = new Date().toISOString().split('T')[0]
    // Default placeholder image for new properties
    const image = 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop'

    const amenitiesJson = JSON.stringify(amenities || [])

    const stmt = db.prepare(`
    INSERT INTO properties (
      id, title, location, rent, deposit, area, bhk, furnishing, floor,
      facing, image, description, amenities, vacatingDate, reservationStatus, postedBy, postedDate
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `)

    stmt.run(
        id, title, location, rent, deposit, area, bhk, furnishing, floor,
        facing, image, description, amenitiesJson, vacatingDate, reservationStatus, postedBy, postedDate,
        function (err) {
            if (err) {
                return res.status(500).json({ error: 'Failed to post property' })
            }
            res.status(201).json({
                message: 'Property posted successfully',
                id
            })
        }
    )
    stmt.finalize()
})

export default router
