
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
  mySelect();
} else {
};


let promoSlider = function () {
  let buttons = document.querySelectorAll(".promo__slider-dot");
  let slides = document.querySelectorAll(".slider-item");
  let mainPage = document.body;
  for (let i = 0; i <= buttons.length - 1; i++) {
    buttons[i].onclick = function () {
      mainPage.style.backgroundColor = "var(--special-slide-" + [i] + ")";
      if (i === 0) {
        buttons[0].classList.add("promo__slider-dot--current");
        buttons[1].classList.remove("promo__slider-dot--current");
        buttons[2].classList.remove("promo__slider-dot--current");
        slides[0].classList.add("slider-item--active");
        slides[1].classList.remove("slider-item--active");
        slides[2].classList.remove("slider-item--active");
      } else if (i === 1) {
        buttons[1].classList.add("promo__slider-dot--current");
        buttons[0].classList.remove("promo__slider-dot--current");
        buttons[2].classList.remove("promo__slider-dot--current");
        slides[1].classList.add("slider-item--active");
        slides[0].classList.remove("slider-item--active");
        slides[2].classList.remove("slider-item--active");
      } else if (i === 2) {
        buttons[2].classList.add("promo__slider-dot--current");
        buttons[0].classList.remove("promo__slider-dot--current");
        buttons[1].classList.remove("promo__slider-dot--current");
        slides[2].classList.add("slider-item--active");
        slides[0].classList.remove("slider-item--active");
        slides[1].classList.remove("slider-item--active");
      }
    };
  }
};
let slider = document.querySelector(".slider");
if (slider != null) {
  promoSlider();
} else {
};

let contactsPopup = document.querySelector(".contacts-popup ");
if (contactsPopup != null) {
  let contactBody = contactsPopup.querySelector(".contacts-popup__body");
  let popupBtn = document.querySelector(".contacts__btn");
  popupBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    contactsPopup.classList.add("contacts-popup--open");
  });
  let contactsPopupClose = document.querySelector(".contacts-popup__close");
  contactsPopupClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    contactsPopup.classList.remove("contacts-popup--open");
    contactBody.classList.remove("contacts-popup__body--error");
    contactsForm.reset();
  });
  let contactsForm = contactsPopup.querySelector(".contacts-popup__form");
  let loginName = contactsPopup.querySelector("#contact-name");
  let loginEmail = contactsPopup.querySelector("#contact-email");
  contactsForm.addEventListener("submit", function (evt) {
    if (!loginName.value || !loginEmail.value) {
      evt.preventDefault();
      contactBody.classList.remove("contacts-popup__body--error");
      contactBody.offsetWidth = contactBody.offsetWidth;
      contactBody.classList.add("contacts-popup__body--error");
    } else {
      localStorage.setItem("login", loginName.value);
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (contactsPopup.classList.contains("contacts-popup--open")) {
        evt.preventDefault();
        contactsPopup.classList.remove("contacts-popup--open");
        contactBody.classList.remove("contacts-popup__body--error");
      }
    }
  });
};

