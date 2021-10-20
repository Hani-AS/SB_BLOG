import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, {
          headers: { token: 'pj11daaQRz7zUIH56B9Z' },
        });
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const refetch = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(url, {
        headers: { token: 'pj11daaQRz7zUIH56B9Z' },
      });
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  const post = async (url, useObj) => {
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          token: 'pj11daaQRz7zUIH56B9Z',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(useObj),
      });
      if (response.ok) {
        setSuccess(true);
      }
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { data, loading, error, refetch, post, success };
};

export default useFetch;
