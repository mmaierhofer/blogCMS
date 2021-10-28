import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faStream, faEuroSign, faUsers, faCog, faQuestion } from "@fortawesome/free-solid-svg-icons";
import NavbarIcon from "./sideBar/sideBarIcon";

export default function Navbar() {
    return (
        <>
            <div className={"w-20 fixed top-0 left-0 h-screen bg-gray-800 flex-col justify-around items-center flex shadow-lg"}>
                <div className="flex flex-col justify-around flex-1">
                <NavbarIcon icon={faHome}/>
                <NavbarIcon icon={faStream}/>
                <NavbarIcon icon={faEuroSign}/>
                <NavbarIcon icon={faUsers}/>
                <NavbarIcon icon={faCog}/>
                </div>
                <div className="flex-1 justify-end flex flex-col">
                <NavbarIcon icon={faQuestion}/>
                </div>                
            </div>
        </>
    )
}