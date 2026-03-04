import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './RentalAgreementPage.css'

const RentalAgreementPage = () => {
    return (
        <div className="rental-agreement">
            <Navbar />

            {/* Hero Section */}
            <div className="ra-hero">
                <div className="ra-hero__inner container">
                    <div className="ra-hero__content">
                        <span className="ra-hero__badge">NoBroker Legal Services</span>
                        <h1 className="ra-hero__title">Rental Agreement Online</h1>
                        <p className="ra-hero__desc">Drafted by lawyers, printed on stamp paper & home delivered.</p>

                        <div className="ra-hero__features">
                            <div className="ra-feature"><span className="ra-feature-icon">⏱️</span> 5 Mins process</div>
                            <div className="ra-feature"><span className="ra-feature-icon">🚚</span> Home Delivery</div>
                            <div className="ra-feature"><span className="ra-feature-icon">⚖️</span> Legally Valid</div>
                        </div>

                        <button className="ra-hero__btn">Create Rental Agreement</button>
                    </div>
                </div>
            </div>

            {/* How it works */}
            <div className="ra-process container">
                <h2 className="ra-section-title">How It Works?</h2>
                <div className="ra-steps">
                    <div className="ra-step">
                        <div className="ra-step__number">1</div>
                        <h3>Fill Details Online</h3>
                        <p>Fill in owner, tenant and property details online.</p>
                    </div>
                    <div className="ra-step">
                        <div className="ra-step__number">2</div>
                        <h3>Sign Agreement</h3>
                        <p>E-sign or opt for biometric home visit for registration.</p>
                    </div>
                    <div className="ra-step">
                        <div className="ra-step__number">3</div>
                        <h3>Home Delivery</h3>
                        <p>Get the stamped agreement delivered to your doorstep.</p>
                    </div>
                </div>
            </div>

            {/* Pricing Section */}
            <div className="ra-pricing">
                <div className="container">
                    <h2 className="ra-section-title">Transparent Pricing</h2>
                    <div className="ra-pricing-grid">
                        <div className="ra-price-card">
                            <h3>E-Stamped Agreement</h3>
                            <div className="ra-price">₹349 <span>+ Stamp Duty</span></div>
                            <ul className="ra-price-features">
                                <li>✓ Drafted by Lawyers</li>
                                <li>✓ Stamp Paper Included</li>
                                <li>✓ Home Delivery</li>
                                <li>✓ E-Sign Available</li>
                            </ul>
                            <button className="ra-price-btn">Select Plan</button>
                        </div>
                        <div className="ra-price-card ra-price-card--premium">
                            <div className="ra-price-badge">Most Popular</div>
                            <h3>Registered Agreement</h3>
                            <div className="ra-price">₹999 <span>+ Govt Fees</span></div>
                            <ul className="ra-price-features">
                                <li>✓ Everything in E-Stamped</li>
                                <li>✓ Biometric at Home</li>
                                <li>✓ Dedicated Legal Manager</li>
                                <li>✓ Same Day Processing</li>
                            </ul>
                            <button className="ra-price-btn ra-price-btn--red">Book Appointment</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div className="ra-faq container">
                <h2 className="ra-section-title">Frequently Asked Questions</h2>
                <div className="ra-faq-list">
                    <div className="ra-faq-item">
                        <h4>Is the online rental agreement legally valid?</h4>
                        <p>Yes, agreements printed on stamp paper and signed by both parties are legally valid in court.</p>
                    </div>
                    <div className="ra-faq-item">
                        <h4>How long does delivery take?</h4>
                        <p>In most metro cities, the printed and stamped agreement is delivered within 3-4 working days.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default RentalAgreementPage
