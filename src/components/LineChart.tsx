import React from 'react';
import { Line } from 'react-chartjs-2';
import { DataPointsType } from '../api/coincap-api';

type PropsType = {
  coinPoints: DataPointsType[]
}

export const LineChart: React.FC<PropsType> = (props) => {
  const { coinPoints } = props
  const coinPrice = coinPoints.map(item => (+item.priceUsd).toFixed(2))
  const data = {
    labels: ['1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12pm'],
    datasets: [
      {
        label: '',
        data: coinPrice.slice(coinPrice.length - 25, -1),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  return (
    <>
      <Line data={data} />
    </>
  )
}

