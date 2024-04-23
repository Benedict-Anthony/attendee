import { signInWithPopup } from "firebase/auth";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { auth, google } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigation = useNavigate();
  const handleGoogleLogin = async () => {
    try {
      const response = await signInWithPopup(auth, google);
      localStorage.setItem("user", response.user.uid);
      navigation("/");
    } catch (error) {
      alert("Something wen wrong...");
    }
  };
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <button
        className="btn bg-cprimary text-[#fff]"
        onClick={handleGoogleLogin}
      >
        <FcGoogle size={24} />
        Login with your staff email
      </button>
    </div>
  );
};

export default Login;
