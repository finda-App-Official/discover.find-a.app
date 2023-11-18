function openNav() {
  let closed = document.getElementById("nav-more-color");
  let opened = document.getElementById("nav-close");
  let nav = document.getElementById("vertical-nav");
  if (closed.classList.contains("hideElement")) {
    opened.classList.add("hideElement");
    closed.classList.remove("hideElement");
    nav.classList.add("hideElement");
  } else if (opened.classList.contains("hideElement")) {
    closed.classList.add("hideElement");
    opened.classList.remove("hideElement");
    nav.classList.remove("hideElement");
  }
}
