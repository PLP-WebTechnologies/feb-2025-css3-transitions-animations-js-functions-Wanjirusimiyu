// Load saved theme preference from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.body.classList.add(savedTheme);
} else {
  document.body.classList.add("light"); // default theme
}

// Toggle Theme
const toggleBtn = document.getElementById("toggleThemeBtn");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");

  // Save new preference
  const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", currentTheme);
});

// Animate Box on Button Click
const box = document.getElementById("box");
const animateBtn = document.getElementById("animateBoxBtn");

animateBtn.addEventListener("click", () => {
  box.classList.toggle("move");
});
