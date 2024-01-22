function showPrContent(num) {
  let elem = document.getElementById("pr-content-" + num);

  if (!elem) {
    return;
  }

  if (elem.style.display == "none") {
    elem.style.display = "block";
  } else {
    elem.style.display = "none";
  }
}
