const httpGet = async (url, callback) => {
  return fetch(url).then(response => response.json());
};

async function handlePostResponse(response) {
  // log headers
  console.log("====== headers ======");
  response.headers.forEach((value, name) => {
    console.log(`${name}: ${value}`);
  });

  if (!response.ok) {
    throw new Error(response.status);
  }

  if (response.status === 201) {
    const location = response.headers.get('Location');
    return await httpGet("http://localhost:8080" + location);
  }

  return response.json();
}

const httpPost = async (url, data) => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response => {
    return handlePostResponse(response);
  }).catch(error => {
    console.error("HTTP error: " + error);
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