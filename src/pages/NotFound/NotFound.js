import React from "react";
import NotFoundImg from "../../assests/images/404.png";

const NotFound = () => {
  return (
    <div>
      <h1 className="text-5xl text-center text-cyan-700 my-12">
        UwU. Its not the Page your are looking for!
      </h1>
      {/* <h1 className="text-8xl text-center text-slate-500">404 : Not Found</h1> */}
      <img className="mx-auto my-12" src={NotFoundImg} alt="" />
      <h3 className="text-4xl text-center text-yellow-500">
        AWW ... Dont't Cry!
      </h3>
      <h4 className="text-6xl text-center text-zinc-300 mt-6">
        Its just a <span className="text-8xl text-blue-500">404</span> error
      </h4>
    </div>
  );
};

export default NotFound;
