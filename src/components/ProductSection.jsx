import { useState } from "react";
import Pagination from "./Pagination"
import ProductsList from "./ProductsList";


function ProductSection({ productCount, productRow, productCategory }) {
    const [currentPage,setCurrentPage] = useState(3);
    if(productCategory == "all"){
        productCategory = "";
    }
    return(
        <div className="flex flex-col items-center">
        <ProductsList productCount={productCount} productRow={productRow} productCategory={productCategory} currentPage={currentPage} />
        <Pagination entriesNo={120} entriesPerPage={9} currentPage="2"/>
        </div>
    );
}
export default ProductSection;