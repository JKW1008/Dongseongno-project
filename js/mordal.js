const buttons = document.querySelectorAll(".main_login_btn");
const dialog = document.querySelector("dialog");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    dialog.showModal();
  });
});

// dialog.addEventListener("close", () => {
//   console.log(dialog.returnValue);
// });