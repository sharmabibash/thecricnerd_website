import React from 'react'

const Loader = () => {
    return (
        <div className='flex justify-center my-12'>
            <div className="flex justify-center items-center gap-2 w-full">
                <div className="animate-pulse bg-gray-300 w-24 h-24 rounded-full"></div>
                <div className="flex flex-col gap-2">
                    <div className="animate-pulse bg-gray-300 w-[15vw] h-5 rounded-full"></div>
                    <div className="animate-pulse bg-gray-300 w-[25vw] h-5 rounded-full"></div>
                    <div className="animate-pulse bg-gray-300 w-[50vw] h-5 rounded-full"></div>
                    <div className="animate-pulse bg-gray-300 w-[70vw] h-5 rounded-full"></div>
                    <div className="animate-pulse bg-gray-300 w-[90vw] h-5 rounded-full"></div>
                </div>
            </div>
        </div>
    )
}

export default Loader
