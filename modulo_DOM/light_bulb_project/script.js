const LIGHT_ON_URL =
  "https://s3-sa-east-1.amazonaws.com/lcpi/a16304a9-bdb8-4b13-b159-6ca988a581da.png";
const LIGHT_OFF_URL =
  "https://s3-sa-east-1.amazonaws.com/lcpi/a13955a2-2ea4-4cbb-b830-105b3b372c37.png";

const lightBulbElement = document.getElementById("light-bulb");
const imgContainer = document.querySelector(".img-container");

const turnLightOn = () => {
  lightBulbElement.setAttribute("src", LIGHT_ON_URL);
  imgContainer.setAttribute(
    "style",
    "background: linear-gradient(180deg, #ff0, #fff);"
  );
};

const turnLightOff = () => {
  lightBulbElement.setAttribute("src", LIGHT_OFF_URL);
  imgContainer.setAttribute("style", "background: transparent;");
};

window.onload = () => {
  lightBulbElement.setAttribute("src", LIGHT_OFF_URL);
};
