import React, { FC, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Head } from '../Context'
import Barchart from './Barchart'
import Cusinechar from './Cusinechar'
import Filter from './Filter'
import Filterbox from './Filterbox'
import Footer from './Footer'
import Headdata from './Headdata'
import Locationchart from './Locationchart'
import Showtable from './Showtable'
// import data from './data'

interface chartData {
    labels: string[],
    datasets: [{
        label: string,
        data: number[],
        backgroundColor: string[],
        hoverOffset: number
    }]
}

interface filterobjtype {
    filterobj: filterobjtype2
    setfilterobj: (x: any) => any,
    cuisines: [string]
}

interface filterobjtype2 {
    rateorder: string,
    ordersorder: string,
    ratebox: any,
    cuisine: any,
    splitarr: string
}


const Dashboard: FC = () => {

    const { filterobj, cuisines } = useContext(Head) as filterobjtype;

    const [mydata, setmydata] = useState<any>([]);
    const [analytics, setanalytics] = useState<any>({
        total: 0,
        averageOrder: 0,
        below100: 0,
        ratingavg: 0,
        highest: 0
    });
    const param = useParams();

    const [userData, setuserData] = useState<chartData>({
        labels: (JSON.parse((localStorage.getItem(param.key!)) as any)).map((el: any) => el.ventureName),
        datasets: [
            {
                label: "Number of Orders",
                data: (JSON.parse((localStorage.getItem(param.key!)) as any)).map((el: any) => el.numberOfOrders),
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                hoverOffset: 4
            }
        ]
    })


    const [catData, setcatData] = useState<chartData>({
        labels: ['Chinese', 'Pizza', 'Burger'],
        datasets: [
            {
                label: "Cuisine provided by no. of Food sellers",
                data: [1, 2, 3],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                hoverOffset: 4
            }
        ]
    })

    const [locData, setlocData] = useState<chartData>({
        labels: ['Chinese', 'Pizza', 'Burger'],
        datasets: [
            {
                label: "Cuisine provided by no. of Food sellers",
                data: [1, 2, 3],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                hoverOffset: 4
            }
        ]
    })


    useEffect(() => {

        function filterdata() {


            let alldone: any = Promise.all(
                (filterobj.cuisine.length > 0) ?
                    (JSON.parse((localStorage.getItem(param.key!)) as any)).filter((a: any) => {
                        if (a.categories.some((el: any) => filterobj.cuisine.includes(el.trim()))) {
                            return a;
                        }
                    })
                    :
                    (JSON.parse((localStorage.getItem(param.key!)) as any))
            )
                .then((res: any) => {
                    if (filterobj.ratebox !== undefined) {
                        console.log("first")
                        alldone = res.filter((a: any) => {
                            if (((a.rating !== '-') ? parseFloat(a.rating) : 0) >= filterobj.ratebox) {
                                return a;
                            }
                        })
                        return alldone;
                    }
                })
                .then((res: any) => {
                    res.sort((a: any, b: any) => {
                        if (filterobj.ordersorder === 'odesc') {
                            if (b.numberOfOrders > a.numberOfOrders) {
                                return 1;
                            }
                            return -1;
                        }
                        else {
                            if (b.numberOfOrders < a.numberOfOrders) {
                                return 1;
                            }
                            return -1;
                        }
                    })
                    return res;
                })
                .then((res: any) => {
                    if (filterobj.splitarr === "none") {
                        console.log("f irst")
                        alldone = res;
                    }
                    else if (filterobj.splitarr === "t20") {
                        console.log("fi rst")
                        alldone = res.splice(0, 20);
                    }
                    else if (filterobj.splitarr === "t10") {
                        console.log("fir st")
                        alldone = res.splice(0, 10);
                    }
                    else if (filterobj.splitarr === "b20") {
                        console.log("firs t")
                        if (res.length > 20) {
                            console.log("first 0")
                            alldone = res.splice(res.length - 20, res.length - 1);
                        }
                    }
                    else if (filterobj.splitarr === "b10") {
                        console.log("first 00")
                        if (res.length > 10) {
                            alldone = res.splice(res.length - 10, res.length - 1);
                        }
                    }
                    return alldone;
                })
                .then((reso: any) => {

                    let total = reso.length; // [x] total
                    let average = 0; // [x] average
                    let sumorder = 0;
                    // let temp = -1;
                    reso.map((el: any) => {

                        sumorder += el.numberOfOrders;
                        // console.log(sumorder)

                        average = sumorder / reso.length;
                        // console.log(average)
                    });

                    let sumrate = 0;
                    let sumaverage = 0; // [x] rating average

                    reso.map((el: any) => {
                        sumrate += (el.rating === '-') ? 0 : parseFloat(el.rating);
                        sumaverage = sumrate / reso.length
                    });

                    let countbelow = 0; // below 100

                    reso.map((el: any) => {
                        if (el.numberOfOrders <= 100) {
                            countbelow++;
                        }
                    });

                    let high: number;
                    if (filterobj.ordersorder === 'odesc') {
                        high = reso[0].numberOfOrders;
                    }
                    else {
                        high = reso[total - 1].numberOfOrders;
                    }

                    setanalytics({
                        total: total,
                        averageOrder: Math.round(average),
                        below100: countbelow,
                        ratingavg: sumaverage.toFixed(1),
                        highest: high
                    });

                    // setmydata(reso);

                    setuserData(
                        {
                            labels: reso.map((el: any) => el.ventureName),
                            datasets: [
                                {
                                    label: "Number of Orders",
                                    data: reso.map((el: any) => el.numberOfOrders),
                                    backgroundColor: [
                                        '#3B82F6',
                                    ],
                                    hoverOffset: 4
                                }
                            ]
                        }
                    );

                    setmydata(reso);

                    // console.log(reso);
                    return reso;
                })
                .then((reso: any) => {

                    let mapp = new Map();

                    let temp = reso.map((el: any) => el.categories.map((la: any) => la.trim()));
                    // console.log(temp);

                    for (var n of cuisines) {
                        let value = 0;
                        for (let i = 0; i < reso.length; i++) {
                            if (temp[i].includes(n)) {
                                mapp.set(n, ++value);
                            }
                        }
                    }

                    mapp = new Map([...mapp.entries()].sort((a, b) => b[1] - a[1]));
                    // console.log(mapp);
                    // console.log(reso)
                    setcatData({
                        labels: [...mapp.keys()],
                        datasets: [
                            {
                                label: "Cuisine sellers",
                                data: [...mapp.values()],
                                backgroundColor: [
                                    '#3B82F6'
                                ],
                                hoverOffset: 4
                            }
                        ]
                    })

                    let locmap = new Map();

                    reso.map((el: any) => {
                        if (locmap.has(el.location)) {
                            locmap.set(el.location, locmap.get(el.location) + 1)
                        }
                        else {
                            locmap.set(el.location, 1)
                        }
                    });

                    let mpp = new Map([...locmap].sort((a, b) => b[1] - a[1]));
                    mpp.forEach((value, key) => {
                        if (value === 1) {
                            mpp.delete(key);
                        }
                    });


                    setlocData({
                        labels: [...mpp.keys()],
                        datasets: [
                            {
                                label: "Locations",
                                data: [...mpp.values()],
                                backgroundColor: [
                                    '#3B82F6'
                                ],
                                hoverOffset: 4
                            }
                        ]
                    })

                })
            return alldone;
        }

        filterdata();

    }, [filterobj, param.key])



    console.log(analytics);

    return (
        <>
            <div className=' w-full h-full'>
                <section>
                    <Filter />
                </section>
                <Filterbox />
                <section className=''>
                    <Headdata analytics={analytics} />
                </section>
                <section className=' bg-blue-100 rounded-md m-4 md:m-20 my-40 md:px-20 px-6'>
                    <h2 className=' md:text-2xl rounded-b-md bg-blue-500 text-white p-2 md:p-4 mb-4 md:mb-8 w-fit'>Orders Placed</h2>
                    <Barchart chartData={userData} />
                </section>
                <section className=' bg-blue-100 rounded-md m-4 md:m-20 my-40 md:px-20 px-6'>
                    <h2 className=' md:text-2xl rounded-b-md bg-blue-500 text-white p-2 md:p-4 mb-4 md:mb-8 w-fit'>Currently popular cuisines</h2>
                    <Cusinechar catData={catData} />
                </section>
                <section className=' bg-blue-100 rounded-md m-4 md:m-20 my-40 md:px-20 px-6'>
                    <h2 className=' md:text-2xl rounded-b-md bg-blue-500 text-white p-2 md:p-4 mb-4 md:mb-8 w-fit'>Businesses in places</h2>
                    <Locationchart locData={locData} />
                </section>
                <section className=' my-40'>
                    <Showtable mydata={mydata} />
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Dashboard