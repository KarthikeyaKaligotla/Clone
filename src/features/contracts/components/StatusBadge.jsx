import './StatusBadge.css'

const statusConfig = {
    occupied: { label: 'Occupied', className: 'status-badge--occupied' },
    available_soon: { label: 'Available Soon', className: 'status-badge--available' },
    reserved: { label: 'Reserved', className: 'status-badge--reserved' },
}

const StatusBadge = ({ status }) => {
    const config = statusConfig[status]
    if (!config) return null

    return (
        <span className={`status-badge ${config.className}`} role="status">
            {config.label}
        </span>
    )
}

export default StatusBadge
