import { useState } from "react";
import ProductsSidebar from "../components/ProductsSidebar";
import ProductSection from "../components/ProductSection";
import { useParams } from "react-router-dom";

function Products() {
    const {currentPage,currentCategory} = useParams();
    const [isOpen, setIsOpen] = useState(false);
    // const [category,setCategory] = useState("all");
    return (
        <div className="flex">
            <ProductsSidebar isOpen={isOpen} setIsOpen={setIsOpen}  />
            <button className="md:hidden bg-neutral-200 fixed left-0 top-1/2 -translate-y-1/2 p-3 rounded-md" onClick={() => { setIsOpen(true) }}>&gt;</button>
            <ProductSection productCount={9} productRow={3} productCategory={currentCategory} currentPage={currentPage} />
        </div>
    );
}

export default Products;