const api = "https://jsonplaceholder.typicode.com/";

function getUser(url) {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.status === 200 && request.readyState === 4) {
      const response = JSON.parse(request.responseText);
      console.log(request);
    }
  });
  request.open("GET", api, true);
  request.send();
}
getUser(api);
