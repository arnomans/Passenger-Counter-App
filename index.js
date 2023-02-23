let count = 0;
let countEl = document.getElementById("count-el");

function increment() {
    count = count + 1;
    countEl.innerHTML = count;
}

function save() {
    console.log(count);
}

let username = "Arno";
let message = " You have three new notifications";

console.log(username + message);

let messageToUser = username + message;

console.log(messageToUser);



let name = "Arno";
let greeting = "Hi, my name is ";
let myGreeting = greeting + name;

console.log(myGreeting);
