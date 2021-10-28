import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NavbarIcon({icon, tooltip}) {
    return (
        <>
            <div className="sidebar-icon group">
                <FontAwesomeIcon icon={icon} />
                <span className="sidebar-tooltip scale-0">
                    {tooltip}
                </span>
            </div>
        </>
    )
}