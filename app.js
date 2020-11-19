let counter = document.getElementById("counter");
let up = document.getElementById("count-up");
const btn = document.getElementById("count-up");
count = 10;

addAnimation = () => {
  btn.classList.add("animate__animated", "animate__bounce");
};

removeAnimation = () => {
  btn.classList.remove("animate__animated", "animate__bounce");
};

up.addEventListener("click", () => {
  count--;
  counter.textContent = count;

  addAnimation();

  if (count == 0) {
    window.alert("Done");
  } else if (count <= 0) {
    count = 10;
    counter.textContent = count;
  }
  //   removeAnimation();
});

up.addEventListener(
  "animationend",
  () => {
    btn.classList.remove("animate__animated", "animate__bounce");
  },
  false
);
