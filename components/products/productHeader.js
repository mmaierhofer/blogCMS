import React, {useState} from "react";

export default function ProductHeader({activeTab, setActiveTab}) {

    return (
        <>
            <div className="w-full bg-white h-20 shadow-md flex">
                <div className="flex justify-around items-center pl-5 h-20">
                    <div className={"h-full flex flex-col items-center justify-center w-32 border-b-2 text-lg cursor-pointer " + (activeTab === "products" ? "border-lightPrimary text-lightPrimary" : "border-white text-black")} onClick={() => setActiveTab("products")}>
                        Products
                    </div>
                    <div className={"h-full flex flex-col items-center justify-center w-32 border-b-2 text-lg cursor-pointer " + (activeTab === "categories" ? "border-lightPrimary text-lightPrimary" : "border-white text-black")} onClick={() => setActiveTab("categories")}>
                        Categories
                    </div>
                    <div className={"h-full flex flex-col items-center justify-center w-32 border-b-2 text-lg cursor-pointer " + (activeTab === "promo" ? "border-lightPrimary text-lightPrimary" : "border-white text-black")} onClick={() => setActiveTab("promo")}>
                        Promo Actions
                    </div>
                </div>
                
            </div>
        </>
    )
}