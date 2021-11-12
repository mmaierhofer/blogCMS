import React, {useState, useEffect} from "react";
import Header from "../components/header/header";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase/clientApp'
import ProductHeader from "../components/products/productHeader";
import ProductList from "../components/products/productList";


export default function Products() {

    const [products, setProducts] = useState();
    const [categories, setCategories] = useState([])
    const [active, setActive] = useState(true);

    useEffect(() => {
        getCategories();
    }, [])

    async function getProducts(categoryId) {
        const q = query(collection(db, "products"));

        const productBuffer = [];

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          let currentProduct = {
            "id": doc.id,
            "name": doc.data().name,
            "category": doc.data()
        }
        productBuffer.push(currentProduct);
        });
        return(productBuffer);
    }

    async function getCategories() {
        const q = query(collection(db, "category"));

        const querySnapshot = await getDocs(q);

        let categoryBuffer = []

        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots

            products = getProducts(doc.id);

            let currentCategory = {
                "id": doc.id,
                "name": doc.data().name,
                "products": products
            }
            categoryBuffer.push(currentCategory);
          });
        
        setCategories(categoryBuffer);
    }

    return (
        <>
       <div className="page flex-col">
            <div className="w-full h-20">
                <Header title="products" />
            </div>
            <div className="flex flex-col w-full h-5/6 items-center pt-5">
                <ProductHeader active={active} setActive={(active)=>setActive(active)}/>
                <div className="flex flex-col w-98/100 mt-12">
                    {categories.map(category => {
                        console.log(category);
                        return (
                            <ProductList category={category}/>
                        )
                    })}
                </div>
                
            </div>
           
        </div>
        </>
    )
}