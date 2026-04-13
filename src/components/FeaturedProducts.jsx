import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function FeaturedProducts({ productCount, productRow }) {

    const [productList, changeProductList] = useState([]);
    async function getProducts() {
        let result = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:6nBUGF81/products`).then(response => response.json());
        changeProductList(result.slice(0, productCount));
        console.log(productList);

    }
    useEffect(() => { getProducts() }, []);
    return (
        <div className={`mx-auto w-[90%] md:w-[78%] flex flex-col md:grid  md:grid-cols-3 md:grid-rows-${productRow} md:gap-[40px] py-[30px] md:py-[80px] justify-between`}>
            {productList.map((product) => {
                return <ProductCard key={product.id} productTitle={product.title} productPrice={product.price} productDiscountedPrice={product.discount_price} productImage={product.main_image.url} />
            })}
        </div>
    );
}

export default FeaturedProducts;