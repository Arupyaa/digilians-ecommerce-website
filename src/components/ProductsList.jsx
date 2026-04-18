import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductsList({
    productCount,
    productRow,
    productCategory,
    currentPage,
    setProductsAmount,
    searchTerm,
    minValue,
    maxValue
}) {
    const [allProducts, setAllProducts] = useState([]);
    const [productList, changeProductList] = useState([]);

    async function getProducts() {
        let category = productCategory === "all" ? "" : productCategory;

        const result = await fetch(
            `https://x8ki-letl-twmt.n7.xano.io/api:6nBUGF81/products?category=${category}`
        ).then((res) => res.json());

        setAllProducts(result);
    }


    useEffect(() => {
        getProducts();
    }, [productCategory]);


    useEffect(() => {
        let filtered = allProducts;

        //search filter
        if (searchTerm) {
            filtered = filtered.filter((product) =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        //price filter
        filtered = filtered.filter((product) => {
            const price = getFinalPrice(product);
            return price >= minValue && price <= maxValue;
        });

        setProductsAmount(filtered.length);


        const start = productCount * (currentPage - 1);
        const end = productCount * currentPage;

        changeProductList(filtered.slice(start, end));
    }, [allProducts, searchTerm, currentPage, productCount, minValue, maxValue]);

    function getFinalPrice(product) {
        return product.discount_price != null && product.discount_price !== ""
            ? product.discount_price
            : product.price;
    };
    return (
        <div
            className={`mx-auto w-[90%] md:w-[78%] flex flex-col md:grid md:grid-cols-3 md:grid-rows-${productRow} gap-y-[20px] md:gap-[40px] py-[30px] md:py-[50px] justify-between`}
        >
            {productList.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductsList;