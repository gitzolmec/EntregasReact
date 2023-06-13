import { useState, useEffect } from "react";

export const useAsync = (asyncFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    asyncFunction()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        setError(error);
      });
  }, [...dependencies]);

  return {
    data,
    error,
  };
};
