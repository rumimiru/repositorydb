// Subtask 4.1: Access DOM Elements
const clickBtn = document.getElementById('click-btn');
const userInput = document.getElementById('user-input');
const keyDisplay = document.getElementById('key-display');
const hoverBox = document.getElementById('hover-box');
const userForm = document.getElementById('user-form');
const output = document.getElementById('output-area');

// Subtask 4.2: Click Event
clickBtn.addEventListener('click', () => {
    output.innerText = "Button was clicked!";
});

// Subtask 4.3 & 4.5: Input and Keyup
userInput.addEventListener('input', (e) => {
    output.innerText = "You are typing: " + e.target.value;
});

userInput.addEventListener('keyup', (e) => {
    keyDisplay.innerText = "Last key: " + e.key;
});

// Subtask 4.4: Submit Event (Prevents page reload)
userForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Very important!
    const name = document.getElementById('form-name').value;
    output.innerText = "Form submitted for: " + name;
});

// Subtask 4.6: Mouseover and Mouseout
hoverBox.addEventListener('mouseover', () => {
    hoverBox.style.backgroundColor = "#2fd219";
    hoverBox.innerText = "Mouse is IN!";
});

hoverBox.addEventListener('mouseout', () => {
    hoverBox.style.backgroundColor = "#e74c3c";
    hoverBox.innerText = "Mouse is OUT!";
});

// Subtask 4.7: Focus and Blur
const formInput = document.getElementById('form-name');
formInput.addEventListener('focus', () => console.log("Input focused"));
formInput.addEventListener('blur', () => console.log("Input lost focus"));