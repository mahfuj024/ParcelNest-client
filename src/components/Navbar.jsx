import { Link, NavLink } from "react-router";
import Logo from "./Shared/Logo";


function Navbar() {
  // const { logOut, user } = useContext(AuthContext);

  // const handleLogOut = () => {
  //   logOut()
  //     .then(() => {
  //       toast("Log out");
  //     })
  //     .catch(() => {
  //       toast("An error happened.");
  //     });
  // };

  const navLinks = [
    { id: "home", path: "/",  label: "Home"},
    { id: "coverage", path: "/coverage", label: "Coverage" },
    { id: "send", path: "/sendParcel", label: "Send A Parcel" },
    { id: "my", path: "/myParcel", label: "My Parcel" },
    { id: "rider", path: "/BeARider", label: "Be a Rider" },
  ];

  const navItem = navLinks.map(link => (
    <li key={link.id}>
      <NavLink
        to={link.path}
        className={({ isActive }) =>
          `hover:bg-transparent ${isActive ? "bg-primary rounded-full px-4" : ""}`
      }
      >
        {link.label}
      </NavLink>
    </li>
  ));

  return (
    <div className="navbar sticky top-0 z-50 bg-white pl-2 pr-6 md:pl-4 md:pr-8 lg:px-8 py-2 md:py-4 lg:py-5 rounded-2xl">
      {/* Navbar Start */}
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItem}
          </ul>
        </div>
        <Link to="/">
          <Logo></Logo>
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-8 text-base font-medium">
          {navItem}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        {/* {user ? (
          <button onClick={handleLogOut} className="btn bg-primary border-none font-bold text-sm md:text-base">
            Log out
          </button>
        ) : (
          <Link to="/login" className="btn bg-white">
            Sign In
          </Link>
        )} */}
        <Link to="/login">
          <button className="btn bg-white mr-4">Log in</button>
        </Link>

          <Link to="/register">
            <button className="btn bg-white ">Register</button>
          </Link>

      </div>
      
    </div>
  );
}

export default Navbar;
