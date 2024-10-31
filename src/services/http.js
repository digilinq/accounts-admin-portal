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
  }).then(response => {
    const status = response.status;
    console.log("status: " + status);

    if (!response.ok) {
      throw new Error("HTTP error, status = " + status);
    }

    // if (status === 201) {
    //   return "user created";
    // }

    return response.text()
  }).then(text => {
    if (text)
      console.log("text:[" + text + "]");
    return text;
  });
}

const httpDelete = async (url) => {
  return fetch(url, {
    method: "DELETE",
  }).then(response => {
    const status = response.status;
    if (!response.ok) {
      throw new Error("HTTP error, status = " + status);
    }
  });
}

export { httpGet, httpPost, httpDelete };