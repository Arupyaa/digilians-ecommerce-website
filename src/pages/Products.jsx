import { useState } from "react";
import ProductsSidebar from "../components/ProductsSidebar";
import ProductSection from "../components/ProductSection";
import { useParams } from "react-router-dom";

function Products() {
    const { currentPage, currentCategory } = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(3000);
    // const [category,setCategory] = useState("all");
    return (
        <div className="flex">
            <ProductsSidebar minValue={minValue} setMinValue={setMinValue} maxValue={maxValue} setMaxValue={setMaxValue} isOpen={isOpen} setIsOpen={setIsOpen} />
            <button className="md:hidden text-white p-2 bg-blue-500 fixed left-0 top-1/2 -translate-y-1/2 rounded-md" onClick={() => { setIsOpen(true) }}>&gt;</button>
            <ProductSection minValue={minValue} maxValue={maxValue} productCount={9} productRow={3} productCategory={currentCategory} currentPage={currentPage} />
        </div>
    );
}

export default Products;