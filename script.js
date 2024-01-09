var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "a4nra5Ku22ZGi5AoxjaknAKx6jLzxjJnbke77JraJM4OyyvWlzy9bpKK"
);
myHeaders.append(
  "Cookie",
  "__cf_bm=O8yWoF3q3MWs0RB29abgMXnt5Hfwf3WjDCBp74i6kBo-1704749783-1-AVbmdcvDzXOzE4+ZTqKXVXSadKn/pKVx4ZC0yg0pu+qpW2Uz5Nqwx9evI9ueD7v5XzaWJV4gw+8EXkGWB3nQKVQ="
);

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch("https://api.pexels.com/v1/search?query=nature", requestOptions)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
