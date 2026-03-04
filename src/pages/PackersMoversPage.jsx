import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './PackersMoversPage.css'

const PackersMoversPage = () => {
    const [moveType, setMoveType] = useState('within_city')

    return (
        <div className="pm-page">
            <Navbar />

            {/* Hero & Form */}
            <div className="pm-hero">
                <div className="pm-hero__inner container">
                    <div className="pm-hero__content">
                        <h1 className="pm-hero__title">Trusted Packers & Movers</h1>
                        <p className="pm-hero__desc">Guaranteed Lowest Prices. Top Rated Vendors. 100% Safe.</p>
                        <div className="pm-hero__stats">
                            <span>⭐ 4.8/5 Rating</span>
                            <span className="dot">•</span>
                            <span>🚚 50,000+ Happy Moves</span>
                        </div>
                    </div>

                    <div className="pm-quote-box">
                        <h3 className="pm-quote-title">Get Free Instant Quote</h3>
                        <div className="pm-quote-tabs">
                            <button
                                className={`pm-quote-tab ${moveType === 'within_city' ? 'active' : ''}`}
                                onClick={() => setMoveType('within_city')}
                            >
                                Within City
                            </button>
                            <button
                                className={`pm-quote-tab ${moveType === 'between_cities' ? 'active' : ''}`}
                                onClick={() => setMoveType('between_cities')}
                            >
                                Between Cities
                            </button>
                        </div>

                        <form className="pm-quote-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="pm-form-group">
                                <label>Moving From</label>
                                <input type="text" placeholder="Enter Pickup Location" />
                            </div>
                            <div className="pm-form-group">
                                <label>Moving To</label>
                                <input type="text" placeholder="Enter Drop Location" />
                            </div>
                            <button type="submit" className="pm-quote-btn">Check Prices</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* How it Works */}
            <div className="pm-how container">
                <h2 className="pm-section-title">How It Works</h2>
                <div className="pm-steps-grid">
                    <div className="pm-step-card">
                        <div className="pm-step-icon">📋</div>
                        <h4>1. Share requirement</h4>
                        <p>Tell us where and when you're moving.</p>
                    </div>
                    <div className="pm-step-card">
                        <div className="pm-step-icon">💰</div>
                        <h4>2. Get instant quotes</h4>
                        <p>Receive guaranteed lowest prices immediately.</p>
                    </div>
                    <div className="pm-step-card">
                        <div className="pm-step-icon">📆</div>
                        <h4>3. Schedule pickup</h4>
                        <p>Pay a token amount to confirm your slot.</p>
                    </div>
                    <div className="pm-step-card">
                        <div className="pm-step-icon">📦</div>
                        <h4>4. Happy moving!</h4>
                        <p>Our partners safely pack and move your items.</p>
                    </div>
                </div>
            </div>

            {/* Benefits Banner */}
            <div className="pm-benefits">
                <div className="container">
                    <div className="pm-benefits-inner">
                        <div className="pm-benefit">
                            <div className="pm-benefit-title">Lowest Price Guarantee</div>
                            <p>We match the lowest quote from any verified vendor.</p>
                        </div>
                        <div className="pm-benefit">
                            <div className="pm-benefit-title">Reschedule for Free</div>
                            <p>Change your moving date anytime for free.</p>
                        </div>
                        <div className="pm-benefit">
                            <div className="pm-benefit-title">Dedicated Movement Manager</div>
                            <p>One person to handle your entire relocation.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default PackersMoversPage
