import { useState } from "react";
import ProductsSidebar from "../components/ProductsSidebar";

function Products() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <ProductsSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <button className="md:hidden bg-neutral-200 fixed left-0 top-1/2 -translate-y-1/2 p-3 rounded-md" onClick={() => { setIsOpen(true) }}>&gt;</button>

        </>
    );
}

export default Products;