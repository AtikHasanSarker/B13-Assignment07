import MyNavLink from "./shared/MyLink";


const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar max-w-285 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <MyNavLink to={"/"}>Home</MyNavLink>
              </li>
              <li>
                <MyNavLink to={"/timeline"}>timeline</MyNavLink>
              </li>
              <li>
                <MyNavLink to={"/stats"}>stats</MyNavLink>
              </li>
            </ul>
          </div>
          <div className="">
            <p className="font-medium text-2xl">
              <span className="font-bold">Keen</span>Keeper
            </p>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="flex">
            <li>
              <MyNavLink to={"/"}>Home</MyNavLink>
            </li>
            <li>
              <MyNavLink to={"/timeline"}>Timeline</MyNavLink>
            </li>
            <li>
              <MyNavLink to={"/stats"}>Stats</MyNavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
