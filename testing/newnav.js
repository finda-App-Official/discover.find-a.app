// Pages

const bewerberPage = document.getElementById("content1");
const unternehmenPage = document.getElementById("content2");
const aboutPage = document.getElementById("content3");
const contactPage = document.getElementById("content4");

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
function swipe(to) {
  function swipeFromUnternehmenToBewerber() {
    unternehmenPage.classList.add("slide-out-left");
    bewerberPage.classList.add("slide-in-right");
    setTimeout(() => {
      bewerberPage.style.display = "flex";
    }, 400);
    document.getElementById("nav-2").classList.remove("navbar-link-selected");
    document.getElementById("nav-1").classList.add("navbar-link-selected");
  }
  if (to == "bewerber") {
    if (unternehmenPage.checkVisibility()) {
    } else if (aboutPage.checkVisibility()) {
    } else if (contactPage.checkVisibility()) {
    }
  } else if (to == "unternehmen") {
    swipeToUnternehmen();
  } else if (to == "about") {
    swipeToAbout();
  } else if (to == "contact") {
    swipeToContact();
  }
}
function swipeToBewerber() {
  if (unternehmenPage.checkVisibility()) {
    unternehmenPage.classList.add("slide-out-right");
    bewerberPage.classList.add("slide-in-left");
    setTimeout(() => {
      bewerberPage.style.display = "flex";
    }, 400);
    document.getElementById("nav-2").classList.remove("navbar-link-selected");
    document.getElementById("nav-1").classList.add("navbar-link-selected");
  } else if (aboutPage.checkVisibility()) {
    aboutPage.classList.add("slide-out-right");
    unternehmenPage.classList.add("slide-in-left");
    setTimeout(() => {
      unternehmenPage.style.display = "flex";
    }, 400);
    document.getElementById("nav-3").classList.remove("navbar-link-selected");
    document.getElementById("nav-2").classList.add("navbar-link-selected");
  } else if (contactPage.checkVisibility()) {
    contactPage.classList.add("slide-out-right");
    aboutPage.classList.add("slide-in-left");
    setTimeout(() => {
      aboutPage.style.display = "flex";
    }, 400);
    document.getElementById("nav-4").classList.remove("navbar-link-selected");
    document.getElementById("nav-3").classList.add("navbar-link-selected");
    swipeToBewerber();
  }
}
function swipeToUnternehmen() {
  if (bewerberPage.checkVisibility()) {
    bewerberPage.classList.add("slide-out-left");
    unternehmenPage.classList.add("slide-in-right");
    setTimeout(() => {
      unternehmenPage.style.display = "flex";
    }, 400);
    document.getElementById("nav-1").classList.remove("navbar-link-selected");
    document.getElementById("nav-2").classList.add("navbar-link-selected");
  } else if (aboutPage.checkVisibility()) {
    aboutPage.classList.add("slide-out-right");
    unternehmenPage.classList.add("slide-in-left");
    setTimeout(() => {
      unternehmenPage.style.display = "flex";
    }, 400);
    document.getElementById("nav-3").classList.remove("navbar-link-selected");
    document.getElementById("nav-2").classList.add("navbar-link-selected");
  } else if (contactPage.checkVisibility()) {
    contactPage.classList.add("slide-out-right");
    aboutPage.classList.add("slide-in-left");
    setTimeout(() => {
      aboutPage.style.display = "flex";
    }, 400);
    document.getElementById("nav-4").classList.remove("navbar-link-selected");
    document.getElementById("nav-3").classList.add("navbar-link-selected");
    swipeToUnternehmen();
  }
}
function swipeToAbout() {
  if (bewerberPage.checkVisibility()) {
    unternehmenPage.classList.add("slide-out-right");
    bewerberPage.classList.add("slide-in-left");
    setTimeout(() => {
      bewerberPage.style.display = "flex";
    }, 400);
    document.getElementById("nav-2").classList.remove("navbar-link-selected");
    document.getElementById("nav-1").classList.add("navbar-link-selected");
    swipeToAbout();
  } else if (unternehmenPage.checkVisibility()) {
    aboutPage.classList.add("slide-out-left");
    unternehmenPage.classList.add("slide-in-right");
    setTimeout(() => {
      unternehmenPage.style.display = "flex";
    }, 400);
    document.getElementById("nav-3").classList.remove("navbar-link-selected");
    document.getElementById("nav-2").classList.add("navbar-link-selected");
  } else if (contactPage.checkVisibility()) {
    contactPage.classList.add("slide-out-right");
    aboutPage.classList.add("slide-in-left");
    setTimeout(() => {
      aboutPage.style.display = "flex";
    }, 400);
    document.getElementById("nav-4").classList.remove("navbar-link-selected");
    document.getElementById("nav-3").classList.add("navbar-link-selected");
  }
}
function swipeToContact() {
  if (bewerberPage.checkVisibility()) {
    unternehmenPage.classList.add("slide-out-right");
    bewerberPage.classList.add("slide-in-left");
    setTimeout(() => {
      bewerberPage.style.display = "flex";
    }, 400);
    document.getElementById("nav-2").classList.remove("navbar-link-selected");
    document.getElementById("nav-1").classList.add("navbar-link-selected");
  } else if (unternehmenPage.checkVisibility()) {
    aboutPage.classList.add("slide-out-right");
    unternehmenPage.classList.add("slide-in-left");
    setTimeout(() => {
      unternehmenPage.style.display = "flex";
    }, 400);
    document.getElementById("nav-3").classList.remove("navbar-link-selected");
    document.getElementById("nav-2").classList.add("navbar-link-selected");
    swipeToBewerber();
  } else if (aboutPage.checkVisibility()) {
    aboutPage.classList.add("slide-out-left");
    aboutPage.classList.add("slide-in-right");
    setTimeout(() => {
      aboutPage.style.display = "flex";
    }, 400);
    document.getElementById("nav-4").classList.remove("navbar-link-selected");
    document.getElementById("nav-3").classList.add("navbar-link-selected");
    swipeToBewerber();
  }
}
