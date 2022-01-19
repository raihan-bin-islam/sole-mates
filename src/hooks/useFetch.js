import { useEffect, useState, useMemo } from "react";
import concatUrlWithParameters from "../api-config/apiHandler";
import { urlForBrands } from "../api-config/apiHandler";
import API_KEY from "../api-config/apikey";
const useFetch = (url, params = null, brandInfo = true) => {
  const [data, setData] = useState([]);
  // const [brands, setBrands] = useState([]);
  // useEffect(() => {
  //   const getBrands = async () => {
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
  //         "x-rapidapi-key": API_KEY,
  //       },
  //     };
  //     if (brandInfo) {
  //       const response = await fetch(urlForBrands, options);
  //       const brandList = await response.json();
  //       console.log(brandList);
  //       setBrands(brandList);
  //     }
  //   };
  //   const timer = setTimeout(() => {
  //     getBrands();
  //   }, 1001);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [brandInfo]);
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
    }, 10001);
    return () => {
      //timer needs to be cleared otherwise it will try to fetch data
      //multiple times after the timeout based on the given dependency changes
      clearTimeout(timer);
    };
  }, [url, params]);

  return [data];
};

export default useFetch;
