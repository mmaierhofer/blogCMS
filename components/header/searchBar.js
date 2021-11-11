import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function SearchBar({title}) {

    return (
        <>
            <div className="flex flex-row items-center text-black w-full bg-white">
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" className="h-8 w-full pr-8 pl-5 rounded focus:outline-none bg-white" placeholder={`Search ${title} ...`}></input>
            </div>
        </>
    )
}