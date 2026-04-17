import { parse } from 'postcss'
import React from 'react'

export default function ProductPrice({ price, discount, flip }) {
    price = parseFloat(price).toFixed(2);
    if(discount){
        discount = parseFloat(discount).toFixed(2);
    }
    if(flip){
        return(
            <div className="flex gap-2 items-center">
            <span className={`text-xl font-bold ${discount ? "line-through" : ""}`}>
                {`$${price}`}
            </span>
            {discount && (
                <span className="text-xl font-bold">
                    {`$${discount}`}
                </span>
            )}
        </div>
        );
    }
    return (
        <div className="flex gap-2 items-center">
            {discount && (
                <span className="text-xl font-bold">
                    {`$${discount}`}
                </span>
            )}
            <span className={`text-xl font-bold ${discount ? "line-through" : ""}`}>
                {`$${price}`}
            </span>
        </div>
    )
}
