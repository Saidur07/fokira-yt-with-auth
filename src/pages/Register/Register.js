import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loader from "../Shared/Loader/Loader";
import Social from "../Shared/SocialSignIn/Social";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth, {
    sendEmailVerification: true,
  });

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    updateProfile({ displayName: name });
    createUserWithEmailAndPassword(email, password);
  };
  if (user) {
    console.log(user);
  }
  return (
    <div>
      <h1 className="text-5xl text-center my-8 text-gray-700">
        HEY! REGISTER!!
      </h1>
      <hr className="container mx-auto w-1/4" />
      <form onSubmit={handleRegister} className="container mx-auto w-1/4 mt-8">
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>

        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="terms"
              aria-describedby="terms"
              type="checkbox"
              className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300"
              required
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="terms" className="font-medium text-gray-900 ">
              I agree with the{" "}
              <Link to="/terms" className="text-blue-600 hover:underline ">
                terms and conditions
              </Link>
            </label>
          </div>
        </div>
        <div className="text-sm block mb-4">
          <p className="font-medium text-gray-900 ">
            Already Have an Account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline ">
              Login!
            </Link>
          </p>
        </div>
        {loading || updating ? <Loader></Loader> : ""}
        {error || updateError ? (
          <p className="my-6 text-center text-red-500">
            ERROR : {error?.code} {updateError?.code}
          </p>
        ) : (
          ""
        )}
        <button
          type="submit"
          className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 text-center block mx-auto w-1/2"
        >
          Register
        </button>
      </form>
      <Social></Social>
    </div>
  );
};

export default Register;
