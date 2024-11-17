import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="bg-black text-white p-2 px-6 rounded" onClick={() => loginWithRedirect(
    {
      redirectUri: 'http://localhost:5173/dashboard',
    }
  ) }>Get Started</button>;
};

export default LoginButton;