import React from "react";
import DropDown from "./dropdown";

export default function ProductForm() {
    return (
        <>
        <form className="w-full p-12">
        <div className="flex flex-col w-full">
            <div className="w-full md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Product Name
            </label>
            <input className="h-12 appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Choose a catchy name"/>
            </div>

            <div className="w-full md:mb-0 mt-4">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Price
            </label>
            <input className="h-12 appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="49.99"/>
            </div>

            <div className="w-full md:mb-0 mt-4 flex flex-row justify-between">
                <div className="w-4/6 pr-4">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Category
                    </label>
                    <DropDown />
                </div>
                <div className="w-2/6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Gender
                    </label>
                    <DropDown />
                    </div>
            </div>

            <div className="w-full md:mb-0 mt-8">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Description
            </label>
            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-40" id="grid-first-name" type="text" placeholder="Let people know whats great about your product"/>
            </div>
        </div>
        </form>
        </>
    )
}