const body = document.body;
let str = "";

// Key press
body.addEventListener("keydown", (event) => {
  const keys = document.querySelectorAll(".key, .esc, .delete");
  const output = document.querySelector(".output");
  const enteredText = document.querySelector("p");

  // Find matching virtual key
  keys.forEach(k => {
    if (k.textContent.trim().toLowerCase() === event.key.toLowerCase()) {
      k.style.backgroundColor = "black";
      k.style.color = "white";
    }
  });

  // Handle text logic
  if (event.key === "Backspace") {
    str = str.slice(0, -1);
  } else if (event.key === " ") {
    str += " ";
  } else if (![
      "CapsLock","Enter","Shift","Control","Meta",
      "Alt","ArrowLeft","ArrowRight","ArrowUp",
      "ArrowDown","Tab"
    ].includes(event.key)) {
    if (event.key.length === 1) str += event.key;
  }

  // Update output & message
  output.innerText = str;
  enteredText.innerText = "You entered: " + event.key;
});

// Key release
body.addEventListener("keyup", (event) => {
  const keys = document.querySelectorAll(".key, .esc, .delete");
  keys.forEach(k => {
    if (k.textContent.trim().toLowerCase() === event.key.toLowerCase()) {
      k.style.backgroundColor = "#555";
      k.style.color = "white";
    }
  });
});
