let mySelect = function () {
  let selectHeader = document.querySelectorAll(".select__header");
  let selectItem = document.querySelectorAll(".select__item");

  selectHeader.forEach(item => {
    item.addEventListener("click", selectToggle)
  });

  selectItem.forEach(item => {
    item.addEventListener("click", selectChoose)
  });

  function selectToggle() {
    this.parentElement.classList.toggle("is-active");
  }

  function selectChoose() {
    let text = this.innerText;
    let select = this.closest(".select");
    let currentText = select.querySelector(".select__current");
    currentText.innerText = text;
    select.classList.remove("is-active");
  }
  let catalog = document.querySelector(".catalog")
  catalog.addEventListener("click", function (e) {
    let select = document.querySelector(".select");
    if (!e.target.closest(".select")) {
      select.classList.remove("is-active");
    }
  });
};


let promoSlider = function () {
  let buttons = document.querySelectorAll(".promo__slider-dot");
  mainPage = document.body;

  let slides = document.querySelectorAll(".slider-item");

  for (let i = 0; i <= buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      mainPage.style.backgroundColor = "var(--special-slide-" + [i] + ")";
      if (i === 0) {
        buttons[0].classList.add('promo__slider-dot--current');
        buttons[1].classList.remove('promo__slider-dot--current');
        buttons[2].classList.remove('promo__slider-dot--current');
        slides[0].classList.add('slider-item--active');
        slides[1].classList.remove('slider-item--active');
        slides[2].classList.remove('slider-item--active');
      } else if (i === 1) {
        buttons[1].classList.add('promo__slider-dot--current');
        buttons[0].classList.remove('promo__slider-dot--current');
        buttons[2].classList.remove('promo__slider-dot--current');
        slides[1].classList.add('slider-item--active');
        slides[0].classList.remove('slider-item--active');
        slides[2].classList.remove('slider-item--active');
      } else if (i === 2) {
        buttons[2].classList.add('promo__slider-dot--current');
        buttons[0].classList.remove('promo__slider-dot--current');
        buttons[1].classList.remove('promo__slider-dot--current');
        slides[2].classList.add('slider-item--active');
        slides[0].classList.remove('slider-item--active');
        slides[1].classList.remove('slider-item--active');
      }
    });
  }
};
promoSlider();

mySelect();

