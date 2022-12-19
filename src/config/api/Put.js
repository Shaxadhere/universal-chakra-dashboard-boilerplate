const axios = require("axios");
const { BASE_URL } = require("../constants/api");

async function Put(path, token, bodyObj, queryObj) {
  let url = BASE_URL + path;

  const header = {
    headers: token
      ? {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
      : {
        "Content-Type": "application/json",
      },
  };

  if (queryObj) {
    let queryString = "";
    Object.keys(queryObj).map((val) => {
      if (queryObj[val].length > 0) {
        if (queryString.length > 0) {
          queryString += `&${val}=${queryObj[val]}`;
        } else {
          queryString += `?${val}=${queryObj[val]}`;
        }
      }
    });

    url += queryString;
    header.headers.params = queryObj;
  }
  const { data } = await axios.put(url, bodyObj, header);
  return data;
}

export { Put };