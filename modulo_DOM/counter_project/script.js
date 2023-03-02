const countEl = document.querySelector(".count");
const incrementBtn = document.querySelector(".increment-btn");
const decrementBtn = document.querySelector(".decrement-btn");

let count = 0;

incrementBtn.addEventListener("click", () => {
  if (count < 100) {
    count++;
    countEl.textContent = count;
    setCounterStyle(count);
  }
});

decrementBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    countEl.textContent = count;
    setCounterStyle(count);
  }
});

function setCounterStyle(count) {
  if (count % 2 === 0) {
    countEl.classList.add("even");
    countEl.classList.remove("odd");
  } else {
    countEl.classList.add("odd");
    countEl.classList.remove("even");
  }
}
