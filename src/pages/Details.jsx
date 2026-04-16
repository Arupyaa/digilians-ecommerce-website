import { useParams } from "react-router-dom"
import monitor from "../assets/monitor.jpg"
import PurchaseButton from "../components/PurchaseButton";
import { useState } from "react";
function Details() {
    const { productId } = useParams();
    const [quantity, setQuantity] = useState(1);
    function increase() {
        if (quantity < 100) {
            setQuantity(prev => prev + 1)
        }
    }
    function decrease() {
        if (quantity > 1) {
            setQuantity(prev => prev - 1)
        }
    }
    return (
        <div className="flex flex-col gap-4 md:gap-0 md:grid md:grid-cols-12 mx-auto w-[90%] py-[30px] md:py-[60px] ">
            <img src={monitor} className="col-start-1 col-span-6 w-full object-cover aspect-[5/3]" alt="product image" />
            <div className="col-start-8 col-span-5 flex flex-col gap-4">
                {/* product title */}
                <div className="text-4xl font-bold">Asus monitor</div>
                {/* product price */}
                <p className="font-bold">
                    <span>$</span>
                    <span>249.99</span>
                </p>
                {/* product description */}
                <p>Experience pure, uninterrupted sound with the Aura Noise-Cancelling
                    Headphones. Designed with premium minimalist aesthetics and advanced
                    active noise cancellation technology, these over-ear headphones deliver
                    deep bass, crisp highs, and up to 30 hours of battery life on a single
                    charge. Crafted with memory foam ear cushions for all-day comfort.</p>
                <div className="flex gap-4">
                    <div className="flex">
                        <button className="font-bold bg-transparent hover:bg-neutral-100 h-10 w-10 border-y border-l" onClick={() => { decrease() }}>-</button>
                        <div className="h-10 w-10 flex justify-center items-center border">{quantity}</div>
                        <button className="font-bold bg-transparent hover:bg-neutral-100 h-10 w-10 border-y border-r" onClick={() => { increase() }}>+</button>
                    </div>
                    <PurchaseButton />
                </div>
            </div>
        </div>
    )
}

export default Details