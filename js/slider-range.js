var html5Slider = document.getElementById("slider");

noUiSlider.create(html5Slider, {
  start: [100, 500],
  connect: true,
  range: {
    "min": 0,
    "max": 730
  }
});

var inputNumber2 = document.getElementById("input-number-2");
var inputNumber = document.getElementById("input-number");
html5Slider.noUiSlider.on("update", function (values, handle) {

  var value = values[handle];

  if (handle) {
    inputNumber2.value = Math.round(value);
  } else {
    inputNumber.value = Math.round(value);
  }
});
inputNumber2.addEventListener("change", function () {
  html5Slider.noUiSlider.set([null, this.value]);
});
inputNumber.addEventListener("change", function () {
  html5Slider.noUiSlider.set([null, this.value]);
});
