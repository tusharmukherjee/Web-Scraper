import React from 'react'


const Headdata = ({ analytics }: any) => {

    return (
        <div className=' w-full p-4 md:px-20 md:pt-10'>
            <div className=' w-full bg-blue-50 rounded-md'>
                <div className=' w-full px-6 pt-6 md:px-10 md:pt-10 flex flex-wrap'>
                    <div className=' mr-6 mb-6 md:mr-10 md:mb-10 rounded-md flex bg-blue-100 p-5'>
                        <h6 className=' pr-4 md:pr-16 font-semibold'>Total</h6>
                        <span className=' font-semibold text-blue-500'>{analytics.total}</span>
                    </div>
                    <div className=' mr-6 mb-6 md:mr-10 md:mb-10 rounded-md flex bg-blue-100 p-5'>
                        <h6 className=' pr-4 md:pr-16 font-semibold'>Avg. Ord.</h6>
                        <span className=' font-semibold text-blue-500'>{analytics.averageOrder}</span>
                    </div>
                    <div className=' mr-6 mb-6 md:mr-10 md:mb-10 rounded-md flex bg-blue-100 p-5'>
                        <h6 className=' pr-4 md:pr-16 font-semibold'>Max. Ord.</h6>
                        <span className=' font-semibold text-blue-500'>{analytics.highest}</span>
                    </div>
                    <div className=' mr-6 mb-6 md:mr-10 md:mb-10 rounded-md flex bg-blue-100 p-5'>
                        <h6 className=' pr-4 md:pr-16 font-semibold'>Below100</h6>
                        <span className=' font-semibold text-blue-500'>{analytics.below100}</span>
                    </div>
                    <div className=' mr-6 mb-6 md:mr-10 md:mb-10 rounded-md flex bg-blue-100 p-5'>
                        <h6 className=' pr-4 md:pr-16 font-semibold'>Avg. Rate</h6>
                        <span className=' font-semibold text-blue-500'>{analytics.ratingavg}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Headdata