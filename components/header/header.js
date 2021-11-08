import React from "react";

export default function Header({title}) {

    return (
        <>
            <div className="w-full h-20 bg-white shadow-lg">
                <div className="text-xl ml-5 font-bold align-middle flex items-center h-full">
                {title}
                </div>
            </div>
        </>
    )
}