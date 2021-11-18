import React, {useState, useEffect} from "react";
import Header from "../components/header/header";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase/clientApp'
import ProductHeader from "../components/products/productHeader";
import ProductList from "../components/products/productList";
import ProductFilter from "../components/products/productFilter";
import { addProductsToCategories } from "../helper/utilityFunctions";


export default function Products() {

    const [products, setProducts] = useState();
    const [categories, setCategories] = useState([])
    const [activeTab, setActiveTab] = useState("products");

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
                <ProductHeader activeTab={activeTab} setActiveTab={(activeTab)=>setActiveTab(activeTab)}/>
                <ProductFilter />
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