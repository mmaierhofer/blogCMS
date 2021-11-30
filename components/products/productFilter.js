import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import FilterDropdown from "../filter/filterDropdown";

export default function ProductFilter() {

    const [filter, setFilter] = useState("Active");
    const [orderBy, setOrderBy] = useState();

    return (
        <div className="w-3/4 justify-end flex">
            <div className="w-full flex flex-row justify-between h-20 items-center pt-8 text-sm">
                <div className="filter w-1/6"><FilterDropdown selected={filter} options={[{ name: "Active" }, { name: "Inactive" }]} setSelected={e => (setFilter(e))} /></div>
                <div className="filter w-1/6"><FilterDropdown selected={"Order By: " + orderBy} options={[{ name: "Categories" }, { name: "Price" }, { name: "Value" }]} setSelected={e => (setOrderBy(e))} /></div>
                <div className="filter w-1/6"><div>Filter</div><FontAwesomeIcon icon={faChevronDown} /></div>
                <div className="filter w-2/6"></div>
            </div>
        </div>

    )
}