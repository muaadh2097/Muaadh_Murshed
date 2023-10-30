/*=============================== toggle style switcher ==========================*/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});
// hide the style switcher on scroll//

window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});
/*===============================them colors ==========================*/

// const alternateStyles = document.querySelectorAll(".alternate-style");
// function setActiveStyle(color) {
//   localStorage.setItem("color", color);
//   changeColor();
// }
// function changeColor() {
//   alternateStyles.forEach((style) => {
//     if (localStorage.getItem("color") === stle.getAttribute("title")) {
//       style.removeAttribute("disabled");
//     } else {
//       style.removeAttribute("disabled", "true");
//     }
//   });
// }

const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

/*==========================theme light and dark mod ==================*/
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});
