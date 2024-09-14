let getBody = document.getElementsByTagName("body")[0];

//dom change, close nav
document.addEventListener("DOMContentLoaded", () => {
  let getNavMobile = document.getElementById("container__header__mobile");
  getNavMobile.style.display = "none";
});

let getMenuMobile = document.getElementById("btn-menu");
let getCancel = document.getElementById("btn-cancel");

getMenuMobile.addEventListener("click", () => {
  let getNavMobile = document.getElementById("container__header__mobile");
  getNavMobile.style.display = "flex";
});

getCancel.addEventListener("click", () => {
  let getNavMobile = document.getElementById("container__header__mobile");
  getNavMobile.style.display = "none";
});
