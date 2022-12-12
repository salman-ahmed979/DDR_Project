import { useState } from "react";

export const useTrain = () => {
  const [Error, setError] = useState(null);
  const [Loading, setLoading] = useState(false);
  const addTrain = async (trainProfile) => {
    setError(null);
    setLoading(null);
    const res = await fetch("http://localhost:5000/train/add", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      credentials: "include",
      body: JSON.stringify(trainProfile),
    });
    const json = await res.json();
    if (res.ok) {
      setError(json.message);
      setLoading(false);
    }
    if (!res.ok) {
      setError(json.message);
      setLoading(true);
    }
  };

  const editTrain = async (trainProfile, _id) => {
    setError(null);
    setLoading(null);
    const res = await fetch(`http://localhost:5000/train/updateTrain/${_id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      credentials: "include",
      body: JSON.stringify(trainProfile),
    });
    const json = await res.json();
    if (res.ok) {
      setError(null);
      setLoading(false);
      return "ok";
    }
    if (!res.ok) {
      setError(json.message);
      setLoading(true);
    }
  };
  const deleteTrain = async (_id) => {
    setError(null);
    setLoading(null);
    const res = await fetch(`http://localhost:5000/train/deleteTrain/${_id}`, {
      method: "DELETE",
      credentials: "include",
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
  return { addTrain, editTrain, deleteTrain, Error, Loading };
};
