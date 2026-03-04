import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import sqlite3 from 'sqlite3'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const dbPath = join(__dirname, 'database.sqlite')
const db = new sqlite3.Database(dbPath)

// Initialize schema
db.serialize(() => {
    // Users
    db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      phone TEXT UNIQUE NOT NULL,
      name TEXT,
      email TEXT
    )
  `)

    // Properties
    db.run(`
    CREATE TABLE IF NOT EXISTS properties (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      location TEXT NOT NULL,
      rent INTEGER NOT NULL,
      deposit INTEGER NOT NULL,
      area INTEGER NOT NULL,
      bhk TEXT NOT NULL,
      furnishing TEXT NOT NULL,
      floor TEXT NOT NULL,
      facing TEXT NOT NULL,
      image TEXT,
      description TEXT,
      amenities TEXT, -- JSON string
      vacatingDate TEXT,
      reservationStatus TEXT DEFAULT 'occupied',
      postedBy TEXT,
      postedDate TEXT
    )
  `)

    // Bookings
    db.run(`
    CREATE TABLE IF NOT EXISTS bookings (
      id TEXT PRIMARY KEY,
      property_id TEXT NOT NULL,
      tenant_name TEXT NOT NULL,
      move_in_date TEXT NOT NULL,
      created_at TEXT NOT NULL,
      FOREIGN KEY(property_id) REFERENCES properties(id)
    )
  `)

    seedDatabase()
})

function seedDatabase() {
    db.get("SELECT COUNT(*) as count FROM properties", (err, row) => {
        if (row && row.count === 0) {
            console.log('Seeding initial properties...')

            const properties = [
                {
                    id: '1',
                    title: '3 BHK Apartment in Whitefield',
                    location: 'Whitefield, Bangalore',
                    rent: 28000,
                    deposit: 100000,
                    area: 1450,
                    bhk: '3 BHK',
                    furnishing: 'Semi-Furnished',
                    floor: '5th of 12',
                    facing: 'East',
                    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop',
                    description: "Spacious 3 BHK apartment with modern amenities, close to IT parks and shopping malls. Gated community with 24/7 security, swimming pool, gym, and children's play area.",
                    amenities: JSON.stringify(['Swimming Pool', 'Gym', 'Power Backup', 'Parking', 'Security', 'Garden']),
                    vacatingDate: '2026-04-15',
                    reservationStatus: 'available_soon',
                    postedBy: 'Rajesh Kumar',
                    postedDate: '2026-02-20',
                },
                {
                    id: '2',
                    title: '2 BHK Flat in Koramangala',
                    location: 'Koramangala, Bangalore',
                    rent: 22000,
                    deposit: 80000,
                    area: 1100,
                    bhk: '2 BHK',
                    furnishing: 'Fully Furnished',
                    floor: '3rd of 8',
                    facing: 'North',
                    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop',
                    description: 'Beautiful fully furnished 2 BHK in the heart of Koramangala. Walking distance to restaurants, cafes, and metro station. Well-maintained building.',
                    amenities: JSON.stringify(['Lift', 'Parking', 'Power Backup', 'Water Supply', 'Security']),
                    vacatingDate: null,
                    reservationStatus: 'occupied',
                    postedBy: 'Sneha Patel',
                    postedDate: '2026-02-15',
                },
                {
                    id: '3',
                    title: '1 BHK Studio in HSR Layout',
                    location: 'HSR Layout, Bangalore',
                    rent: 14000,
                    deposit: 50000,
                    area: 650,
                    bhk: '1 BHK',
                    furnishing: 'Semi-Furnished',
                    floor: '2nd of 6',
                    facing: 'South',
                    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop',
                    description: 'Compact and cozy 1 BHK studio apartment perfect for bachelors or couples. Near IT corridor with excellent public transport connectivity.',
                    amenities: JSON.stringify(['Power Backup', 'Water Supply', 'Parking']),
                    vacatingDate: '2026-05-01',
                    reservationStatus: 'available_soon',
                    postedBy: 'Vikram Singh',
                    postedDate: '2026-02-18',
                },
                {
                    id: '4',
                    title: '4 BHK Villa in Sarjapur Road',
                    location: 'Sarjapur Road, Bangalore',
                    rent: 55000,
                    deposit: 200000,
                    area: 2800,
                    bhk: '4 BHK',
                    furnishing: 'Unfurnished',
                    floor: 'Ground + 1st',
                    facing: 'West',
                    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop',
                    description: 'Luxurious independent villa with private garden, car parking for 2 vehicles, and dedicated water supply. Quiet neighborhood.',
                    amenities: JSON.stringify(['Garden', 'Parking', 'Power Backup', 'Water Supply', 'CCTV', 'Gym']),
                    vacatingDate: '2026-03-20',
                    reservationStatus: 'reserved',
                    postedBy: 'Mohammed Ali',
                    postedDate: '2026-02-10',
                },
                {
                    id: '5',
                    title: '2 BHK in Indiranagar',
                    location: 'Indiranagar, Bangalore',
                    rent: 30000,
                    deposit: 90000,
                    area: 1200,
                    bhk: '2 BHK',
                    furnishing: 'Fully Furnished',
                    floor: '7th of 10',
                    facing: 'North-East',
                    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&h=400&fit=crop',
                    description: 'Premium 2 BHK in Indiranagar with modern interiors, modular kitchen, and balcony with city view. Walking distance to 100 Feet Road.',
                    amenities: JSON.stringify(['Lift', 'Swimming Pool', 'Gym', 'Parking', 'Security', 'Clubhouse']),
                    vacatingDate: '2026-06-01',
                    reservationStatus: 'available_soon',
                    postedBy: 'Anita Desai',
                    postedDate: '2026-02-25',
                },
                {
                    id: '6',
                    title: '3 BHK in Electronic City',
                    location: 'Electronic City, Bangalore',
                    rent: 20000,
                    deposit: 60000,
                    area: 1350,
                    bhk: '3 BHK',
                    furnishing: 'Semi-Furnished',
                    floor: '4th of 15',
                    facing: 'South-East',
                    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop',
                    description: 'Well-maintained 3 BHK in a reputed gated community in Electronic City. Excellent connectivity to IT parks via Elevated Expressway.',
                    amenities: JSON.stringify(['Swimming Pool', 'Gym', 'Clubhouse', 'Parking', 'Power Backup', 'Security', 'Garden']),
                    vacatingDate: null,
                    reservationStatus: 'occupied',
                    postedBy: 'Suresh Reddy',
                    postedDate: '2026-02-12',
                }
            ]

            const stmt = db.prepare(`
        INSERT INTO properties (
          id, title, location, rent, deposit, area, bhk, furnishing, floor,
          facing, image, description, amenities, vacatingDate, reservationStatus, postedBy, postedDate
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `)

            properties.forEach(p => {
                stmt.run(
                    p.id, p.title, p.location, p.rent, p.deposit, p.area, p.bhk, p.furnishing,
                    p.floor, p.facing, p.image, p.description, p.amenities, p.vacatingDate,
                    p.reservationStatus, p.postedBy, p.postedDate
                )
            })

            stmt.finalize()

            // Insert mock booking for Property 4
            db.run(`
        INSERT INTO bookings (id, property_id, tenant_name, move_in_date, created_at)
        VALUES ('b1', '4', 'Priya Sharma', '2026-03-25', '2026-02-22')
      `)
        }
    })
}

export default db
