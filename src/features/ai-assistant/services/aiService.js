/**
 * AI Service Layer — Mock Implementation
 * Swappable provider abstraction: replace sendMessage internals
 * without changing any UI code.
 */

const RESPONSE_DELAY = 800

// Context-aware suggested prompts
export const getSuggestedPrompts = (currentPath) => {
    if (currentPath === '/post-property') {
        return [
            'How do I post a property ad?',
            'What documents are needed to list?',
            'How long does it take to find a tenant?',
            'Is posting really free?',
        ]
    }

    if (currentPath.startsWith('/property/')) {
        return [
            'Is this property still available?',
            'Can I schedule a visit?',
            'What is the security deposit?',
            'Are pets allowed here?',
        ]
    }

    if (currentPath === '/properties') {
        return [
            'Show me 2BHK apartments under ₹20K',
            'Which areas have the best connectivity?',
            'How does future booking work?',
            'What are the most popular localities?',
        ]
    }

    // Homepage / default
    return [
        'How does NoBroker work?',
        'Help me find a rental property',
        'What services does NoBroker offer?',
        'How do I save on brokerage?',
    ]
}

// Knowledge base for contextual responses
const knowledgeBase = {
    'how does nobroker work': 'NoBroker connects property owners directly with tenants, eliminating middlemen and brokerage fees. Simply search for properties, contact owners directly, and finalize your deal — all with zero brokerage! 🏠',

    'find a rental': 'To find a rental property:\n\n1. Select your city from the dropdown\n2. Choose the "Rent" tab\n3. Enter your preferred locality\n4. Apply filters like BHK type, budget, etc.\n5. Contact owners directly!\n\nYou can search right from our homepage.',

    'services': 'NoBroker offers a wide range of services:\n\n🏠 **Property Listings** — Buy, Rent, Commercial\n📦 **Packers & Movers** — Lowest prices guaranteed\n📋 **Rental Agreements** — Online, doorstep delivery\n🎨 **Painting & Cleaning** — Professional services\n💰 **Home Loans** — Best rates from top banks\n💳 **Pay Rent** — Via credit card, earn rewards',

    'brokerage': 'With NoBroker, you save 100% on brokerage! Traditional brokers charge 1-2 months rent as commission. Our platform connects you directly with property owners, so you keep that money in your pocket. Over ₹100 Cr+ saved by our users monthly! 💰',

    'post property': 'Posting a property on NoBroker is completely FREE!\n\n1. Click "For Property Owners" in the navbar\n2. Fill in your details (name, phone, email)\n3. Select property type and ad type\n4. Submit your listing\n\nYou\'ll start getting tenant inquiries within hours!',

    'documents': 'To list a property, you typically need:\n\n📄 Property ownership proof\n🪪 ID proof (Aadhaar/PAN)\n📸 Property photos\n📍 Exact address and locality\n\nThe listing process is simple — most details can be added later.',

    'tenant': 'Finding a tenant through NoBroker is fast:\n\n⏱️ Average time: 3-7 days\n👥 10 Lac+ active tenants/buyers\n✅ Verified profiles\n📱 Direct contact — no middlemen\n\n30 Lac+ home owners already trust us!',

    'security deposit': 'Security deposits vary by city and property type:\n\n🏙️ **Bangalore** — Usually 10 months rent\n🏙️ **Mumbai** — Usually 2-3 months rent\n🏙️ **Delhi/NCR** — Usually 1-2 months rent\n🏙️ **Other cities** — Usually 2-3 months rent\n\nNegotiate directly with the owner on NoBroker!',

    'future booking': 'Future Booking lets you reserve a property before it becomes vacant:\n\n📅 See the expected vacating date\n🔒 Lock in your preferred move-in date\n📝 Get a contract preview instantly\n✅ No overlapping reservations allowed\n\nGreat for planning your move in advance!',

    'schedule visit': 'To schedule a property visit:\n\n1. Open the property listing\n2. Click "Contact Owner"\n3. Coordinate directly for a visit time\n\nNoBroker provides the owner\'s verified phone number so you can arrange visits at your convenience.',

    'pets': 'Pet policies vary by property owner. When browsing listings, look for pet-friendly tags. You can also ask the owner directly through our platform. Many owners in cities like Bangalore and Pune are pet-friendly! 🐕',

    'packers': 'NoBroker Packers & Movers offers:\n\n📦 Lowest Price Guarantee\n🚛 Verified & insured movers\n📋 Free quotation comparison\n🛡️ Damage protection included\n\nBook directly from our homepage for the best rates!',
}

/**
 * Find the best matching response from knowledge base
 */
const findResponse = (message) => {
    const lower = message.toLowerCase()

    for (const [key, response] of Object.entries(knowledgeBase)) {
        const keywords = key.split(' ')
        const matchCount = keywords.filter(kw => lower.includes(kw)).length
        if (matchCount >= Math.ceil(keywords.length * 0.5)) {
            return response
        }
    }

    return null
}

/**
 * Send a message to the AI service.
 * Returns a Promise that resolves with the AI response.
 *
 * @param {string} message - User's message
 * @param {object} context - { currentPath, sessionId }
 * @returns {Promise<{text: string, timestamp: number}>}
 */
export const sendMessage = (message, context = {}) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const matched = findResponse(message)

                const text = matched || `Thanks for your question! Here's what I can help with:\n\n• **Property search** — Find rentals, buy, or commercial spaces\n• **Posting ads** — List your property for free\n• **Services** — Packers & Movers, Rental Agreements, Painting\n• **Loans** — Check home loan eligibility\n\nTry asking about any of these topics, or type "services" for a full list! 😊`

                resolve({
                    text,
                    timestamp: Date.now(),
                })
            } catch (err) {
                reject(new Error('AI service temporarily unavailable. Please try again.'))
            }
        }, RESPONSE_DELAY)
    })
}
