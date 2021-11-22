import React, {useState} from "react";
import DropDown from "./dropdown";

export default function ProductForm({name, setName, price, setPrice, description, setDescription, gender, setGender, category, setCategory, categories}) {
    return (
        <>
        <form className="w-full p-12">
        <div className="flex flex-col w-full">
            <div className="w-full md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Product Name
            </label>
            <input className="text-input" type="text" placeholder="Choose a catchy name" value={name} onChange={e=>(setName(e.target.value))}/>
            </div>

            <div className="w-full md:mb-0 mt-4">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Price
            </label>
            <input className="text-input" type="number" placeholder="49.99" value={price} onChange={e=>(setPrice(e.target.value))}/>
            </div>

            <div className="w-full md:mb-0 mt-4 flex flex-row justify-between">
                <div className="w-4/6 pr-4">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                    Category
                    </label>
                    <DropDown options={categories} selected={category} setSelected={e => (setCategory(e))}/>
                </div>
                <div className="w-2/6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                    Gender
                    </label>
                    <DropDown options={[{name:"male"},{name: "female"}]} selected={gender} setSelected={e => (setGender(e))}/>
                    </div>
            </div>

            <div className="w-full md:mb-0 mt-8">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Description
            </label>
            <textarea  value={description} onChange={e=>(setDescription(e.target.value))} className="text-area" id="grid-first-name" type="text" placeholder="Let people know whats great about your product"/>
            </div>
        </div>
        </form>
        </>
    )
}