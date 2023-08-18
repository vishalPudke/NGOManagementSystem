import { useContext, useDebugValue } from "react";
import AuthContext from "../context/AuthProvider";

const useAuth = () => {
  const { auth } = useContext(AuthContext);
  console.log(auth.email);
  console.log("Previous Token:", auth?.access_token);

  useDebugValue(auth, (auth) => (auth?.user ? "Logged In" : "Logged Out"));
  return useContext(AuthContext);
};

export default useAuth;
