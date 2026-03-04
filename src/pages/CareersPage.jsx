import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './CareersPage.css'

const CareersPage = () => {
    return (
        <div className="careers-page">
            <Navbar />

            <div className="careers-hero">
                <div className="container">
                    <div className="careers-hero__content">
                        <h1>Build the future of Real Estate</h1>
                        <p>Join India's largest tech-driven real estate platform. We are solving a genuine problem and positively impacting the lives of millions.</p>
                        <button className="careers-hero__btn">View Open Roles</button>
                    </div>
                </div>
            </div>

            <div className="careers-culture container">
                <h2 className="careers-section-title">Life at NoBroker</h2>
                <div className="culture-grid">
                    <div className="culture-item">
                        <div className="culture-icon">🚀</div>
                        <h3>Fast-Paced Growth</h3>
                        <p>Learn exponentially. We operate at high speed, build fast, and measure results instantly.</p>
                    </div>
                    <div className="culture-item">
                        <div className="culture-icon">🫂</div>
                        <h3>Inclusive & Open</h3>
                        <p>No cabin culture. You can walk up to the founders anytime and pitch your ideas.</p>
                    </div>
                    <div className="culture-item">
                        <div className="culture-icon">💡</div>
                        <h3>Innovation First</h3>
                        <p>Every employee is an entrepreneur. If an idea works, we scale it immediately.</p>
                    </div>
                </div>
            </div>

            <div className="careers-jobs container">
                <h2 className="careers-section-title">Open Positions</h2>

                <div className="jobs-list">
                    <div className="job-card">
                        <div className="job-info">
                            <h3>Senior Software Engineer - Frontend</h3>
                            <span className="job-meta">Engineering • Bangalore • Full Time</span>
                        </div>
                        <button className="job-apply-btn">Apply Now</button>
                    </div>

                    <div className="job-card">
                        <div className="job-info">
                            <h3>Product Manager</h3>
                            <span className="job-meta">Product • Bangalore • Full Time</span>
                        </div>
                        <button className="job-apply-btn">Apply Now</button>
                    </div>

                    <div className="job-card">
                        <div className="job-info">
                            <h3>Relationship Manager - Sales</h3>
                            <span className="job-meta">Sales • Mumbai / Pune • Full Time</span>
                        </div>
                        <button className="job-apply-btn">Apply Now</button>
                    </div>

                    <div className="job-card">
                        <div className="job-info">
                            <h3>Data Scientist</h3>
                            <span className="job-meta">Data • Bangalore • Full Time</span>
                        </div>
                        <button className="job-apply-btn">Apply Now</button>
                    </div>
                </div>
            </div>

            <div className="careers-cta">
                <div className="container">
                    <h2>Don't see your role?</h2>
                    <p>Send your resume to <strong>careers@nobroker.in</strong> and we'll reach out when there's a match.</p>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default CareersPage
