import { CartProvider } from "../contexts/cartContext";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";


function Master() {
    return (
        <>
            <CartProvider>
                <Header />
                <Outlet />
            </CartProvider>

        </>
    )
}

export default Master;