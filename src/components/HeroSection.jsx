import { useState } from 'react'
import { FiSearch, FiChevronDown } from 'react-icons/fi'
import './HeroSection.css'

const cities = ['Bangalore', 'Mumbai', 'Pune', 'Chennai', 'Hyderabad', 'Delhi', 'Gurgaon', 'Noida', 'Kolkata']

const tabs = [
    { id: 'buy', label: 'Buy' },
    { id: 'rent', label: 'Rent' },
    { id: 'commercial', label: 'Commercial' },
]

const HeroSection = () => {
    const [activeTab, setActiveTab] = useState('buy')
    const [selectedCity, setSelectedCity] = useState('Gurgaon')
    const [cityOpen, setCityOpen] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [propertyType, setPropertyType] = useState('fullHouse')
    const [bhkType, setBhkType] = useState('')
    const [propertyStatus, setPropertyStatus] = useState('')
    const [commercialListingType, setCommercialListingType] = useState('rent')
    const [commercialPropertyType, setCommercialPropertyType] = useState('')
    const [newBuilder, setNewBuilder] = useState(false)

    // Reset filters when switching tabs
    const handleTabChange = (tabId) => {
        setActiveTab(tabId)
        setPropertyType('fullHouse')
        setBhkType('')
        setPropertyStatus('')
        setNewBuilder(false)
        setCommercialListingType('rent')
        setCommercialPropertyType('')
    }

    // Render filters based on active tab
    const renderFilters = () => {
        switch (activeTab) {
            case 'buy':
                return (
                    <>
                        <label className="hero__radio">
                            <input
                                type="radio"
                                name="propertyType"
                                checked={propertyType === 'fullHouse'}
                                onChange={() => setPropertyType('fullHouse')}
                            />
                            <span>Full House</span>
                        </label>
                        <label className="hero__radio">
                            <input
                                type="radio"
                                name="propertyType"
                                checked={propertyType === 'landPlot'}
                                onChange={() => setPropertyType('landPlot')}
                            />
                            <span>Land/Plot</span>
                        </label>

                        <div className="hero__filter-select">
                            <select value={bhkType} onChange={e => setBhkType(e.target.value)}>
                                <option value="">BHK Type</option>
                                <option value="1bhk">1 BHK</option>
                                <option value="2bhk">2 BHK</option>
                                <option value="3bhk">3 BHK</option>
                                <option value="4bhk">4 BHK</option>
                                <option value="4+bhk">4+ BHK</option>
                            </select>
                            <FiChevronDown size={14} className="hero__filter-arrow" />
                        </div>

                        <div className="hero__filter-select">
                            <select value={propertyStatus} onChange={e => setPropertyStatus(e.target.value)}>
                                <option value="">Property Status</option>
                                <option value="readyToMove">Ready to Move</option>
                                <option value="underConstruction">Under Construction</option>
                            </select>
                            <FiChevronDown size={14} className="hero__filter-arrow" />
                        </div>

                        <label className="hero__checkbox">
                            <input
                                type="checkbox"
                                checked={newBuilder}
                                onChange={e => setNewBuilder(e.target.checked)}
                            />
                            <span>New Builder Projects</span>
                        </label>
                    </>
                )

            case 'rent':
                return (
                    <>
                        <label className="hero__radio">
                            <input
                                type="radio"
                                name="propertyType"
                                checked={propertyType === 'fullHouse'}
                                onChange={() => setPropertyType('fullHouse')}
                            />
                            <span>Full House</span>
                        </label>
                        <label className="hero__radio">
                            <input
                                type="radio"
                                name="propertyType"
                                checked={propertyType === 'pgHostel'}
                                onChange={() => setPropertyType('pgHostel')}
                            />
                            <span>PG/Hostel</span>
                        </label>
                        <label className="hero__radio">
                            <input
                                type="radio"
                                name="propertyType"
                                checked={propertyType === 'flatmates'}
                                onChange={() => setPropertyType('flatmates')}
                            />
                            <span>Flatmates</span>
                        </label>

                        <div className="hero__filter-select">
                            <select value={bhkType} onChange={e => setBhkType(e.target.value)}>
                                <option value="">BHK Type</option>
                                <option value="1bhk">1 BHK</option>
                                <option value="2bhk">2 BHK</option>
                                <option value="3bhk">3 BHK</option>
                                <option value="4bhk">4 BHK</option>
                                <option value="4+bhk">4+ BHK</option>
                            </select>
                            <FiChevronDown size={14} className="hero__filter-arrow" />
                        </div>
                    </>
                )

            case 'commercial':
                return (
                    <>
                        <label className="hero__radio">
                            <input
                                type="radio"
                                name="commercialListing"
                                checked={commercialListingType === 'rent'}
                                onChange={() => setCommercialListingType('rent')}
                            />
                            <span>Rent</span>
                        </label>
                        <label className="hero__radio">
                            <input
                                type="radio"
                                name="commercialListing"
                                checked={commercialListingType === 'buy'}
                                onChange={() => setCommercialListingType('buy')}
                            />
                            <span>Buy</span>
                        </label>

                        <div className="hero__filter-select">
                            <select value={commercialPropertyType} onChange={e => setCommercialPropertyType(e.target.value)}>
                                <option value="">Property Type</option>
                                <option value="office">Office Space</option>
                                <option value="shop">Shop/Showroom</option>
                                <option value="warehouse">Warehouse/Godown</option>
                                <option value="coworking">Co-working Space</option>
                                <option value="industrial">Industrial Shed</option>
                            </select>
                            <FiChevronDown size={14} className="hero__filter-arrow" />
                        </div>
                    </>
                )

            default:
                return null
        }
    }

    return (
        <section className="hero">
            <div className="hero__inner container">
                {/* Title */}
                <h1 className="hero__title">
                    World's Largest NoBrokerage Property Site
                </h1>

                {/* Packers & Movers Banner */}
                <div className="hero__promo">
                    <span className="hero__promo-icon">🚛</span>
                    <span className="hero__promo-text">Packers And Movers</span>
                    <span className="hero__promo-divider">|</span>
                    <span className="hero__promo-icon">💰</span>
                    <span className="hero__promo-text">Lowest Prices</span>
                </div>

                {/* Tabs */}
                <div className="hero__tabs">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            className={`hero__tab ${activeTab === tab.id ? 'hero__tab--active' : ''}`}
                            onClick={() => handleTabChange(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Search Bar */}
                <div className="hero__search-row">
                    {/* City Dropdown */}
                    <div
                        className="hero__city-select"
                        onClick={() => setCityOpen(!cityOpen)}
                    >
                        <span className="hero__city-name">{selectedCity}</span>
                        <FiChevronDown size={14} className="hero__city-arrow" />
                        {cityOpen && (
                            <div className="hero__city-dropdown">
                                {cities.map(city => (
                                    <button
                                        key={city}
                                        className={`hero__city-option ${city === selectedCity ? 'active' : ''}`}
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            setSelectedCity(city)
                                            setCityOpen(false)
                                        }}
                                    >
                                        {city}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Search Input */}
                    <div className="hero__search-input-wrap">
                        <input
                            type="text"
                            className="hero__search-input"
                            placeholder="Search upto 3 localities or landmarks"
                            value={searchValue}
                            onChange={e => setSearchValue(e.target.value)}
                        />
                    </div>

                    {/* Search Button */}
                    <button className="hero__search-btn">
                        <FiSearch size={16} />
                        Search
                    </button>
                </div>

                {/* Dynamic Filters Row */}
                <div className="hero__filters">
                    {renderFilters()}
                </div>

                {/* Post Property Ad */}
                <div className="hero__post-property">
                    <div className="hero__post-divider">
                        <span>Are you a Property Owner?</span>
                    </div>
                    <button className="hero__post-btn">Post Free Property Ad</button>
                </div>

                {/* Bottom Banner - changes based on tab */}
                {activeTab === 'commercial' ? (
                    <div className="hero__loan-banner hero__loan-banner--dark">
                        <span className="hero__loan-icon">💳</span>
                        <span className="hero__loan-text">
                            Earn rewards upto <strong>₹30,000</strong> when you pay rent with <strong>credit card</strong>
                        </span>
                        <button className="hero__loan-btn">Pay Rent Now</button>
                    </div>
                ) : (
                    <div className="hero__loan-banner">
                        <span className="hero__loan-icon">🏦</span>
                        <span className="hero__loan-text">
                            Do you know how much <strong>loan</strong> you can get? Get maximum with <strong>NoBroker</strong>
                        </span>
                        <button className="hero__loan-btn">Check Eligibility</button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default HeroSection

