var map = document.querySelector(".open_map");
var modalMap = document.querySelector(".map_popup");
var close = document.querySelector(".map_popup .popup_close");


map.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.add("map_popup_show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.remove("map_popup_show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalMap.classList.contains("map_popup_show")) {
      evt.preventDefault();
      modalMap.classList.remove("map_popup_show");
    }
  }
});
