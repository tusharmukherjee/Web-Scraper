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
    locData: data
}

const Locationchart: FC<mydata> = ({ locData }: mydata) => {
    return (
        <Bar data={locData} />
    )
}

export default Locationchart