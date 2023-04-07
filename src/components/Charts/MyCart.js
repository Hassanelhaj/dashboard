import React from 'react'
import { Line } from 'react-chartjs-2';


 export const MyCart = () => {
    const data={
labels:['Jan','Feb','March','April','May'],
datasets:[
    {label:'Sales for 2022 (M)',
    data:[3,2,2,1,5],
    borderColor:['rgba(255, 206, 86, 0.2)']
},
]
    }
    const opt={
        title:{
            display:true,
            text:'line chart'
        },
        scales:{
            yAxes:[
                {ticks:{min:0,max:6,stepSize:1}}
            ]
        }
    };
  return <Line data={data} options={opt}/>

  
}

export default MyCart
