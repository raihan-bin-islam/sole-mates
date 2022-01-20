import { useEffect, useState } from "react";
import concatUrlWithParameters from "../api-config/apiHandler";
import API_KEY from "../api-config/apikey";
const useFetch = (url, params) => {
  const [data, setData] = useState([]);
  if (params) {
    url = concatUrlWithParameters(url, params);
  }
  const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  };

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
          "x-rapidapi-key": API_KEY,
        },
      };
      const response = await fetch(url, options);
      if (response.status === 429) {
        await sleep(1000);
        return fetchData();
      }
      const jsonData = await response.json();
      setData(jsonData.results);
    };
    fetchData();
  }, [url]);

  return data;
};

export default useFetch;
