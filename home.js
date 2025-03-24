document.addEventListener("DOMContentLoaded", function () {
  let dropdownBtn = document.getElementById("dropdown-btn");
  let dropdownMenu = document.getElementById("dropdown-menu");

  // Toggle dropdown saat tombol ditekan
  dropdownBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Mencegah link berpindah halaman
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
  });

  // Menutup dropdown jika klik di luar area dropdown
  document.addEventListener("click", function (event) {
    if (
      !dropdownBtn.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.style.display = "none";
    }
  });
});
