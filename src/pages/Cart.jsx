import { useContext, useEffect, useState } from "react";
import CartItemCard from "../components/CartItemCard";
import CartContext from "../contexts/cartContext";

function Cart() {
    const itemCount = 5;
    const subtotal = 260, shippingPrice = 20, taxesPrice = 20;
    const totalPrice = 300;

    const [cartProducts, setCartProducts] = useState([]);
    const { cart } = useContext(CartContext);

    // ✅ fetch ONLY once
    useEffect(() => {
        fetchCartProducts();
    }, []);

    async function fetchCartProducts() {
        const results = await Promise.all(
            cart.map(async (product) => {
                const fetchedProduct = await fetch(
                    `https://x8ki-letl-twmt.n7.xano.io/api:6nBUGF81/products/${product.id}`
                ).then(res => res.json());

                return {
                    ...fetchedProduct,
                    amount: product.amount
                };
            })
        );

        setCartProducts(results);
    }

    // ✅ remove locally
    function handleRemoveLocal(id) {
        setCartProducts(prev => prev.filter(p => p.id !== id));
    }

    // ✅ update quantity locally
    function handleQuantityChange(id, newQuantity) {
        setCartProducts(prev =>
            prev.map(p =>
                p.id === id ? { ...p, amount: newQuantity } : p
            )
        );
    }

    return (
        <div className="flex flex-col gap-4 md:gap-x-12 md:grid md:grid-cols-10 md:grid-rows-[auto_1fr] mx-auto w-[90%] py-[30px] md:py-[60px] ">

            {/* cart amount */}
            <h2 className="text-2xl font-bold md:col-start-1 md:col-span-7 self-start mb-4 order-1">
                {`Your Cart (${cartProducts.length} Items)`}
            </h2>

            {/* order summary */}
            <div className="max-h-87 self-start md:col-start-8 md:col-span-3 md:row-span-2 bg-blue-100 order-3 md:order-2 p-8 flex flex-col gap-4">
                <h3 className="text-xl font-bold">Order Summary</h3>
                <hr className="border-neutral-400 border-dotted" />
                <div className="flex gap-2 justify-between"><span>Subtotal</span><span>{`$${subtotal}`}</span></div>
                <div className="flex gap-2 justify-between"><span>Shipping</span><span>{`$${shippingPrice}`}</span></div>
                <div className="flex gap-2 justify-between"><span>Taxes</span><span>{`$${taxesPrice}`}</span></div>
                <hr className="border-neutral-400 border-dotted" />
                <div className="flex gap-2 justify-between font-bold text-xl"><span>Estimated Total</span><span>{`$${totalPrice}`}</span></div>
                <button className="w-full text-white bg-blue-600 hover:bg-blue-500 border border-blue-500 focus:ring-4 focus:ring-blue-200 font-medium leading-5 rounded-md text-sm px-4 py-2.5 focus:outline-none">
                    Proceed to Checkout
                </button>
            </div>

            {/* order items */}
            <div className="relative md:col-start-1 md:col-span-7 order-2 md:order-3">

                {!cartProducts.length && (
                    <span className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                        No items in cart
                    </span>
                )}

                {cartProducts.map((product) => (
                    <CartItemCard
                        key={product.id}
                        product={product}
                        productAmount={product.amount}
                        onRemoveLocal={handleRemoveLocal}
                        onQuantityChange={handleQuantityChange}
                    />
                ))}
            </div>

        </div>
    );
}

export default Cart;