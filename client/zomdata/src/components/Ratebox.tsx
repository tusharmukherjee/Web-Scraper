import React, { useContext, useEffect } from 'react'
import { Head } from '../Context'

interface filterobjtype {
    filterobj: filterobjtype2
    setfilterobj: (x: any) => any
}

interface filterobjtype2 {
    rateorder: string,
    ordersorder: string,
    ratebox: string,
    cuisine: any
}

const Ratebox = () => {

    const { filterobj, setfilterobj } = useContext(Head) as filterobjtype;

    useEffect(() => {
        document.getElementById(`${String(parseInt(filterobj.ratebox))}`)?.setAttribute("checked", "true");
    }, [filterobj.ratebox])

    function ratevalue(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.checked) {
            setfilterobj((prev: filterobjtype2) => ({
                ...prev,
                ratebox: e.target.value
            }));
        }
    }

    return (
        <div className=' p-4 h-full overflow-y-scroll'>
            <div className=' flex justify-start p-4 my-4'>
                <input onChange={(e) => ratevalue(e)} type="radio" id='0' name="ratevalue" value={0.0} />
                <label className=' ml-4' htmlFor='0'>Any</label>
            </div>
            <div className=' flex justify-start p-4 my-4'>
                <input onChange={(e) => ratevalue(e)} type="radio" id='3' name="ratevalue" value={3.0} />
                <label className=' ml-4' htmlFor='3'>3.0+</label>
            </div>
            <div className=' flex justify-start p-4 my-4'>
                <input onChange={(e) => ratevalue(e)} type="radio" id='3.5' name="ratevalue" value={3.5} />
                <label className=' ml-4' htmlFor='3.5'>3.5+</label>
            </div>
            <div className=' flex justify-start p-4 my-4'>
                <input onChange={(e) => ratevalue(e)} type="radio" id='4' name="ratevalue" value={4.0} />
                <label className=' ml-4' htmlFor='4'>4.0+</label>
            </div>
            <div className=' flex justify-start p-4 my-4'>
                <input onChange={(e) => ratevalue(e)} type="radio" id='4.5' name="ratevalue" value={4.5} />
                <label className=' ml-4' htmlFor='4.5'>4.5+</label>
            </div>
        </div>
    )
}

export default Ratebox