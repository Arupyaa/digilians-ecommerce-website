import { Sidebar, SidebarItems, SidebarItemGroup, SidebarItem } from "flowbite-react";
import { useState } from "react";


function ProductsSidebar({isOpen, setIsOpen}) {
    const sidebarContent = (
        < Sidebar className="bg-white [&>div]:bg-white ml-5" >
            <SidebarItems >
                <SidebarItemGroup >
                    <SidebarItem className="cursor-pointer">GPUs</SidebarItem>
                    <SidebarItem className="cursor-pointer">CPUs</SidebarItem>
                    <SidebarItem className="cursor-pointer">RAM</SidebarItem>
                    <SidebarItem className="cursor-pointer">Monitors</SidebarItem>
                    <SidebarItem className="cursor-pointer">Mice</SidebarItem>
                    <SidebarItem className="cursor-pointer">Keyboards</SidebarItem>
                    <SidebarItem className="cursor-pointer">Cases</SidebarItem>
                </SidebarItemGroup>
            </SidebarItems>
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