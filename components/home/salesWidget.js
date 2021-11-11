import { faArrowAltCircleUp, faCheck, faCheckCircle, faClipboardCheck, faEuroSign, faInfoCircle, faMoneyBill, faMoneyCheck, faStarAndCrescent } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function SalesWidget({earnings, title}) {
    return(
        <>
            <div className="bg-white h-full shadow-lg flex flex-row justify-between">
                <div className="h-full w-1/2 flex flex-col justify-center pl-8 ">
                    <div className="text-lightPrimary text-lg font-bold">{earnings} <FontAwesomeIcon icon={faEuroSign}/>
                    </div>
                    <div className="text-gray">{title}</div>
                </div>
                <div className="h-full w-1/2 flex flex-col justify-center items-end pr-8 text-white text-lg">
                    <div className="bg-lightPrimary w-12 h-12 rounded-tl-full rounded-bl-full rounded-br-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faCheck}/>
                    </div>
                </div>
            </div>
        </>
    )

}