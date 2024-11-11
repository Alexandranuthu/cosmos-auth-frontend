import React from "react"
function Circle() {
    return (
        <div className="relative w-10 h-10 rounded-full flex justify-center justify-items-center">
            {/* Dot 1 (Top-center) */}
            <div className="absolute w-2 h-2 bg-white rounded-full top-0 left-1/2 transform -translate-x-1/2"></div>

            {/* Dot 2 (Top-right) */}
            <div className="absolute w-2 h-2 bg-white rounded-full top-1/4 right-0 transform translate-x-1/2 translate-y-1/2"></div>

            {/* Dot 3 (Bottom-right) */}
            <div className="absolute w-2 h-2 bg-white rounded-full bottom-0 right-0 transform translate-x-1/2 translate-y-1/2"></div>

            {/* Dot 4 (Bottom-center) */}
            <div className="absolute w-2 h-2 bg-white rounded-full bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"></div>

            {/* Dot 5 (Bottom-left) */}
            <div className="absolute w-2 h-2 bg-white rounded-full bottom-1/4 left-0 transform -translate-x-1/2 translate-y-1/2"></div>

            {/* Dot 6 (Top-left) */}
            <div className="absolute w-2 h-2 bg-white rounded-full top-1/4 left-0 transform translate-x-1/2 translate-y-1/2"></div>
        </div>
    )
}

export default Circle;


