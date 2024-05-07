// DECODE ANIMATION
let decodes = document.querySelectorAll(".decode");
const CHAR_DURATION = 1 / 20;
const TIMEOUT_DURATION = 0.2;

decodes.forEach((d) => {
  d.addEventListener("click", animate);
});

function randomChar() {
  let str = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*(){}:|<>?[]";
  let c = str[Math.floor(Math.random() * str.length)];
  return Math.random() > 0.5 ? c : c.toUpperCase();
}

function easeIn(x) {
  return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
}

function animate(e) {
  let elem = e.target;
  elem.style.animation = "";

  let text = elem.innerText;

  elem.style.color = "black";
  elem.style.pointerEvenets = "none";
  elem.style.animation = `colorChangeAnimation ${
    CHAR_DURATION * text.length + TIMEOUT_DURATION
  }s cubic-bezier(0.7, 0, 0.84, 0)`;
  elem.style.animationDelay = "0.1s";

  let newText = [];

  for (let i = 0; i < text.length; i++) {
    newText.push(randomChar());
  }

  elem.innerHTML = newText.join("");

  let i = 0;
  let int = setInterval(() => {
    if (i >= text.length) {
      clearInterval(int);
    }

    let t = [];

    let partIndex = text.length - 1 - i;
    for (let k = 0; k < partIndex; k++) {
      t.push(randomChar());
    }
    for (let k = partIndex; k < text.length; k++) {
      t.push(text[k]);
    }
    let p = easeIn(i / text.length);
    let tim = setTimeout(() => {
      if ((p = 1)) {
        clearTimeout(tim);
        elem.style.pointerEvenets = "auto";
        elem.style.color = "#fff";
      }
      let upText = t.join("");
      elem.innerHTML = upText;
    }, p * TIMEOUT_DURATION * 1000);
    i++;
  }, CHAR_DURATION * 1000);
}
