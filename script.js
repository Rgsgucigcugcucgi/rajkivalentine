const no = document.getElementById("no");
const yes = document.getElementById("yes");
const cat = document.getElementById("cat");

no.addEventListener("click", () => {
  const x = Math.random() * 150;
  const y = Math.random() * 80;
  no.style.left = x + "px";
  no.style.top = y + "px";
});

yes.addEventListener("click", () => {
  cat.classList.remove("hide");
  alert("Yayyy 😍 Love you too 💖");
});

