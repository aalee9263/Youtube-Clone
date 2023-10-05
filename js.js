const menuButton = document.querySelector(".menu-button");
const sidebarContent = document.querySelector(".sidebar-content");

menuButton.addEventListener("click", () => {
  sidebarContent.classList.toggle("sidebar-content-open");
});
