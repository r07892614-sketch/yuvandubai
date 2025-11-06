// Countdown Timer
let timeLeft = 60;
const timerEl = document.getElementById("timer");

const countdown = setInterval(() => {
  timeLeft--;
  timerEl.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(countdown);
    timerEl.textContent = "Time's Up!";
  }
}, 1000);

// Button Fade Effect
const joinBtn = document.getElementById("joinBtn");
let fade = true;
setInterval(() => {
  joinBtn.style.opacity = fade ? "0.7" : "1";
  fade = !fade;
}, 1000);

// Button Redirect
joinBtn.addEventListener("click", () => {
  window.open("https://t.me/+2Da0-TTJ0gQ0NjBl", "_blank");
});
