// Presets

const sponsors = {
  arr: [
    "kuipers",
    "steda",
    "mainka",
    "gebrschwarte",
    "vitus",
    "voss",
    "wirtschaftsverband",
    "ludmillenstift",
    "bergmann",
    "boll",
    "deymann",
    "emsland",
    "hölscher",
    "iam",
    "meppen",
    "meyerwerft",
    "ncn",
    "otten",
    "röchling",
    "rögelberg",
    "wocken",
  ],
  lists: {
    l1: [],
    l2: [],
    l3: [],
    l4: [],
    l5: [],
  },
  currentShown: 1,
};

// Functions

function changeSP(to) {
  let cb1 = document.getElementById("cb1");
  let cb2 = document.getElementById("cb2");
  let cb3 = document.getElementById("cb3");
  let cb4 = document.getElementById("cb4");
  let cb5 = document.getElementById("cb5");
  if (to === 1) {
    cb1.classList.add("control-selected");
    cb2.classList.remove("control-selected");
    cb3.classList.remove("control-selected");
    cb4.classList.remove("control-selected");
    cb5.classList.remove("control-selected");
    for (let i = 0; i < 4; i++) {
      document.getElementById(
        `sponsor${i + 1}`
      ).src = `src/images/sponsors/${sponsors.lists.l1[i]}-sponsor.png`;
    }
  } else if (to === 2) {
    cb1.classList.remove("control-selected");
    cb2.classList.add("control-selected");
    cb3.classList.remove("control-selected");
    cb4.classList.remove("control-selected");
    cb5.classList.remove("control-selected");
    for (let i = 0; i < 4; i++) {
      document.getElementById(
        `sponsor${i + 1}`
      ).src = `src/images/sponsors/${sponsors.lists.l2[i]}-sponsor.png`;
    }
  } else if (to === 3) {
    cb1.classList.remove("control-selected");
    cb2.classList.remove("control-selected");
    cb3.classList.add("control-selected");
    cb4.classList.remove("control-selected");
    cb5.classList.remove("control-selected");
    for (let i = 0; i < 4; i++) {
      document.getElementById(
        `sponsor${i + 1}`
      ).src = `src/images/sponsors/${sponsors.lists.l3[i]}-sponsor.png`;
    }
  } else if (to === 4) {
    cb1.classList.remove("control-selected");
    cb2.classList.remove("control-selected");
    cb3.classList.remove("control-selected");
    cb4.classList.add("control-selected");
    cb5.classList.remove("control-selected");
    for (let i = 0; i < 4; i++) {
      document.getElementById(
        `sponsor${i + 1}`
      ).src = `src/images/sponsors/${sponsors.lists.l4[i]}-sponsor.png`;
    }
  } else if (to === 5) {
    cb1.classList.remove("control-selected");
    cb2.classList.remove("control-selected");
    cb3.classList.remove("control-selected");
    cb4.classList.remove("control-selected");
    cb5.classList.add("control-selected");
    for (let i = 0; i < 4; i++) {
      document.getElementById(
        `sponsor${i + 1}`
      ).src = `src/images/sponsors/${sponsors.lists.l5[i]}-sponsor.png`;
    }
  }
}

// Onloads

window.onload = () => {
  window.scrollTo({ top: 0, left: 0 });
  for (let i = 1; i <= 6; i++) {
    for (let y = 1; y <= 4; y++) {
      let randomNumber = Math.floor(Math.random() * sponsors.arr.length);
      switch (i) {
        case 1:
          sponsors.lists.l1.push(sponsors.arr[randomNumber]);
          break;
        case 2:
          sponsors.lists.l2.push(sponsors.arr[randomNumber]);
          break;
        case 3:
          sponsors.lists.l3.push(sponsors.arr[randomNumber]);
          break;
        case 4:
          sponsors.lists.l4.push(sponsors.arr[randomNumber]);
          break;
        case 5:
          sponsors.lists.l5.push(sponsors.arr[randomNumber]);
          break;
      }
      sponsors.arr.splice(randomNumber, 1);
    }
  }
  changeSP(1);
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  document.getElementById(
    "showcase2"
  ).style.backgroundImage = `url(src/images/background${randomNumber}.jpg)`;
};

// Screenrules

setInterval(() => {
  if (window.innerWidth < 900) {
    document.getElementById("nav-image").src = "src/images/finda-Logo.png";
    document.getElementById("mos1").classList.remove("hideElement");
    document.getElementById("mos2").classList.remove("hideElement");
    document.getElementById("mos3").classList.remove("hideElement");
  } else {
    document.getElementById("nav-image").src = "src/images/finda-Logo-weiß.png";
    document.getElementById("mos1").classList.add("hideElement");
    document.getElementById("mos2").classList.add("hideElement");
    document.getElementById("mos3").classList.add("hideElement");
  }
}, 1);

setInterval(() => {
  if (sponsors.currentShown !== 5) {
    changeSP(sponsors.currentShown + 1);
  } else {
    sponsors.currentShown = 1;
    changeSP(sponsors.currentShown);
  }
}, 2000);
