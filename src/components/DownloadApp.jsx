import { FaGooglePlay, FaApple } from 'react-icons/fa'
import { FiSmartphone } from 'react-icons/fi'
import './DownloadApp.css'

const DownloadApp = () => {
    return (
        <section className="download-app">
            <div className="download-app__inner container">
                <div className="download-app__phone">
                    <div className="download-app__phone-frame">
                        <div className="download-app__phone-notch" />
                        <div className="download-app__phone-screen">
                            <div className="download-app__phone-header">
                                <div className="download-app__phone-logo">
                                    <span style={{ color: '#e63946', fontWeight: 800 }}>No</span>
                                    <span style={{ fontWeight: 800 }}>Broker</span>
                                </div>
                            </div>
                            <div className="download-app__phone-search">
                                <div className="download-app__phone-search-bar" />
                            </div>
                            <div className="download-app__phone-cards">
                                <div className="download-app__phone-card" />
                                <div className="download-app__phone-card" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="download-app__content">
                    <h2 className="download-app__title">
                        Download the NoBroker App
                    </h2>
                    <p className="download-app__text">
                        Search properties on-the-go. Get instant alerts for new listings. Connect with owners directly from your phone.
                    </p>
                    <ul className="download-app__features">
                        <li>✓ Get notified for new properties instantly</li>
                        <li>✓ Contact owners directly via app</li>
                        <li>✓ Schedule visits with one tap</li>
                        <li>✓ Track your shortlisted properties</li>
                    </ul>
                    <div className="download-app__buttons">
                        <a href="#" className="download-app__store-btn download-app__store-btn--play">
                            <FaGooglePlay size={22} />
                            <div>
                                <span className="download-app__store-label">GET IT ON</span>
                                <span className="download-app__store-name">Google Play</span>
                            </div>
                        </a>
                        <a href="#" className="download-app__store-btn download-app__store-btn--apple">
                            <FaApple size={26} />
                            <div>
                                <span className="download-app__store-label">Download on the</span>
                                <span className="download-app__store-name">App Store</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DownloadApp
