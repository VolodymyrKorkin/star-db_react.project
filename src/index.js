/* eslint-disable no-useless-concat */
// https://swapi.dev/api/people/1/

const getResource = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Could not fetch ${url}` + `, received ${response.status}`);
  }

  const body = await response.json();
  return body;
};

getResource("https://swapi.dev/api/people/123123/")
  .then((body) => {
    console.log(body);
  })
  .catch((err) => {
    console.error("Could not fetch", err);
  });

// fetch("https://swapi.dev/api/people/1/")
//   .then((response) => {
//     return response.json(); // return json from server
//   })
//   .then((bodyResponse) => {
//     console.log(bodyResponse); // return body response
//   });
