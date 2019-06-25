var writeUs = document.querySelector("#write_us");
var modal = document.querySelector(".write-us_popup");
var close = document.querySelector(".write-us_popup .popup_close");
var yourName = modal.querySelector("[name=name]");
var form = modal.querySelector("#popup_form");
var email = modal.querySelector("#email");
var text = modal.querySelector("#message");
var storageName = "";
var storageEmail = "";
var overlay = document.querySelector(".overlay")

var isStorageSupport = true;
try {
  storageName = localStorage.getItem("yourName");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}


writeUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("write-us_popup_show");
  modal.classList.add("overlay_show");

  if (storageName) {
    yourName.value = storageName;
    email.focus();
    if (storageEmail) {
      email.value = storageEmail;
      text.focus();
    }
  } else {
    yourName.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("write-us_popup_show");
  modal.classList.remove("overlay_show");

});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("write-us_popup_show")) {
      evt.preventDefault();
      modal.classList.remove("write-us_popup_show");
      modal.classList.remove("overlay_show");
    }
  }
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!yourName.value || !email.value || !text.value) {
    console.log('need fill');
  } else {
    if (isStorageSupport) {
      localStorage.setItem("yourName", yourName.value);
      localStorage.setItem("email", email.value);
    }
  }
});

