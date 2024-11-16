import React, { createContext, useContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
  GoogleAuthProvider,
  OAuthProvider,
  User,
} from "firebase/auth";
import { auth, microsoftProvider } from "./firebase";

interface AuthContextType {
  user: User | null;
  gitHubSignIn: () => Promise<void>;
  googleSignIn: () => Promise<void>;
  microsoftSignIn: () => Promise<void>; // Add Microsoft Sign-In
  firebaseSignOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  // GitHub Sign-In
  const gitHubSignIn = async () => {
    const provider = new GithubAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      console.log("GitHub Login Successful:", result.user);
    } catch (error) {
      console.error("GitHub Sign-In Error:", error);
    }
  };

  // Google Sign-In
  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      console.log("Google Login Successful:", result.user);
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  // Microsoft Sign-In
  const microsoftSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, microsoftProvider);
      setUser(result.user);
      console.log("Microsoft Login Successful:", result.user);
    } catch (error) {
      console.error("Microsoft Sign-In Error:", error);
    }
  };

  // Firebase Sign-Out
  const firebaseSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      console.log("Sign-Out Successful");
    } catch (error) {
      console.error("Sign-Out Error:", error);
    }
  };

  // Listen to Authentication State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Auth State Changed:", currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, gitHubSignIn, googleSignIn, microsoftSignIn, firebaseSignOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useUserAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useUserAuth must be used within an AuthContextProvider");
  }
  return context;
};
