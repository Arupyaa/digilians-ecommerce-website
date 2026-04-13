import Pagination from "./Pagination"
import ProductsList from "./ProductsList";


function ProductSection({ productCount, productRow, productCategory }) {
    return(
        <div className="flex flex-col items-center">
        <ProductsList productCount={productCount} productRow={productRow} productCategory={productCategory} />
        <Pagination entriesNo={120} entriesPerPage={9} currentPage="6"/>
        </div>
    );
}
export default ProductSection;