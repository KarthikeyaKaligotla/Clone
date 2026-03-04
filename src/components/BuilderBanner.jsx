import './BuilderBanner.css'

const BuilderBanner = () => {
    return (
        <section className="builder-banner">
            <div className="builder-banner__inner container">
                <div className="builder-banner__content">
                    <span className="builder-banner__label">New Projects</span>
                    <h2 className="builder-banner__title">
                        Explore New Residential Projects
                    </h2>
                    <p className="builder-banner__text">
                        Discover verified builder projects across India. Get the best deals on under-construction and ready-to-move-in properties.
                    </p>
                    <button className="builder-banner__btn">
                        Enquire Now
                    </button>
                </div>
                <div className="builder-banner__visual">
                    <div className="builder-banner__buildings">
                        <div className="builder-banner__building builder-banner__building--1" />
                        <div className="builder-banner__building builder-banner__building--2" />
                        <div className="builder-banner__building builder-banner__building--3" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BuilderBanner
