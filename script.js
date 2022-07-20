const menuBtn = document.querySelector(".menu");
const hideBtn = document.querySelector(".hide");
const sideBar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", function () {
  sideBar.classList.add("show");
});

hideBtn.addEventListener("click", function () {
  sideBar.classList.remove("show");
});
