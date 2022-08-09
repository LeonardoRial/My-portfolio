const burgerBox = document.querySelector(".burger");
const menu = document.querySelector(".navigation-menu");
const links = document.querySelectorAll(`[role="tab"]`);
const html = document.querySelector("html");

burgerBox.addEventListener("click", burgerAnimation);
links.forEach((link) => {
  link.addEventListener("click", burgerAnimation);
});

function burgerAnimation() {
  burgerBox.classList.toggle("animation");
  menu.classList.toggle("show");
  noScroll();
}

function noScroll() {
  if (menu.classList.contains("show") && screen.width < 801) {
    html.style.overflow = "hidden";
  } else {
    html.style.overflow = "visible";
  }
}
