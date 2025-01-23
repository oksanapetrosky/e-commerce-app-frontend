import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    //clear set variable
    setToken("");
    setCartItems({});
  };

  return (
    <div className="flex items-center justify-between py-5 font medium">
      <img src={assets.logo} className="w-40" alt="logo" />

      <ul className="hidden sm:flex gap-5 text-sm text-700 text-[#891652]">
        <NavLink
          to="/"
          className="flex flex-col items-center gap-1 text-[#891652]"
        >
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-[#910A67]  text hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-[#910A67] hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-[#910A67] hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-[#910A67] hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="w-6 cursot-pointer"
          alt="search-icon"
        />

        <div className="group relative">
          <img
            onClick={() => (token ? null : navigate("/login"))}
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt="profile-icon"
          />
          {/* ---------- Dropdown Menu --------------- */}

          {/* <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-[#891652] rounded">
              <p className="cursor-pointer hover:bg-[#FFE7E7] text-[#891652]">My profile</p>
              <p className="cursor-pointer hover:bg-[#FFE7E7] text-[#891652]">Orders</p>
              <p onClick={logout} className="cursor-pointer hover:bg-[#FFE7E7] text-[#891652]">Logout</p>
            </div>
          </div> */}

          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-[#891652] rounded">
                <p className="cursor-pointer hover:bg-[#FFE7E7] text-[#891652]">
                  My profile
                </p>
                <p
                  onClick={() => navigate("/orders")}
                  className="cursor-pointer hover:bg-[#FFE7E7] text-[#891652]"
                >
                  Orders
                </p>
                <p
                  onClick={logout}
                  className="cursor-pointer hover:bg-[#FFE7E7] text-[#891652]"
                >
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>

        <Link to="/cart" className="relative">
          <img
            className="w-5 min-w-5 cursor-pointer"
            src={assets.cart_icon}
            alt=""
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-[#891652] text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden "
          alt=""
        />
      </div>

      {/* Sidebar menu for small screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              className="h-4 rotate-180"
              src={assets.dropdown_icon}
              alt="dropdown"
            />
            <p className="text-[#891652]">Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border text-[#891652]"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border text-[#891652]"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border text-[#891652]"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border text-[#891652]"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
