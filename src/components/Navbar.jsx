import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiX, FiChevronDown, FiChevronUp, FiUser, FiLogOut } from 'react-icons/fi'
import { MdPayment } from 'react-icons/md'
import { useAuth } from '../context/AuthContext'
import LoginModal from './LoginModal'
import './Navbar.css'

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [commercialOpen, setCommercialOpen] = useState(false)
    const [contactOpen, setContactOpen] = useState(false)
    const [loginOpen, setLoginOpen] = useState(false)

    const { user, logout } = useAuth()

    useEffect(() => {
        const handleScroll = () => setIsSticky(window.scrollY > 10)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <nav className={`navbar ${isSticky ? 'navbar--sticky' : ''}`}>
                <div className="navbar__inner container">
                    {/* Logo */}
                    <a href="/" className="navbar__logo">
                        <svg className="navbar__logo-icon" viewBox="0 0 32 32" width="28" height="28">
                            <rect x="2" y="8" width="28" height="22" rx="2" fill="#e63946" opacity="0.9" />
                            <polygon points="16,2 2,14 30,14" fill="#e63946" />
                            <rect x="8" y="14" width="6" height="6" rx="1" fill="#fff" opacity="0.9" />
                            <rect x="18" y="14" width="6" height="6" rx="1" fill="#fff" opacity="0.9" />
                            <rect x="12" y="22" width="8" height="8" rx="1" fill="#fff" opacity="0.9" />
                        </svg>
                        <span className="navbar__logo-text">
                            <span className="navbar__logo-nb">N</span>
                            <span className="navbar__logo-rest">OBROKER</span>
                        </span>
                    </a>

                    {/* Right side */}
                    <div className="navbar__right">
                        <a href="#" className="navbar__link navbar__link--payrent">
                            <MdPayment size={16} />
                            Pay Rent
                        </a>
                        <Link to="/post-property" className="navbar__btn navbar__btn--green">
                            For Property owners
                        </Link>

                        {user ? (
                            <div className="navbar__user-group" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginLeft: '8px' }}>
                                <span className="navbar__user-name" style={{ fontSize: '14px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <FiUser size={16} />
                                    {user.phone}
                                </span>
                                <button className="navbar__link" onClick={logout} title="Log out" style={{ padding: '0' }}>
                                    <FiLogOut size={16} />
                                </button>
                            </div>
                        ) : (
                            <>
                                <button className="navbar__link" onClick={() => setLoginOpen(true)}>Sign up</button>
                                <button className="navbar__link" onClick={() => setLoginOpen(true)}>Log in</button>
                            </>
                        )}

                        <button
                            className="navbar__menu-toggle"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
                            <span>Menu</span>
                        </button>
                    </div>
                </div>

                {/* Dropdown Menu */}
                {mobileOpen && (
                    <div className="navbar__dropdown-menu">
                        <Link to="/post-property" className="navbar__menu-item" onClick={() => setMobileOpen(false)}>Post Your Property</Link>
                        <Link to="/rental-agreement" className="navbar__menu-item" onClick={() => setMobileOpen(false)}>Rental Agreement</Link>
                        <Link to="/painting-cleaning" className="navbar__menu-item" onClick={() => setMobileOpen(false)}>Painting & Cleaning</Link>
                        <Link to="/packers-movers" className="navbar__menu-item" onClick={() => setMobileOpen(false)}>Packers and Movers</Link>
                        <Link to="/refer-earn" className="navbar__menu-item" onClick={() => setMobileOpen(false)}>Refer & Earn</Link>
                        <Link to="/rent-receipts" className="navbar__menu-item" onClick={() => setMobileOpen(false)}>Rent Receipts</Link>
                        <Link to="/plans/tenant" className="navbar__menu-item" onClick={() => setMobileOpen(false)}>Tenant Plans</Link>
                        <Link to="/plans/owner" className="navbar__menu-item" onClick={() => setMobileOpen(false)}>Owner Plans</Link>
                        <Link to="/plans/buyer" className="navbar__menu-item" onClick={() => setMobileOpen(false)}>Buyer Plans</Link>
                        <Link to="/plans/seller" className="navbar__menu-item" onClick={() => setMobileOpen(false)}>Seller Plans</Link>

                        {/* Commercial Plans - expandable */}
                        <div className="navbar__menu-expandable">
                            <button
                                className="navbar__menu-item navbar__menu-item--expand"
                                onClick={() => setCommercialOpen(!commercialOpen)}
                            >
                                Commercial Plans
                                {commercialOpen ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
                            </button>
                            {commercialOpen && (
                                <div className="navbar__menu-submenu">
                                    <Link to="/plans/tenant" className="navbar__submenu-item" onClick={() => setMobileOpen(false)}>Tenant Plan</Link>
                                    <Link to="/plans/owner" className="navbar__submenu-item" onClick={() => setMobileOpen(false)}>Owner Plan</Link>
                                </div>
                            )}
                        </div>

                        <Link to="/careers" className="navbar__menu-item" onClick={() => setMobileOpen(false)}>Careers</Link>
                        <Link to="/corporate-enquiry" className="navbar__menu-item" onClick={() => setMobileOpen(false)}>Corporate Enquiry</Link>
                        <a href="#" className="navbar__menu-item navbar__menu-item--orange">Blog</a>
                        <a href="#" className="navbar__menu-item">NoBroker Support</a>

                        {/* Contact Us - expandable */}
                        <div className="navbar__menu-expandable">
                            <button
                                className="navbar__menu-item navbar__menu-item--expand"
                                onClick={() => setContactOpen(!contactOpen)}
                            >
                                Contact Us
                                {contactOpen ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
                            </button>
                            {contactOpen && (
                                <div className="navbar__menu-submenu">
                                    <a href="mailto:assist@nobroker.in" className="navbar__submenu-item">
                                        Email: assist@nobroker.in
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Click-outside overlay */}
                {mobileOpen && (
                    <div
                        className="navbar__overlay"
                        onClick={() => setMobileOpen(false)}
                    />
                )}
            </nav>

            {/* Login Modal */}
            <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
        </>
    )
}

export default Navbar
