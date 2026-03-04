import { useState, useCallback, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { sendMessage as aiSendMessage, getSuggestedPrompts } from '../services/aiService'

const SESSION_KEY = 'nb_chat_session'

const getSessionId = () => {
    let id = sessionStorage.getItem(SESSION_KEY)
    if (!id) {
        id = 'sess_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8)
        sessionStorage.setItem(SESSION_KEY, id)
    }
    return id
}

const useChat = () => {
    const location = useLocation()
    const [messages, setMessages] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const sessionId = getSessionId()

    // Get context-aware prompts based on current route
    const suggestedPrompts = getSuggestedPrompts(location.pathname)

    // Add welcome message on first open
    useEffect(() => {
        if (messages.length === 0) {
            setMessages([{
                id: 'welcome',
                role: 'assistant',
                text: 'Hi! 👋 I\'m your NoBroker assistant. How can I help you today? Ask me about properties, services, or anything else!',
                timestamp: Date.now(),
            }])
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const send = useCallback(async (userText) => {
        if (!userText.trim() || isLoading) return

        const userMsg = {
            id: 'user_' + Date.now(),
            role: 'user',
            text: userText.trim(),
            timestamp: Date.now(),
        }

        setMessages(prev => [...prev, userMsg])
        setIsLoading(true)
        setError(null)

        try {
            const response = await aiSendMessage(userText, {
                currentPath: location.pathname,
                sessionId,
            })

            const aiMsg = {
                id: 'ai_' + Date.now(),
                role: 'assistant',
                text: response.text,
                timestamp: response.timestamp,
            }

            setMessages(prev => [...prev, aiMsg])
        } catch (err) {
            setError(err.message || 'Something went wrong. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }, [isLoading, location.pathname, sessionId])

    const retry = useCallback(() => {
        if (messages.length < 2) return
        const lastUserMsg = [...messages].reverse().find(m => m.role === 'user')
        if (lastUserMsg) {
            setError(null)
            send(lastUserMsg.text)
        }
    }, [messages, send])

    const clearChat = useCallback(() => {
        setMessages([{
            id: 'welcome',
            role: 'assistant',
            text: 'Chat cleared! How can I help you? 😊',
            timestamp: Date.now(),
        }])
        setError(null)
    }, [])

    return {
        messages,
        isLoading,
        error,
        suggestedPrompts,
        send,
        retry,
        clearChat,
    }
}

export default useChat
