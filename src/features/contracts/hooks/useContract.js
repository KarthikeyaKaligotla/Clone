import { useState, useCallback } from 'react'
import {
    validateBooking,
    createBooking,
    generateContractPreview,
} from '../services/contractService'

const useContract = (property) => {
    const [tenantName, setTenantName] = useState('')
    const [moveInDate, setMoveInDate] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)
    const [contractPreview, setContractPreview] = useState(null)
    const [showPreview, setShowPreview] = useState(false)

    const canBook = property &&
        property.vacatingDate &&
        property.reservationStatus !== 'reserved' &&
        new Date(property.vacatingDate) > new Date()

    const preview = useCallback(() => {
        if (!property) return
        const validation = validateBooking(property, moveInDate, tenantName)
        if (!validation.valid) {
            setError(validation.error)
            return
        }
        setError(null)
        const contract = generateContractPreview(property, moveInDate, tenantName)
        setContractPreview(contract)
        setShowPreview(true)
    }, [property, moveInDate, tenantName])

    const confirmBooking = useCallback(async () => {
        if (!property) return
        setIsSubmitting(true)
        setError(null)

        try {
            await createBooking(property.id, moveInDate, tenantName)
            setSuccess(true)
            setShowPreview(false)
        } catch (err) {
            setError(err.message)
        } finally {
            setIsSubmitting(false)
        }
    }, [property, moveInDate, tenantName])

    const closePreview = useCallback(() => {
        setShowPreview(false)
    }, [])

    const reset = useCallback(() => {
        setTenantName('')
        setMoveInDate('')
        setError(null)
        setSuccess(false)
        setContractPreview(null)
        setShowPreview(false)
    }, [])

    return {
        tenantName,
        setTenantName,
        moveInDate,
        setMoveInDate,
        isSubmitting,
        error,
        success,
        canBook,
        contractPreview,
        showPreview,
        preview,
        confirmBooking,
        closePreview,
        reset,
    }
}

export default useContract
