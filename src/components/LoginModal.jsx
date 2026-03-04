import { useState } from 'react'
import { FiX, FiCheck } from 'react-icons/fi'
import { useAuth } from '../context/AuthContext'
import './LoginModal.css'

const LoginModal = ({ isOpen, onClose }) => {
    const [phone, setPhone] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const { login } = useAuth()

    if (!isOpen) return null

    const handleContinue = async (e) => {
        e.preventDefault()
        if (phone.length === 10) {
            setIsLoading(true)
            setError(null)
            try {
                await login(phone)
                setPhone('')
                onClose() // Close modal on success
            } catch (err) {
                setError(err.message || 'Failed to login')
            } finally {
                setIsLoading(false)
            }
        } else {
            setError('Please enter a valid 10-digit number')
        }
    }

    return (
        <div className="login-overlay" onClick={onClose}>
            <div className="login-modal" onClick={e => e.stopPropagation()}>
                {/* Close Button */}
                <button className="login-modal__close" onClick={onClose}>
                    <FiX size={22} />
                </button>

                {/* Left Panel */}
                <div className="login-modal__left">
                    {/* House Illustration */}
                    <div className="login-modal__illustration">
                        <svg viewBox="0 0 120 120" width="100" height="100">
                            {/* House body */}
                            <rect x="25" y="55" width="70" height="55" rx="3" fill="#f5e6d0" stroke="#d4a574" strokeWidth="2" />
                            {/* Roof */}
                            <polygon points="60,15 15,58 105,58" fill="#e8a850" stroke="#d4a574" strokeWidth="2" strokeLinejoin="round" />
                            {/* Door */}
                            <rect x="48" y="75" width="24" height="35" rx="2" fill="#d4a574" />
                            <circle cx="67" cy="93" r="2" fill="#a07040" />
                            {/* Window left */}
                            <rect x="30" y="65" width="14" height="14" rx="2" fill="#87ceeb" stroke="#d4a574" strokeWidth="1.5" />
                            <line x1="37" y1="65" x2="37" y2="79" stroke="#d4a574" strokeWidth="1" />
                            <line x1="30" y1="72" x2="44" y2="72" stroke="#d4a574" strokeWidth="1" />
                            {/* Window right */}
                            <rect x="76" y="65" width="14" height="14" rx="2" fill="#87ceeb" stroke="#d4a574" strokeWidth="1.5" />
                            <line x1="83" y1="65" x2="83" y2="79" stroke="#d4a574" strokeWidth="1" />
                            <line x1="76" y1="72" x2="90" y2="72" stroke="#d4a574" strokeWidth="1" />
                            {/* Chimney */}
                            <rect x="80" y="28" width="12" height="22" rx="1" fill="#d4a574" />
                            {/* Small cloud */}
                            <ellipse cx="30" cy="25" rx="12" ry="6" fill="#e8e8e8" opacity="0.6" />
                            <ellipse cx="95" cy="20" rx="10" ry="5" fill="#e8e8e8" opacity="0.5" />
                            {/* Tree */}
                            <rect x="10" y="85" width="5" height="25" fill="#8B6914" />
                            <circle cx="12" cy="78" r="12" fill="#4CAF50" opacity="0.7" />
                        </svg>
                    </div>

                    <h2 className="login-modal__heading">Login / Sign up</h2>

                    <ul className="login-modal__benefits">
                        <li>
                            <FiCheck size={14} className="login-modal__check" />
                            Zero Brokerage.
                        </li>
                        <li>
                            <FiCheck size={14} className="login-modal__check" />
                            Thousands of new listings daily.
                        </li>
                        <li>
                            <FiCheck size={14} className="login-modal__check" />
                            100 Cr+ Brokerage saved monthly.
                        </li>
                    </ul>
                </div>

                {/* Right Panel */}
                <div className="login-modal__right">
                    <h3 className="login-modal__title">Enter phone to continue</h3>

                    <form onSubmit={handleContinue}>
                        <div className="login-modal__phone-input">
                            <div className="login-modal__country">
                                <span className="login-modal__flag">🇮🇳</span>
                                <span className="login-modal__code">+91</span>
                                <span className="login-modal__code-arrow">▾</span>
                            </div>
                            <input
                                type="tel"
                                className="login-modal__input"
                                placeholder="Enter Mobile Number"
                                value={phone}
                                onChange={e => {
                                    const val = e.target.value.replace(/\D/g, '')
                                    if (val.length <= 10) setPhone(val)
                                }}
                                maxLength={10}
                                autoFocus
                            />
                        </div>
                        {error && <p className="login-modal__error" style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>{error}</p>}

                        <button
                            type="submit"
                            className="login-modal__continue-btn"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Loading...' : 'Continue'}
                        </button>
                    </form>

                    <p className="login-modal__terms">
                        By continuing, you agree to our{' '}
                        <a href="#">Terms & Conditions</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginModal
