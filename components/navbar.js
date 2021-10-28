import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faStream, faEuroSign, faUsers, faCog } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    return (
        <>
            <div className={"w-20 h-screen bg-gray-800 flex-col justify-around items-center flex"}>
                <div className="hover:bg-gray-700 text-lg p-3 rounded-lg cursor-pointer">
                    <FontAwesomeIcon icon={faHome} color="white"/>
                </div>
                <div className="hover:bg-gray-700 text-lg p-3 rounded-lg cursor-pointer">
                    <FontAwesomeIcon icon={faStream} color="white" />
                </div>
                <div className="hover:bg-gray-700 text-lg p-3 rounded-lg cursor-pointer">
                    <FontAwesomeIcon icon={faEuroSign} color="white" />
                </div>
                <div className="hover:bg-gray-700 text-lg p-3 rounded-lg cursor-pointer">
                    <FontAwesomeIcon icon={faUsers} color="white" />
                </div>
                <div className="hover:bg-gray-700 text-lg p-3 rounded-lg cursor-pointer">
                    <FontAwesomeIcon icon={faCog} color="white" />
                </div>
            </div>
        </>
    )
}