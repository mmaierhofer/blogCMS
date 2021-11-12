import React from 'react';
import { capitalizeFirstLetter } from '../../helper/utilityFunctions';

export default function ProductList({category}) {

    return(
        <div className="h-auto pb-16 w-full" key={category.id}> 
            <div className="font-bold text-lg pb-2">{capitalizeFirstLetter(category.name)}</div>
            <div className="widget">sfjaslkjfksadöfj</div>
        </div>
    )
}