import headphone from "../assets/Headphones.png"

function ProductCard({ productTitle, productPrice, productDiscountedPrice = null, productImage }) {
    return (
        <div className="border">
            {/* card image section */}
            <div>
                <img src={productImage} className="h-[450px] object-cover w-full" alt="product image" />
            </div>
            {/* card body section */}
            <div className="p-[6%]">
                <h4>{productTitle}</h4>
                <p className="font-bold">$<span>{productPrice}</span></p>
                <button className="mt-3 md:mt-5 w-full text-white bg-blue-500 hover:bg-blue-600 border border-blue-500 focus:ring-4 focus:ring-blue-200 font-medium leading-5 rounded-md text-sm px-4 py-2.5 focus:outline-none">Add to cart</button>
            </div>
        </div>
    );
}

export default ProductCard;