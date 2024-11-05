const axios=require("axios");

async function getData(){
  const data = await axios.get("https://dog.ceo/api/breeds/image/random");
  const raw  = await data;
  console.log(raw.data);
}

getData();
