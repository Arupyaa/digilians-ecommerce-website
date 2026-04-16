import { NavLink } from "react-router-dom";

function ProductLink({productId,children}){
    return(
        <NavLink to={`/products/id/${productId}`}>
            {children}
        </NavLink>
    )
}

export default ProductLink;