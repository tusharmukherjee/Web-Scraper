import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Presaved = () => {

    const [keyarr, setkeyarr] = useState<any>([]);

    useEffect(() => {
        for (let i = 0; i < localStorage.length; i++) {
            setkeyarr((arr: any) => [...arr, localStorage.key(i)]);
        }
        // console.log(keyarr);
    }, [])


    return (
        <>
            <div className=' w-full h-screen bg-gray-200 flex flex-col px-4 py-12 lg:px-20'>
                <h1 className='  mb-6 font-bold text-gray-400'>Pre-Saved Data</h1>
                <div className=' w-full h-fit flex flex-wrap justify-between md:justify-start items-end'>
                    {
                        (keyarr.length > 0) ?
                            keyarr?.map((el: string, index: number) => {
                                return (
                                    <Link key={index} to={`/dashboard/${el}`} className=' bg-white w-5/12 md:w-1/4 h-12 mr-4 mb-8 px-4 py-1 flex items-center hover:shadow-md rounded-md'>
                                        <div className=' w-full'>
                                            <h3 className=' h-fit text-lg self-center w-full'>{el}</h3>
                                        </div>
                                    </Link>
                                )
                            })
                            :
                            <div className=' min-w-full bg-blue-300 rounded-xl text-white h-60 flex justify-center items-center'>
                                <div className=' px-6 py-3'>
                                    <h3 className=' text-blue-900 mb-4'>
                                        No Saved data found
                                    </h3>
                                    <div className=' w-full flex justify-center'>
                                        <Link to={`/search`}>
                                            <button className=' px-3 py-1 bg-blue-500 hover:bg-blue-600 rounded-md'>
                                                New Data
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Presaved