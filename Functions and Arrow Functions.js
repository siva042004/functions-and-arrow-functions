
function add(a, b) {
    return a + b;
}
function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
}

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

const multiply = function (x, y) {
    return x * y;
};

const welcome = function (user = 'Guest') {
    console.log(`Welcome, ${user}!`);
};


const subtract = (a, b) => a - b;

const farewell = (user = 'Guest') => {
    console.log(`Goodbye, ${user}!`);
};

const square = x => x * x;

const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

const product = (...numbers) => numbers.reduce((acc, num) => acc * num, 1);

// Function with a callbac
function fetchData(url, callback) {
    // Simulating an asynchronous operation
    setTimeout(() => {
        const data = { name: 'John', age: 25 };
        callback(data);
    }, 1000);
}


// Function returning a Promise
function fetchDataWithPromise(url) {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation
        setTimeout(() => {
            const data = { name: 'Jane', age: 30 };
            resolve(data);
        }, 1000);
    });
}
