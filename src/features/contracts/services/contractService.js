/**
 * Contract Service — Real API Integration
 */

/**
 * Get all properties
 */
export const getAllProperties = async () => {
    try {
        const res = await fetch('/api/properties')
        if (!res.ok) throw new Error('Failed to fetch properties')
        return await res.json()
    } catch (err) {
        console.error(err)
        return []
    }
}

/**
 * Get a single property by ID
 */
export const getPropertyById = async (id) => {
    const res = await fetch(`/api/properties/${id}`)
    if (!res.ok) throw new Error('Property not found')
    return await res.json()
}

/**
 * Validate a future booking
 * @returns {{ valid: boolean, error?: string }}
 */
export const validateBooking = (property, moveInDate, tenantName) => {
    if (!tenantName || !tenantName.trim()) {
        return { valid: false, error: 'Tenant name is required.' }
    }

    if (!moveInDate) {
        return { valid: false, error: 'Move-in date is required.' }
    }

    const moveIn = new Date(moveInDate)
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    if (moveIn <= today) {
        return { valid: false, error: 'Move-in date must be in the future.' }
    }

    if (!property.vacatingDate) {
        return { valid: false, error: 'This property does not have a future vacating date.' }
    }

    const vacating = new Date(property.vacatingDate)
    if (moveIn < vacating) {
        return {
            valid: false,
            error: `Move-in date must be on or after the vacating date (${property.vacatingDate}).`,
        }
    }

    if (property.reservationStatus === 'reserved') {
        return { valid: false, error: 'This property already has an active reservation.' }
    }

    // Check overlapping bookings
    const hasOverlap = property.futureBookings.some(booking => {
        return booking.moveInDate === moveInDate
    })

    if (hasOverlap) {
        return { valid: false, error: 'Another booking exists for this date.' }
    }

    return { valid: true }
}

/**
 * Create a future booking
 * @returns {Promise<object>} The server response details
 */
export const createBooking = async (propertyId, moveInDate, tenantName) => {
    const res = await fetch(`/api/bookings/${propertyId}/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tenantName, moveInDate })
    })

    const data = await res.json()
    if (!res.ok) {
        throw new Error(data.error || 'Failed to create booking')
    }

    return data
}

/**
 * Generate contract data for preview
 */
export const generateContractPreview = (property, moveInDate, tenantName) => {
    const vacating = new Date(property.vacatingDate)
    const moveIn = new Date(moveInDate)
    const leaseEnd = new Date(moveIn)
    leaseEnd.setMonth(leaseEnd.getMonth() + 11)

    return {
        contractId: 'NB-' + Date.now().toString(36).toUpperCase(),
        propertyTitle: property.title,
        propertyLocation: property.location,
        ownerName: property.postedBy,
        tenantName: tenantName.trim(),
        monthlyRent: property.rent,
        securityDeposit: property.deposit,
        moveInDate,
        leaseEndDate: leaseEnd.toISOString().split('T')[0],
        vacatingDate: property.vacatingDate,
        generatedAt: new Date().toISOString(),
        terms: [
            'The lease term is 11 months from the move-in date.',
            'Monthly rent of ₹' + property.rent.toLocaleString('en-IN') + ' is due on the 1st of each month.',
            'Security deposit of ₹' + property.deposit.toLocaleString('en-IN') + ' is payable before move-in.',
            'The tenant shall maintain the property in good condition.',
            'Either party may terminate with 1 month written notice.',
            'Subletting is not permitted without owner consent.',
            'The owner shall handle structural repairs and maintenance.',
            'The tenant is responsible for utility bills (electricity, water, gas).',
        ],
    }
}
