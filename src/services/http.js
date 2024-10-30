const httpGet = async (url, callback) => {
  return fetch(url).then(response => response.json());
};

const httpPost = async (url, data) => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response => response.json());
}

export { httpGet, httpPost };