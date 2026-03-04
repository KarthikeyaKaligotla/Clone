import { useState } from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import './Footer.css'

const footerLinks = {
    'Company': ['About Us', 'Careers', 'Blog', 'Contact Us', 'Testimonials', 'Terms & Conditions', 'Privacy Policy'],
    'Tenants': ['Flats for Rent', 'Flats for Buy', 'PG / Hostel', 'Flatmates', 'Rental Agreement', 'Rent Receipts'],
    'Owners': ['Post Property', 'Owner Plans', 'Seller Plans', 'Rental Agreement', 'Property Management'],
    'Home Services': ['Packers & Movers', 'Home Painting', 'Home Cleaning', 'Home Loans', 'AC Services', 'Electrician', 'Plumbing', 'Carpentry'],
}

const seoTabs = [
    { id: 'sale', label: 'Properties & Flats for Sale' },
    { id: 'rent', label: 'Flats for Rent' },
    { id: 'pg', label: 'PG / Hostels' },
    { id: 'commercial', label: 'Commercial' },
]

const seoLinks = {
    sale: {
        'Bangalore': ['Flats for Sale in Koramangala', 'Flats for Sale in Whitefield', 'Flats for Sale in HSR Layout', 'Flats for Sale in Marathahalli', 'Flats for Sale in Indira Nagar', 'Flats for Sale in Electronic City'],
        'Mumbai': ['Flats for Sale in Andheri West', 'Flats for Sale in Andheri East', 'Flats for Sale in Powai', 'Flats for Sale in Bandra West', 'Flats for Sale in Malad West', 'Flats for Sale in Thane West'],
        'Chennai': ['Flats for Sale in Velachery', 'Flats for Sale in Thiruvanmiyur', 'Flats for Sale in Adyar', 'Flats for Sale in T Nagar', 'Flats for Sale in Sholinganallur'],
        'Pune': ['Flats for Sale in Wakad', 'Flats for Sale in Kharadi', 'Flats for Sale in Baner', 'Flats for Sale in Hadapsar', 'Flats for Sale in Hinjewadi'],
        'Hyderabad': ['Flats for Sale in Madhapur', 'Flats for Sale in Gachibowli', 'Flats for Sale in Kukatpally', 'Flats for Sale in Banjara Hills', 'Flats for Sale in Hitech City'],
    },
    rent: {
        'Bangalore': ['Flats for Rent in Koramangala', 'Flats for Rent in BTM Layout', 'Flats for Rent in Marathahalli', 'Flats for Rent in Whitefield', 'Flats for Rent in HSR Layout'],
        'Mumbai': ['Flats for Rent in Andheri West', 'Flats for Rent in Powai', 'Flats for Rent in Bandra West', 'Flats for Rent in Thane West', 'Flats for Rent in Malad West'],
        'Chennai': ['Flats for Rent in Velachery', 'Flats for Rent in Thiruvanmiyur', 'Flats for Rent in Adyar', 'Flats for Rent in Sholinganallur'],
        'Pune': ['Flats for Rent in Wakad', 'Flats for Rent in Kharadi', 'Flats for Rent in Baner', 'Flats for Rent in Hadapsar'],
    },
    pg: {
        'Bangalore': ['PG in Koramangala', 'PG in BTM Layout', 'PG in Marathahalli', 'PG in Whitefield', 'PG in HSR Layout'],
        'Mumbai': ['PG in Andheri West', 'PG in Andheri East', 'PG in Powai', 'PG in Bandra West', 'PG in Malad West'],
        'Pune': ['PG in Hadapsar', 'PG in Kharadi', 'PG in Baner', 'PG in Kothrud', 'PG in Hinjawadi'],
        'Hyderabad': ['PG in Kukatpally', 'PG in Kondapur', 'PG in Gachibowli', 'PG in Madhapur'],
    },
    commercial: {
        'Bangalore': ['Office Space in Koramangala', 'Office Space in Whitefield', 'Shop for Rent in Marathahalli'],
        'Mumbai': ['Office Space in Andheri', 'Shop for Rent in Bandra', 'Warehouse in Navi Mumbai'],
        'Pune': ['Office Space in Kharadi', 'Shop for Rent in Baner', 'Office Space in Hinjewadi'],
    },
}

const Footer = () => {
    const [activeSeoTab, setActiveSeoTab] = useState('sale')
    const [seoExpanded, setSeoExpanded] = useState(false)

    return (
        <footer className="footer">
            {/* Main Footer */}
            <div className="footer__main">
                <div className="footer__inner container">
                    {/* Brand */}
                    <div className="footer__brand">
                        <a href="/" className="footer__logo">
                            <span className="footer__logo-no">No</span>
                            <span className="footer__logo-broker">Broker</span>
                            <span className="footer__logo-dot">.in</span>
                        </a>
                        <p className="footer__tagline">
                            India's #1 Proptech Company. Find Flats, Houses & PG Without Brokerage.
                        </p>
                        <div className="footer__social">
                            <a href="#" className="footer__social-link"><FaFacebookF /></a>
                            <a href="#" className="footer__social-link"><FaTwitter /></a>
                            <a href="#" className="footer__social-link"><FaInstagram /></a>
                            <a href="#" className="footer__social-link"><FaLinkedinIn /></a>
                            <a href="#" className="footer__social-link"><FaYoutube /></a>
                        </div>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div className="footer__column" key={title}>
                            <h4 className="footer__column-title">{title}</h4>
                            <ul className="footer__column-list">
                                {links.map((link, i) => (
                                    <li key={i}><a href="#">{link}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* SEO Links */}
            <div className="footer__seo">
                <div className="footer__seo-inner container">
                    <div className="footer__seo-tabs">
                        {seoTabs.map(tab => (
                            <button
                                key={tab.id}
                                className={`footer__seo-tab ${activeSeoTab === tab.id ? 'active' : ''}`}
                                onClick={() => setActiveSeoTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className={`footer__seo-content ${seoExpanded ? 'expanded' : ''}`}>
                        {Object.entries(seoLinks[activeSeoTab] || {}).map(([city, links]) => (
                            <div className="footer__seo-city" key={city}>
                                <h5 className="footer__seo-city-name">{city}</h5>
                                <div className="footer__seo-links">
                                    {links.map((link, i) => (
                                        <a href="#" key={i} className="footer__seo-link">{link}</a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className="footer__seo-toggle"
                        onClick={() => setSeoExpanded(!seoExpanded)}
                    >
                        {seoExpanded ? 'Show Less' : 'Show More'}
                        {seoExpanded ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
                    </button>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer__copyright">
                <div className="container">
                    <p>© {new Date().getFullYear()} NoBroker Technologies Solution Pvt. Ltd.</p>
                    <p>All rights reserved. This is a clone built for learning purposes only.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
