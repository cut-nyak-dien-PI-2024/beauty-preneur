

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

/*=============== FETCH API ===============*/
const url = `https://api.mockfly.dev/mocks/74037101-b7cd-43f3-846a-7a1e87ad952f/pelatihan`;

/*=============== First Load, We hit api ===============*/
const hitAPI = async (data) => {
  let { isData, isError, isLoading } = data;

  try {
    setTimeout(() => {
      isLoading = true;
    }, 1000);

    const getAPI = await fetch(url);
    if (getAPI.statys !== 200) getErrorComponent();
    const getJSON = await getAPI.json();
    isLoading = false; 
    isData = getJSON.data;

    return { isData, isLoading };
    } catch (err) {
      return getErrorComponent();
    }
  };