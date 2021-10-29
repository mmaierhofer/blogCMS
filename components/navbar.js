import React from "react";
import { faHome, faStream, faEuroSign, faUsers, faCog, faQuestion } from "@fortawesome/free-solid-svg-icons";
import SideBarIcon from "./sideBar/sideBarIcon";

export default function Navbar() {
    return (
        <>
            <div className={"w-16 fixed top-0 left-0 h-screen bg-primary flex-col justify-around items-center flex shadow-lg"}>
                <div className="flex flex-col justify-around flex-1">
                <SideBarIcon icon={faHome} tooltip="Home" link="/"/>
                <SideBarIcon icon={faStream} tooltip="Products" link="/products"/>
                <SideBarIcon icon={faEuroSign} tooltip="Sales" link="/sales"/>
                <SideBarIcon icon={faUsers} tooltip="Users" link="/users"/>
                <SideBarIcon icon={faCog} tooltip="Settings" link="/settings"/>
                </div>
                <div className="flex-1 justify-end flex flex-col">
                <SideBarIcon icon={faQuestion} tooltip="Help" link="help"/>
                </div>                
            </div>
        </>
    )
}