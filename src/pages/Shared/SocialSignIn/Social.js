import React from "react";
import google from "../../../assests/images/google.png";
import facebook from "../../../assests/images/facebook.png";
import github from "../../../assests/images/github.png";
import auth from "../../../firebase.init";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Loader from "../Loader/Loader";

const Social = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithFacebook, FacebookUser, FacebookLoading, FacebookError] =
    useSignInWithFacebook(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  if (googleUser || FacebookUser || githubUser) {
    console.log(googleUser?.user);
    console.log(FacebookUser?.user);
    console.log(githubUser?.user);
  }

  return (
    <div className="container w-1/3 mx-auto my-6">
      <div className="flex justify-center items-center">
        <div style={{ height: "1px" }} className="bg-slate-500 w-1/2"></div>
        <p className="mt-2 px-2 text-xl">or</p>
        <div style={{ height: "1px" }} className="bg-slate-500 w-1/2"></div>
      </div>
      {googleLoading || FacebookLoading || githubLoading ? (
        <Loader></Loader>
      ) : (
        ""
      )}
      {googleError || FacebookError ? (
        <p className="my-6 text-center text-red-500">
          ERROR : {googleError?.code} {FacebookError?.code} {githubError?.code}
        </p>
      ) : (
        ""
      )}
      <div className="">
        <button
          onClick={() => signInWithGoogle()}
          className="btn bg-gray-100 hover:bg-gray-200 transition-all rounded-xl w-1/2 flex justify-center items-center h-12 mx-auto my-8 "
        >
          <img style={{ width: "30px" }} src={google} alt="" />
          <span className="px-2 text-lg font-semibold text-slate-700">
            Google Login
          </span>
        </button>
        <button
          onClick={() => signInWithFacebook()}
          className="btn bg-blue-400 hover:bg-blue-300 transition-all rounded-xl w-1/2 flex justify-center items-center h-12 mx-auto my-8 "
        >
          <img style={{ width: "30px" }} src={facebook} alt="" />
          <span className="px-2 text-lg font-semibold text-slate-700">
            Facebook Login
          </span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn bg-slate-300 hover:bg-slate-200 transition-all rounded-xl w-1/2 flex justify-center items-center h-12 mx-auto my-8 "
        >
          <img style={{ width: "30px" }} src={github} alt="" />
          <span className="px-2 text-lg font-semibold text-slate-700">
            Github Login
          </span>
        </button>
      </div>
    </div>
  );
};

export default Social;
