const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

// Dropdown and mobile menu close together so focus never lands behind stale panels.
function closeDropdown() {
  if (!dropdownToggle || !dropdownMenu) return;
  dropdownToggle.setAttribute("aria-expanded", "false");
  dropdownMenu.classList.remove("is-open");
}

function closeMenu() {
  if (!navToggle || !navMenu) return;
  navToggle.setAttribute("aria-expanded", "false");
  navMenu.classList.remove("is-open");
  closeDropdown();
}

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  navMenu.classList.toggle("is-open", !isOpen);
});

dropdownToggle.addEventListener("click", () => {
  const isOpen = dropdownToggle.getAttribute("aria-expanded") === "true";
  dropdownToggle.setAttribute("aria-expanded", String(!isOpen));
  dropdownMenu.classList.toggle("is-open", !isOpen);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".navbar")) closeMenu();
  if (!event.target.closest(".dropdown")) closeDropdown();
});
