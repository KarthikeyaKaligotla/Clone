import { FiX } from 'react-icons/fi'
import './ContractPreviewModal.css'

const ContractPreviewModal = ({ contract, onConfirm, onClose, isSubmitting }) => {
    if (!contract) return null

    return (
        <div className="contract-overlay" onClick={onClose}>
            <div className="contract-modal" onClick={e => e.stopPropagation()}>
                <button className="contract-modal__close" onClick={onClose} aria-label="Close">
                    <FiX size={22} />
                </button>

                <div className="contract-modal__header">
                    <h2 className="contract-modal__title">Contract Preview</h2>
                    <span className="contract-modal__id">{contract.contractId}</span>
                </div>

                <div className="contract-modal__body">
                    {/* Parties */}
                    <div className="contract-modal__section">
                        <h3 className="contract-modal__section-title">Parties</h3>
                        <div className="contract-modal__grid">
                            <div className="contract-modal__field">
                                <span className="contract-modal__label">Property Owner</span>
                                <span className="contract-modal__value">{contract.ownerName}</span>
                            </div>
                            <div className="contract-modal__field">
                                <span className="contract-modal__label">Tenant</span>
                                <span className="contract-modal__value">{contract.tenantName}</span>
                            </div>
                        </div>
                    </div>

                    {/* Property */}
                    <div className="contract-modal__section">
                        <h3 className="contract-modal__section-title">Property Details</h3>
                        <div className="contract-modal__grid">
                            <div className="contract-modal__field">
                                <span className="contract-modal__label">Property</span>
                                <span className="contract-modal__value">{contract.propertyTitle}</span>
                            </div>
                            <div className="contract-modal__field">
                                <span className="contract-modal__label">Location</span>
                                <span className="contract-modal__value">{contract.propertyLocation}</span>
                            </div>
                        </div>
                    </div>

                    {/* Financial */}
                    <div className="contract-modal__section">
                        <h3 className="contract-modal__section-title">Financial Terms</h3>
                        <div className="contract-modal__grid contract-modal__grid--3">
                            <div className="contract-modal__field">
                                <span className="contract-modal__label">Monthly Rent</span>
                                <span className="contract-modal__value contract-modal__value--accent">
                                    ₹{contract.monthlyRent.toLocaleString('en-IN')}
                                </span>
                            </div>
                            <div className="contract-modal__field">
                                <span className="contract-modal__label">Security Deposit</span>
                                <span className="contract-modal__value">
                                    ₹{contract.securityDeposit.toLocaleString('en-IN')}
                                </span>
                            </div>
                            <div className="contract-modal__field">
                                <span className="contract-modal__label">Move-in Date</span>
                                <span className="contract-modal__value">{contract.moveInDate}</span>
                            </div>
                        </div>
                    </div>

                    {/* Dates */}
                    <div className="contract-modal__section">
                        <h3 className="contract-modal__section-title">Lease Period</h3>
                        <div className="contract-modal__grid">
                            <div className="contract-modal__field">
                                <span className="contract-modal__label">Lease Start</span>
                                <span className="contract-modal__value">{contract.moveInDate}</span>
                            </div>
                            <div className="contract-modal__field">
                                <span className="contract-modal__label">Lease End</span>
                                <span className="contract-modal__value">{contract.leaseEndDate}</span>
                            </div>
                        </div>
                    </div>

                    {/* Terms */}
                    <div className="contract-modal__section">
                        <h3 className="contract-modal__section-title">Terms & Conditions</h3>
                        <ol className="contract-modal__terms">
                            {contract.terms.map((term, i) => (
                                <li key={i}>{term}</li>
                            ))}
                        </ol>
                    </div>
                </div>

                <div className="contract-modal__footer">
                    <button className="contract-modal__btn-cancel" onClick={onClose}>
                        Cancel
                    </button>
                    <button
                        className="contract-modal__btn-confirm"
                        onClick={onConfirm}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Confirming...' : 'Confirm Reservation'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ContractPreviewModal
