const no = document.getElementById("no");
const yes = document.getElementById("yes");
const cat = document.getElementById("cat");
const music = document.getElementById("bgm");

document.body.addEventListener("click", () => {
  music.play();
});

no.addEventListener("click", () => {
  const x = Math.random() * 150;
  const y = Math.random() * 80;
  no.style.left = x + "px";
  no.style.top = y + "px";
});

yes.addEventListener("click", () => {
  cat.classList.remove("hide");
  alert("Yayyy 😍 Love you too 💖");
  startHearts();
});

function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 300);
}
