import { useState } from "react";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const signupReq = async (userProfile) => {
    setError(null);
    setLoading(false);
    const res = await fetch("http://localhost:5000/user/signup", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(userProfile),
    });
    const json = await res.json();
    if (res.ok) {
      setLoading(false);
      setError(null);
    }
    if (!res.ok) {
      setLoading(true);
      setError(json.message);
    }
  };
  return { signupReq, error, loading };
};
