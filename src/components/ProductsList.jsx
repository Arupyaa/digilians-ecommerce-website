import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductsList({ productCount,productRow, productCategory = "", currentPage }) {
    const [productList, changeProductList] = useState([]);
    async function getProducts() {
        let result = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:6nBUGF81/products?category=${productCategory}`).then(response => response.json());
        // changeProductList(result.slice(0, productCount));
        changeProductList(result.slice(productCount * (currentPage - 1), productCount * currentPage));

    }
    useEffect(() => { getProducts() }, [currentPage]);
    return (
        <div className={`mx-auto w-[90%] md:w-[78%] flex flex-col md:grid md:grid-cols-3 md:grid-rows-${productRow} gap-y-[20px] md:gap-[40px] py-[30px] md:py-[50px] justify-between`}>
            {productList.map((product) => {
                return <ProductCard productTitle={product.title} productPrice={product.price} productDiscountedPrice={product.discount_price} productImage={product.main_image.url} />
            })}
        </div>
    );
}

export default ProductsList;