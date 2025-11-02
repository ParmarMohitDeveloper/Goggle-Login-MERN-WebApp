import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "./api";
import { useNavigate } from "react-router-dom";
import "./GoogleLogin.css"; // 👈 import CSS
import { FaGoogle } from "react-icons/fa";

const GoogleLogin = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const responseGoogle = async (authResult) => {
    try {
      if (authResult["code"]) {
        const result = await googleAuth(authResult.code);
        const { email, name, image } = result.data.user;
        const token = result.data.token;
        const obj = { email, name, token, image };
        localStorage.setItem("user-info", JSON.stringify(obj));
        navigate("/dashboard");
      } else {
        console.log(authResult);
        throw new Error(authResult);
      }
    } catch (e) {
      console.log("Error while Google Login...", e);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });

  return (
    <div className="login-page">
      <div className="overlay"></div>

      <div className="login-container">
        <h1 className="title">Google Redirect MERN Stack App</h1>
        <p className="subtitle">
          Seamless authentication made simple — connect using your Google account.
        </p>

        <button className="google-btn" onClick={googleLogin}>
           <FaGoogle className="google-icon" />
          Sign in with Google
        </button>

        <footer className="footer">
          Made by <span>Parmar Mohit</span>
        </footer>
      </div>
    </div>
  );
};

export default GoogleLogin;
