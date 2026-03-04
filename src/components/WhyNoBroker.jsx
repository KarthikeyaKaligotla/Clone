import { useState, useEffect, useRef } from 'react'
import { FiUsers, FiHome, FiCheckCircle } from 'react-icons/fi'
import './WhyNoBroker.css'

const stats = [
    { icon: <FiUsers />, end: 3000000, suffix: '+', label: 'Happy Customers', color: '#e63946' },
    { icon: <FiHome />, end: 600000, suffix: '+', label: 'Properties Listed', color: '#00b865' },
    { icon: <FiCheckCircle />, end: 25000, suffix: '+', label: 'Owners Connected Daily', color: '#0078db' },
]

const useCountUp = (end, duration = 2000, start = false) => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        if (!start) return
        let startTime = null
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            setCount(Math.floor(progress * end))
            if (progress < 1) requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
    }, [start, end, duration])
    return count
}

const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(0) + 'M'
    if (num >= 100000) return (num / 100000).toFixed(0) + 'L'
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K'
    return num.toString()
}

const StatItem = ({ stat, inView }) => {
    const count = useCountUp(stat.end, 2000, inView)
    return (
        <div className="why-nb__stat">
            <div className="why-nb__stat-icon" style={{ color: stat.color, background: `${stat.color}15` }}>
                {stat.icon}
            </div>
            <div className="why-nb__stat-number" style={{ color: stat.color }}>
                {formatNumber(count)}{stat.suffix}
            </div>
            <div className="why-nb__stat-label">{stat.label}</div>
        </div>
    )
}

const WhyNoBroker = () => {
    const [inView, setInView] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setInView(true) },
            { threshold: 0.3 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section className="why-nb" ref={ref}>
            <div className="why-nb__inner container">
                <h2 className="section-title">Why NoBroker?</h2>
                <p className="section-subtitle">India's Largest No Brokerage Property Site</p>

                <div className="why-nb__stats">
                    {stats.map((stat, i) => (
                        <StatItem key={i} stat={stat} inView={inView} />
                    ))}
                </div>

                <div className="why-nb__reasons">
                    <div className="why-nb__reason">
                        <div className="why-nb__reason-number">01</div>
                        <h3 className="why-nb__reason-title">Zero Brokerage</h3>
                        <p className="why-nb__reason-text">Save thousands of rupees in brokerage fees. Deal directly with property owners.</p>
                    </div>
                    <div className="why-nb__reason">
                        <div className="why-nb__reason-number">02</div>
                        <h3 className="why-nb__reason-title">Verified Listings</h3>
                        <p className="why-nb__reason-text">Every property listing is verified by our team. No fake listings, no brokers.</p>
                    </div>
                    <div className="why-nb__reason">
                        <div className="why-nb__reason-number">03</div>
                        <h3 className="why-nb__reason-title">All-in-One Platform</h3>
                        <p className="why-nb__reason-text">From finding a home to moving in — rental agreements, packers & movers, and more.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyNoBroker
