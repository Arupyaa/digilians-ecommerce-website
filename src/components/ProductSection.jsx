import { useState } from "react";
import Pagination from "./Pagination"
import ProductsList from "./ProductsList";


function ProductSection({ productCount, productRow, productCategory,currentPage }) {
    const [productsAmount,setProductsAmount] = useState(140);
    if(productCategory == "all"){
        productCategory = "";
    }
    return(
        <div className="flex flex-col items-center">
        <ProductsList productCount={productCount} productRow={productRow} productCategory={productCategory} currentPage={currentPage} setProductsAmount={setProductsAmount}/>
        <Pagination entriesNo={productsAmount} entriesPerPage={9} currentPage={currentPage}/>
        </div>
    );
}
export default ProductSection;