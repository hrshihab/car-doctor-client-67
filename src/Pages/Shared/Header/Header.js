import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Header = () => {
  const { user,logout } = useContext(AuthContext);
  const [showLogout,setShowLogout] = useState(false)
  const handleAvatarClick = () => {
    setShowLogout(!showLogout);
  }

  const handleLogout = () => {
    logout();
    setShowLogout(false);
  }

  const menuItems = (
    <>
      <li className=" font-semibold">
        <Link to="/">Home</Link>
      </li>
      <li className=" font-semibold">
        <Link to="/services">Service</Link>
      </li>
      <li className=" font-semibold">
        <Link to="/orders">Order</Link>
      </li>
      <li className=" font-semibold">
        <Link to="/about">About</Link>
      </li>
      <li className=" font-semibold">
        <Link to="/blog">Blog</Link>
      </li>
      {user?.email ? (
        <></>
      ) : (
        <li className=" font-semibold">
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 mt-4 mb-12 h-20 ">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img height="86px" alt="" src={logo}></img>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        {user?.uid ? (
          <div className="avatar  mr-6" onClick={handleAvatarClick}>
            <div className="w-10  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/050_girl_avatar_profile_woman_suit_student_officer-512.png"
                alt=""
              />
            </div>
          </div>
        ) : (
          <></>
        )}
        {
          showLogout &&  <ul className="dropdown-content absolute right-0  w-36   rounded-box">
          <li className="font-semibold btn btn-ghost" onClick={handleLogout} >
            Logout
          </li>
        </ul>
        }

        <button className="btn btn-outline btn-error">Appointment</button>
      </div>
    </div>
  );
};

export default Header;
