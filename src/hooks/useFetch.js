import { useState, useEffect } from 'react';
import axios from "axios";

const API_ENDPOINT = "https://jsonplaceholder.typicode.com";

export default function useFetch(path) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`${API_ENDPOINT}${path}`);
        setData(res.data);
        setLoading(false);
      } catch(e) {
        setError(e);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return {
    loading,
    error,
    data,
  };
}
