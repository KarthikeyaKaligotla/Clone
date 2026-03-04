import express from 'express'
import db from '../db.js'

const router = express.Router()

// Login (Mock OTP flow)
router.post('/login', (req, res) => {
    const { phone } = req.body

    if (!phone || phone.length !== 10) {
        return res.status(400).json({ error: 'Valid 10-digit phone number is required' })
    }

    // Check if user exists
    db.get('SELECT * FROM users WHERE phone = ?', [phone], (err, user) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' })
        }

        const token = 'mock_token_' + Date.now() + '_' + phone

        if (user) {
            return res.json({
                message: 'Login successful',
                token,
                user
            })
        } else {
            // Create new user
            const id = 'user_' + Date.now()
            const newUser = { id, phone, name: null, email: null }

            db.run('INSERT INTO users (id, phone) VALUES (?, ?)', [id, phone], (err) => {
                if (err) {
                    return res.status(500).json({ error: 'Failed to create user' })
                }

                return res.json({
                    message: 'Account created and logged in',
                    token,
                    user: newUser
                })
            })
        }
    })
})

export default router
