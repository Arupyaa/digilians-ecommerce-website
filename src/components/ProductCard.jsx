import headphone from "../assets/Headphones.png"
import PurchaseButton from "./PurchaseButton";
import ProductLink from "./ProductLink";

function ProductCard({ product }) {
    return (
        <div className="border row-span-1">
            {/* card image section */}
            <div>
                <ProductLink productId={product.id}>
                    <img src={product.main_image.url} className="h-[450px] hover:opacity-75 object-cover w-full" alt="product image" />
                </ProductLink>
            </div>
            {/* card body section */}
            <div className="p-[6%]">
                <ProductLink productId={product.id}>
                    <h4 className="hover:underline">{product.title}</h4>
                </ProductLink>
                <p className="font-bold mb-3 md:mb-5">$<span>{product.price}</span></p>
                <PurchaseButton productId={product.id}/>
            </div>
        </div>
    );
}

export default ProductCard;