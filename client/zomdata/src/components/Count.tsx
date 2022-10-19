import React, { useEffect, useRef, useState } from 'react'

const Count = () => {

    const [time, settime] = useState<number>(90);
    let timer = useRef<any>(null);




    useEffect(() => {
        function timeee() {
            timer.current = setInterval(() => {

                settime(prev => prev - 1);

            }, 1000);

            if (time === 0) {
                clearInterval(timer.current);
            }

        }
        timeee();

        return () => clearInterval(timer.current)
    }, [time])

    return (
        <div className=' w-full text-white h-screen bg-blue-300 flex justify-center items-center'>
            <div>
                <div className=' flex'>
                    <h1 className=' text-7xl mr-3'>
                        {time}
                    </h1>
                    <span className=' self-end'>
                        sec.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Count