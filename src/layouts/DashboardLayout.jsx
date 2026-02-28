import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import {
  FaHome,
  FaUser,
  FaUsers,
  FaBoxOpen,
  FaHistory
} from "react-icons/fa";
import Logo from "../components/Shared/Logo";

function DashboardLayout() {

  const [open, setOpen] = useState(false);
  const location = useLocation();

  // 🔥TODO: admin or user from database থেকে আসবে
  const isAdmin = true; // true = admin | false = user

  // User Menu
  const userNavItems = [
    { name: "User Home", path: "user-home", icon: <FaHome /> },
    { name: "My Parcels", path: "my-parcels", icon: <FaBoxOpen /> },
    { name: "Payment History", path: "payment-history", icon: <FaHistory/> },
  ];

  // Admin Menu
  const adminNavItems = [
    { name: "Admin Home", path: "admin-home", icon: <FaHome /> },
    { name: "All Users", path: "all-users", icon: <FaUsers /> },
  ];

  // Main Website Menu
  const mainNavItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
  ];

  const navItems = isAdmin ? adminNavItems : userNavItems;

  const isActive = (path) =>
    location.pathname.includes(path);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">

      {/* Sidebar lg */}
      <aside className="hidden lg:flex lg:flex-col w-64 bg-white p-6 fixed top-0 left-0 h-screen">
        <div>
          <Logo></Logo>
        </div>

        {/* Dashboard Menu */}
        <ul className="mt-10 space-y-4">
          {
            navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`flex gap-3 items-center font-medium p-2 rounded-lg ${isActive(item.path)
                    ? "bg-[#CAEB66]"
                    : "hover:bg-[#CAEB66]"
                    }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))
          }
        </ul>

        {/* divider */}
        <div className="border my-6"></div>

        {/* Main Menu */}
        <ul className="space-y-4">
          {
            mainNavItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="flex gap-3 items-center p-2 font-medium rounded-lg hover:bg-[#CAEB66]"
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))
          }
        </ul>
      </aside>

      {/* Mobile Navbar */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white flex items-center justify-between px-4">
        <div>
          <Logo></Logo>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-2xl"
        >
          <HiMenu />
        </button>
      </nav>

      {/* Mobile Menu */}
      {
        open && (
          <div className="lg:hidden fixed top-16 left-0 right-0 bg-white p-4 space-y-3">
            {
              navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="flex gap-3 font-medium items-center"
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))
            }
            <div className="border"></div>
            {
              mainNavItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="flex gap-3 font-medium items-center"
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))
            }
          </div>
        )
      }

      {/* Content */}
      <main className="flex-1 p-6 bg-[#EAEDED] lg:ml-64 mt-16 lg:mt-0">
        <Outlet />
      </main>

    </div>
  );
}

export default DashboardLayout;