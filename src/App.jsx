import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PostPropertyPage from './pages/PostPropertyPage'
import PropertiesPage from './pages/PropertiesPage'
import PropertyDetailPage from './pages/PropertyDetailPage'
import PlansPage from './pages/PlansPage'
import RentalAgreementPage from './pages/RentalAgreementPage'
import PaintingCleaningPage from './pages/PaintingCleaningPage'
import PackersMoversPage from './pages/PackersMoversPage'
import ReferEarnPage from './pages/ReferEarnPage'
import RentReceiptsPage from './pages/RentReceiptsPage'
import CareersPage from './pages/CareersPage'
import CorporateEnquiryPage from './pages/CorporateEnquiryPage'
import { ChatWidget } from './features/ai-assistant'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/post-property" element={<PostPropertyPage />} />
                <Route path="/properties" element={<PropertiesPage />} />
                <Route path="/property/:id" element={<PropertyDetailPage />} />
                <Route path="/plans/:type?" element={<PlansPage />} />
                <Route path="/rental-agreement" element={<RentalAgreementPage />} />
                <Route path="/painting-cleaning" element={<PaintingCleaningPage />} />
                <Route path="/packers-movers" element={<PackersMoversPage />} />
                <Route path="/refer-earn" element={<ReferEarnPage />} />
                <Route path="/rent-receipts" element={<RentReceiptsPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/corporate-enquiry" element={<CorporateEnquiryPage />} />
            </Routes>
            <ChatWidget />
        </>
    )
}

export default App
