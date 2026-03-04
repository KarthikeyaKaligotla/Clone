import { useState } from 'react'
import { FiChevronDown, FiUser } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { BiSupport } from 'react-icons/bi'
import './TopBar.css'

const TopBar = () => {
    const [servicesOpen, setServicesOpen] = useState(false)

    return (
        <div className="topbar">
            <div className="topbar__inner container">
                <div className="topbar__left">
                    <a href="#" className="topbar__link topbar__link--highlight">
                        <FiUser size={13} />
                        For Property Owners
                    </a>
                    <div
                        className="topbar__dropdown"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                    >
                        <span className="topbar__link">
                            Post Your Property
                            <FiChevronDown size={13} />
                        </span>
                        {servicesOpen && (
                            <div className="topbar__dropdown-menu">
                                <a href="#">Post Property for Rent</a>
                                <a href="#">Post Property for Sale</a>
                            </div>
                        )}
                    </div>
                    <a href="#" className="topbar__link">Rental Agreement</a>
                    <a href="#" className="topbar__link">Painting & Cleaning</a>
                    <a href="#" className="topbar__link">Packers and Movers</a>
                </div>
                <div className="topbar__right">
                    <a href="#" className="topbar__link">Refer & Earn</a>
                    <a href="#" className="topbar__link topbar__link--plans">
                        Tenant Plans
                        <FiChevronDown size={13} />
                    </a>
                    <a href="#" className="topbar__link">
                        <BiSupport size={13} />
                        NoBroker Support
                    </a>
                    <a href="mailto:assist@nobroker.in" className="topbar__link">
                        <HiOutlineMail size={13} />
                        assist@nobroker.in
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TopBar
