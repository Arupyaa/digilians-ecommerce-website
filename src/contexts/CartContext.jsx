import { createContext, useEffect, useState } from "react";

const CartContext = createContext({})
export default CartContext;

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    //for debugging purpose
    useEffect(() => {
        console.log("Cart state:", cart);
    }, [cart]);

    const addToCart = (productObject) => {
        setCart(prev => {
            // check if product added to the cart already exists in it
            const IsExist = prev.find((product) => product.id == productObject.id);
            if (IsExist) {
                //if exists return a new array after increasing its amount
                return prev.map((product) => {
                    //if product id matches add the existing amount to the new amount added to cart otherwise add the old product with the same amount
                    if (product.id == productObject.id) {
                        //new amount added
                        return { id: product.id, amount: product.amount + productObject.amount };
                    } else {
                        return product;
                    }
                });
            }
            //if product added never existed in the cart add it directly
            return ([...prev, productObject]);
        });
    }

    const removeFromCart = (toRemoveProductId) => {
        setCart(prev => {
            return prev.filter((product) => product.id != toRemoveProductId)
        });
    }

    const updateCartItemAmount = (id, newAmount) => {
        setCart((prev) =>
            prev.map((product) =>
                product.id == id
                    ? { ...product, amount: newAmount }
                    : product
            )
        );
    };

    const cartAmount = cart.length;

    return (
        <CartContext.Provider value={{ addToCart, removeFromCart, updateCartItemAmount, cartAmount, cart }}>
            {children}
        </CartContext.Provider>
    );
}