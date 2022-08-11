const home = document.querySelector("#home");

const options = {
  threshold: 0.5,
  rootMargin: "0px 0px 0px 0px",
};
const homeObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    entry.target.classList.add("slide-in");
    if (!entry.isIntersecting) {
      return;
    }
    observer.unobserve(entry.target);
  });
}, options);

homeObserver.observe(home);
