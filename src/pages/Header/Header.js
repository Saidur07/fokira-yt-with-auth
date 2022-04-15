import React, { useState } from "react";
import logo from "../../assests/images/logo.png";
import {
  BellIcon,
  DotsVerticalIcon,
  LightBulbIcon,
  MenuAlt1Icon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import Menu from "../Menubar/Menu";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <>
      <div className="bg-neutral-50 h-16 flex justify-around items-center">
        <div className="left-side flex justify-start pl-8 items-center  w-1/3">
          <div className="menu">
            <MenuAlt1Icon
              onClick={() => setShow(!show)}
              className="h-10 w-10 cursor-pointer mr-8 active:ring active:rounded-xl active:ring-gray-400"
            />
          </div>

          <div className="logo ml-6">
            <img
              src={logo}
              alt=""
              className=" h-10 cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>
        </div>
        <div className="middle-side flex justify-center items-center w-1/3">
          <div className="search">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search Here"
              className="border-2 p-2 rounded-md w-96 h-10 focus:outline-none focus:ring focus:ring-gray-300 "
            />
            <span className="h-10 w-10">
              <SearchIcon className="h-10 w-10 cursor-pointer inline pb-2 rounded-md ml-1 active:ring active:rounded-xl active:ring-gray-400"></SearchIcon>
            </span>
          </div>
        </div>
        <div className="right-side flex justify-end pr-24 items-center w-1/3">
          <LightBulbIcon className="h-8 w-8 cursor-pointer mx-4 active:ring active:rounded-xl active:ring-gray-400 text-gray-700"></LightBulbIcon>
          <BellIcon className="h-8 w-8 cursor-pointer mx-4 active:ring active:rounded-xl active:ring-gray-400 text-gray-700"></BellIcon>
          <DotsVerticalIcon className="h-8 w-8 cursor-pointer mx-4 active:ring active:rounded-xl active:ring-gray-400 text-gray-700"></DotsVerticalIcon>

          {user?.photoURL ? (
            <>
              <p>{user?.displayName}</p>
              <img
                className="h-8 w-8 cursor-pointer mx-4 rounded-xl active:ring active:rounded-xl active:ring-gray-400"
                src={user?.photoURL}
                alt=""
              />
            </>
          ) : (
            <UserCircleIcon className="h-8 w-8 cursor-pointer mx-4 active:ring active:rounded-xl active:ring-gray-400 text-gray-700"></UserCircleIcon>
          )}
          <button
            onClick={() => navigate("/login")}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-500 to-blue-400 group-hover:from-red-500 group-hover:to-blue-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-200 mt-2"
          >
            {user ? (
              <span
                onClick={handleSignOut}
                className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0"
              >
                Sign Out
              </span>
            ) : (
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                Login
              </span>
            )}
          </button>
        </div>
      </div>
      {show ? <Menu></Menu> : ""}
    </>
  );
};

export default Header;
