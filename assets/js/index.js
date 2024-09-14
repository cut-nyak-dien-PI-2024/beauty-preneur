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
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link'); // Change 'add' to 'remove'
        }
    });
}

window.addEventListener('scroll', scrollActive);

~
