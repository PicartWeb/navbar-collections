const navToggle = document.querySelector(".nav-toggle");
const menus = document.querySelectorAll(".nav-menu");

// The centered desktop layout becomes two stacked mobile menu groups.
function closeMenu() {
  navToggle.setAttribute("aria-expanded", "false");
  menus.forEach((menu) => menu.classList.remove("is-open"));
}

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  menus.forEach((menu) => menu.classList.toggle("is-open", !isOpen));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".navbar")) closeMenu();
});
