import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ProductFilter() {

    return (
        <div className=" w-98/100 justify-end flex">
            <div className="w-3/4 flex flex-row justify-between h-20 items-center pt-8">
                <div className="filter w-1/6"><div>Active</div><FontAwesomeIcon icon={faArrowDown}/></div>
                <div className="filter w-1/6"><div>Order By</div><FontAwesomeIcon icon={faArrowDown}/></div>
                <div className="filter w-1/6"><div>Filter</div><FontAwesomeIcon icon={faArrowDown}/></div>
                <div className="filter w-2/6"></div>
            </div>
        </div>
        
    )
}