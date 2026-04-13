import ProductsList from "./ProductsList";


function ProductSection({ productCount, productRow, productCategory }) {
    return(
        <ProductsList productCount={productCount} productRow={productRow} productCategory={productCategory} />
    );
}
export default ProductSection;