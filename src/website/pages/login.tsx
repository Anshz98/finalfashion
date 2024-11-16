import React from "react";
import { useUserAuth } from "../utils/auth-context";

const Login = () => {
  const { user, gitHubSignIn, googleSignIn, microsoftSignIn, firebaseSignOut } = useUserAuth();

  const handleGitHubLogin = async () => {
    try {
      await gitHubSignIn();
      console.log("GitHub Login Successful");
    } catch (error) {
      console.error("GitHub Login Failed:", error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleSignIn();
      console.log("Google Login Successful");
    } catch (error) {
      console.error("Google Login Failed:", error);
    }
  };

  const handleMicrosoftLogin = async () => {
    try {
      await microsoftSignIn();
      console.log("Microsoft Login Successful");
    } catch (error) {
      console.error("Microsoft Login Failed:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
      console.log("Logout Successful");
    } catch (error) {
      console.error("Logout Failed:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {!user ? (
        <>
          <h2 className="mb-4 text-2xl font-bold">Login</h2>
          <button onClick={handleGitHubLogin} className="mb-4 px-6 py-2 text-white bg-blue-500 rounded">
            Login with GitHub
          </button>
          <button onClick={handleGoogleLogin} className="mb-4 px-6 py-2 text-white bg-green-500 rounded">
            Login with Google
          </button>
          <button onClick={handleMicrosoftLogin} className="px-6 py-2 text-white bg-purple-500 rounded">
            Login with Microsoft
          </button>
        </>
      ) : (
        <>
          <h2 className="mb-4 text-2xl font-bold">Welcome, {user.displayName}!</h2>
          <button onClick={handleLogout} className="px-6 py-2 text-white bg-red-500 rounded">
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
