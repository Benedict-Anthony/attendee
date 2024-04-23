import React from "react";
import { FaHome, FaBook, FaSignOutAlt, FaUsers } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = () => {
  const naviagate = useNavigate();
  const logoutUser = async () => {
    await signOut(auth);
    localStorage.removeItem("user");
    naviagate("/login");
  };
  return (
    <nav className="fixed top-0 left-0 px-3 shadow-lg bottom-0 z-5">
      <ul className="flex flex-col text-cprimary justify-start items-center  mt-5 px-2 space-y-14 txt-xl font-semibold">
        <li>
          <Link to={"/"} className="flex flex-col justify-center items-center">
            <FaHome size={20} />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            to={"/courses"}
            className="flex flex-col justify-center items-center"
          >
            <FaBook size={20} />
            <span>Courses</span>
          </Link>
        </li>

        <li>
          <Link
            to={"attendance"}
            className="flex flex-col justify-center items-center"
          >
            <FaUsers size={20} />
            <span>Attendance</span>
          </Link>
        </li>
      </ul>
      <Link to={"/login"}>
        <button
          className="absolute bottom-0 mb-2 btn btn-outline text-cprimary"
          onClick={logoutUser}
        >
          <span>Logout</span>
          <FaSignOutAlt size={15} />
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
