import React, { useContext, useEffect } from 'react'
import { Head } from '../Context';

interface filterobjtype {
    filterobj: filterobjtype2
    setfilterobj: (x: any) => any
}

interface filterobjtype2 {
    rateorder: string,
    ordersorder: string,
    ratebox: string,
    cuisine: any,
    splitarr: string
}

const Splicebox = () => {

    const { filterobj, setfilterobj } = useContext(Head) as filterobjtype;

    useEffect(() => {
        document.getElementById(`${filterobj.splitarr}`)?.setAttribute("checked", "true");
    }, [filterobj.splitarr])

    // useEffect(() => {
    //     console.log(filterobj.splitarr);
    // }, [filterobj.splitarr]);

    function ratevalue(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.checked) {
            setfilterobj((prev: filterobjtype2) => ({
                ...prev,
                splitarr: e.target.value
            }));
        }
    }

    return (
        <div className=' p-4 h-full overflow-y-scroll'>
            <div className=' flex justify-start p-4 my-4'>
                <input onChange={(e) => ratevalue(e)} type="radio" id='none' name="ratevalue" value={"none"} />
                <label className=' ml-4' htmlFor='none'>None</label>
            </div>
            <div className=' flex justify-start p-4 my-4'>
                <input onChange={(e) => ratevalue(e)} type="radio" id='t20' name="ratevalue" value={"t20"} />
                <label className=' ml-4' htmlFor='t20'>Top 20</label>
            </div>
            <div className=' flex justify-start p-4 my-4'>
                <input onChange={(e) => ratevalue(e)} type="radio" id='t10' name="ratevalue" value={"t10"} />
                <label className=' ml-4' htmlFor='t10'>Top 10</label>
            </div>
            <div className=' flex justify-start p-4 my-4'>
                <input onChange={(e) => ratevalue(e)} type="radio" id='b20' name="ratevalue" value={"b20"} />
                <label className=' ml-4' htmlFor='b20'>Bottom 20</label>
            </div>
            <div className=' flex justify-start p-4 my-4'>
                <input onChange={(e) => ratevalue(e)} type="radio" id='b10' name="ratevalue" value={"b10"} />
                <label className=' ml-4' htmlFor='b10'>Bottom 10</label>
            </div>
        </div>
    )
}

export default Splicebox