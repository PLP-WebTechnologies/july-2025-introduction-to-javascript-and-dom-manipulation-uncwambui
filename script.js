// ----------------------------
// Part 1: Variables & Conditionals
// ----------------------------

// A variable to store the user’s name
let userName = "User";

// A variable to count how many times the button was clicked
let clickCount = 0;

// Conditional example: check the current time and greet in console
let hour = new Date().getHours();
if (hour < 12) {
  console.log("Good morning!");
} else if (hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

// ----------------------------
// Part 2: Functions
// ----------------------------

// Function 1: Updates the greeting paragraph with the given name
function updateGreeting(name) {
  document.getElementById("greeting").textContent = `Hello, ${name}!`;
}

// Function 2: Increments the click counter and shows it in an alert
function incrementCounter() {
  clickCount++;
  alert(`Button clicked ${clickCount} times!`);
}

// ----------------------------
// Part 3: Loops
// ----------------------------

// Example 1: For loop - creates list items and adds them to the <ul>
let loopList = document.getElementById("loopList");
for (let i = 1; i <= 5; i++) {
  let li = document.createElement("li"); // create a new <li>
  li.textContent = "Number " + i;        // set its text
  loopList.appendChild(li);              // add it to the list
}

// Example 2: While loop - logs numbers 1 to 3 in the console
let count = 1;
while (count <= 3) {
  console.log("While loop count:", count);
  count++;
}

// ----------------------------
// Part 4: DOM Interactions
// ----------------------------

// 1. Change greeting with user input
document.getElementById("changeNameBtn").addEventListener("click", function () {
  let newName = prompt("Enter your name:"); // ask the user for a name
  if (newName) { // only update if they typed something
    updateGreeting(newName);
  }
});

// 2. Button click counter
document.getElementById("countBtn").addEventListener("click", incrementCounter);

// 3. Toggle theme (light/dark mode/Blue/Green)
// List of theme names (must match CSS classes)
const themes = ["light-theme", "dark-theme", "blue-theme", "green-theme"];
let currentThemeIndex = 0;

document.getElementById("themeBtn").addEventListener("click", function () {
  // Remove the old theme
  document.body.classList.remove(themes[currentThemeIndex]);

  // Move to next theme (wraps around at the end)
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;

  // Add the new theme
  document.body.classList.add(themes[currentThemeIndex]);
});
