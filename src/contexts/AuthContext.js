import React, { createContext, useContext, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("shopops_user")) || null
  );

  async function loginWithPin(name, pin) {
    const q = query(collection(db, "users"), where("name", "==", name), where("pin", "==", pin));
    const snap = await getDocs(q);
    if (snap.empty) throw new Error("Wrong PIN");
    const user = { id: snap.docs[0].id, ...snap.docs[0].data() };
    setCurrentUser(user);
    localStorage.setItem("shopops_user", JSON.stringify(user));
    return user;
  }

  function logout() {
    setCurrentUser(null);
    localStorage.removeItem("shopops_user");
  }

  return (
    <AuthContext.Provider value={{ currentUser, loginWithPin, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
