import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './PostPropertyPage.css'

const cities = ['Bangalore', 'Mumbai', 'Pune', 'Chennai', 'Hyderabad', 'Delhi', 'Gurgaon', 'Noida', 'Kolkata', 'Ahmedabad']

const PostPropertyPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
    })
    const [whatsapp, setWhatsapp] = useState(true)
    const [propertyType, setPropertyType] = useState('residential')
    const [adType, setAdType] = useState('rent')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [message, setMessage] = useState(null)

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!formData.name || !formData.phone || !formData.city) {
            setMessage({ type: 'error', text: 'Please fill out all required fields (Name, Phone, City).' })
            return
        }

        setIsSubmitting(true)
        setMessage(null)

        try {
            // Construct payload mapping form to DB schema
            const payload = {
                title: `${bhk} ${propertyType === 'residential' ? 'Apartment' : 'Space'} for ${adType}`,
                location: formData.city,
                rent: adType === 'rent' ? 25000 : 0,
                deposit: adType === 'rent' ? 100000 : 0,
                area: 1200,
                bhk: '2 BHK',
                furnishing: 'Semi-Furnished',
                floor: 'Ground',
                facing: 'East',
                description: `A wonderful ${propertyType} property available for ${adType} in ${formData.city}. Ideal location with great connectivity.`,
                amenities: ['Power Backup', 'Water Supply', 'Security'],
                postedBy: formData.name
            }

            const res = await fetch('/api/properties', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })

            const data = await res.json()

            if (!res.ok) throw new Error(data.error || 'Failed to post property')

            setMessage({ type: 'success', text: 'Property posted successfully! Tenants can now see your ad.' })
            setFormData({ name: '', email: '', phone: '', city: '' })

        } catch (err) {
            setMessage({ type: 'error', text: err.message })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="post-property-page">
            <Navbar />

            <div className="post-property">
                <div className="post-property__inner container">
                    {/* Header */}
                    <div className="post-property__header">
                        <h1 className="post-property__title">Sell or Rent your Property For Free</h1>
                        <a href="/" className="post-property__back-link">
                            Looking for a property? <span>Click Here</span>
                        </a>
                    </div>

                    <div className="post-property__content">
                        {/* Left Sidebar */}
                        <aside className="post-property__sidebar">
                            <h3 className="post-property__sidebar-title">Why Post through us?</h3>

                            <div className="post-property__benefits">
                                <div className="post-property__benefit">
                                    <div className="post-property__benefit-icon">👥</div>
                                    <span className="post-property__benefit-text post-property__benefit-text--red">Zero Brokerage</span>
                                </div>
                                <div className="post-property__benefit">
                                    <div className="post-property__benefit-icon">🏃</div>
                                    <span className="post-property__benefit-text post-property__benefit-text--red">Faster Tenants</span>
                                </div>
                                <div className="post-property__benefit">
                                    <div className="post-property__benefit-icon">👥</div>
                                    <span className="post-property__benefit-text">10 lac tenants/buyers connections</span>
                                </div>
                            </div>

                            <div className="post-property__testimonial">
                                <h4 className="post-property__testimonial-title">30 Lac+ Home Owners Trust Us</h4>
                                <p className="post-property__testimonial-text">
                                    After posting my property ads on No broker they provided me with an easy way to rent out my apartment, it was otherwise very difficult for me to do. NoBroker found the right people whom I can trust for my rental property.
                                </p>
                                <p className="post-property__testimonial-author">
                                    <strong>Anil</strong> | Mumbai
                                </p>
                            </div>
                        </aside>

                        {/* Right Form */}
                        <div className="post-property__form-section">
                            {message && (
                                <div style={{
                                    padding: '12px',
                                    marginBottom: '16px',
                                    borderRadius: '4px',
                                    fontSize: '14px',
                                    backgroundColor: message.type === 'error' ? '#fdeaec' : '#e8f5e9',
                                    color: message.type === 'error' ? '#e63946' : '#00b865',
                                    border: `1px solid ${message.type === 'error' ? '#ffcccc' : '#c8e6c9'}`
                                }}>
                                    {message.text}
                                </div>
                            )}
                            <form onSubmit={handleSubmit}>
                                {/* Name & Email Row */}
                                <div className="post-property__form-row">
                                    <input
                                        type="text"
                                        className="post-property__input"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={e => handleChange('name', e.target.value)}
                                    />
                                    <input
                                        type="email"
                                        className="post-property__input"
                                        placeholder="Enter your email like name@gmail.com"
                                        value={formData.email}
                                        onChange={e => handleChange('email', e.target.value)}
                                    />
                                </div>

                                {/* Phone & City Row */}
                                <div className="post-property__form-row">
                                    <div className="post-property__phone-input">
                                        <div className="post-property__country">
                                            <span className="post-property__flag">🇮🇳</span>
                                            <span className="post-property__code">+91 ▾</span>
                                        </div>
                                        <input
                                            type="tel"
                                            className="post-property__input post-property__input--phone"
                                            placeholder="Mobile Number"
                                            value={formData.phone}
                                            onChange={e => {
                                                const val = e.target.value.replace(/\D/g, '')
                                                if (val.length <= 10) handleChange('phone', val)
                                            }}
                                        />
                                    </div>
                                    <div className="post-property__select-wrap">
                                        <select
                                            className="post-property__select"
                                            value={formData.city}
                                            onChange={e => handleChange('city', e.target.value)}
                                        >
                                            <option value="">Select City</option>
                                            {cities.map(c => (
                                                <option key={c} value={c}>{c}</option>
                                            ))}
                                        </select>
                                        <FiChevronDown className="post-property__select-arrow" size={16} />
                                    </div>
                                </div>

                                {/* WhatsApp Toggle */}
                                <div className="post-property__whatsapp">
                                    <span>Get updates on</span>
                                    <span className="post-property__whatsapp-icon">💬</span>
                                    <span className="post-property__whatsapp-label">WhatsApp</span>
                                    <button
                                        type="button"
                                        className={`post-property__toggle ${whatsapp ? 'active' : ''}`}
                                        onClick={() => setWhatsapp(!whatsapp)}
                                    >
                                        <span className="post-property__toggle-knob" />
                                    </button>
                                </div>

                                {/* Property Type */}
                                <div className="post-property__section">
                                    <h4 className="post-property__section-title">Property type</h4>
                                    <div className="post-property__type-tabs">
                                        <button
                                            type="button"
                                            className={`post-property__type-tab ${propertyType === 'residential' ? 'active' : ''}`}
                                            onClick={() => setPropertyType('residential')}
                                        >
                                            Residential
                                        </button>
                                        <button
                                            type="button"
                                            className={`post-property__type-tab ${propertyType === 'commercial' ? 'active' : ''}`}
                                            onClick={() => setPropertyType('commercial')}
                                        >
                                            Commercial
                                        </button>
                                        <button
                                            type="button"
                                            className={`post-property__type-tab ${propertyType === 'land' ? 'active' : ''}`}
                                            onClick={() => setPropertyType('land')}
                                        >
                                            Land/Plot
                                            <span className="post-property__type-badge">New</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Ad Type */}
                                <div className="post-property__section">
                                    <h4 className="post-property__section-title">Select Property Ad Type</h4>
                                    <div className="post-property__ad-types">
                                        <button
                                            type="button"
                                            className={`post-property__ad-btn ${adType === 'rent' ? 'active' : ''}`}
                                            onClick={() => setAdType('rent')}
                                        >
                                            Rent
                                        </button>
                                        <button
                                            type="button"
                                            className={`post-property__ad-btn ${adType === 'resale' ? 'active' : ''}`}
                                            onClick={() => setAdType('resale')}
                                        >
                                            Resale
                                        </button>
                                        <button
                                            type="button"
                                            className={`post-property__ad-btn ${adType === 'pg' ? 'active' : ''}`}
                                            onClick={() => setAdType('pg')}
                                        >
                                            PG/Hostel
                                        </button>
                                        <button
                                            type="button"
                                            className={`post-property__ad-btn ${adType === 'flatmates' ? 'active' : ''}`}
                                            onClick={() => setAdType('flatmates')}
                                        >
                                            Flatmates
                                        </button>
                                    </div>
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="post-property__submit-btn"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Posting...' : 'Start Posting Your Ad For FREE'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Missed Call Banner */}
            <div className="post-property__call-banner">
                <span className="post-property__call-icon">📞</span>
                <span className="post-property__call-text">
                    Give a missed call to <strong>889-000-5067</strong> to get help with your property listing.
                </span>
            </div>

            <Footer />
        </div>
    )
}

export default PostPropertyPage
