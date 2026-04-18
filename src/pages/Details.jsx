import { useParams } from "react-router-dom"
import monitor from "../assets/monitor.jpg"
import PurchaseButton from "../components/PurchaseButton";
import { useEffect, useState } from "react";
import QuantityBar from "../components/QuantityBar";
import ProductPrice from "../components/ProductPrice";

function Details() {
    const [product, setProduct] = useState({ title: '', price: '', discountedPrice: '', description: '', image: null });
    useEffect(() => { getProduct() }, []);
    async function getProduct() {
        try {
            const res = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:6nBUGF81/products/${productId}`)
            if (!res.ok) {
                throw new Error(`HTTP Error:${res.status}`);
            }

            const fetchedProduct = await res.json();
            setProduct({
                title: fetchedProduct.title,
                price: fetchedProduct.price,
                discountedPrice: fetchedProduct.discount_price,
                description: fetchedProduct.description,
                image: fetchedProduct.main_image.url
            });
        } catch (error) {
            console.error("Failed to fetch product due to backend rate limit (10req/20sec) retry again after 20sec:", error.message);
            alert(`Failed to fetch product due to backend rate limit (10req/20sec) retry again after 20sec: ${error.message}`)
        }

    }
    const { productId } = useParams();
    const [quantity, setQuantity] = useState(1);


    return (
        <div className="flex flex-col gap-4 md:gap-0 md:grid md:grid-cols-12 mx-auto w-[90%] py-[30px] md:py-[60px] ">
            <img src={product.image} className="col-start-1 col-span-6 w-full object-contain aspect-[5/3]" alt="product image" />
            <div className="col-start-8 col-span-5 flex flex-col gap-4">
                {/* product title */}
                <div className="text-4xl font-bold">{product.title}</div>
                {/* product price */}
                <ProductPrice price={product.price} discount={product.discountedPrice} />
                {/* product description */}
                <p>{product.description}</p>
                <div className="flex gap-4">
                    <QuantityBar quantity={quantity} handleQuantity={setQuantity} />
                    <PurchaseButton productAmount={quantity} productId={productId} />
                </div>
            </div>
        </div>
    )
}

export default Details