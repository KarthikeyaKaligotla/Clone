import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { StatusBadge, getAllProperties } from '../features/contracts'
import './PropertiesPage.css'

const PropertiesPage = () => {
    const [properties, setProperties] = useState([])
    const [filter, setFilter] = useState('all')

    useEffect(() => {
        getAllProperties().then(setProperties)
    }, [])

    const filtered = filter === 'all'
        ? properties
        : properties.filter(p => p.reservationStatus === filter)

    return (
        <div className="properties-page">
            <Navbar />

            <div className="properties">
                <div className="properties__inner container">
                    <div className="properties__header">
                        <h1 className="properties__title">Available Properties</h1>
                        <p className="properties__subtitle">Browse properties with future availability and reserve in advance</p>
                    </div>

                    {/* Filters */}
                    <div className="properties__filters">
                        {['all', 'available_soon', 'occupied', 'reserved'].map(f => (
                            <button
                                key={f}
                                className={`properties__filter-btn ${filter === f ? 'active' : ''}`}
                                onClick={() => setFilter(f)}
                            >
                                {f === 'all' ? 'All' :
                                    f === 'available_soon' ? 'Available Soon' :
                                        f === 'occupied' ? 'Occupied' : 'Reserved'}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="properties__grid">
                        {filtered.map(property => (
                            <Link
                                to={`/property/${property.id}`}
                                key={property.id}
                                className="property-card"
                            >
                                <div className="property-card__image-wrap">
                                    <img
                                        src={property.image}
                                        alt={property.title}
                                        className="property-card__image"
                                        loading="lazy"
                                    />
                                    <div className="property-card__badge-wrap">
                                        <StatusBadge status={property.reservationStatus} />
                                    </div>
                                </div>

                                <div className="property-card__body">
                                    <div className="property-card__rent">
                                        ₹{property.rent.toLocaleString('en-IN')}<span>/month</span>
                                    </div>
                                    <h3 className="property-card__title">{property.title}</h3>
                                    <p className="property-card__location">{property.location}</p>

                                    <div className="property-card__meta">
                                        <span>{property.bhk}</span>
                                        <span>{property.area} sq.ft</span>
                                        <span>{property.furnishing}</span>
                                    </div>

                                    {property.vacatingDate && property.reservationStatus === 'available_soon' && (
                                        <div className="property-card__vacating">
                                            📅 Vacating: {new Date(property.vacatingDate).toLocaleDateString('en-IN', {
                                                day: 'numeric', month: 'short', year: 'numeric'
                                            })}
                                        </div>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <div className="properties__empty">
                            <p>No properties found for this filter.</p>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default PropertiesPage
