
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
mySelect();


let promoSlider = function () {
  let buttons = document.querySelectorAll(".promo__slider-dot");
  mainPage = document.body;

  for (let i = 0; i <= buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      mainPage.style.backgroundColor = "var(--special-slide-" + [i] + ")";
      console.log("нажал кнопку " + [i]);
    });
  }
};

promoSlider();


