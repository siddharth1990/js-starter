//Immediately Invoked Function Expression (IIFE)

//named iife
(function chai() {
    console.log("DB connected")
})();

//unnamed iife
(() => {
    console.log(`DB CONNECTED TWO`);
})();

(function aurcode() {
    console.log(`DB CONNECTED TWO three`);
})();

//parameterized iife
((name) => {
    console.log(`DB CONNECTED ${name}`);
})("sid");

// two iife can one with semicolon
(function a() {
    console.log(`DB CONNECTED TWO three`);
})();

(() => {
    console.log(`DB CONNECTED`);
})()