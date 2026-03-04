import { useState } from 'react'
import { FiCopy, FiCheck } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './ReferEarnPage.css'

const ReferEarnPage = () => {
    const [copied, setCopied] = useState(false)
    const inviteLink = 'nobroker.in/invite/X7Y9Z2'

    const handleCopy = () => {
        navigator.clipboard.writeText(inviteLink)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="refer-page">
            <Navbar />

            <div className="refer-hero">
                <div className="container">
                    <div className="refer-hero__card">
                        <div className="refer-hero__content">
                            <span className="refer-hero__badge">NoBroker Refer & Earn</span>
                            <h1 className="refer-hero__title">Refer a property owner and earn ₹1000!</h1>
                            <p className="refer-hero__desc">Help your friends rent/sell properties faster and earn cash rewards directly in your PayTM wallet or bank account.</p>

                            <div className="refer-link-box">
                                <label>Your Unique Invite Link:</label>
                                <div className="refer-input-group">
                                    <input type="text" readOnly value={inviteLink} />
                                    <button onClick={handleCopy} className={`refer-copy-btn ${copied ? 'copied' : ''}`}>
                                        {copied ? <><FiCheck /> Copied</> : <><FiCopy /> Copy</>}
                                    </button>
                                </div>
                            </div>

                            <button className="refer-whatsapp-btn">
                                <span>📱</span> Share on WhatsApp
                            </button>
                        </div>
                        <div className="refer-hero__image">
                            <img src="https://images.unsplash.com/photo-1579621970563-ebec28e67a6a?w=400&h=400&fit=crop" alt="Earn Rewards" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="refer-how container">
                <h2 className="refer-section-title">How does it work?</h2>
                <div className="refer-steps">
                    <div className="refer-step">
                        <div className="refer-step-icon">1</div>
                        <h3>Share Link</h3>
                        <p>Share your unique referral link with property owners.</p>
                    </div>
                    <div className="refer-step line"></div>
                    <div className="refer-step">
                        <div className="refer-step-icon">2</div>
                        <h3>Owner Posts Details</h3>
                        <p>The owner lists their property on NoBroker completely free.</p>
                    </div>
                    <div className="refer-step line"></div>
                    <div className="refer-step">
                        <div className="refer-step-icon">3</div>
                        <h3>Earn Reward</h3>
                        <p>Once the listing is verified and live, you earn exactly ₹1000.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default ReferEarnPage
