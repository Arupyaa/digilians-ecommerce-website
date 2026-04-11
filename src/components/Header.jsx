import { Button, Dropdown, DropdownItem, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import CartIcon from "./CartIcon";
import websiteIcon from "../assets/web-logo.svg"

function Header() {
    return (
        <Navbar fluid rounded className="border-b-2">
            <NavbarBrand href="#">
                <img src={websiteIcon} className="mr-3 h-20 sm:h-30" alt="website logo" />
                
            </NavbarBrand>
            <div className="flex md:order-2">
                <CartIcon/>
                <NavbarToggle />
            </div>
            <NavbarCollapse>
                <NavbarLink href="#" active>
                    Home
                </NavbarLink>
                <Dropdown
                trigger="hover"
                    arrowIcon={false}
                    inline
                    label={
                        <NavbarLink href="#">Categories</NavbarLink>
                    }
                >
                    <DropdownItem>GPUs</DropdownItem>
                    <DropdownItem>Monitors</DropdownItem>
                    <DropdownItem>PC Accessories</DropdownItem>
                </Dropdown>
                <NavbarLink href="#">About</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}

export default Header;