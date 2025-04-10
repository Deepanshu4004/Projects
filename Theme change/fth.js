const body = document.body;
const toggleButton = document.getElementById("themeToggle");

toggleButton.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  body.setAttribute("data-theme", newTheme);
});