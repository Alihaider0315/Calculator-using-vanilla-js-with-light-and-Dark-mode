const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
// --------------- calculator functionality
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (btn.id == "clear") {
      display.innerText = " ";
    } else if (btn.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.slice(0, string.length - 1); //or substr(0,string.length-1)
    } else if (btn.id == "equal") {
      new_str = display.innerText.toString();
      if (new_str == "") {
        display.innerText = "Error!";
        setTimeout(() => {
          display.innerText = " ";
        }, 1300);
      } else if (new_str.includes("sin")) {
        let text = new_str.slice(4, -1);
        let ans = eval(Math.sin(Number(text)));
        display.innerText = ans.toFixed(4);
      } else if (new_str.includes("cos")) {
        let text = new_str.slice(4, -1);
        let ans = eval(Math.cos(Number(text)));
        display.innerText = ans.toFixed(4);
      } else if (new_str.includes("tan")) {
        let text = new_str.slice(4, -1);
        let ans = eval(Math.tan(Number(text)));
        display.innerText = ans.toFixed(4);
      } else {
        display.innerText = eval(display.innerText);
      }

      // let ans = eval(display.innerText);
      // if (ans == undefined) {
      //   display.innerText = "Error!";
      //   setTimeout(() => {
      //     display.innerText = " ";
      //   }, 1300);
      // } else {
      //   display.innerText = ans;
      // }
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
