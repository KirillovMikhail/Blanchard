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

headerItemInside.forEach(function(el) {
  el.addEventListener('click', function () {
    headerListInside.forEach(function(element) {
      element.classList.remove('is__active');
  })
})
});

const swiperHero = new Swiper('.hero__swipper', {
  direction: 'horizontal',
  loop: true,
  // autoplay: {
  //   delay: 5000,
  // },
});

const element = document.querySelector('.select');
const choices = new Choices(element, {
   searchEnabled: false,
   shouldSort: false,
   itemSelectText: '',
   silent: true,
});

const swiper = new Swiper('.gallery__swipper', {
  slidesPerView: 3,
  spaceBetween: 50,
  direction: 'horizontal',
  slidesPerGroup: 3,
  preloadImages: false,
  updateOnImagesReady: false,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
},

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {

    // 320: {
    //   slidesPerView: 2,
    //   spaceBetween: 20
    // },

    768: {
      slidesPerView: 2,
      spaceBetween: 38,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 34,
    },

    1920: {
      slidesPerView: 3,
      spaceBetween: 50,
    }
  }

});

new Accordion('.accordion-container', {
  duration: 1000,
});

let galerySlider = document.querySelector('.swiper-slide--2');
let galeryModal = document.querySelector('.modal');

// galerySlider .addEventListener('click',
//   function () {
//     galeryModal.classList.toggle('is__active');
//     });

let tabsBtn = document.querySelectorAll('.catalog__ac-item');
let tabsItem = document.querySelectorAll('.catalog__cards');
tabsBtn.forEach(function(element){
    element.addEventListener('click', function(e) {
        const path=e.currentTarget.dataset.path;
          tabsItem.forEach(function(element){element.classList.remove('catalog__cards--active')});
          document.querySelector(`[data-target="${path}"]`).classList.add('catalog__cards--active');
    });
});

const eventsSwiper = new Swiper('.events__swiper', {
  slidesPerView: 3,
  spaceBetween: 50,
  direction: 'horizontal',
  loop: false,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {

    // 320: {
    //   slidesPerView: 2,
    //   spaceBetween: 20
    // },

    768: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },

    1024: {
      spaceBetween: 27,
      slidesPerGroup: 3,
    },

    1920: {
      spaceBetween: 50,
    }
  }

});

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
  slidesPerView: 3,
  spaceBetween: 50,
  direction: 'horizontal',
  watchSlidesProgress: true,
  slidesPerGroup: 3,
  loop: true,

  breakpoints: {

    // 320: {
    //   slidesPerView: 2,
    //   spaceBetween: 20
    // },

    768: {
      slidesPerView: 2,
      spaceBetween: 34
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    }
  },

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
      errorMessage: 'Имя слишком короткое',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Имя слишком длинное',
    },
    {
    rule: 'customRegexp',
    value: /^[А-ЯЁ]+$/i,
    errorMessage: 'Недопустимый формат'
    },
  ])
  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Введите телефон',
    },
    {
      rule: 'number',
      errorMessage: 'Недопустимый формат',
    },
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'Номер слишком короткий',
    },
    {
      rule: 'maxLength',
      value: 11,
      errorMessage: 'Номер слишком длиный',
    },
  ]);

  ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.759478, 37.615455],
        zoom: 14,
        controls: ['zoomControl'],
    });

    var geolocationControl = new ymaps.control.GeolocationControl({
      options: {noPlacemark: true}
  });
  geolocationControl.events.add('locationchange', function (event) {
      var position = event.get('position'),
      // При создании метки можно задать ей любой внешний вид.
          locationPlacemark = new ymaps.Placemark(position);

      myMap.geoObjects.add(locationPlacemark);
      // Установим новый центр карты в текущее местоположение пользователя.
      myMap.panTo(position);
  });

  myMap.controls.add(geolocationControl);

// zoomControl = new ymaps.control.ZoomControl({options: {position: {right: 20}]}});
    var placemark = new ymaps.Placemark([55.759478, 37.615455], {},  {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-point.svg',
      iconImageSize: [20, 20],
     });
     myMap.geoObjects.add(placemark);
    }

  let burger = document.querySelector('.burger')
  let menu = document.querySelector('.header__nav')
  let menuLinks = menu.querySelectorAll('.nav__link')
  let menuBtn = document.querySelector('.header__btn')
  let search = document.querySelector('.header__search');
  let searchMobile = document.querySelector('.header__search-mobile')
  // let inputSearch = document.querySelector('.header__search');

  burger.addEventListener('click',
    function () {
      burger.classList.toggle('header__burger--active');
      menu.classList.toggle('header__nav--active');
      document.body.classList.toggle('stop-scroll');
      menuBtn.classList.toggle('header__btn--active')
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('header__burger--active');
    menu.classList.remove('.header__nav--active');
    document.body.classList.remove('stop-scroll');
  })


  })

  searchMobile.addEventListener('click',
    function () {
      searchMobile.classList.toggle('invisible');
      search .classList.toggle('header__search--active');
      document.body.classList.toggle('stop-scroll');
      burger.classList.toggle('header__burger--hidden');
    })
