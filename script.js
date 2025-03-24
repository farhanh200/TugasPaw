document.getElementById("scrollButton").addEventListener("click", function () {
  document.getElementById("p1").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scrollButton1").addEventListener("click", function () {
  document.getElementById("p2").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scrollButton2").addEventListener("click", function () {
  document.getElementById("p3").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("scrollButton3").addEventListener("click", function () {
  document.getElementById("p4").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("scrollButton4").addEventListener("click", function () {
  document.getElementById("p5").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("button5").addEventListener("click", function () {
  document
    .getElementById("scrollButton")
    .scrollIntoView({ behavior: "smooth" });
});
window.addEventListener("scroll", function () {
  let sun = document.getElementById("sun");
  let scrollValue = window.scrollY;

  // Matahari bergerak ke bawah saat scroll, tapi tetap berputar dengan CSS animation
  sun.style.transform = `translateY(${scrollValue * 0.5}px)`;
});
document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
});
