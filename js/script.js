let headerItemInside = document.querySelectorAll('.header__item-inside')
let headerListInside = document.querySelectorAll('.header__inside');
let headerListBtn = document.querySelectorAll('.header__list-btn');

headerListBtn.forEach(function(btn) {
   btn.addEventListener('click',
   function () {
     let target = btn.nextElementSibling
     headerListInside.forEach(function(el) {
       if (el !== target) {
        el.classList.remove('is__active')
       }
     })
     target.classList.toggle('is__active');
   });
  });

headerItemInside.forEach(function(el) {
  el.addEventListener('click', function () {
    headerListInside.forEach(function(element) {
      element.classList.remove('is__active');
  })
})
});

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

const swiperHero = new Swiper('.hero__swipper', {
  direction: 'horizontal',
  loop: true,
});

const element = document.querySelector('.select');
const choices = new Choices(element, {
   searchEnabled: false,
   shouldSort: false,
   itemSelectText: '',
   position: 'auto',
});

const swiper = new Swiper('.gallery__swipper', {
  slidesPerView: 1,
  spaceBetween: 50,
  direction: 'horizontal',
  slidesPerGroup: 1,
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

    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,

    },

    768: {
      slidesPerView: 2,
      spaceBetween: 38,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
    },

    1700: {
      slidesPerView: 3,
      spaceBetween: 50,
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
let tabsBtn = document.querySelectorAll('.catalog__btn');
let tabsItem = document.querySelectorAll('.catalog__cards');
tabsBtn.forEach(function(element){
    element.addEventListener('click', function(e) {
        const path=e.currentTarget.dataset.path;
          tabsItem.forEach(function(element){element.classList.remove('catalog__cards--active')});
          document.querySelector(`[data-target="${path}"]`).classList.add('catalog__cards--active');
    });
});

const eventsSwiper = new Swiper('.events__swiper', {
  slidesPerView: 1,
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

    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 27,
      slidesPerGroup: 3,
    },

    1920: {
      slidesPerView: 3,
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
  slidesPerView: 1,
  spaceBetween: 50,
  direction: 'horizontal',
  watchSlidesProgress: true,
  slidesPerGroup: 1,
  loop: false,

  breakpoints: {

    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 34,
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
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

var selector = document.getElementById("tel");
var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

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
      validator() {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      },
      errorMessage: 'Введите телефон',
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
  let menuLinks = document.querySelectorAll('.nav__link')
  let menuBtn = document.querySelector('.header__btn')
  let search = document.querySelector('.header__search');
  let searchMobile = document.querySelector('.header__search-mobile')

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
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
    menuBtn.classList.remove('header__btn--active')
  })
  })

  searchMobile.addEventListener('click',
    function () {
      searchMobile.classList.toggle('invisible');
      search .classList.toggle('header__search--active');
      document.body.classList.toggle('stop-scroll');
      burger.classList.toggle('header__burger--hidden');
    })
