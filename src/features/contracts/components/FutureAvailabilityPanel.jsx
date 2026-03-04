import { FiCalendar, FiUser, FiCheck } from 'react-icons/fi'
import useContract from '../hooks/useContract'
import ContractPreviewModal from './ContractPreviewModal'
import './FutureAvailabilityPanel.css'

const FutureAvailabilityPanel = ({ property }) => {
    const {
        tenantName, setTenantName,
        moveInDate, setMoveInDate,
        isSubmitting, error, success, canBook,
        contractPreview, showPreview,
        preview, confirmBooking, closePreview,
    } = useContract(property)

    if (!property.vacatingDate) return null

    const vacatingFormatted = new Date(property.vacatingDate).toLocaleDateString('en-IN', {
        day: 'numeric', month: 'long', year: 'numeric'
    })

    // Already reserved
    if (property.reservationStatus === 'reserved') {
        const booking = property.futureBookings[0]
        return (
            <div className="future-panel">
                <div className="future-panel__header">
                    <FiCalendar size={18} />
                    <h3 className="future-panel__title">Future Availability</h3>
                </div>
                <div className="future-panel__reserved">
                    <FiCheck size={20} className="future-panel__check-icon" />
                    <div>
                        <p className="future-panel__reserved-text">This property is reserved</p>
                        {booking && (
                            <p className="future-panel__reserved-detail">
                                Reserved by <strong>{booking.tenantName}</strong> for move-in on <strong>{booking.moveInDate}</strong>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        )
    }

    // Success state
    if (success) {
        return (
            <div className="future-panel">
                <div className="future-panel__header">
                    <FiCalendar size={18} />
                    <h3 className="future-panel__title">Future Availability</h3>
                </div>
                <div className="future-panel__success">
                    <FiCheck size={24} className="future-panel__success-icon" />
                    <h4>Reservation Confirmed!</h4>
                    <p>Your future booking has been secured successfully. A contract will be generated for your records.</p>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="future-panel">
                <div className="future-panel__header">
                    <FiCalendar size={18} />
                    <h3 className="future-panel__title">Future Availability</h3>
                </div>

                <div className="future-panel__info">
                    <span className="future-panel__label">Expected Vacating Date</span>
                    <span className="future-panel__date">{vacatingFormatted}</span>
                </div>

                {canBook && (
                    <div className="future-panel__form">
                        <p className="future-panel__form-subtitle">Reserve this property in advance</p>

                        <div className="future-panel__field">
                            <label className="future-panel__field-label">
                                <FiUser size={14} />
                                Your Name
                            </label>
                            <input
                                type="text"
                                className="future-panel__input"
                                placeholder="Enter your full name"
                                value={tenantName}
                                onChange={e => setTenantName(e.target.value)}
                            />
                        </div>

                        <div className="future-panel__field">
                            <label className="future-panel__field-label">
                                <FiCalendar size={14} />
                                Preferred Move-in Date
                            </label>
                            <input
                                type="date"
                                className="future-panel__input"
                                min={property.vacatingDate}
                                value={moveInDate}
                                onChange={e => setMoveInDate(e.target.value)}
                            />
                        </div>

                        {error && (
                            <div className="future-panel__error">{error}</div>
                        )}

                        <button
                            className="future-panel__btn"
                            onClick={preview}
                            disabled={!tenantName.trim() || !moveInDate}
                        >
                            Preview Contract & Reserve
                        </button>
                    </div>
                )}
            </div>

            {showPreview && (
                <ContractPreviewModal
                    contract={contractPreview}
                    onConfirm={confirmBooking}
                    onClose={closePreview}
                    isSubmitting={isSubmitting}
                />
            )}
        </>
    )
}

export default FutureAvailabilityPanel
