const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const cat = document.getElementById("cat");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
  cat.classList.remove("hidden");
  alert("I love you too ❤️");
});
