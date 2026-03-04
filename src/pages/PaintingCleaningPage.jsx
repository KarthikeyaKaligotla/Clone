import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './PaintingCleaningPage.css'

const PaintingCleaningPage = () => {
    return (
        <div className="pc-page">
            <Navbar />

            {/* Hero Section */}
            <div className="pc-hero">
                <div className="pc-hero__inner container">
                    <div className="pc-hero__content">
                        <span className="pc-hero__badge">NoBroker Home Services</span>
                        <h1 className="pc-hero__title">Expert Painting & Cleaning Services</h1>
                        <p className="pc-hero__desc">Trusted professionals, transparent pricing, and 100% satisfaction guarantee.</p>

                        <div className="pc-hero__buttons">
                            <button className="pc-hero__btn pc-hero__btn--primary">Book Painting</button>
                            <button className="pc-hero__btn pc-hero__btn--secondary">Book Cleaning</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="pc-services container">
                <h2 className="pc-section-title">Our Top Services</h2>
                <div className="pc-services-grid">
                    {/* Painting */}
                    <div className="pc-service-card">
                        <div className="pc-service-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop')" }}></div>
                        <div className="pc-service-content">
                            <h3>Full Home Painting</h3>
                            <p>Premium quality paints (Asian Paints, Berger). Includes moving furniture, masking, and post-painting cleanup.</p>
                            <div className="pc-service-meta">
                                <span>⭐ 4.8 (2k+ Reviews)</span>
                                <strong>From ₹4,999</strong>
                            </div>
                            <button className="pc-service-btn">Get Quote</button>
                        </div>
                    </div>

                    {/* Cleaning */}
                    <div className="pc-service-card">
                        <div className="pc-service-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop')" }}></div>
                        <div className="pc-service-content">
                            <h3>Deep Home Cleaning</h3>
                            <p>Intensive cleaning of every nook and cranny. Professional grade chemicals and equipment used.</p>
                            <div className="pc-service-meta">
                                <span>⭐ 4.9 (5k+ Reviews)</span>
                                <strong>From ₹2,499</strong>
                            </div>
                            <button className="pc-service-btn">Book Now</button>
                        </div>
                    </div>

                    {/* AC Service */}
                    <div className="pc-service-card">
                        <div className="pc-service-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop')" }}></div>
                        <div className="pc-service-content">
                            <h3>AC Service & Repair</h3>
                            <p>Foam/Jet cleaning, gas filling, and overall maintenance by verified technicians.</p>
                            <div className="pc-service-meta">
                                <span>⭐ 4.7 (1k+ Reviews)</span>
                                <strong>From ₹499</strong>
                            </div>
                            <button className="pc-service-btn">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Us Section */}
            <div className="pc-whyus">
                <div className="container">
                    <h2 className="pc-section-title">Why Choose NoBroker Home Services?</h2>
                    <div className="pc-whyus-grid">
                        <div className="pc-whyus-item">
                            <div className="pc-whyus-icon">✅</div>
                            <h4>Verified Professionals</h4>
                            <p>Strict background checks and training for all service partners.</p>
                        </div>
                        <div className="pc-whyus-item">
                            <div className="pc-whyus-icon">🛡️</div>
                            <h4>Damage Cover</h4>
                            <p>Up to ₹10,000 protection against accidental damages during service.</p>
                        </div>
                        <div className="pc-whyus-item">
                            <div className="pc-whyus-icon">💲</div>
                            <h4>Transparent Pricing</h4>
                            <p>No hidden charges. See the final price before booking.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default PaintingCleaningPage
