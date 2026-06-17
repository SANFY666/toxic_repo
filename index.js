// Логіка для кнопки "Зламати продакшн"
const panicBtn = document.getElementById("panic-btn");

const errors = [
  "SEGMENTATION FAULT (CORE DUMPED)",
  "FATAL ERROR: UNEXPECTED T_PAAMAYIM_NEKUDOTAYIM",
  "STACK OVERFLOW",
  "MEMORY LEAK DETECTED",
  "NULL POINTER EXCEPTION",
  "SYNTAX ERROR ON LINE 42",
  "UNHANDLED PROMISE REJECTION",
];

panicBtn.addEventListener("click", () => {
  for (let i = 0; i < 15; i++) {
    setTimeout(() => createErrorPopup(), i * 150);
  }
  document.body.style.animation = "shake 0.5s infinite";
  setTimeout(() => {
    document.body.style.filter = "invert(100%) hue-rotate(180deg)";
  }, 1000);
});

function createErrorPopup() {
  const popup = document.createElement("div");
  popup.className = "error-popup";

  popup.innerText = errors[Math.floor(Math.random() * errors.length)];

  const x = Math.random() * (window.innerWidth - 300);
  const y = Math.random() * (window.innerHeight - 100);

  popup.style.left = `${x}px`;
  popup.style.top = `${y}px`;

  popup.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;

  document.body.appendChild(popup);
}

const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @keyframes shake {
    0% { transform: translate(2px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(0px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(2px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(2px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
  }
`;
document.head.appendChild(styleSheet);
