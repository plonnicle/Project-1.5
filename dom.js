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

function toggleText() {
    var text = document.getElementById("demo");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }
