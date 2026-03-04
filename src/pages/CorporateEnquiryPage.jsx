import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './CorporateEnquiryPage.css'

const CorporateEnquiryPage = () => {
    return (
        <div className="corporate-page">
            <Navbar />

            <div className="corporate-hero">
                <div className="container">
                    <div className="corporate-hero__text">
                        <span className="corporate-badge">NoBroker For Business</span>
                        <h1>Corporate & Bulk Enquiries</h1>
                        <p>Are you a corporation looking for employee relocation, bulk real-estate investments, or commercial office spaces? Let NoBroker solve it for you seamlessly.</p>

                        <ul className="corporate-benefits">
                            <li>🏢 Corporate Office spaces without Brokerage</li>
                            <li>🚚 End-to-end Employee Relocation Services</li>
                            <li>💼 Dedicated Account Manager</li>
                            <li>📄 Hassle-free legal & paperwork processing</li>
                        </ul>
                    </div>

                    <div className="corporate-form-card">
                        <h2>Request a Callback</h2>
                        <form className="corporate-form" onSubmit={(e) => { e.preventDefault(); alert('Enquiry Submitted!'); }}>
                            <input type="text" placeholder="Your Name" required />
                            <input type="text" placeholder="Company Name" required />
                            <input type="email" placeholder="Official Email Address" required />
                            <input type="tel" placeholder="Mobile Number" required />
                            <select required>
                                <option value="">Select Enquiry Type</option>
                                <option value="office_space">Commercial Office Space</option>
                                <option value="relocation">Employee Relocation</option>
                                <option value="bulk_residential">Bulk Residential Buy/Rent</option>
                                <option value="other">Other</option>
                            </select>
                            <textarea rows="4" placeholder="Tell us about your requirements..."></textarea>
                            <button type="submit" className="corporate-submit-btn">Submit Enquiry</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="corporate-stats container">
                <div className="stat-box">
                    <h3>500+</h3>
                    <p>Corporate Clients</p>
                </div>
                <div className="stat-box">
                    <h3>10,000+</h3>
                    <p>Commercial Listings</p>
                </div>
                <div className="stat-box">
                    <h3>Zero</h3>
                    <p>Brokerage Paid</p>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default CorporateEnquiryPage
