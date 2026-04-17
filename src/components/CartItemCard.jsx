import QuantityBar from "./QuantityBar";
import RemoveIcon from "./RemoveIcon";
import { useEffect, useState, useContext } from "react";
import CartContext from "../contexts/cartContext";

function CartItemCard({ product, productAmount,onRemoveLocal  }) {
    const [quantity, setQuantity] = useState(1);
    const { updateCartItemAmount, removeFromCart } = useContext(CartContext);
    function handleRemove() {
        onRemoveLocal(product.id); 
        removeFromCart(product.id);
    }
    function updateQuantity() {
        setQuantity(productAmount);
    }
    useEffect(updateQuantity, []);
    useEffect(() => {
        updateCartItemAmount(product.id, quantity);
    }, [quantity]);
    return (
        <>
            <div className="grid grid-cols-[auto_1fr_auto] grid-rows-2 gap-x-6">
                <img className="row-span-2 w-[100px] h-[100px]" src={product.main_image.url} alt="product image" />
                <h3 className="text-xl font-bold">{product.title}</h3>
                <p className="justify-self-end text-xl font-bold">{`$${product.price}`}</p>
                <QuantityBar quantity={quantity} handleQuantity={setQuantity}></QuantityBar>
                <RemoveIcon onRemove={handleRemove} />
            </div>
            <hr className="border-neutral-400 border-dotted mt-5" />
        </>
    )
}

export default CartItemCard;