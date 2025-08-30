function sayMyName() {
     console.log("S");
    console.log("I");
    console.log("D");
    console.log("D");
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("T");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2)
// }

// addTwoNumbers(3, "4");
// addTwoNumbers(3, "A");
// addTwoNumbers(3, null);

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 4);
// console.log("Result : ", result)

function logInUserMessage(username = "Sam") {
    if(!username) {
        console.log("Please enter a username");
        return
    }
    
    return `${username} just logged in`
}

// console.log(logInUserMessage("Siddharth"))

// console.log(logInUserMessage("Sid"))

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "siddharth",
    price: 199
};

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// })

const myNewArray = [200, 400, 600];

function returnSecondValue(array) {
    return array[1];
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([100, 300,400,500]));


