const axios = require("axios");
const { BASE_URL } = require("../constants/api");

async function Delete(path, token, bodyObj, queryObj) {
  let url = BASE_URL + path;
  if (queryObj) {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
      params: { queryObj },
    };
    const { data } = await axios.delete(url, bodyObj, config);
    return data;
  }
  const { data } = await axios.delete(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: bodyObj
  })
  return data;
}

export { Delete };