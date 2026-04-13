import { Dropdown, DropdownItem, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import CartIcon from "./CartIcon";
import websiteIcon from "../assets/web-logo.svg"
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <Navbar fluid rounded className="border-b-2">
            <NavbarBrand href="#">
                <img src={websiteIcon} className="mr-3 h-20 sm:h-30" alt="website logo" />

            </NavbarBrand>
            <div className="flex md:order-2">
                <CartIcon />
                <NavbarToggle />
            </div>
            <NavbarCollapse>
                <NavbarLink as={NavLink} to="/" active>
                    Home
                </NavbarLink>
                <Dropdown
                    trigger="hover"
                    arrowIcon={false}
                    inline
                    label={
                        <NavbarLink as={NavLink} to="/Products">Products</NavbarLink>
                    }
                >
                    <DropdownItem>GPUs</DropdownItem>
                    <DropdownItem>CPUs</DropdownItem>
                    <DropdownItem>RAM</DropdownItem>
                    <DropdownItem>Monitors</DropdownItem>
                    <DropdownItem>Mice</DropdownItem>
                    <DropdownItem>Keyboards</DropdownItem>
                    <DropdownItem>Cases</DropdownItem>
                </Dropdown>
                <NavbarLink as={NavLink} to="#">About</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}

export default Header;