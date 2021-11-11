import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { PieChart, Pie, Legend } from 'recharts';

const data01 = [
    {
        "name": "Completed",
        "value": 16,
        "fill": '#28713e'
    },
    {
        "name": "Shipped",
        "value": 3,
        "fill": '#8bd1d3'
      },
      {
        "name": "In Progress",
        "value": 18,
        "fill": '#4066E0'
      },
      
    {
      "name": "Open",
      "value": 4,
      "fill": '#22277A'
    },
    
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function OrderStatusWidget() {
    return(
        <>
        <div className="bg-white h-full shadow-lg flex flex-col justify-center items-center">
            <div className="bg-white w-full h-5/6 flex justify-center items-center">
                <div className="left-0 top-0 h-full pt-5 flex justify-start w-1/4 pl-5 text-lightPrimary text-md font-bold">Order Status</div>
                <div className="w-2/4">
                <PieChart width={300} height={250}>
                    <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%"  innerRadius={40} outerRadius={80} label/>
                </PieChart>
                </div>
                <div className="w-1/4"></div>
            </div>
            <div className="pb-5 flex flex-row justify-around w-3/4">
                <div><FontAwesomeIcon icon={faDotCircle} color="#22277A"/> Open</div>
                <div><FontAwesomeIcon icon={faDotCircle} color="#4066E0"/> In Progress</div>
                <div><FontAwesomeIcon icon={faDotCircle} color="#8bd1d3"/> Shipped</div>
                <div><FontAwesomeIcon icon={faDotCircle} color="#28713e"/> Completed</div>
            </div>
        </div>
             
        </>
    )

}