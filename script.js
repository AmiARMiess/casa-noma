const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

function setMenuOpen(isOpen) {
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.querySelector(".sr-only").textContent = isOpen ? "Close navigation menu" : "Open navigation menu";
  navigation.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
}

menuToggle.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    setMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuToggle.focus();
  }
});

document.querySelector("#current-year").textContent = new Date().getFullYear();

const newsletterForm = document.querySelector(".newsletter-form");
const emailInput = newsletterForm.querySelector('input[type="email"]');
const formMessage = document.querySelector(".form-message");

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!emailInput.validity.valid) {
    formMessage.textContent = "Pop in a valid email address and try again.";
    emailInput.focus();
    return;
  }

  formMessage.textContent = "You’re on the list. A little more lovely, headed your way.";
  newsletterForm.reset();
});
