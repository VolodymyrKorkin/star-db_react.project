// https://swapi.dev/api/people/1/

const getResource = async (url) => {
  const response = await fetch(url);
  const body = await response.json();
  return body;
};

getResource("https://swapi.dev/api/people/1/").then((body) => {
  console.log(body);
});

// fetch("https://swapi.dev/api/people/1/")
//   .then((response) => {
//     return response.json(); // return json from server
//   })
//   .then((bodyResponse) => {
//     console.log(bodyResponse); // return body response
//   });
