import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { FiCheck, FiX } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './PlansPage.css'

const PlansPage = () => {
    const location = useLocation()
    const [activeTab, setActiveTab] = useState('tenant')

    // Parse URL parameter if navigating from specific dropdown links
    useEffect(() => {
        const path = location.pathname.split('/').pop()
        if (['tenant', 'owner', 'buyer', 'seller'].includes(path)) {
            setActiveTab(path)
        }
    }, [location])

    const plansData = {
        tenant: [
            {
                name: 'Basic',
                price: 999,
                originalPrice: 1999,
                color: '#00b865',
                features: ['Instant contact with Owners', 'Guaranteed Property up to ₹50k', 'Personal Field Assistant']
            },
            {
                name: 'Relax',
                price: 2999,
                originalPrice: 3999,
                color: '#e63946',
                popular: true,
                features: ['Everything in Basic', 'Dedicated Relationship Manager', 'Locality Experts', 'Negotiation Support']
            },
            {
                name: 'MoneyBack',
                price: 4999,
                originalPrice: 6999,
                color: '#f4a261',
                features: ['Everything in Relax', '100% Refund if property not found', 'Free Rental Agreement']
            }
        ],
        owner: [
            {
                name: 'Basic',
                price: 1999,
                originalPrice: 2999,
                color: '#00b865',
                features: ['Promoted Listing for 30 days', 'Privacy of Phone Number', 'Email/App Notifications']
            },
            {
                name: 'Relax',
                price: 4999,
                originalPrice: 5999,
                color: '#e63946',
                popular: true,
                features: ['Everything in Basic', 'Dedicated Relationship Manager', 'Tenant Verification', 'Assisted Property Showings']
            },
            {
                name: 'MoneyBack',
                price: 7999,
                originalPrice: 9999,
                color: '#f4a261',
                features: ['Everything in Relax', '100% Refund if tenant not found in 30 days', 'Free Rental Agreement']
            }
        ],
        buyer: [
            {
                name: 'Basic',
                price: 2499,
                originalPrice: 3499,
                color: '#00b865',
                features: ['Contact 25 Owners', 'View Contact Photos', 'City Map search']
            },
            {
                name: 'Relax',
                price: 5999,
                originalPrice: 7999,
                color: '#e63946',
                popular: true,
                features: ['Everything in Basic', 'Dedicated Relationship Manager', 'Property Verification', 'Home Loan Assistance']
            }
        ],
        seller: [
            {
                name: 'Relax',
                price: 8999,
                originalPrice: 12999,
                color: '#e63946',
                popular: true,
                features: ['Dedicated Relationship Manager', 'Property Valuation', 'Professional Photoshoot', 'Legal Assistance']
            },
            {
                name: 'MoneyBack',
                price: 14999,
                originalPrice: 19999,
                color: '#f4a261',
                features: ['Everything in Relax', '100% Refund if buyer not found', 'Priority Support']
            }
        ]
    }

    const currentPlans = plansData[activeTab] || plansData.tenant

    return (
        <div className="plans-page">
            <Navbar />

            <div className="plans-hero">
                <div className="plans-hero__inner container">
                    <h1 className="plans-hero__title">NoBroker Premium Plans</h1>
                    <p className="plans-hero__subtitle">Save time, effort, and money with our dedicated assistance plans designed for you.</p>
                </div>
            </div>

            <div className="plans-container container">
                {/* Tabs */}
                <div className="plans-tabs">
                    {['tenant', 'owner', 'buyer', 'seller'].map((tab) => (
                        <button
                            key={tab}
                            className={`plans-tab ${activeTab === tab ? 'plans-tab--active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)} Plans
                        </button>
                    ))}
                </div>

                {/* Pricing Grid */}
                <div className="plans-grid">
                    {currentPlans.map((plan, index) => (
                        <div key={index} className={`plan-card ${plan.popular ? 'plan-card--popular' : ''}`}>
                            {plan.popular && <div className="plan-card__badge" style={{ backgroundColor: plan.color }}>Recommended</div>}

                            <div className="plan-card__header" style={{ borderTop: `4px solid ${plan.color}` }}>
                                <h3 className="plan-card__name">{plan.name}</h3>
                                <div className="plan-card__price-box">
                                    <span className="plan-card__currency">₹</span>
                                    <span className="plan-card__price">{plan.price.toLocaleString()}</span>
                                    <span className="plan-card__tax">+18% GST</span>
                                </div>
                                <div className="plan-card__strike">
                                    <span className="plan-card__currency">₹</span>
                                    {plan.originalPrice.toLocaleString()}
                                </div>
                            </div>

                            <ul className="plan-card__features">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <FiCheck className="plan-card__check" style={{ color: plan.color }} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className="plan-card__btn" style={{ backgroundColor: plan.color }}>
                                Subscribe Now
                            </button>
                        </div>
                    ))}
                </div>

                {/* Guarantees Section */}
                <div className="plans-guarantees">
                    <h2 className="plans-guarantees__title">Why Choose Premium?</h2>
                    <div className="plans-guarantees__grid">
                        <div className="guarantee-item">
                            <div className="guarantee-icon">🛡️</div>
                            <h4>100% Verified Listings</h4>
                            <p>All owners and properties are verified to prevent fraud.</p>
                        </div>
                        <div className="guarantee-item">
                            <div className="guarantee-icon">🤝</div>
                            <h4>Dedicated Manager</h4>
                            <p>A single point of contact to handle your end-to-end journey.</p>
                        </div>
                        <div className="guarantee-item">
                            <div className="guarantee-icon">💰</div>
                            <h4>MoneyBack Guarantee</h4>
                            <p>Don't get the desired result? Get a full refund on eligible plans.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default PlansPage
