// let colors = ["#F15121", "#7EB801", "#00A3EE", "#FFB700"];
let colors = ["#24d05a", "#eb4888", "#10a2f5", "#e9bc3f"];

(function () {
  splitCharacters();
  setModeEventListener();
  setRandomLinkColor();
  setColorHoverListener();
  setBioEventListener();
  setRandomPhoto();

  setInterval(() => {
    setRandomPhoto();
  }, 4000);

  setInterval(() => {
    setRandomLinkColor();
  }, 9000);
})();

// twisting text
function splitCharacters() {
  const targets = document.querySelectorAll("[data-split]");

  for (const target of targets) {
    let string = '<span class="inner"><span class="front">';
    let counter = 0;

    const targetContent = target.textContent;
    const words = targetContent.trim().split(" ");

    words.forEach(function (word, wordIndex, wordArray) {
      const chars = word.split("");
      chars.forEach(function (char, charIndex, charArray) {
        string += `<span class="char" style="--index: ${++counter};">${char}</span>`;

        // if we're on the last character of the last word, reset the counter
        if (
          wordIndex === wordArray.length - 1 &&
          charIndex === charArray.length - 1
        ) {
          counter = 0;
        }
      });

      // add a space between each word unless it's the last one
      if (wordIndex !== wordArray.length - 1) {
        string += "<span>&nbsp;</span>";
      }
    });
    string += "</span>"; //end front

    string += '<span class="back">';
    words.forEach(function (word, wordIndex, wordArray) {
      const chars = word.split("");
      chars.forEach(function (char) {
        string += `<span class="char" style="--index: ${++counter};">${char}</span>`;
      });
      if (wordIndex !== wordArray.length - 1) {
        string += "<span>&nbsp;</span>";
      }
    });

    string += "</span>"; // end back
    string += "</span>"; // end inner
    target.innerHTML = string;
  }
}

/* Dark Mode */
function setModeEventListener() {
  let list = document.body.classList;
  document.getElementById("toggler").addEventListener("change", (event) => {
    event.target.checked ? list.add("dark-mode") : list.remove("dark-mode");
  });
}

/* Colors */

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function setRandomLinkColor() {
  Array.from(document.getElementsByTagName("a")).forEach((e) => {
    e.style.color = getRandomColor();
  });
}

function setColorHoverListener() {
  Array.from(document.querySelectorAll("a, button")).forEach((e) => {
    e.addEventListener("mouseover", setRandomLinkColor);
  });
}

/* Photos */

function setRandomPhoto() {
  let num = Math.floor(Math.random() * 3) + 1;
  document.getElementById("propic").src = `./images/photo${num}.webp`;
}

/* Bio Toggles */

function setBioEventListener() {
  Array.from(document.getElementsByTagName("button")).forEach((e) => {
    e.addEventListener("click", bioToggle);
  });
}

function bioToggle(e) {
  let bioType = e.target;
  let color = getRandomColor();
  off(bioType);
  bioType.style.cssText = `border-color: ${color}; color: ${color}; font-weight: bold;`;
  document.getElementsByClassName(bioType.id)[0].classList.add("show");
}

function off(bioType) {
  Array.from(document.getElementsByTagName("button")).forEach((butt) => {
    butt.style.borderColor = "#96979c";
    butt.style.color = "#96979c";
  });
  Array.from(document.getElementsByClassName("bio")).forEach((e) => {
    e.classList.remove("show");
  });
}

// Disable right-click of mouse, F12 key, and save key combinations on page
window.onload = function () {
  document.addEventListener(
    "contextmenu",
    function (e) {
      e.preventDefault();
    },
    false
  );
  document.addEventListener(
    "keydown",
    function (e) {
      //document.onkeydown = function(e) {
      // "I" key
      if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        disabledEvent(e);
      }
      // "J" key
      if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        disabledEvent(e);
      }
      // "S" key + macOS
      if (
        e.keyCode == 83 &&
        (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
      ) {
        disabledEvent(e);
      }
      // "U" key
      if (e.ctrlKey && e.keyCode == 85) {
        disabledEvent(e);
      }
      // "F12" key
      if (event.keyCode == 123) {
        disabledEvent(e);
      }
    },
    false
  );
  function disabledEvent(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    } else if (window.event) {
      window.event.cancelBubble = true;
    }
    e.preventDefault();
    return false;
  }
};
