import React from 'react'

export default function PhotoGallery() {
    return (

        <div className="grid grid-cols-3 grid-flow-row gap-4">
            <div className="w-full h-[316px] bg-gray-600 col-span-2 row-span-2"></div>
            <div className="w-full bg-gray-600"></div>
            <div className="w-full bg-gray-600"></div>
            <div className="w-full h-[150px] bg-gray-600"></div>
            <div className="w-full h-[150px] bg-gray-600"></div>
            <div className="w-full h-[150px] bg-gray-600"></div>
        </div>
    )
}
