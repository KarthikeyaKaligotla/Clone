import { useState, useRef, useEffect } from 'react'
import { FiX, FiSend, FiTrash2, FiMessageCircle } from 'react-icons/fi'
import useChat from '../hooks/useChat'
import './ChatWidget.css'

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [input, setInput] = useState('')
    const messagesEndRef = useRef(null)
    const inputRef = useRef(null)
    const { messages, isLoading, error, suggestedPrompts, send, retry, clearChat } = useChat()

    // Auto-scroll to bottom on new messages
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [messages, isLoading])

    // Focus input when opening
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 300)
        }
    }, [isOpen])

    const handleSend = () => {
        if (!input.trim()) return
        send(input)
        setInput('')
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSend()
        }
    }

    const handlePromptClick = (prompt) => {
        send(prompt)
    }

    // Render markdown-lite (bold and line breaks)
    const renderText = (text) => {
        return text.split('\n').map((line, i) => {
            const parts = line.split(/(\*\*.*?\*\*)/g).map((part, j) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={j}>{part.slice(2, -2)}</strong>
                }
                return part
            })
            return (
                <span key={i}>
                    {i > 0 && <br />}
                    {parts}
                </span>
            )
        })
    }

    return (
        <div className="chat-widget" role="complementary" aria-label="AI Assistant">
            {/* Chat Window */}
            <div className={`chat-widget__window ${isOpen ? 'chat-widget__window--open' : ''}`}>
                {/* Header */}
                <div className="chat-widget__header">
                    <div className="chat-widget__header-info">
                        <div className="chat-widget__avatar">
                            <FiMessageCircle size={16} />
                        </div>
                        <div>
                            <div className="chat-widget__name">NoBroker Assistant</div>
                            <div className="chat-widget__status-text">Online</div>
                        </div>
                    </div>
                    <div className="chat-widget__header-actions">
                        <button
                            className="chat-widget__header-btn"
                            onClick={clearChat}
                            title="Clear chat"
                            aria-label="Clear chat"
                        >
                            <FiTrash2 size={14} />
                        </button>
                        <button
                            className="chat-widget__header-btn"
                            onClick={() => setIsOpen(false)}
                            title="Close chat"
                            aria-label="Close chat"
                        >
                            <FiX size={16} />
                        </button>
                    </div>
                </div>

                {/* Messages */}
                <div className="chat-widget__messages">
                    {messages.map(msg => (
                        <div
                            key={msg.id}
                            className={`chat-widget__msg chat-widget__msg--${msg.role}`}
                        >
                            <div className={`chat-widget__bubble chat-widget__bubble--${msg.role}`}>
                                {renderText(msg.text)}
                            </div>
                            <div className="chat-widget__time">
                                {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>
                        </div>
                    ))}

                    {/* Loading indicator */}
                    {isLoading && (
                        <div className="chat-widget__msg chat-widget__msg--assistant">
                            <div className="chat-widget__bubble chat-widget__bubble--assistant">
                                <div className="chat-widget__typing">
                                    <span></span><span></span><span></span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Error */}
                    {error && (
                        <div className="chat-widget__error">
                            <span>{error}</span>
                            <button onClick={retry}>Retry</button>
                        </div>
                    )}

                    {/* Suggested prompts (show when few messages) */}
                    {messages.length <= 1 && !isLoading && (
                        <div className="chat-widget__suggestions">
                            {suggestedPrompts.map((prompt, i) => (
                                <button
                                    key={i}
                                    className="chat-widget__suggestion"
                                    onClick={() => handlePromptClick(prompt)}
                                >
                                    {prompt}
                                </button>
                            ))}
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="chat-widget__input-area">
                    <input
                        ref={inputRef}
                        type="text"
                        className="chat-widget__input"
                        placeholder="Type a message..."
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        disabled={isLoading}
                        aria-label="Chat message input"
                    />
                    <button
                        className="chat-widget__send"
                        onClick={handleSend}
                        disabled={!input.trim() || isLoading}
                        aria-label="Send message"
                    >
                        <FiSend size={16} />
                    </button>
                </div>
            </div>

            {/* Floating Trigger */}
            <button
                className={`chat-widget__trigger ${isOpen ? 'chat-widget__trigger--hidden' : ''}`}
                onClick={() => setIsOpen(true)}
                aria-label="Open AI assistant"
            >
                <FiMessageCircle size={24} />
            </button>
        </div>
    )
}

export default ChatWidget
