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

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById('header')
  if (this.scrollY >= 50) {
      header.classList.add('scroll-header')
  }
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER POPULAR ===============*/
var swiper = new Swiper(".popular__container", {

  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPreview: 'auto',
  loop: true,

  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});~
