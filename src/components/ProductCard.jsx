import headphone from "../assets/Headphones.png"
import PurchaseButton from "./PurchaseButton";

function ProductCard({ productTitle, productPrice, productDiscountedPrice = null, productImage }) {
    return (
        <div className="border row-span-1">
            {/* card image section */}
            <div>
                <img src={productImage} className="h-[450px] object-cover w-full" alt="product image" />
            </div>
            {/* card body section */}
            <div className="p-[6%]">
                <h4>{productTitle}</h4>
                <p className="font-bold mb-3 md:mb-5">$<span>{productPrice}</span></p>
                <PurchaseButton/>
            </div>
        </div>
    );
}

export default ProductCard;