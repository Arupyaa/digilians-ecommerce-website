import { NavLink } from "react-router-dom";

function NavItem({ to, children, className = "" }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
        block py-2 pl-3 pr-4 md:p-0 border-b md:border-0
        ${
          isActive
            ? "text-blue-700 font-semibold"
            : "text-gray-700 hover:text-blue-700"
        }
        ${className}
      `
      }
    >
      {children}
    </NavLink>
  );
}
export default NavItem;