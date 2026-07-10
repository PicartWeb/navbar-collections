const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const backdrop = document.querySelector(".backdrop");

// The backdrop remains hidden until the sidebar is opened to avoid blocking clicks.
function closeMenu() {
  navToggle.setAttribute("aria-expanded", "false");
  navMenu.classList.remove("is-open");
  backdrop.classList.remove("is-visible");
  setTimeout(() => {
    if (!navMenu.classList.contains("is-open")) backdrop.hidden = true;
  }, 240);
}

function openMenu() {
  navToggle.setAttribute("aria-expanded", "true");
  navMenu.classList.add("is-open");
  backdrop.hidden = false;
  requestAnimationFrame(() => backdrop.classList.add("is-visible"));
}

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  isOpen ? closeMenu() : openMenu();
});

backdrop.addEventListener("click", closeMenu);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".navbar") && !event.target.closest(".nav-menu")) closeMenu();
});
