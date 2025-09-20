const body = document.body;
let str = "";

// Function to handle key press visually and logically
function pressKey(keyText) {
  const keys = document.querySelectorAll(".key, .esc, .delete, .backspace, .tab, .caps, .enter, .shift, .space, .ctrl, .alt, .fn, .pg, .plus2, .enter2");

  keys.forEach((key) => {
    if (key.innerText.trim().toLowerCase() === keyText.toLowerCase()) {
      key.style.backgroundColor = "black";
      key.style.color = "white";

      setTimeout(() => {
        key.style.backgroundColor = "#555";
        key.style.color = "white";
      }, 150);
    }
  });

  if (keyText === "Backspace") {
    str = str.slice(0, -1);
  } else if (keyText === "Space" || keyText === " ") {
    str += " ";
  } else if (keyText === "Tab") {
    str += "\t";
  } else if (keyText === "Enter") {
    str += "\n";
  } else if (
    keyText === "Caps" ||
    keyText === "CapsLock" ||
    keyText === "Shift" ||
    keyText === "Control" ||
    keyText === "Meta" ||
    keyText === "Alt" ||
    keyText === "ArrowLeft" ||
    keyText === "ArrowRight" ||
    keyText === "Fn" ||
    keyText === "PgUp/Dn" ||
    keyText === "End" ||
    keyText === "Home" ||
    keyText === "Insert" ||
    keyText === "Delete" ||
    keyText === "Esc" ||
    keyText === "PrtSc" ||
    keyText === "NL" ||
    keyText === "+"
  ) {
    // Ignore these
  } else {
    str += keyText;
  }

  document.querySelector(".output").innerText = str;
}

// Handle physical keyboard input
body.addEventListener("keydown", function (event) {
  pressKey(event.key);
});

// Handle mouse click input
const allKeys = document.querySelectorAll(".key, .esc, .delete, .backspace, .tab, .caps, .enter, .shift, .space, .ctrl, .alt, .fn, .pg, .plus2, .enter2");

allKeys.forEach((key) => {
  key.addEventListener("click", () => {
    const keyText = key.innerText.trim();
    pressKey(keyText);
  });
});
