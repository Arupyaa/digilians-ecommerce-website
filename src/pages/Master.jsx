
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Master(){
    return(
        <>
        <Header/>
        <Outlet/>
        </>
    )
}

export default Master;