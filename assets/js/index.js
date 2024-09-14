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

/*=============== SHOW SCROLL UP ===============*/
function scrollUP() {
  const scrollUp = document.getElementById('scroll-up');

  if (window.scrollY >= 350) {
      scrollUp.classList.add('show-scroll');
  } else {
      scrollUp.classList.remove('show-scroll');
  }
}

window.addEventListener('scroll', scrollUP);

const scrollUpButton = document.getElementById('scroll-up');
scrollUpButton.addEventListener('click', (event) => {
  event.preventDefault();
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});


