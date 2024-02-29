"use strict";

import { getData } from "./fetch.js";

import userCard from "../components/userCard.js";
import cardProduct from "../components/cardProduct.js";

const renderArea = document.querySelector("#render-area");
const products = await getData("products");

const renderAreaUsername = document.querySelector("#render-area-username");
const usernames = await getData("usernames");

console.log(products);
products.map((product) => {
  renderArea.innerHTML += cardProduct(product);
});

console.log(usernames);
usernames.map((username) => {
  renderAreaUsername.innerHTML += userCard(username);
});

// fetch(BASE_URL).then((res) => res.json()).then((data) => data.map((product)=>{
//     renderArea.innerHTML += cardProduct(product);
// }))
