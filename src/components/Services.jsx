import { FiTruck, FiDroplet, FiHome, FiDollarSign } from 'react-icons/fi'
import { MdCleaningServices, MdFormatPaint, MdHandyman, MdElectricalServices } from 'react-icons/md'
import './Services.css'

const services = [
    {
        icon: <FiTruck />,
        title: 'Packers & Movers',
        description: 'Affordable and reliable packers and movers with NoBroker guaranteed service',
        color: '#e63946',
        bg: 'linear-gradient(135deg, #fdeaec 0%, #fff5f5 100%)',
        tag: 'Most Popular',
    },
    {
        icon: <MdFormatPaint />,
        title: 'Home Painting',
        description: 'Professional painting services at the best prices. Book online & get free quotes',
        color: '#7b2ff7',
        bg: 'linear-gradient(135deg, #f0e6ff 0%, #f8f4ff 100%)',
        tag: null,
    },
    {
        icon: <MdCleaningServices />,
        title: 'Home Cleaning',
        description: 'Deep cleaning, bathroom cleaning, kitchen cleaning. Verified professionals',
        color: '#00b865',
        bg: 'linear-gradient(135deg, #e6f9f0 0%, #f0fdf4 100%)',
        tag: null,
    },
    {
        icon: <FiDollarSign />,
        title: 'Home Loans',
        description: 'Get the best home loan offers. Compare rates from top banks. Quick approval',
        color: '#0078db',
        bg: 'linear-gradient(135deg, #e8f4fd 0%, #f0f8ff 100%)',
        tag: 'New',
    },
    {
        icon: <MdHandyman />,
        title: 'Carpentry',
        description: 'Expert carpenters for furniture repair, installation & custom furniture',
        color: '#ff9800',
        bg: 'linear-gradient(135deg, #fff3e0 0%, #fffbf0 100%)',
        tag: null,
    },
    {
        icon: <MdElectricalServices />,
        title: 'Electrician & Plumbing',
        description: 'Trained electricians and plumbers for all repair & installation needs',
        color: '#f44336',
        bg: 'linear-gradient(135deg, #ffebee 0%, #fff5f5 100%)',
        tag: null,
    },
]

const Services = () => {
    return (
        <section className="services">
            <div className="services__inner container">
                <h2 className="section-title">NoBroker Home Services</h2>
                <p className="section-subtitle">Everything you need for your home, under one roof</p>

                <div className="services__grid">
                    {services.map((service, i) => (
                        <a href="#" className="service-card" key={i}>
                            <div className="service-card__top" style={{ background: service.bg }}>
                                <div className="service-card__icon" style={{ color: service.color }}>
                                    {service.icon}
                                </div>
                                {service.tag && (
                                    <span className="service-card__tag" style={{
                                        background: service.color,
                                        color: '#fff'
                                    }}>
                                        {service.tag}
                                    </span>
                                )}
                            </div>
                            <div className="service-card__body">
                                <h3 className="service-card__title">{service.title}</h3>
                                <p className="service-card__desc">{service.description}</p>
                                <span className="service-card__cta" style={{ color: service.color }}>
                                    Explore →
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
