import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NavbarIcon({icon, text}) {
    return (
        <>
            <div className="sidebar-icon">
                <FontAwesomeIcon icon={icon} />
                <span class="sidebar-tooltip">
                    {text}
                </span>
            </div>
        </>
    )
}