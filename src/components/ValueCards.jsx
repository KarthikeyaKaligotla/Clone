import './ValueCards.css'

const cards = [
    {
        icon: '📦',
        title: 'Packers & Movers',
        badge: 'Lowest Price',
        badgeColor: '#e63946',
    },
    {
        icon: '💳',
        title: 'Pay rent',
        badge: 'New Offers',
        badgeColor: '#00b865',
    },
    {
        icon: '📋',
        title: 'Rental Agreement',
        badge: null,
        badgeColor: null,
    },
    {
        icon: '🎁',
        title: 'Click & Earn',
        badge: null,
        badgeColor: null,
    },
    {
        icon: '🎨',
        title: 'Painting & Cleaning',
        badge: null,
        badgeColor: null,
    },
    {
        icon: '🌏',
        title: 'NoBroker For NRIs',
        badge: 'New',
        badgeColor: '#e63946',
    },
]

const ValueCards = () => {
    return (
        <section className="value-cards">
            <div className="value-cards__inner container">
                {cards.map((card, i) => (
                    <a href="#" className="value-card" key={i}>
                        {card.badge && (
                            <span className="value-card__badge" style={{ color: card.badgeColor }}>
                                {card.badge}
                            </span>
                        )}
                        <div className="value-card__icon">
                            {card.icon}
                        </div>
                        <span className="value-card__title">{card.title}</span>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default ValueCards
