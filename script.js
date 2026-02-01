const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const song = document.getElementById("cupidSong");

// YES click → play Cupid song
yesBtn.addEventListener("click", () => {
    song.play();
    yesBtn.innerHTML = "I love you 💖"; // Optional text change
});

// NO button → move randomly
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});
