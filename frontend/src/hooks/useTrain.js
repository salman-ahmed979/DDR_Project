import { useEffect, useState } from "react";

export const useTrain = () => {
  const [Error, setError] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [trains, setTrains] = useState();
  const addTrain = async (trainProfile) => {
    setError(null);
    setLoading(null);
    const res = await fetch("http://localhost:5000/train/add", {
      method: "POST",
      headers: { "Content-type": "application/json" },
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
  useEffect(() => {
    const getTrains = async () => {
      setError(null);
      setLoading(null);
      const res = await fetch("http://localhost:5000/train/getTrains");
      const json = await res.json();
      if (res.ok) {
        setError(null);
        setLoading(false);
        setTrains(json.message);
      }
      if (!res.ok) {
        setError(json.message);
        setLoading(true);
      }
    };
    getTrains();
  }, []);
  return { addTrain, trains, Error, Loading };
};
