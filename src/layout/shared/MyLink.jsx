import { NavLink } from "react-router";

const MyNavLink = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `text-[#64748B] font-medium px-4 py-3 rounded-md ${isActive ? "text-white bg-success-content" : ""}`
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default MyNavLink;
