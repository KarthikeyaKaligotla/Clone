import express from 'express'
import cors from 'cors'
import db from './db.js'
import authRoutes from './routes/auth.js'
import propertiesRoutes from './routes/properties.js'
import bookingsRoutes from './routes/bookings.js'

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/properties', propertiesRoutes)
app.use('/api/bookings', bookingsRoutes)

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({ error: 'Something went wrong on the server!' })
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
