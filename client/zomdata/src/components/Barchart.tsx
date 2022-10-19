import React, { FC } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

interface data {
    labels: string[],
    datasets: [{
        label: string,
        data: number[]
    }]
}

type mydata = {
    chartData: data
}

const Barchart: FC<mydata> = ({ chartData }: mydata) => {
    return (
        <Bar data={chartData} />
    )
}

export default Barchart