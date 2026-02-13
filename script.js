const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const image = document.getElementById("mainImage");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
    image.src = "images/slika2.jpg"; // druga tvoja slika
    document.querySelector("h1").innerText =
        "Yaaay! 💖 Znao/la sam! 🥰";
    noBtn.style.display = "none";
});
