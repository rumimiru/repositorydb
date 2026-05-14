// =======================
// STEP 2: ARRAY DESTRUCTURING
// =======================

const colors = ["red", "green", "blue", "yellow"];

const [first, second, third] = colors;
console.log("Array basic:", first, second, third);

// skipping elements
const [, , primary] = colors;
console.log("Skipped:", primary);

// default value
const [a, b, c, d, e = "white"] = colors;
console.log("Default value:", e);


// =======================
// STEP 3: OBJECT DESTRUCTURING
// =======================

const user = {
  name: "John",
  age: 25,
  country: "Philippines"
};

const { name, age } = user;
console.log("User name:", name);
console.log("User age:", age);

// renamed (avoid using "location" because it's a browser variable)
const { country: userCountry } = user;
console.log("Country:", userCountry);


// =======================
// STEP 4: ADVANCED DESTRUCTURING
// =======================

const student = {
  id: 101,
  info: {
    fullName: "Maria Santos",
    grades: {
      math: 90,
      science: 95
    }
  }
};

// nested destructuring
const {
  info: {
    fullName,
    grades: { math, science }
  }
} = student;

console.log("Full name:", fullName);
console.log("Math:", math);
console.log("Science:", science);

// default value (renamed to avoid conflicts)
const {
  info: { age: studentAge = 18 }
} = student;

console.log("Student age:", studentAge);


// =======================
// STEP 5: DESTRUCTURING IN FUNCTIONS
// =======================

// array destructuring in function
function sum([x, y]) {
  return x + y;
}

console.log("Sum:", sum([5, 10]));

// object destructuring in function
function displayUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

displayUser({ name: "Anna", age: 20 });

// default parameter destructuring
function greet({ name = "Guest" } = {}) {
  console.log(`Hello, ${name}`);
}

greet({ name: "Carlos" });
greet();