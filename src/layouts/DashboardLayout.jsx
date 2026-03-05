import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import {
  FaHome,
  FaUsers,
  FaBoxOpen,
  FaHistory,
  FaInfoCircle,
  FaMotorcycle,
  FaUser,
  FaTachometerAlt,
  FaUserClock,
  FaUserCheck
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Logo from "../components/Shared/Logo";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";

function DashboardLayout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  // Fetch user role from database
  const { data: currentUser, isLoading, refetch } = useQuery({
    queryKey: ["currentUser", user?.email],
    queryFn: async () => {
      if (!user?.email) return null;
      const res = await axiosSecure.get(`/users/${user.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  // Determine if user is admin
  const isAdmin = currentUser?.role === "admin";

  // User Menu
  const userNavItems = [
    { name: "User Home", path: "user-home", icon: <FaHome /> },
    { name: "My Parcels", path: "my-parcels", icon: <FaBoxOpen /> },
    { name: "Payment History", path: "payment-history", icon: <FaHistory /> },
  ];

  // Admin Menu
  const adminNavItems = [
    { name: "Admin Home", path: "admin-home", icon: <FaHome/> },
    { name: "All Users", path: "all-users", icon: <FaUsers /> },
    { name: "All Parcels", path: "all-parcels", icon: <FaBoxOpen /> },
    { name: "All Riders", path: "all-riders", icon: <FaUserClock /> },
    { name: "Active Riders", path: "active-riders", icon: <FaUserCheck /> },
  ];

  // Main Website Menu (visible to both)
  const mainNavItems = [
    {
      name: "Home",
      path: "/",
      icon: <FaHome />
    },
    {
      name: "Coverage",
      path: "/coverage",
      icon: <MdLocationOn />
    },
    {
      name: "Send A Parcel",
      path: "/sendParcel",
      icon: <FaBoxOpen />
    },
    {
      name: "About Us",
      path: "/aboutUs",
      icon: <FaInfoCircle />
    },
    {
      name: "Be a Rider",
      path: "/beArider",
      icon: <FaMotorcycle />
    }
  ];

  // Select menu based on role
  const navItems = isAdmin ? adminNavItems : userNavItems;

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    // Check if current path starts with the menu path
    return location.pathname.startsWith(`/dashboard/${path}`) ||
      location.pathname === `/dashboard/${path}`;
  };

  // Show loading while fetching user data
  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#CAEB66] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading user...</p>
        </div>
      </div>
    );
  }

  // Show loading while fetching role
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#CAEB66] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">

      {/* Sidebar lg */}
      <aside className="hidden lg:flex lg:flex-col w-64 bg-white p-6 fixed top-0 left-0 h-screen overflow-y-auto">
        <div>
          <Logo />
        </div>

        {/* User Info */}
        <div className="mt-4 p-3 bg-gradient-to-r from-[#CAEB66]/20 to-transparent rounded-lg border-l-4 border-[#CAEB66]">
          <p className="text-sm font-semibold truncate">{user?.displayName || user?.email}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className={`text-xs px-2 py-0.5 rounded-full ${isAdmin ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
              {isAdmin ? 'Admin' : 'User'}
            </span>
          </div>
        </div>

        {/* Dashboard Menu */}
        <div className="mt-6">
          {/* <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">DASHBOARD</p> */}
          <ul className="space-y-1">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`flex gap-3 items-center font-medium p-3 rounded-lg transition-all ${isActive(item.path)
                      ? "bg-[#CAEB66] text-black shadow-md"
                      : "text-gray-600 hover:bg-[#CAEB66]/50 hover:text-black"
                    }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* divider */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* Main Menu */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">MAIN MENU</p>
          <ul className="space-y-1">
            {mainNavItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="flex gap-3 items-center p-3 font-medium rounded-lg text-gray-600 hover:bg-[#CAEB66]/50 hover:text-black transition-all"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Mobile Navbar */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white flex items-center justify-between px-4 z-50 shadow-md">
        <div className="w-24">
          <Logo />
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-2xl p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <HiMenu />
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden fixed top-16 left-0 right-0 bg-white p-4 z-50 shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto">

          {/* Mobile User Info */}
          <div className="p-3 bg-gradient-to-r from-[#CAEB66]/20 to-transparent rounded-lg border-l-4 border-[#CAEB66] mb-6">
            <p className="text-sm font-semibold truncate">{user?.displayName || user?.email}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className={`text-xs px-2 py-0.5 rounded-full ${isAdmin ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                {isAdmin ? 'Admin' : 'User'}
              </span>
            </div>
          </div>

          {/* Mobile Dashboard Menu */}
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">DASHBOARD</p>
          <div className="space-y-1 mb-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={`/dashboard/${item.path}`}
                onClick={() => setOpen(false)}
                className={`flex gap-3 font-medium items-center p-3 rounded-lg ${isActive(item.path)
                    ? "bg-[#CAEB66] text-black"
                    : "text-gray-600 hover:bg-[#CAEB66]/50"
                  }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          <div className="border-t border-gray-200 my-4"></div>

          {/* Mobile Main Menu */}
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">MAIN MENU</p>
          <div className="space-y-1">
            {mainNavItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setOpen(false)}
                className="flex gap-3 font-medium items-center p-3 rounded-lg text-gray-600 hover:bg-[#CAEB66]/50"
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Content */}
      <main className="flex-1 p-4 md:p-6 bg-[#EAEDED] lg:ml-64 mt-16 lg:mt-0 min-h-screen">
        <Outlet context={{ userRole: currentUser?.role, refetch }} />
      </main>
    </div>
  );
}

export default DashboardLayout;