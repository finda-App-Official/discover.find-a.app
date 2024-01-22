// Pages

const bewerberPage = document.getElementById("content1");
const unternehmenPage = document.getElementById("content2");

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
function swipeToBewerber() {
  if (unternehmenPage.checkVisibility()) {
    unternehmenPage.classList.add("slide-out-right");
    bewerberPage.classList.add("slide-in-left");
    setTimeout(() => {
      bewerberPage.style.display = "flex";
    }, 400);
  }
}
