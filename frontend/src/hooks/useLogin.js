import { useState } from "react";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const loginReq = async (userProfile) => {
    setError(null);
    setLoading(false);
    const res = await fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      credentials: "include",
      body: JSON.stringify(userProfile),
    });
    const json = await res.json();
    console.log(json.message);
    if (res.ok) {
      setError(null);
      setLoading(false);
    }
    if (!res.ok) {
      setError(json.message);
      setLoading(true);
    }
  };
  return { loginReq, error, loading };
};
