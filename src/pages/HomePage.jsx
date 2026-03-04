import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ValueCards from '../components/ValueCards'
import WhyNoBroker from '../components/WhyNoBroker'
import Services from '../components/Services'
import BuilderBanner from '../components/BuilderBanner'
import Testimonials from '../components/Testimonials'
import DownloadApp from '../components/DownloadApp'
import Footer from '../components/Footer'

const HomePage = () => {
    return (
        <div className="home-page">
            <Navbar />
            <HeroSection />
            <ValueCards />
            <WhyNoBroker />
            <Services />
            <BuilderBanner />
            <Testimonials />
            <DownloadApp />
            <Footer />
        </div>
    )
}

export default HomePage
