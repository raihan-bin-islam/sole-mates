import { useEffect, useState } from "react";
import concatUrlWithParameters from "../api-config/apiHandler";
import API_KEY from "../api-config/apikey";
const useFetch = (url, params) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let fetchUrl = url;
      if (params) {
        fetchUrl = concatUrlWithParameters(url, params);
      }
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
          "x-rapidapi-key": API_KEY,
        },
      };
      const response = await fetch(fetchUrl, options);
      const jsonData = await response.json();
      setData(jsonData.results);
    };
    const timer = setTimeout(() => {
      fetchData(); // timer added to handle the api call limit/sec
    }, 1500);
    return () => {
      //timer needs to be cleared otherwise it will try to fetch data
      //multiple times after the timeout based on the given dependency changes
      clearTimeout(timer);
    };
  }, [url, params]);

  return data;
};

export default useFetch;
