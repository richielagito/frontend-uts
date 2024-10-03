document.querySelector(".form").addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form Submitted!");
  swal("Yay!", "Your account is registered successfully", "success", {
    closeOnClickOutside: false,
    closeOnEsc: false,
  }).then((value) => {
    if (value) {
      setTimeout(() => {
        window.location.href = "../screens/login.html";
      }, 200);
    }
  });
});
