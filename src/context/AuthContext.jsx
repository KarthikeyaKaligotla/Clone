import { createContext, useState, useContext, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    // Initialize from localStorage
    useEffect(() => {
        const storedToken = localStorage.getItem('nb_token')
        const storedUser = localStorage.getItem('nb_user')

        if (storedToken && storedUser) {
            try {
                setToken(storedToken)
                setUser(JSON.parse(storedUser))
            } catch (e) {
                localStorage.removeItem('nb_token')
                localStorage.removeItem('nb_user')
            }
        }
        setIsLoading(false)
    }, [])

    const login = async (phone) => {
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phone }),
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.error || 'Login failed')
            }

            setUser(data.user)
            setToken(data.token)
            localStorage.setItem('nb_token', data.token)
            localStorage.setItem('nb_user', JSON.stringify(data.user))

            return data
        } catch (err) {
            throw err
        }
    }

    const logout = () => {
        setUser(null)
        setToken(null)
        localStorage.removeItem('nb_token')
        localStorage.removeItem('nb_user')
    }

    return (
        <AuthContext.Provider value={{ user, token, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
