const btn = document.getElementById("btn-menu");
const close = document.getElementById("btn-close");
const navigation = document.getElementById("navigation");
btn.addEventListener("click", function () {
  navigation.classList.toggle("show");
});
close.addEventListener("click", function () {
  navigation.classList.toggle("show");
});
