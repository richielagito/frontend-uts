document.querySelector(".form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents the default form submission behavior
  console.log("Form submitted!");
  // Get user input (optional, for future authentication or validation)
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username == "admin" && password == "admin") {
    window.location.href = "../screens/homepage.html";
  } else {
    swal("Oh No!", "Your account is not registered yet", "error");
  }
});
