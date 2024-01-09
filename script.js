import { displayCards } from "./components.js";

var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "a4nra5Ku22ZGi5AoxjaknAKx6jLzxjJnbke77JraJM4OyyvWlzy9bpKK"
);

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};
const row = document.querySelector(".row");
fetch("https://api.pexels.com/v1/search?query=auto", requestOptions)
  .then((response) => response.json())
  .then((results) => {
    const result = results.photos;
    result.map((result) => {
      row.innerHTML += displayCards(
        result.src.large2x,
        result.alt,
        result.photographer
      );
    });
  })
  .catch((error) => console.log("error", error));

const input = document.querySelector(".input");
