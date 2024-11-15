import React from "react";
import { useUserAuth } from "../utils/auth-context";

const Login = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
      console.log("Login successful");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
      console.log("Logout successful");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {!user ? (
        <>
          <h2 className="mb-4 text-2xl font-bold">Login</h2>
          <button onClick={handleLogin} className="px-6 py-2 text-white bg-blue-500 rounded">
            Login with GitHub
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
