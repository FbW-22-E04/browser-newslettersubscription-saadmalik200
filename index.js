const container = document.querySelector(".container");
const body = document.querySelector("body");

// document.addEventListener("mo");

// let screenLog = document.querySelector("#screen-log");
document.addEventListener("mousemove", (e) => {
  if (e.clientY > 10) {
    container.style.display = "block";
    body.style.backgroundColor = "gray";
  }
});
