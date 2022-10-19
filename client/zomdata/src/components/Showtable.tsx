import React from 'react'

const Showtable = ({ mydata }: any) => {
    return (

        <div className=' lg:px-20'>
            <table className=' border-[1px] w-full text-left'>
                <tr className=' border-b-[1px] even:bg-blue-100'>
                    <th className=' px-4 py-4 bg-blue-500 text-white font-bold'>Name</th>
                    <th className=' px-4 py-4 bg-blue-500 text-white font-bold'>Rate</th>
                    <th className=' px-4 py-4 bg-blue-500 text-white font-bold'>Cuisine</th>
                    <th className=' px-4 py-4 bg-blue-500 text-white font-bold'>Orders</th>
                </tr>
                {
                    mydata.map((el: any) => {
                        return (

                            <tr className=' hover:shadow hover:shadow-gray-400 border-b-[1px] even:bg-blue-100'>

                                <td className=' px-4 py-4 text-blue-500 font-bold'>
                                    <a target="_blank" rel="noopener noreferrer" href={el.link}>
                                        {el.ventureName}
                                    </a>
                                </td>
                                <td className=' px-4 py-4'>{el.rating}</td>
                                <td className=' px-4 pt-4 flex flex-wrap text-white'>{el.categories.map((la: any, index: number) => (el.categories[el.categories.length - 1] !== la) ? <span className=' px-2 py-1 rounded-md bg-blue-500 mr-2 mb-4' key={index}>{la}, </span> : <span className=' px-2 py-1 rounded-md bg-blue-500 mr-2 mb-4' key={index}>{la}</span>)}</td>
                                <td className=' px-4 py-4'>{el.numberOfOrders}</td>
                            </tr>
                        )
                    })
                }

            </table>
        </div>

    )
}

export default Showtable