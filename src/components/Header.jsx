import { Dropdown, DropdownItem, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import CartIcon from "./CartIcon";
import websiteIcon from "../assets/web-logo.svg"
import { Link, NavLink } from "react-router-dom";
import NavItem from "./NavItem";

function Header() {
    const categories = ["All", "GPU", "CPU", "RAM", "Monitor", "Mouse", "Keyboard", "Case"];
    return (
        <Navbar fluid rounded className="border-b-2 sticky md:static top-0">
            <NavbarBrand href="#">
                <img src={websiteIcon} className="mr-3 h-20 sm:h-30" alt="website logo" />

            </NavbarBrand>
            <div className="flex md:order-2">
                <Link to={'/cart'}>
                    <CartIcon />
                </Link>
                <NavbarToggle />
            </div>
            <NavbarCollapse>
                <NavItem to="/">Home</NavItem>
                <Dropdown
                    trigger="hover"
                    arrowIcon={false}
                    inline
                    label={<NavItem to="/products/all/page/1">Products</NavItem>}
                >
                    {categories.map((category) => {
                        const path = `/products/${category.toLowerCase()}/page/1`;

                        return (
                            <NavLink key={category} to={path}>
                                {({ isActive }) => (
                                    <DropdownItem
                                        className={
                                            isActive
                                                ? "cursor-pointer bg-blue-100"
                                                : "cursor-pointer"
                                        }
                                    >
                                        {category}
                                    </DropdownItem>
                                )}
                            </NavLink>
                        );
                    })}
                </Dropdown>
                {/* <NavbarLink as={NavLink} to="#" className={({ isActive }) => isActive ? "active" : ""}>About</NavbarLink> */}
            </NavbarCollapse>
        </Navbar>
    );
}

export default Header;