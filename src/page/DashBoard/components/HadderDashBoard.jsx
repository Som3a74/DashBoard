import React from 'react'

const HadderDashBoard = ({ title, description }) => {
    return (
        <div className="mb-4">
            <h5 className="text-gray-900">{title}</h5>
            <p className="text-base-medium text-gray-500">{description}</p>
        </div>
    )
}

export default HadderDashBoard