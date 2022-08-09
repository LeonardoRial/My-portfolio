const sections = document.querySelectorAll("article");
const navList = document.querySelectorAll(`[aria-selected]`);

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navList.forEach((tab) => {
    if (!tab.classList.contains(current))
      tab.setAttribute("aria-selected", false);
    else tab.setAttribute("aria-selected", true);
  });
});
