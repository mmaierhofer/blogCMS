import React from "react";
import { LineChart, XAxis, YAxis, CartesianGrid, Line, ResponsiveContainer } from 'recharts';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";

const data = [
    {
      "name": "Jan",
      "fytd": 235,
      "lfy": 129
    },
    {
      "name": "Feb",
      "fytd": 397,
      "lfy": 98
    },
    {
      "name": "Mar",
      "fytd": 312,
      "lfy": 168
    },
    {
      "name": "Apr",
      "fytd": 467,
      "lfy": 202
    },
    {
      "name": "May",
      "fytd": 250,
      "lfy": 232
    },
    {
      "name": "Jun",
      "fytd": 501,
      "lfy": 308
    },
    {
      "name": "Jul",
      "fytd": 456,
      "lfy": 305
    },
    {
      "name": "Aug",
      "fytd": 250,
      "lfy": 180
    },
    {
      "name": "Sep",
      "lfy": 224
    },
    {
      "name": "Oct",
      "lfy": 279
    },
    {
      "name": "Nov",
      "lfy": 238
    },
    {
      "name": "Dec",
      "lfy": 379
    }
  ]

export default function PrognoseWidget() {
    return(
        <>
             <div className="widget flex-col justify-center items-center">
             <div className="left-0 top-0 pt-5 flex justify-start w-full pl-5 text-lightPrimary text-md font-bold">Sales</div>
             <div className="flex justify-center w-full items-center h-full">
             <ResponsiveContainer width={"80%"} height={"80%"}>
                 
                 <LineChart data={data}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                <Line type="monotone" dataKey="fytd" stroke="#22277A" />
                <Line type="monotone" dataKey="lfy" stroke="#4066E0" />
                </LineChart>
                </ResponsiveContainer>
                 </div>
                 <div className="pb-5 flex flex-row justify-around w-1/5">
                <div><FontAwesomeIcon icon={faDotCircle} color="#22277A"/>  2021</div>
                <div><FontAwesomeIcon icon={faDotCircle} color="#4066E0"/>  2020</div>
            </div>
            </div>
        </>
    )

}