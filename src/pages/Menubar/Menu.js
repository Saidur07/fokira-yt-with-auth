import React from "react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  HomeIcon,
  LibraryIcon,
} from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
const Menu = () => {
  const navigate = useNavigate();
  return (
    <div className="w-32 bg-neutral-50 h-96 absolute transition-all ease-in-out delay-150">
      <div className="icons flex justify-center items-center flex-col">
        <div
          onClick={() => navigate("/")}
          className="home h-24 cursor-pointer  hover:bg-gray-100 border-b-2 w-full h-100 active:bg-slate-50 active:rounded-xl"
        >
          <HomeIcon className=" mx-auto w-8 h-12"></HomeIcon>
          <h3 className="text-xl text-center">Home</h3>
        </div>
        <div
          onClick={() => navigate("/subs")}
          className="subscirption h-24 cursor-pointer  hover:bg-gray-100 border-b-2 w-full h-100 active:bg-slate-50 active:rounded-xl"
        >
          <BriefcaseIcon className=" mx-auto w-8 h-12"></BriefcaseIcon>
          <h3 className="text-xl text-center">Subscirption</h3>
        </div>
        <div
          onClick={() => navigate("/explore")}
          className="explore h-24 cursor-pointer  hover:bg-gray-100 border-b-2 w-full h-100 active:bg-slate-50 active:rounded-xl"
        >
          <AcademicCapIcon className=" mx-auto w-8 h-12"></AcademicCapIcon>
          <h3 className="text-xl text-center">Explore</h3>
        </div>
        <div
          onClick={() => navigate("/library")}
          className="library h-24 cursor-pointer  hover:bg-gray-100 border-b-2 w-full h-100 active:bg-slate-50 active:rounded-xl"
        >
          <LibraryIcon className=" mx-auto w-8 h-12"></LibraryIcon>
          <h3 className="text-xl text-center">Library</h3>
        </div>
      </div>
    </div>
  );
};

export default Menu;
