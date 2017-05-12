var html = document.documentElement;
html.className = html.className.replace("no-js","js");

var button = document.querySelector(".offer-btn");
var popup = document.querySelector(".hotel-search");

button.addEventListener("click", function (event) {
event.preventDefault();
if (popup.classList.contains("hotel-show"){
popup.classList.remove("hotel-show");
} else {
popup.classList.add("hotel-show");
}
});
