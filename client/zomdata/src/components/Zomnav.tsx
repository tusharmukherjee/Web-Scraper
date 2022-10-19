import React, { useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'

const Zomnav = () => {
    useEffect(() => {
        window.onscroll = function () { scrollFunction() };
        function scrollFunction() {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                document.getElementById("nav-head")!.classList.add('backdrop-blur', 'dark:backdrop-blur', 'bg-opacity-60', 'dark:bg-opacity-60', 'border-b-[0.5px]', 'dark:border-gray-200', 'border-neutral-400', 'firefox:bg-opacity-90');
            } else {
                document.getElementById("nav-head")!.classList.remove('backdrop-blur', 'dark:backdrop-blur', 'bg-opacity-60', 'dark:bg-opacity-60', 'border-b-[0.5px]', 'dark:border-gray-200', 'border-neutral-400', 'firefox:bg-opacity-90');
            }
        }
    }, [])
    return (
        <>
            <nav id='nav-head' className=' sticky top-0 right-0 left-0 p-4 lg:py-4 lg:px-20 bg-white font-bold flex justify-between'>
                <div>
                    <Link to={`/`}>
                        <h3>
                            FOONER
                        </h3>
                    </Link>
                </div>
                <div className=' flex'>
                    <Link to={`/search`}>
                        <div className=' mr-8'>
                            <h3>New Data</h3>
                        </div>
                    </Link>
                    <Link to={`/saved`}>
                        <div>
                            <h3>Saved</h3>
                        </div>
                    </Link>

                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Zomnav