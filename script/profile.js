document.getElementById("backButton").addEventListener("click", function () {
  window.location.href = "../screens/homepage.html";
});

document.getElementById("savedTab").addEventListener("click", function (e) {
  e.preventDefault();

  // Ubah tab menjadi aktif
  document.getElementById("createdTab").classList.remove("active");
  document.getElementById("savedTab").classList.add("active");

  // Tampilkan konten saved
  document.getElementById("createdContent").style.display = "none";
  document.getElementById("savedContent").style.display = "grid";
});

document.getElementById("createdTab").addEventListener("click", function (e) {
  e.preventDefault();

  // Ubah tab menjadi aktif
  document.getElementById("savedTab").classList.remove("active");
  document.getElementById("createdTab").classList.add("active");

  // Tampilkan konten created
  document.getElementById("savedContent").style.display = "none";
  document.getElementById("createdContent").style.display = "grid";
});
