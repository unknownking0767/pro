/* =========================================
   AMRIN — BIRTHDAY EXPERIENCE
   FINAL SCRIPT
   ========================================= */

const scenes = document.querySelectorAll(".scene");

let currentScene = 1;

function goToScene(number) {
  scenes.forEach(scene => {
    scene.classList.remove("active");
  });

  const nextScene = document.getElementById(`scene${number}`);

  if (nextScene) {
    nextScene.classList.add("active");
    currentScene = number;
  }
}


/* =========================================
   SCENE 01 — OPENING
   ========================================= */

document.querySelectorAll("[data-next]").forEach(button => {
  button.addEventListener("click", () => {
    goToScene(Number(button.dataset.next));
  });
});


/* =========================================
   SCENE 02 — GIFT
   ========================================= */

const gift = document.getElementById("gift");
const giftHint = document.getElementById("giftHint");

let giftOpened = false;

gift.addEventListener("click", () => {
  if (giftOpened) return;

  giftOpened = true;

  gift.classList.add("open");

  if (giftHint) {
    giftHint.textContent = "A little surprise... ✨";
  }

  setTimeout(() => {
    goToScene(3);
  }, 1700);
});


/* =========================================
   SCENE 03 — BIRTHDAY / WISH
   ========================================= */

const flame = document.getElementById("flame");
const wishText = document.getElementById("wishText");
const wishButton = document.getElementById("wishButton");

let wishMade = false;

setTimeout(() => {
  if (wishButton) {
    wishButton.classList.add("show");
  }
}, 1800);

wishButton.addEventListener("click", () => {
  if (wishMade) return;

  wishMade = true;

  flame.classList.add("out");

  wishText.textContent =
    "May your wish find its way to you. ✨";

  wishButton.classList.remove("show");

  setTimeout(() => {
    goToScene(4);
    startLetter();
  }, 1900);
});


/* =========================================
   SCENE 04 — LETTER
   ========================================= */

const letterBody = document.getElementById("letterBody");
const shayariButton = document.getElementById("shayariButton");

const letterLines = [

  "Dear Amrin, 🌼",

  "Wishing you many, many more happy returns of the day! 💐🎂✨",

  "Yaar, I'm genuinely grateful to have a friend like you. 🤧",

  "I'm not gonna lie, I had never really had a female friend before you. When I first tried to become your friend, I was honestly scared as hell 😭.",

  "But when you actually became my friend, it felt like I had finally found a missing chapter of my life.",

  "You probably don't realise it, but you've become one of the reasons I laugh and smile on days when I didn't even feel like smiling. 🥹🌼",

  "And honestly, you're a very precious person to me.",

  "You're probably the one person I could talk to for hours and still somehow find another reason to continue the conversation. 😭😂",

  "Maybe that's because I'm an introvert, but with you, talking just feels easy.",

  "Sometimes I even feel like I could talk to you on calls too 😅📞, but I never really know how you'd feel about it, so I usually keep that thought to myself.",

  "Oh, and one more thing… I wrote a small shayari for you 😅🤧. Don't judge me, I'm apparently addicted to shayari now. 😂🥀",

  "I don't know what the future has planned for either of us, but I genuinely hope you achieve everything you're dreaming of. ✨",

  "Stay blessed, keep smiling, and never stop being the person you are. 🤧💐",

  "And honestly, I don't know if I've ever said this properly, but I'm really glad you became a part of my story. 🥹🌼",

  "Once again, many, many more happy returns of the day, Amrin! 🎂💐✨",

  "— From someone who's genuinely grateful for your friendship. 🤝🌼"

];

let letterStarted = false;

function startLetter() {

  if (letterStarted) return;

  letterStarted = true;

  letterBody.innerHTML = "";

  letterLines.forEach((line, index) => {

    const element = document.createElement("span");

    element.className = "letter-line";
    element.textContent = line;

    letterBody.appendChild(element);

    setTimeout(() => {
      element.classList.add("visible");
    }, index * 900);

  });

  const totalTime = letterLines.length * 900 + 1200;

  setTimeout(() => {
    shayariButton.classList.add("show");
  }, totalTime);
}


/* =========================================
   SCENE 05 — SHAYARI
   ========================================= */

const shayari = document.getElementById("shayari");
const endingButton = document.getElementById("endingButton");

const shayariLines = [

  "Kuch log bas milte nahi, kahani ban jaate hain,",

  "Khamosh se lamhon mein bhi nishaani ban jaate hain.",

  "Teri dosti mili toh jaana,",

  "Har khoobsurat cheez aankhon se nahi dekhi jaati,",

  "Kuch khoobsurti muskurahat ban kar dil mein utar jaati. 🌼",

  "Teri hansi mein jaane kaisi roshni basi hai,",

  "Jo udaas shaamon ko bhi thodi si roshan kar jaati hai. ✨",

  "Na koi shart, na koi vaada, na dosti ka koi hisaab,",

  "Bas teri dosti mili… aur dil ne keh diya,",

  "“Isse khoobsurat kya hoga koi aur khwaab?” 🥀",

  "Waqt badlega, raaste badlenge, kahani bhi badal jaayegi,",

  "Par kuch dosti waqt ke saath aur gehri ho jaayegi.",

  "Kal hum kahaan honge, ye toh waqt hi batayega,",

  "Par tera zikr aayega… toh ye dil zaroor muskurayega. 🤧🌼"

];


function startShayari() {

  shayari.innerHTML = "";

  endingButton.classList.remove("show");

  /* Reset shayari scroll position */
  const shayariScene = document.getElementById("scene5");

  if (shayariScene) {
    shayariScene.scrollTop = 0;
  }

  shayariLines.forEach((line, index) => {

    const element = document.createElement("div");

    element.className = "shayari-line";
    element.textContent = line;

    shayari.appendChild(element);

    setTimeout(() => {

      element.classList.add("visible");

      /*
       * Keep the newly revealed line visible.
       * User can still manually scroll normally.
       */
      element.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

    }, index * 800);

  });

  setTimeout(() => {

    endingButton.classList.add("show");

  }, shayariLines.length * 800 + 1200);
}


/* =========================================
   SHAYARI BUTTON
   ========================================= */

shayariButton.addEventListener("click", () => {

  goToScene(5);

  startShayari();

});


/* =========================================
   SCENE 06 — ENDING
   ========================================= */

endingButton.addEventListener("click", () => {

  goToScene(6);

});