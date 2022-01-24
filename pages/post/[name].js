import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from 'next/link'
import ProductForm from "../../components/products/productForm";
import ProductImages from "../../components/products/productImages";
import {useState, useEffect} from "react";
import { collection, query, getDocs, setDoc, doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/clientApp'
import { useRouter } from 'next/router'

export default function Add() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const [category, setCategory] = useState();
    const [gender, setGender] = useState();
    const [images, setImages] = useState();
    const [categories, setCategories] = useState();
    const [product, setProduct] = useState();

    const router = useRouter();

    useEffect(() => {
        
        getProduct();
        getCategories();
    }, [])

    async function getCategories() {
        const q = query(collection(db, "category"));

        const querySnapshot = await getDocs(q);

        let categoryBuffer = []

        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            categoryBuffer.push(doc.data());
          });
        
        setCategories(categoryBuffer);
    }

    async function getProduct() {
        const q = query(doc(db, "products", router.query.name));

        const querySnapshot = await getDoc(q);
        let product = querySnapshot.data();
        setName(product.name);
        setPrice(product.price);
        setDescription(product.description);
        setCategory(product.category);
        setGender(product.gender);

        console.log(product);

    }


    async function submit() {

        // Add a new document in collection "cities"
        await setDoc(doc(db, "products", name), {
            name: name,
            price: price,
            category: category,
            gender: gender,
            description: description
        });
  
    }

    return (<>
        <div className="page flex items-center flex-col overflow-y-scroll pb-20">
            <div className="flex flex-col w-full items-center">
                <div className="w-full ml-20 bg-white h-20 shadow-md flex items-center pl-8 text-lg fixed z-50">
                    <Link href="/products">
                    <div className="back-button"><FontAwesomeIcon icon={faChevronLeft}/></div>
                    </Link>
                    <div className="ml-4">Edit {name}</div>
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
                    categories={categories}
                />
                
            </div>
            <div className="w-1/2 bg-white mt-12 shadow-lg flex flex-row h-96">
            <ProductImages images={images} setImages={setImages}/>
                
            </div>
            <div className="mt-5 w-1/2 flex justify-end ">
                <div className="save-button" onClick={e => (submit())}>save</div>
            </div>
            
        </div>
    </>)
}