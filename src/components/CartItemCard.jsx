import QuantityBar from "./QuantityBar";
import RemoveIcon from "./RemoveIcon";
import { useEffect, useState, useContext } from "react";
import CartContext from "../contexts/cartContext";
import ProductPrice from "./ProductPrice";

function CartItemCard({ product, productAmount, onRemoveLocal, onQuantityChange }) {
    const [quantity, setQuantity] = useState(1);

    const { updateCartItemAmount, removeFromCart } = useContext(CartContext);

    function handleRemove() {
        onRemoveLocal(product.id);     // UI update
        removeFromCart(product.id);    // context update
    }

    useEffect(() => {
        setQuantity(productAmount);
    }, [productAmount]);

    function handleQuantityChangeLocal(update) {
        const newQty =
            typeof update === "function" ? update(quantity) : update;

        setQuantity(newQty);
        onQuantityChange(product.id, newQty);
        updateCartItemAmount(product.id, newQty);
    }

    return (
        <>
            <div className="grid grid-cols-[auto_1fr_auto] grid-rows-2 gap-x-6">
                <img
                    className="row-span-2 w-[100px] h-[100px]"
                    src={product.main_image.url}
                    alt="product image"
                />

                <h3 className="text-xl font-bold">{product.title}</h3>

                <ProductPrice
                    price={product.price}
                    discount={product.discount_price}
                    flip={true}
                />

                <QuantityBar
                    quantity={quantity}
                    handleQuantity={handleQuantityChangeLocal}
                />

                <RemoveIcon onRemove={handleRemove} />
            </div>

            <hr className="border-neutral-400 border-dotted mt-5" />
        </>
    );
}

export default CartItemCard;