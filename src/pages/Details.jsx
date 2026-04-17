import { useParams } from "react-router-dom"
import monitor from "../assets/monitor.jpg"
import PurchaseButton from "../components/PurchaseButton";
import { useEffect, useState} from "react";
import QuantityBar from "../components/QuantityBar";


function Details() {   
    const [product, setProduct] = useState({ title: '', price: '', discountedPrice: '', description: '', image: null });
    useEffect(() => { getProduct() }, []);
    async function getProduct() {
        const fetchedProduct = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:6nBUGF81/products/${productId}`).then(res => res.json());
        setProduct({
            title: fetchedProduct.title,
            price: fetchedProduct.price,
            discountedPrice: fetchedProduct.discounted_price,
            description: fetchedProduct.description,
            image: fetchedProduct.main_image.url
        });
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
                <p className="font-bold">
                    <span>$</span>
                    <span>{product.price}</span>
                </p>
                {/* product description */}
                <p>{product.description}</p>
                <div className="flex gap-4">
                    <QuantityBar quantity={quantity} handleQuantity={setQuantity} />
                    <PurchaseButton productAmount={quantity} productId={productId}/>
                </div>
            </div>
        </div>
    )
}

export default Details