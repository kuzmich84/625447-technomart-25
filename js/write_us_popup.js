var writeUs = document.querySelector("#write_us");
var modal = document.querySelector(".write-us_popup");
var close = document.querySelector(".write-us_popup .popup_close");

writeUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("write-us_popup_show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("write-us_popup_show");
});

window.addEventListener("keydown", function (evt) {
  if(evt.keyCode === 27) {
    if(modal.classList.contains("write-us_popup_show")){
      evt.preventDefault();
      modal.classList.remove("write-us_popup_show");
      }
  }
});


