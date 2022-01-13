// takes parameter values after "sneakers?". returns a list of sneakers based on given parameters.
export const urlForAllSneakers = "https://v1-sneakers.p.rapidapi.com/v1/sneakers?";
// takes a sneaker id after "sneakers/". returns a sneaker based on the given sneaker id.
export const urlForOneSneaker = "https://v1-sneakers.p.rapidapi.com/v1/sneakers/";
// takes no parameter. returns a list of brands.
export const urlForBrands = "https://v1-sneakers.p.rapidapi.com/v1/brands";

const concatUrlWithParameters = (url, params) => {
  let urlWithParam = url;
  const numOfParameters = Object.keys(params).length;
  Object.keys(params).some((key, index) => {
    const value = params[key]; // getting the parameter value
    //last parameter value. no need to add "&"
    if (index === numOfParameters - 1) urlWithParam = `${urlWithParam}${key}=${value}`;
    else urlWithParam = `${urlWithParam}${key}=${value}&`;
    return null;
  });
  return urlWithParam;
};

export default concatUrlWithParameters;
