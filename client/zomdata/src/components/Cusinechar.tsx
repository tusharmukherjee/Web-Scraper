import React, { FC } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables);


interface data {
    labels: string[],
    datasets: [{
        label: string,
        data: number[]
    }]
}

type mydata = {
    catData: data
}


const Cusinechar: FC<mydata> = ({ catData }: mydata) => {
    return (
        <Bar data={catData} />
    )
}

export default Cusinechar