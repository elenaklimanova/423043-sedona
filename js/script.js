var html = document.documentElement;
html.className = html.className.replace("no-js","js");

var button = document.querySelector(".offer-btn");
var popup = document.querySelector(".hotel-search");
var arrival = popup.querySelector("[name=arrival]");
var leaving = popup.querySelector("[name=leaving]");
var adults = popup.querySelector("[name=adults]");
var childs = popup.querySelector("[name=childs]");

popup.classList.add("hotel-search-closed");

button.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.toggle("hotel-search-closed");
  popup.classList.add("hotel-search-animation");
  arrival.focus();
});

popup.addEventListener("submit", function (event) {
  if (!arrival.value || !leaving.value || !adults.value || !childs.value) {
    event.preventDefault();
    popup.classList.remove("hotel-search-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("hotel-search-error");
  }
});
