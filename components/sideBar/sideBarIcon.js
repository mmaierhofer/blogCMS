import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'


export default function SideBarIcon({icon, tooltip, link}) {
    return (
        <>
        <Link href={link}>
        <div className="sidebar-icon group">
                <FontAwesomeIcon icon={icon} />
                <span className="sidebar-tooltip group-hover:scale-100">
                    {tooltip}
                </span>
            </div>
        </Link>
        </>
    )
}