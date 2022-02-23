console.log("Javascript file successfully connected!");

let count = 0;
// grabing the necessary buttons
const plusBtn = document.querySelector("#plus-btn");
const resetBtn = document.querySelector("#reset-btn");
const minusBtn = document.querySelector("#minus-btn");

// const resetbtn = document.getElementById("reset-btn")

//Grabbing the counter text
const counterText = document.querySelector("#counter");

//grab all the theme button
const themeBtns = document.querySelector(".theme-buttons");

//Grab the input and input button

//????
// writing out necessary functions
function increase() {
  count++;
  console.log(count);
  counterText.textContent = count;
}

function reset() {
  count = 0;
  console.log(count);
}

function decrease() {
  count--;
  console.log(count);
}

function selectTheme(event) {
  console.log(event.target.textContent);
  let theme = event.target.textContent;
  document.querySelector("body").className = theme;
  document.querySelector("main").className = theme;
}

const buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].className = theme;
}

//add event listener to my element -- event and callback

plusBtn.addEventListener("click", increase); // no brace in the callback
resetBtn.addEventListener("click", reset);
minusBtn.addEventListener("click", decrease);

// add event listeners to multiple elements using forr loop

for (let i = 0; i < themeBtns.length; i++) {
  themeBtns[i].addEventListener("click", selectTheme);
}
