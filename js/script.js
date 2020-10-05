
let mySelect = function () {
  selectHeader.addEventListener("click", function () {
    selectHeader.classList.toggle("is-active");
  })
  let selectItem = document.querySelectorAll(".select__item");
  selectItem.forEach(item => {
    item.addEventListener("click", selectChoose)
  });
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
let selectHeader = document.querySelector(".select__header");
if (selectHeader != null) {
  console.log("select нашел элменет")
  mySelect();
} else {
  console.log("select элменет не нашел")
}


let promoSlider = function () {
  let buttons = document.querySelectorAll(".promo__slider-dot");
  let slides = document.querySelectorAll(".slider-item");
  let mainPage = document.body;
  for (let i = 0; i <= buttons.length - 1; i++) {
    buttons[i].onclick = function () {
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
    };
  }
};
let slider = document.querySelector(".slider");
if (slider != null) {
  console.log("slider нашел элменет")
  promoSlider();
} else {
  console.log("slider элменет не нашел")
}




