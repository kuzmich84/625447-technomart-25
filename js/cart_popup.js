var cart = document.querySelectorAll(".goods_btn_cart");
var modalCart = document.querySelector(".cart_popup");
var close = document.querySelector(".cart_popup .popup_close");
var contBtn = document.querySelector(".continue_btn");


for (let i = 0; i< cart.length; i++){
  cart[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    modalCart.classList.add("cart_popup_show");
  });

}


close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalCart.classList.remove("cart_popup_show");
});

contBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalCart.classList.remove("cart_popup_show");
});

window.addEventListener("keydown", function (evt) {
  if(evt.keyCode === 27) {
    if(modalCart.classList.contains("cart_popup_show")){
      evt.preventDefault();
      modalCart.classList.remove("cart_popup_show");
    }
  }
});
