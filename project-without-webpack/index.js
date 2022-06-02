import "./scss/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import "jquery-circle-progress/dist/circle-progress.min.js";
let mode = localStorage.getItem("darkmode");
const toggleModeBtn = document.querySelector(".toggleMode");
const navBar = document.querySelector(".navbar");

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "enable");
  console.log(localStorage.darkmode);
};

const diableDarkMode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
  console.log(localStorage.darkmode);
};

if (mode === "enable") {
  enableDarkMode();
  navBar.classList.remove("bg-light");
  navBar.classList.add("bg-dark");
  toggleModeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
}

toggleModeBtn.addEventListener("click", function () {
  mode = localStorage.getItem("darkmode");
  if (mode !== "enable") {
    enableDarkMode();
    navBar.classList.remove("bg-light");
    navBar.classList.add("bg-dark");
    toggleModeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  } else {
    diableDarkMode();
    navBar.classList.add("bg-light");
    navBar.classList.remove("bg-dark");
    toggleModeBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
  }
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navBar.style.top = "0";
  } else {
    navBar.style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};

// scrolling animation
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

// jQuery circle progress

$(".circle")
  .circleProgress({
    startAngle: -Math.PI / 2,
    fill: "#121233",
  })
  .on("circle-animation-progress", function (e, progress, stepValue) {
    $(this)
      .find("span")
      .html(Math.round(stepValue * 100) + "%");
  });
