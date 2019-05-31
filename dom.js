'use strict';
/*
// Get element by id in two ways:
let main_p = document.getElementById("main-text");
main_p = document.querySelector("#button"); // Uses CSS selector

main_p.innerText = "Example 1"

let counter = 0;
main_p.addEventListener("click", () => {
    counter = counter + 1;
    main_p.innerText = `This button has been clicked: ${counter} times.`;
});
*/

let colortext = document.getElementById("codetext");
colortext.addEventListener("mouseover", () => {
    document.body.style.backgroundColor = "blue";
});

// Changes applied past this point.

// Selector Example Text

function toggleTextID() {
    var text = document.getElementById("selectorsex1");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

function toggleTextCL() {
    var text = document.getElementById("selectorsex2");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

function toggleTextEL() {
    var text = document.getElementById("selectorsex3");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

// Combinator Pt. 1 Example Text

function toggleTextPC() {
    var text = document.getElementById("combinatorsex1");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

function toggleTextAD() {
    var text = document.getElementById("combinatorsex2");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

// Combinator Pt. 2 Example Text

function toggleTextAS() {
    var text = document.getElementById("combinatorsex3");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

function toggleTextGS() {
    var text = document.getElementById("combinatorsex4");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

