// Part 1: Variables + Conditionals
let name = "Oluwasegun";
let age = 18;

if (age >= 18) {
  console.log(`${name} is an adult ✅`);
} else {
  console.log(`${name} is a minor ❌`);
}

// Part 2: Functions
function calculateTotal(price, quantity) {
  return price * quantity;
}

function greetUser(username) {
  return `Hello, ${username}! 👋`;
}

console.log("Total cost:", calculateTotal(50, 3));
console.log(greetUser(name));

// Part 3: Loops
for (let i = 1; i <= 5; i++) {
  console.log("For loop count:", i);
}

let count = 3;
while (count > 0) {
  console.log("While loop countdown:", count);
  count--;
}

// Part 4: DOM Manipulation
document.getElementById("change-text").addEventListener("click", () => {
  document.getElementById("main-title").innerText = "✨ Title Changed with JavaScript!";
});

document.getElementById("toggle-mode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

document.getElementById("add-item").addEventListener("click", () => {
  let newItem = document.createElement("li");
  newItem.innerText = "New Topic Added 🚀";
  document.getElementById("my-list").appendChild(newItem);
});

