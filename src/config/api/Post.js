const axios = require("axios");
const { BASE_URL } = require("../constants/api");

async function Post(path, token, bodyObj, queryObj) {
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
    const config = {
      headers: { Authorization: `Bearer ${token}` },
      params: { queryObj },
    };
    const { data } = await axios.post(url, bodyObj, config);
    return data;
  }
  const { data } = await axios.post(url, bodyObj, header);
  return data;
}

export { Post };