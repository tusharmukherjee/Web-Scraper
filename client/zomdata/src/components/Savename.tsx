import React, { useRef } from 'react'

interface savename {
    setnamebool: (x: boolean) => any,
    wholedatafood: any
}


const Savename = ({ setnamebool, wholedatafood }: savename) => {

    const inputRef = useRef<HTMLInputElement>(null);

    function handlesubmit() {
        localStorage.setItem(`${(inputRef.current?.value as string).trim()}`, JSON.stringify(wholedatafood));
        setnamebool(false);
        // setsavename();
    }

    return (
        <div className=' w-full h-screen bg-blue-300 flex justify-center items-center'>
            <div className=' flex flex-col w-2/3 p-8 rounded-xl bg-white shadow-lg shadow-blue-400'>
                <p className=' w-full text-center mb-4'>
                    Save the data on your device.
                </p>
                <input ref={inputRef} className=' bg-slate-100 rounded-md mb-4 outline-none px-2 py-3' placeholder='Save as' type="text" name="name" id="" />
                <div className=' w-full flex justify-center'>
                    <button onClick={() => handlesubmit()} className=' bg-blue-500 text-white w-fit px-2 py-1 rounded-md'>
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Savename