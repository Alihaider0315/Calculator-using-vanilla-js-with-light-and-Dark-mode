const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
// --------------- calc functionality
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (btn.id == "clear") {
      display.innerText = " ";
    } else if (btn.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.slice(0, string.length - 1); //or substr(0,string.length-1)
    } else if (btn.id == "equal") {
      let ans = eval(display.innerText);
      if (ans == undefined) {
        display.innerText = "Error!";
        setTimeout(() => {
          display.innerText = " ";
        }, 1300);
      } else {
        display.innerText = ans;
      }
    } else {
      display.innerText += btn.id;
    }
  });
});
// --------- theme toggler button
const themeToggleBtn = document.querySelector(".theme-toggler");
const calc = document.querySelector(".calculator");
themeToggleBtn.addEventListener("click", () => {
  themeToggleBtn.classList.toggle("active");
  calc.classList.toggle("dark");
  themeToggleBtn.classList.toggle("toggle-btn-move");
});
