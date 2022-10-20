import React from 'react'
import working from '../images/working.png'
import analytics from '../images/analytics.png'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>

            <div className=' w-full h-screen flex justify-center items-center p-6'>
                <div className=' flex flex-col justify-center items-center'>
                    <div className=' '>
                        <h1 className=' w-full text-center font-extrabold tracking-widest text-5xl sm:text-9xl mb-3'>FOONER</h1>
                        <p className=' w-full text-center text-gray-400 font-light text-lg'>A food bussiness solution</p>
                    </div>
                    <Link to={`/search`}>
                        <button className=' mt-12 border-2 border-blue-500 hover:bg-blue-500 hover:text-white rounded-full px-4 py-2 text-2xl font-light'>
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>
            <div className=' w-full h-screen flex justify-center items-center'>
                <div className=' w-full flex flex-col md:flex-row justify-center md:justify-between items-center p-6 lg:p-20'>
                    <div className=' md:w-2/5 mb-20 md:mb-0'>
                        <h2 className=' text-6xl font-bold mb-9'>How it works?</h2>
                        <p className=' font-light leading-7'>We utilise pre-made data from the internet, but it might be challenging to analyse or, in other words, use it as useful information.<br />
                            As a result, we gather the information in a relevant way to provide you a thorough image of the restaurant. Online sales are made by hotels.<br />  <br />

                            To determine zomato's location, we gather the information supplied on the website that you gave.</p>
                    </div>
                    <div className=' md:w-2/5 flex justify-end '>
                        <img className=' md:h-72' src={working} alt="Data extraction" />
                    </div>
                </div>
            </div>
            <div>
                <div className=' w-full h-screen flex justify-center items-center'>

                    <div className=' w-full flex flex-col md:flex-row text-left justify-between items-center p-6 lg:p-20'>
                        <div className=' md:w-2/5 flex justify-end mb-20 md:mb-0 '>
                            <img className=' md:h-72' src={analytics} alt="Bussiness Analytics" />
                        </div>
                        <div className=' md:w-2/5'>
                            <h2 className=' text-6xl font-bold mb-9'>2 Steps only</h2>
                            <ul className=' font-light leading-7'>
                                <li className=' mb-3'>
                                    First, paste the zomato's website url of the desired location then click on search button.
                                </li>
                                <li>
                                    Now, wait for some time to get data, then save it with a unique name
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home