const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const megaToggle = document.querySelector(".mega-toggle");
const megaMenu = document.querySelector(".mega-menu");

// The mega menu shares Escape and outside-click handling with the mobile menu.
function closeMega() {
  megaToggle.setAttribute("aria-expanded", "false");
  megaMenu.classList.remove("is-open");
}

function closeMenu() {
  navToggle.setAttribute("aria-expanded", "false");
  navMenu.classList.remove("is-open");
  closeMega();
}

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  navMenu.classList.toggle("is-open", !isOpen);
});

megaToggle.addEventListener("click", () => {
  const isOpen = megaToggle.getAttribute("aria-expanded") === "true";
  megaToggle.setAttribute("aria-expanded", String(!isOpen));
  megaMenu.classList.toggle("is-open", !isOpen);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".navbar")) closeMenu();
  if (!event.target.closest(".mega")) closeMega();
});
