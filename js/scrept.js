var link = document.querySelector(".advertising-link");
var bg =  document.querySelector(".galery-body");

var popup = document.querySelector(".modal-price");
var close = popup.querySelector(".modal-close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  bg.classList.add("blur");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  bg.classList.remove("blur");
});
