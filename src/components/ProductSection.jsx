import { useState } from "react";
import Pagination from "./Pagination"
import ProductsList from "./ProductsList";
import Search from "./Search";

function ProductSection({ productCount, productRow, productCategory, currentPage, minValue, maxValue }) {
    const [productsAmount, setProductsAmount] = useState(140);
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div className="flex flex-col items-center">
            <Search setSearchTerm={setSearchTerm} />
            <ProductsList minValue={minValue} maxValue={maxValue} searchTerm={searchTerm} productCount={productCount} productRow={productRow} productCategory={productCategory} currentPage={currentPage} setProductsAmount={setProductsAmount} />
            <Pagination entriesNo={productsAmount} entriesPerPage={9} currentCategory={productCategory} currentPage={currentPage} />
        </div>
    );
}
export default ProductSection;