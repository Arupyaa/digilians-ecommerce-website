import { Sidebar, SidebarItems, SidebarItemGroup, SidebarItem } from "flowbite-react";
import { useState } from "react";
import DoubleSlider from "./DoubleSlider";
import "../css/DoubleSlider.css"
import { NavLink } from "react-router-dom";

function ProductsSidebar({ isOpen, setIsOpen }) {
    const categories = ["All", "GPU", "CPU", "RAM", "Monitor", "Mouse", "Keyboard", "Case"];
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(10000);

    const sidebarContent = (
        < Sidebar className="bg-white [&>div]:bg-white md:ml-5" >
            <SidebarItems >
                <SidebarItemGroup >

                    {categories.map((category) => (
                        <NavLink key={category} to={`/products/${category.toLowerCase()}/page/1`}>
                            {({ isActive }) => (
                                <SidebarItem className={isActive?"cursor-pointer  bg-blue-100":"cursor-pointer"}>
                                    {category}
                                </SidebarItem>
                            )}
                        </NavLink>
                    ))}
                </SidebarItemGroup>
            </SidebarItems>
            <SidebarItemGroup >
                <DoubleSlider absoluteMin={0} absoluteMax={10000} minValue={minValue} setMinValue={setMinValue} maxValue={maxValue} setMaxValue={setMaxValue} />
            </SidebarItemGroup>
        </Sidebar >
    );

    return (
        <>
            {/* static sidebar */}
            <div className="hidden md:block">
                {sidebarContent}
            </div>

            {/* offcanva sidebar overlay */}
            {isOpen && <div
                className="md:hidden fixed inset-0 z-40 bg-black/50" onClick={() => { setIsOpen(false) }} />}

            {/* offcanva sidebar */}
            <div className={`
                md:hidden fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-xl
                transform transition-transform duration-300 ease-in-out
                ${isOpen ? "translate-x-0" : "-translate-x-full"}
            `}>
                {isOpen && sidebarContent}
            </div>
        </>
    )
}

export default ProductsSidebar;