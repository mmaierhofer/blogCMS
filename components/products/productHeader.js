import React, {useState} from "react";

export default function ProductHeader({active, setActive}) {

    return (
        <>
            <div className="w-98/100 bg-white h-20 shadow-md flex">
                <div className=" w-48 flex justify-around items-center pl-5">
                    <div className={"h-full flex flex-col items-center justify-center w-16 border-b-2 text-lg cursor-pointer " + (active ? "border-lightPrimary text-lightPrimary" : "border-white text-black")} onClick={() => setActive(true)}>
                        Active
                    </div>
                    <div className={"h-full flex flex-col items-center justify-center w-16 border-b-2 text-lg cursor-pointer " + (!active ? "border-lightPrimary text-lightPrimary" : "border-white text-black")} onClick={() => setActive(false)}>
                        Inactive
                    </div>
                </div>
                
            </div>
        </>
    )
}