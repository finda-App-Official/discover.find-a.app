//

const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");
const slide4 = document.getElementById("slide4");
const slide5 = document.getElementById("slide5");
const slide6 = document.getElementById("slide6");

//

slide1.addEventListener("scroll", () => {});
setInterval(() => {
  slide1.classList.add("slide-in-right");
}, 1000);
