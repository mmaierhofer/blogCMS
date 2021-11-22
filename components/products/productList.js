import { faDotCircle, faEdit, faEuroSign, faPen, faPlus, faSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { capitalizeFirstLetter } from '../../helper/utilityFunctions';
import Link from 'next/link'

export default function ProductList({category, products}) {


    if(products && products.length > 0) {
        return(
            <div className="h-auto pb-8 w-full" key={category.name}> 
                <div className="font-bold text-lg pb-2 ">{capitalizeFirstLetter(category.name)}</div>
                <div className="flex w-full bg-white flex-col shadow-sm">
                {products.map(product => {
                    if(product.category == category.name){
                        return (
                            <div className="listItem h-12 flex items-center justify-between" key={product.name}>
                                <div className="w-1/12"><input className="h-4 w-4" type="checkbox"/></div>
                                <div className="flex justify-start w-1/12"><img className="h-8" src="https://assetsprx.matchesfashion.com/img/product/1300/1430983_1.jpg"></img></div>
                                <div className="flex justify-start w-2/12">{product.name}</div>
                                <div className="flex justify-start w-1/12"><FontAwesomeIcon icon={faDotCircle} color="green"/></div>
                                <div className="flex justify-start w-1/12 items-center">{product.discount 
                                ? <div className="flex justify-start w-full items-center line-through text-red">{product.price} <div className="ml-2"><FontAwesomeIcon icon={faEuroSign}/></div></div> 
                                : <div className="flex justify-start w-full items-center">{product.price} <div className="ml-2"><FontAwesomeIcon icon={faEuroSign}/></div></div>}
                                </div> 
                                <div className="flex justify-start w-2/12 items-center">{product.discount} {product.discount ? <div className="ml-2"><FontAwesomeIcon icon={faEuroSign} /></div> : <></> }</div> 
                                <div className="flex justify-start w-2/12">
                                    <div className="promo-button"><div className="w-3/12 pl-2"><FontAwesomeIcon icon={faPlus}/></div> Promotion</div>
                                </div>
                                <div className="flex justify-end w-1/12"><Link href={`/product/${product.name}`}><div className="action-button"><FontAwesomeIcon icon={faPen}/></div></Link></div>
                                <div className="flex justify-end w-12"><div className="action-button"><FontAwesomeIcon icon={faTrash}/></div></div>   
                            </div>
                        )
                    }
                    
                })}
                </div>
            </div>
        )
    }
    
    else {
        return (<div></div>)
    }
    
}