// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});


// Logic to make YES btn grow + shake (FIXED)


let yesScale = 1;

// RESET any leftover centering
yesBtn.style.position = "relative";
yesBtn.style.transform = "scale(1)";
yesBtn.style.transformOrigin = "center center";
yesBtn.style.transition = "transform 0.25s ease";

noBtn.addEventListener("click", () => {
  yesScale += 0.3;

  yesBtn.style.transform = `scale(${yesScale})`;

  yesBtn.animate(
    [
      { transform: `scale(${yesScale}) rotate(0deg)` },
      { transform: `scale(${yesScale}) rotate(2deg)` },
      { transform: `scale(${yesScale}) rotate(-2deg)` },
      { transform: `scale(${yesScale}) rotate(0deg)` }
    ],
    { duration: 250, easing: "ease-in-out" }
  );
});

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});
