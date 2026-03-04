import { useState, useEffect, useCallback } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { FaStar } from 'react-icons/fa'
import './Testimonials.css'

const testimonials = [
    {
        name: 'Priya Sharma',
        location: 'Bangalore',
        rating: 5,
        text: 'Found my dream 2BHK in Koramangala without paying a single rupee in brokerage! The process was smooth and the owner was genuinely verified.',
        avatar: 'PS',
        color: '#e63946',
    },
    {
        name: 'Rahul Verma',
        location: 'Mumbai',
        rating: 5,
        text: 'NoBroker saved me ₹50,000 in brokerage. The packers and movers service was also brilliant. Highly recommend for anyone moving to a new city.',
        avatar: 'RV',
        color: '#0078db',
    },
    {
        name: 'Anita Desai',
        location: 'Pune',
        rating: 5,
        text: 'Listed my property and got genuine tenants within 3 days. No brokers calling, no spam. The rental agreement service was the cherry on top!',
        avatar: 'AD',
        color: '#00b865',
    },
    {
        name: 'Karthik Iyer',
        location: 'Chennai',
        rating: 4,
        text: 'Great platform for finding flats. The virtual tour feature helped me shortlist properties without visiting. Saved so much time and effort.',
        avatar: 'KI',
        color: '#7b2ff7',
    },
    {
        name: 'Sneha Patil',
        location: 'Hyderabad',
        rating: 5,
        text: 'Moving from Delhi to Hyderabad was stress-free thanks to NoBroker. Found a great flat, got movers, and did rental agreement — all on one platform!',
        avatar: 'SP',
        color: '#ff9800',
    },
]

const Testimonials = () => {
    const [current, setCurrent] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    const next = useCallback(() => {
        setCurrent(prev => (prev + 1) % testimonials.length)
    }, [])

    const prev = () => {
        setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length)
    }

    useEffect(() => {
        if (!isAutoPlaying) return
        const interval = setInterval(next, 4000)
        return () => clearInterval(interval)
    }, [isAutoPlaying, next])

    const visibleIndices = [
        current,
        (current + 1) % testimonials.length,
        (current + 2) % testimonials.length,
    ]

    return (
        <section className="testimonials">
            <div className="testimonials__inner container">
                <h2 className="section-title">What Our Users Say</h2>
                <p className="section-subtitle">
                    Trusted by over 30 lakh happy customers across India
                </p>

                <div
                    className="testimonials__carousel"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    <button className="testimonials__arrow testimonials__arrow--left" onClick={prev}>
                        <FiChevronLeft size={20} />
                    </button>

                    <div className="testimonials__track">
                        {visibleIndices.map((idx, i) => {
                            const t = testimonials[idx]
                            return (
                                <div className={`testimonial-card ${i === 0 ? 'testimonial-card--active' : ''}`} key={idx}>
                                    <div className="testimonial-card__header">
                                        <div className="testimonial-card__avatar" style={{ background: t.color }}>
                                            {t.avatar}
                                        </div>
                                        <div>
                                            <div className="testimonial-card__name">{t.name}</div>
                                            <div className="testimonial-card__location">{t.location}</div>
                                        </div>
                                    </div>
                                    <div className="testimonial-card__stars">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <FaStar
                                                key={i}
                                                size={14}
                                                color={i < t.rating ? '#ffc107' : '#e0e0e0'}
                                            />
                                        ))}
                                    </div>
                                    <p className="testimonial-card__text">"{t.text}"</p>
                                </div>
                            )
                        })}
                    </div>

                    <button className="testimonials__arrow testimonials__arrow--right" onClick={next}>
                        <FiChevronRight size={20} />
                    </button>
                </div>

                <div className="testimonials__dots">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            className={`testimonials__dot ${i === current ? 'active' : ''}`}
                            onClick={() => setCurrent(i)}
                        />
                    ))}
                </div>

                <div className="testimonials__cta">
                    <a href="#" className="testimonials__link">More Testimonials →</a>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
