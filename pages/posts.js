import React, {useState, useEffect} from "react";
import Header from "../components/header/header";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase/clientApp'
import TabHeader from "../components/header/tabHeader";
import ProductList from "../components/products/productList";
import ProductFilter from "../components/products/productFilter";
import { addProductsToCategories } from "../helper/utilityFunctions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link'
import { faPlus } from "@fortawesome/free-solid-svg-icons";


export default function Products() {

    const tabs = ["Products", "Categories", "Promo Actions"]
    const [products, setProducts] = useState();
    const [categories, setCategories] = useState([])
    const [activeTab, setActiveTab] = useState(tabs[0]);

    useEffect(() => {
        getCategories();
        getProducts();
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

    async function getProducts() {
        const q = query(collection(db, "products"));

        const querySnapshot = await getDocs(q);

        let productsBuffer = []

        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            productsBuffer.push(doc.data());
          });
        
        setProducts(productsBuffer);
        
    }

    return (
        <>
       <div className="page flex-col">
            <div className="flex flex-col w-full h-5/6 items-center">
                <TabHeader activeTab={activeTab} setActiveTab={(activeTab)=>setActiveTab(activeTab)} tabs={tabs}/>
                <div className="flex flex-row w-98/100">
                    <div className="flex flex-row justify-end items-center w-1/4 h-20 pr-12 pt-8">
                        <Link href="product/add">
                        <div className="add-button">
                            <FontAwesomeIcon icon={faPlus}/>
                        </div>
                        </Link>
                    </div>
                    <ProductFilter />
                </div>
                <div className="flex flex-col w-98/100">
                    {(categories.map(category => {

                        return (
                            <div key={category.name}>
                                <ProductList category={category} products={products}/>
                            </div>
                        )
                    }))}
                </div>
                
            </div>
           
        </div>
        </>
    )
}