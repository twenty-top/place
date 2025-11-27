// ==========================
// Brand name replacement
// ==========================
const BRAND_NAME = "Ping Pong Arcade";
document.querySelectorAll(".brand-name").forEach(e => e.textContent = BRAND_NAME);

// ==========================
// Navigation toggle
// ==========================
const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav-toggle");
if (toggle) {
  toggle.addEventListener("click", () => 
    nav.setAttribute("aria-expanded", nav.getAttribute("aria-expanded") === "true" ? "false" : "true")
  );
}

// ==========================
// Footer year update
// ==========================
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
