import React, { useContext } from 'react'
import { Head } from '../Context';

interface conttype {
    toggleFilterbox: boolean,
    setToggleFilterbox: (x: boolean) => any
}

interface filterobjtype {
    filterobj: filterobjtype2
    setfilterobj: (x: any) => any
}

interface filterobjtype2 {
    rateorder: string,
    ordersorder: string,
    ratebox: any,
    cuisine: any,
    splitarr: string
}

const Filter = () => {

    const { setToggleFilterbox } = useContext(Head) as conttype;

    const { filterobj } = useContext(Head) as filterobjtype;

    function toggleFilterboxFun(index: boolean) {
        setToggleFilterbox(index);
    }

    return (
        <div className=' w-full p-4 md:px-20 md:pt-10'>
            <div className=' w-full bg-blue-500 rounded-md'>
                <div className=' w-full px-6 pt-6 flex flex-col flex-wrap '>
                    <div onClick={() => toggleFilterboxFun(true)} className=' mr-10 rounded-md flex bg-blue-100 p-4 w-fit  '>
                        <h6 className=' pr-12 font-semibold'>Filter</h6>
                        <span className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                            </svg>
                        </span>
                    </div>
                    <br />
                    <div className=' flex w-full overflow-x-scroll md:overflow-auto'>
                        <div className=' mr-6 mb-6 rounded-md flex bg-blue-100 px-4 py-2'>
                            <h6 className=' font-semibold'>Avg. Orders: {filterobj.ordersorder}</h6>
                        </div>
                        <div className=' mr-6 mb-6 rounded-md flex bg-blue-100 px-4 py-2'>
                            <h6 className=' font-semibold'>Cuisines: {filterobj.cuisine.map((el: any, index: any) => (filterobj.cuisine[filterobj.cuisine.length - 1] !== el) ? <span key={index}>{el}, </span> : <span key={index}>{el}</span>)}</h6>
                        </div>
                        <div className=' mr-6 mb-6 rounded-md flex bg-blue-100 px-4 py-2'>
                            <h6 className=' font-semibold'>Rating: {filterobj.ratebox}</h6>
                        </div>
                        <div className=' mr-6 mb-6 rounded-md flex bg-blue-100 px-4 py-2'>
                            <h6 className=' font-semibold'>Split: {filterobj.splitarr}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter