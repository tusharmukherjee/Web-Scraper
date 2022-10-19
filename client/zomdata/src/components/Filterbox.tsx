import React, { useContext, useState } from 'react'
import { Head } from '../Context'
import Cuisinebox from './Cuisinebox'
import Ratebox from './Ratebox'
import Sortbox from './Sortbox'
import Splicebox from './Splicebox'

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
    ratebox: number,
    cuisine: any
}

const Filterbox = () => {
    const [toggleFilter, settoggleFilter] = useState<string>("sortby");
    // const [toggleFilterbox, setToggleFilterbox] = useState<boolean>(false);
    const { filterobj, setfilterobj } = useContext(Head) as filterobjtype;
    const { toggleFilterbox, setToggleFilterbox } = useContext(Head) as conttype;

    async function handleSubmit() {
        console.log(filterobj);
        // await fetch("http://localhost:3001/link",{
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         "accept": "application/json"
        //     },
        //     body: JSON.stringify({
        //         link: 
        //     })
        // })
    }

    function clearall() {
        setfilterobj({
            rateorder: "rdesc",
            ordersorder: "odesc",
            ratebox: "0.0",
            cuisine: []
        });
        setToggleFilterbox(false);
        // console.log(filterobj);
        // settoggleFilter("sortby");
    }

    function toggleFilterFun(index: string) {
        settoggleFilter(index);
    }

    function toggleFilterboxFun() {
        setToggleFilterbox(false);
    }

    return (
        <>
            {
                (toggleFilterbox) ?
                    <>
                        <div onClick={() => toggleFilterboxFun()} className=' w-full h-screen z-0 fixed top-0 bottom-0 right-0 left-0 bg-gray-600 opacity-80 flex justify-center items-center '>
                        </div>
                        {/* <div className=' h-screen w-screen flex justify-center items-center top-0 fixed z-10'> */}
                        <div className=' fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-11/12 lg:h-3/4 rounded-xl'>
                            <div className=' p-4 flex flex-row justify-between border-b-[1px]'>
                                <h3>Filters</h3>
                                <button onClick={() => toggleFilterboxFun()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>

                                </button>
                            </div>
                            <section className=' flex flex-row border-b-[1px]'>
                                <div onClick={() => toggleFilterFun("sortby")} className={`m-3 p-1 ${(toggleFilter === 'sortby') ? ' text-blue-500' : ''}`}>
                                    <h3>
                                        Sort by
                                    </h3>
                                </div>
                                <div onClick={() => toggleFilterFun("cuisinebox")} className={`m-3 p-1 ${(toggleFilter === 'cuisinebox') ? ' text-blue-500' : ''}`}>
                                    <h3>
                                        Cuisines
                                    </h3>
                                </div>
                                <div onClick={() => toggleFilterFun("ratebox")} className={`m-3 p-1 ${(toggleFilter === 'ratebox') ? ' text-blue-500' : ''}`}>
                                    <h3>
                                        Rating
                                    </h3>
                                </div>
                                <div onClick={() => toggleFilterFun("split")} className={`m-3 p-1 ${(toggleFilter === 'ratebox') ? ' text-blue-500' : ''}`}>
                                    <h3>
                                        Split
                                    </h3>
                                </div>
                            </section>
                            <section className=' border-b-[1px] h-80'>
                                {
                                    (toggleFilter === 'sortby') ? <Sortbox /> : <></>
                                }
                                {
                                    (toggleFilter === 'ratebox') ? <Ratebox /> : <></>
                                }
                                {
                                    (toggleFilter === 'cuisinebox') ? <Cuisinebox /> : <></>
                                }
                                {
                                    (toggleFilter === 'split') ? <Splicebox /> : <></>
                                }
                            </section>
                            <div className=' flex justify-end'>
                                <div className=' m-4'>
                                    <button onClick={() => clearall()} className=' px-3 rounded-md py-1 mr-4 '>
                                        Clear all
                                    </button>
                                    <button onClick={() => handleSubmit()} className=' px-3 rounded-md py-1 bg-blue-500 text-white'>
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    </>
                    : <></>
            }

        </>
    )
}

export default Filterbox