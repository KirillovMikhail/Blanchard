let headerListBtn1 = document.querySelector('.header__list-btn--1');
let headerListInside1 = document.querySelector('.header__inside--1');
let headerItemInside = document.querySelectorAll('.header__item-inside ')
let headerListInside = document.querySelectorAll('.header__inside');
let headerListBtn = document.querySelectorAll('.header__list-btn');

//  headerListBtn.forEach(function(btn) {
//    btn.addEventListener('click',
//    function () {
//    headerListInside.forEach(function (item) {
//     item.classList.remove('is__active');
//   });
//    });
//   });


  headerListBtn1 .addEventListener('click',
  function () {
    //headerListInside.forEach(function (item) {
    //  item.classList.remove('is__active');
    //});
    headerListInside2.classList.remove('is__active');
    headerListInside3.classList.remove('is__active');
    headerListInside4.classList.remove('is__active');
    headerListInside5.classList.remove('is__active');
    headerListInside1.classList.toggle('is__active');
    });




let headerListBtn2 = document.querySelector('.header__list-btn--2');
let headerListInside2 = document.querySelector('.header__inside--2');

  headerListBtn2 .addEventListener('click',
  function () {
    headerListInside1.classList.remove('is__active');
    headerListInside3.classList.remove('is__active');
    headerListInside4.classList.remove('is__active');
    headerListInside5.classList.remove('is__active');
    headerListInside2.classList.toggle('is__active');
    });

let headerListBtn3 = document.querySelector('.header__list-btn--3');
let headerListInside3 = document.querySelector('.header__inside--3');

  headerListBtn3 .addEventListener('click',
  function () {
    headerListInside1.classList.remove('is__active');
    headerListInside2.classList.remove('is__active');
    headerListInside4.classList.remove('is__active');
    headerListInside5.classList.remove('is__active');
    headerListInside3.classList.toggle('is__active');
    });

let headerListBtn4 = document.querySelector('.header__list-btn--4');
let headerListInside4 = document.querySelector('.header__inside--4');

  headerListBtn4 .addEventListener('click',
  function () {
    headerListInside1.classList.remove('is__active');
    headerListInside2.classList.remove('is__active');
    headerListInside3.classList.remove('is__active');
    headerListInside5.classList.remove('is__active');
    headerListInside4.classList.toggle('is__active');
    });

let headerListBtn5 = document.querySelector('.header__list-btn--5');
let headerListInside5 = document.querySelector('.header__inside--5');

  headerListBtn5 .addEventListener('click',
  function () {
    headerListInside1.classList.remove('is__active');
    headerListInside2.classList.remove('is__active');
    headerListInside3.classList.remove('is__active');
    headerListInside4.classList.remove('is__active');
    headerListInside5.classList.toggle('is__active');
    });

// new SimpleBar(document.getElementById('header__list-inside'), {
//   autoHide: false,
//   scrollbarMaxSize: 70,
//   forceVisible: true,
// });

headerItemInside.forEach(function(el) {
  el.addEventListener('click', function () {
    headerListInside.forEach(function(element) {
      element.classList.remove('is__active');
  })
})
});





const element = document.querySelector('.select');
const choices = new Choices(element, {
   searchEnabled: false,
   shouldSort: false,
   itemSelectText: '',
   silent: true,
});

const swiper = new Swiper('.gallery__swipper', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 50,
  direction: 'horizontal',

  slidesPerGroup: 3,
  preloadImages: false,
  updateOnImagesReady: false,

  // slideToClickedSlide: true,



  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
},

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

//swiper.updateSlides();

new Accordion('.accordion-container', {
  duration: 1000,
});

let galerySlider = document.querySelector('.swiper-slide--2');
let galeryModal = document.querySelector('.modal');

galerySlider .addEventListener('click',
  function () {
    galeryModal.classList.toggle('is__active');
    });

    // catalog
let tabsBtn = document.querySelectorAll('.gallery__ac-item');
let tabsItem = document.querySelectorAll('.gallery__cards');
tabsBtn.forEach(function(element){
    element.addEventListener('click', function(e) {
        const path=e.currentTarget.dataset.path;

          // tabsBtn.forEach(function(btn) {btn.classList.remove('works__tabs--active')});
          // e.currentTarget.classList.add('works__tabs--active');

          tabsItem.forEach(function(element){element.classList.remove('gallery__cards--active')});
          document.querySelector(`[data-target="${path}"]`).classList.add('gallery__cards--active');
    });
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

// tippy('.project__tooltip', {
//     content: 'Глава 2, страница 176',
//   maxWidth: 264,
//   hideOnClick: false,
//   trigger: 'click',
// });

tippy('.project__tooltip--1', {
  maxWidth: 264,
  content: 'Пример современных тенденций — современная методология разработки',
});

tippy('.project__tooltip--2', {
  maxWidth: 264,
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
});

tippy('.project__tooltip--3', {
  maxWidth: 264,
  content: 'В стремлении повысить качество',
});

const projectsSwiper = new Swiper('.project__swiper', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 50,
  direction: 'horizontal',
  watchSlidesProgress: true,
  slidesPerGroup: 3,
  loop: true,
  // slidesPerView: 3,




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




