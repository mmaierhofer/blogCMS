import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useRouter } from "next/router";


export default function SideBarIcon({icon, tooltip, link, currentPath}) {
    
    const router = useRouter();
    console.log(router.route);
    console.log(link);
    
    return (
        <>
        
        <Link href={link}>
        <div className="flex flex-row justify-center items-center group">
        <div className={"indicator group-hover:scale-100 " + (router.route == link ? "scale-100" : "scale-0")}></div>
        <div className="sidebar-icon group">
                <FontAwesomeIcon icon={icon} />
                <span className="sidebar-tooltip group-hover:scale-100">
                    {tooltip}
                </span>
            </div>
        </div>
        </Link>   
    
        </>
    )
}