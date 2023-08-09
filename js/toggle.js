
const mainMenuTitle = document.querySelectorAll(".main_menu_title");
const subMenues = document.querySelectorAll(".sub_menu");

console.log(subMenues);

for (let i = 0; i < mainMenuTitle.length; i++) {
  mainMenuTitle[i].addEventListener("click", () => {
    subMenues[i].classList.toggle("show");
    for (let j = 0; j < mainMenuTitle.length; j++) {
      if (i !== j) {
        subMenues[j].classList.remove("show");
      }
    }
  });
}
