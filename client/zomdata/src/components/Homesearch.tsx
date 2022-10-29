import React, { useRef, useState } from 'react'
import Count from './Count';
import Savename from './Savename';

const Homesearch = () => {
    const [namebool, setnamebool] = useState<boolean>(false);
    const [timerbool, settimerbool] = useState<boolean>(false);

    const [wholedatafood, setwholedatafood] = useState<any>();

    const inputRef = useRef<HTMLInputElement>(null);

    async function handleSubmit() {

        // console.log(inputRef.current?.value);
        var regex = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
        console.log(regex.test((inputRef.current?.value as string).trim()));

        if (regex.test((inputRef.current?.value as string).trim() as string) && (inputRef.current?.value as string).trim() !== "") {
            settimerbool(true);
            // http://localhost:3001/link
            // https://growmedia.click/fooner/getdata
            await fetch("https://growmedia.click/fooner/getdata", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "accept": "application/json"
                },
                body: JSON.stringify({
                    link: (inputRef.current?.value as string).trim()
                })
            })
                .then((response) => {
                    settimerbool(false);
                    return response.json();
                })
                .then((data) => {
                    if (data.wholeData.length > 0) {
                        setnamebool(true);
                        setwholedatafood(data.wholeData);
                    }
                    // setwholedatafood(data.wholedata);
                    console.log("Fetched!");
                })
        }


    }

    return (
        <>
            {
                timerbool ?
                    <Count />
                    :
                    namebool ?
                        <>
                            <Savename setnamebool={setnamebool} wholedatafood={wholedatafood} />
                        </>
                        :
                        <section className=' h-screen flex justify-center items-center'>
                            <div>
                                <div>
                                    <h1 className=' w-full text-center font-extrabold tracking-widest text-5xl sm:text-9xl'>
                                        FOONER
                                    </h1>
                                </div>
                                <div>
                                    <div className=' flex w-full h-10 overflow-hidden rounded-full mt-10'>
                                        <input onKeyDownCapture={(e) => e.key === 'Enter' && handleSubmit()} ref={inputRef} className=' w-full h-full bg-gray-200 outline-none pl-4' placeholder='Paste your link here' type="search" name="" id="" />
                                        <button onClick={() => handleSubmit()} className=' bg-blue-500 text-white w-20 flex justify-center items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>
            }

        </>
    )
}

export default Homesearch