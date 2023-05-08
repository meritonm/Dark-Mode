const allLinks = document.getElementsByClassName("allLinks");
const modeImage = document.querySelector("#mode");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const menu = document.querySelector("#menuDiv");
const body = document.querySelector("body");

// let changer = false;
const imageDark = {
  src: "/MiniPoject/assets/light.png",
};
const imageLight = {
  src: "/MiniPoject/assets/dark.jpg",
};

const enableDarkMode = () => {
  if (modeImage.src.match("./assets/dark.jpg")) {
    modeImage.src = "./assets/light.png";
    body.style.backgroundColor = "black";
    body.style.color = "white";
    nav.style.backgroundColor = "white";
    menu.style.backgroundColor = "white";

    [...allLinks].forEach((links) => {
      links.style.color = "black";
    });
  } else {
    modeImage.src = "./assets/dark.jpg";
    body.style.backgroundColor = "white";
    body.style.color = "black";
    nav.style.backgroundColor = "black";
    menu.style.backgroundColor = "black";

    [...allLinks].forEach((links) => {
      links.style.color = "white";
    });
  }
};
modeImage.addEventListener("click", enableDarkMode);
