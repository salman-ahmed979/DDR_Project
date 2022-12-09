import { useState } from "react";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const loginReq = async (userProfile, url) => {
    setError(null);
    setLoading(false);
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(userProfile),
    });
    const json = await res.json();
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
