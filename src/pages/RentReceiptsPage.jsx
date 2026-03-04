import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './RentReceiptsPage.css'

const RentReceiptsPage = () => {
    return (
        <div className="receipts-page">
            <Navbar />

            <div className="receipts-container container">
                <div className="receipts-content">
                    <h1 className="receipts-title">Generate Free Rent Receipts</h1>
                    <p className="receipts-desc">To claim HRA, you need to submit rent receipts to your employer. Generate professional rent receipts online completely free.</p>

                    <ul className="receipts-benefits">
                        <li>✅ Valid for IT Declaration</li>
                        <li>✅ Professional PDF format</li>
                        <li>✅ Download instantly</li>
                        <li>✅ Generates signature fields</li>
                    </ul>
                </div>

                <div className="receipts-card">
                    <h2>Fill Details to Generate</h2>
                    <form className="receipts-form" onSubmit={(e) => { e.preventDefault(); alert('Receipt PDF Download started!'); }}>
                        <div className="receipts-form-group">
                            <label>Tenant Name (You)</label>
                            <input type="text" placeholder="Enter full name as per PAN" required />
                        </div>

                        <div className="receipts-form-group">
                            <label>Owner Name</label>
                            <input type="text" placeholder="Owner's full name" required />
                        </div>

                        <div className="receipts-form-group">
                            <label>Monthly Rent Amount (₹)</label>
                            <input type="number" placeholder="e.g. 25000" required />
                        </div>

                        <div className="receipts-form-group">
                            <label>Property Address</label>
                            <textarea rows="3" placeholder="Full rented house address" required></textarea>
                        </div>

                        <div className="receipts-form-row">
                            <div className="receipts-form-group half">
                                <label>Start Date</label>
                                <input type="date" required />
                            </div>
                            <div className="receipts-form-group half">
                                <label>End Date</label>
                                <input type="date" required />
                            </div>
                        </div>

                        <button type="submit" className="receipts-generate-btn">
                            Generate Rent Receipt
                        </button>
                    </form>
                </div>
            </div>

            <div className="receipts-info container">
                <div className="receipts-info-box">
                    <h3>💡 Did You Know?</h3>
                    <p>If your annual rent crosses ₹1,00,000 (i.e., around ₹8,333 per month), you must report the landlord's PAN to your employer to claim House Rent Allowance (HRA) exemption under the Income Tax Act.</p>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default RentReceiptsPage
