import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from 'next/link'
import ProductForm from "../../components/products/productForm";
import ProductImages from "../../components/products/productImages";
import { useEffect, useState } from "react/cjs/react.development";

export default function Add() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState();
    const [gender, setGender] = useState();
    const [images, setImages] = useState();

    useEffect(() => {
        console.log(name);
    }, [name])

    return (<>
        <div className="page flex items-center flex-col overflow-y-scroll pb-20">
            <div className="flex flex-col w-full items-center">
                <div className="w-full ml-20 bg-white h-20 shadow-md flex items-center pl-8 text-lg fixed z-50">
                    <Link href="/products">
                    <div className="back-button"><FontAwesomeIcon icon={faChevronLeft}/></div>
                    </Link>
                    <div className="ml-4">Add Product</div>
                </div>
            </div>

            <div className="w-1/2 bg-white mt-32 shadow-lg flex flex-row">
                <ProductForm 
                    name={name}
                    setName={setName}
                    price={price}
                    setPrice={setPrice}
                    description={description}
                    setDescription={setDescription}
                    category={category}
                    setCategory={setCategory}
                    gender={gender}
                    setGender={setGender}
                />
                
            </div>
            <div className="w-1/2 bg-white mt-12 shadow-lg flex flex-row h-96">
            <ProductImages />
                
            </div>
            <div className="mt-5 w-1/2 flex justify-end ">
                <div className="save-button">save</div>
            </div>
            
        </div>
    </>)
}