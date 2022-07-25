let headerListBtn1 = document.querySelector('.header__list-btn--1');
let headerListInside1 = document.querySelector('.header__inside--1');

// headerListBtn.forEach(function(btn) {
  headerListBtn1 .addEventListener('click',
  function () {
    headerListInside1.classList.toggle('is__active');
    });
// });

let headerListBtn2 = document.querySelector('.header__list-btn--2');
let headerListInside2 = document.querySelector('.header__inside--2');

  headerListBtn2 .addEventListener('click',
  function () {
    headerListInside2.classList.toggle('is__active');
    });

let headerListBtn3 = document.querySelector('.header__list-btn--3');
let headerListInside3 = document.querySelector('.header__inside--3');

  headerListBtn3 .addEventListener('click',
  function () {
    headerListInside3.classList.toggle('is__active');
    });

let headerListBtn4 = document.querySelector('.header__list-btn--4');
let headerListInside4 = document.querySelector('.header__inside--4');

  headerListBtn4 .addEventListener('click',
  function () {
    headerListInside4.classList.toggle('is__active');
    });

let headerListBtn5 = document.querySelector('.header__list-btn--5');
let headerListInside5 = document.querySelector('.header__inside--5');

  headerListBtn5 .addEventListener('click',
  function () {
    headerListInside5.classList.toggle('is__active');
    });

// new SimpleBar(document.getElementById('header__list-inside'), {
//   autoHide: false,
//   scrollbarMaxSize: 70,
//   forceVisible: true,
// });



const element = document.querySelector('.select');
const choices = new Choices(element, {
   searchEnabled: false,
   shouldSort: false,
   itemSelectText: '',
   position: 'bottom',
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 50,
  direction: 'horizontal',
  loop: false,
  slidesPerGroup: 3,
  slidesPerGroupAuto: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

new Accordion('.accordion-container', {
  duration: 1000,
});

const eventsSwiper = new Swiper('.events__swiper', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 50,
  direction: 'horizontal',
  loop: false,
  // slidesPerGroup: 3,
  // slidesPerGroupAuto: true,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const projectsSwiper = new Swiper('.project__swiper', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 50,
  direction: 'horizontal',
  loop: true,
  slidesPerGroup: 3,
  slidesPerGroupAuto: true,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const validation = new JustValidate('#form');

validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Введите имя'
    },
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
  ])
  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
  ]);

  ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.759478, 37.615455],
        zoom: 14,
        controls: ['zoomControl'],
    });
    var placemark = new ymaps.Placemark([55.759478, 37.615455], {},  {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-point.svg',
      iconImageSize: [20, 20],
     });
     myMap.geoObjects.add(placemark);
    }


