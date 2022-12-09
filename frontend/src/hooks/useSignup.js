import { useState } from "react";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const signupReq = async (userProfile, url) => {
    setError(null);
    setLoading(false);
    const res = await fetch(url, {
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
