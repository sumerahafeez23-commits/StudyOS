// Predictor
function predict() {
  let level = document.getElementById("level").value;
  let result = document.getElementById("result");

  if (level >= 8) result.innerHTML = "🔥 High chance of 80%+";
  else if (level >= 5) result.innerHTML = "📘 Medium chance";
  else result.innerHTML = "⚠️ Needs improvement";
}

// Calculator
function calc() {
  let m = document.getElementById("marks").value;
  let t = document.getElementById("total").value;
  let p = (m / t) * 100;
  document.getElementById("percent").innerHTML = p.toFixed(2) + "%";
}

// Timer
let time = 1500;
let interval;

function start() {
  clearInterval(interval);
  interval = setInterval(() => {
    let min = Math.floor(time / 60);
    let sec = time % 60;

    document.getElementById("time").innerHTML =
      min + ":" + (sec < 10 ? "0" + sec : sec);

    time--;

    if (time < 0) clearInterval(interval);
  }, 1000);
  }
