const register_button = document.querySelector("register-button");
const form = document.querySelectorAll("form");

register_button.addEventListener("click", () => {
  form.reset();
});
