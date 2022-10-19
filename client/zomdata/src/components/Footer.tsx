import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const d = new Date()
    return (
        <footer className='w-full bg-blue-500 text-white flex justify-center items-center p-6 lg:p-20'>
            <div className=' w-full flex flex-col md:flex-row md:justify-between'>
                <div>
                    <h4 className=' font-semibold mb-8 text-lg'>
                        Copyright © {d.getFullYear()} Fooner
                    </h4>
                </div>
                <div className='  flex flex-col md:flex-row md:justify-between'>
                    <div className=' mr-52 mb-9 md:mb-0'>
                        <h4 className=' font-semibold mb-6 text-lg'>
                            Sitemap
                        </h4>
                        <ul>
                            <li className=' mb-2'><Link to={`/`}>Home</Link></li>
                            <li className=' mb-2'><Link to={`/saved`}>Saved</Link></li>
                            <li className=' mb-2'><Link to={`/search`}>New Data</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className=' font-semibold mb-6 text-lg'>Made by <a target="_blank" rel="noopener noreferrer" href="//tusharmukherjee.vercel.app">@tusharmukherjee</a></h4>
                        <ul>
                            <li className=' mb-2'><a target="_blank" rel="noopener noreferrer" href="//github.com/tusharmukherjee">Github</a></li>
                            <li className=' mb-2'><a target="_blank" rel="noopener noreferrer" href="//linkedin.com/in/tusharmkj">Linkedin</a></li>
                            <li className=' mb-2'><a target="_blank" rel="noopener noreferrer" href="//twitter.com/tushar_mkj">Twitter</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer