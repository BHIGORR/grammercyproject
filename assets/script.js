const menuIcon = document.querySelector(".menu-icon")
const menuList = document.getElementById("menu-list")

menuIcon.addEventListener("click", () => {
    if (menuList.style.display === "none") {
        menuList.style.display = "flex";
      } else {
        menuList.style.display = "none";
      }

});