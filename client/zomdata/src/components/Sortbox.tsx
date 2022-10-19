import React, { useContext, useEffect } from 'react'
import { Head } from '../Context';

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

const Sortbox = () => {

    const { filterobj, setfilterobj } = useContext(Head) as filterobjtype;

    // useEffect(() => {
    //     console.log(filterobj);
    // }, [filterobj])

    useEffect(() => {
        document.getElementById(`${filterobj.rateorder}`)?.setAttribute("checked", "true");
        document.getElementById(`${filterobj.ordersorder}`)?.setAttribute("checked", "true");
    }, [filterobj]);


    function rateorder(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.checked) {
            setfilterobj((prev: filterobjtype2) => ({
                ...prev,
                rateorder: e.target.value
            }));
        }
    }

    function orderorder(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.checked) {
            setfilterobj((prev: filterobjtype2) => ({
                ...prev,
                ordersorder: e.target.value
            }));
        }
    }

    return (
        <div className=' p-4'>
            <div className=' bg-blue-50 rounded-md'>
                <div className=' flex justify-start p-4 my-4'>
                    <input onChange={(e) => rateorder(e)} type="radio" id="rdesc" name="rateorder" value="rdesc" autoComplete="off" />
                    <label className=' ml-4' htmlFor="rdesc">Rate: High to Low</label>
                </div>
                <div className=' flex justify-start p-4 my-4'>
                    <input onChange={(e) => rateorder(e)} type="radio" id="rasc" name="rateorder" value="rasc" autoComplete="off" />
                    <label className=' ml-4' htmlFor="rasc">Rate: Low to High</label>
                </div>
            </div>
            <div className=' bg-blue-50 rounded-md'>
                <div className=' flex justify-start p-4 my-4'>
                    <input onChange={(e) => orderorder(e)} type="radio" id="odesc" name="orderorder" value="odesc" autoComplete="off" />
                    <label className=' ml-4' htmlFor="odesc">Order: High to Low</label>
                </div>
                <div className=' flex justify-start p-4 my-4'>
                    <input onChange={(e) => orderorder(e)} type="radio" id="oasc" name="orderorder" value="oasc" autoComplete="off" />
                    <label className=' ml-4' htmlFor="oasc">Order: Low to High</label>
                </div>
            </div>

        </div>
    )
}

export default Sortbox