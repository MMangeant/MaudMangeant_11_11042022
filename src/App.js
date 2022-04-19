async function getDataJson() {
  return fetch('./data/annonces.json')
    .then((res) => res.json());
}

async function getData() {
  const photographers = await getDataJson();
  return photographers;
}



console.log(getData());