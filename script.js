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
    const min = 90;
    const max = 100;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Logic to make YES btn to grow

 // Logic to make YES btn grow + shake

let yesScale = 1;
let isFixed = false;

yesBtn.style.transformOrigin = "center center";
yesBtn.style.transition = "transform 0.3s ease";

// reuse NO click (don’t remove your hover logic)
noBtn.addEventListener("click", () => {
  yesScale += 0.35; // smooth growth (2 was too aggressive)

  if (!isFixed) {
    yesBtn.style.position = "fixed";
    yesBtn.style.top = "50%";
    yesBtn.style.left = "50%";
    isFixed = true;
  }

  // grow
  yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;

  // shake (JS-only, no CSS needed)
  yesBtn.animate(
    [
      { transform: `translate(-50%, -50%) scale(${yesScale}) rotate(0deg)` },
      { transform: `translate(-50%, -50%) scale(${yesScale}) rotate(2deg)` },
      { transform: `translate(-50%, -50%) scale(${yesScale}) rotate(-2deg)` },
      { transform: `translate(-50%, -50%) scale(${yesScale}) rotate(2deg)` },
      { transform: `translate(-50%, -50%) scale(${yesScale}) rotate(0deg)` }
    ],
    {
      duration: 300,
      easing: "ease-in-out"
    }
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
