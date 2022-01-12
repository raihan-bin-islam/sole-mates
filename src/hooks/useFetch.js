import { useEffect, useState } from "react";
import processUrl from "../api-config/apiHandler";
import API_KEY from "../api-config/apikey";
const useFetch = (url, params) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (params) {
        url = processUrl(url, params);
      }
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
          "x-rapidapi-key": API_KEY,
        },
      };
      const response = await fetch(url, options);
      const jsonData = await response.json();
      setData(jsonData.results);
    };
    fetchData();
  }, [params]);

  return [data];
};

export default useFetch;
