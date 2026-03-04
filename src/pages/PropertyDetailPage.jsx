import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FiArrowLeft, FiMapPin, FiHome, FiLayers, FiSun, FiPhone } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { StatusBadge, FutureAvailabilityPanel, getPropertyById } from '../features/contracts'
import './PropertyDetailPage.css'

const PropertyDetailPage = () => {
    const { id } = useParams()
    const [property, setProperty] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getPropertyById(id)
            .then(setProperty)
            .catch(() => setProperty(null))
            .finally(() => setLoading(false))
    }, [id])

    if (loading) {
        return (
            <div className="detail-page">
                <Navbar />
                <div className="detail-page__loading container">Loading property...</div>
                <Footer />
            </div>
        )
    }

    if (!property) {
        return (
            <div className="detail-page">
                <Navbar />
                <div className="detail-page__not-found container">
                    <h2>Property not found</h2>
                    <Link to="/properties" className="detail-page__back-btn">← Back to Properties</Link>
                </div>
                <Footer />
            </div>
        )
    }

    return (
        <div className="detail-page">
            <Navbar />

            <div className="detail">
                <div className="detail__inner container">
                    {/* Breadcrumb */}
                    <Link to="/properties" className="detail__back">
                        <FiArrowLeft size={16} />
                        Back to Properties
                    </Link>

                    <div className="detail__layout">
                        {/* Left Column */}
                        <div className="detail__main">
                            {/* Image */}
                            <div className="detail__image-wrap">
                                <img
                                    src={property.image}
                                    alt={property.title}
                                    className="detail__image"
                                />
                                <div className="detail__image-badge">
                                    <StatusBadge status={property.reservationStatus} />
                                </div>
                            </div>

                            {/* Info */}
                            <div className="detail__info">
                                <div className="detail__rent-row">
                                    <div className="detail__rent">
                                        ₹{property.rent.toLocaleString('en-IN')}<span>/month</span>
                                    </div>
                                    <div className="detail__deposit">
                                        Deposit: ₹{property.deposit.toLocaleString('en-IN')}
                                    </div>
                                </div>

                                <h1 className="detail__title">{property.title}</h1>

                                <p className="detail__location">
                                    <FiMapPin size={14} />
                                    {property.location}
                                </p>

                                {/* Specs */}
                                <div className="detail__specs">
                                    <div className="detail__spec">
                                        <FiHome size={16} />
                                        <div>
                                            <span className="detail__spec-label">Type</span>
                                            <span className="detail__spec-value">{property.bhk}</span>
                                        </div>
                                    </div>
                                    <div className="detail__spec">
                                        <FiLayers size={16} />
                                        <div>
                                            <span className="detail__spec-label">Area</span>
                                            <span className="detail__spec-value">{property.area} sq.ft</span>
                                        </div>
                                    </div>
                                    <div className="detail__spec">
                                        <FiSun size={16} />
                                        <div>
                                            <span className="detail__spec-label">Facing</span>
                                            <span className="detail__spec-value">{property.facing}</span>
                                        </div>
                                    </div>
                                    <div className="detail__spec">
                                        <FiHome size={16} />
                                        <div>
                                            <span className="detail__spec-label">Floor</span>
                                            <span className="detail__spec-value">{property.floor}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="detail__section">
                                    <h3 className="detail__section-title">Description</h3>
                                    <p className="detail__description">{property.description}</p>
                                </div>

                                {/* Furnishing */}
                                <div className="detail__section">
                                    <h3 className="detail__section-title">Furnishing</h3>
                                    <span className="detail__furnishing-badge">{property.furnishing}</span>
                                </div>

                                {/* Amenities */}
                                <div className="detail__section">
                                    <h3 className="detail__section-title">Amenities</h3>
                                    <div className="detail__amenities">
                                        {property.amenities.map((amenity, i) => (
                                            <span key={i} className="detail__amenity">{amenity}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <aside className="detail__sidebar">
                            {/* Owner Card */}
                            <div className="detail__owner-card">
                                <h4 className="detail__owner-title">Posted by</h4>
                                <p className="detail__owner-name">{property.postedBy}</p>
                                <p className="detail__owner-date">Listed on {property.postedDate}</p>
                                <button className="detail__contact-btn">
                                    <FiPhone size={14} />
                                    Contact Owner
                                </button>
                            </div>

                            {/* Future Availability Panel */}
                            <FutureAvailabilityPanel property={property} />
                        </aside>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default PropertyDetailPage
