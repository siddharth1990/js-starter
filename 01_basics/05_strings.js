const name = "sid"
const repocount = 50

// console.log(name + repocount)

// console.log(`hello. my name is ${name} & repo count is ${repocount}`)

const gameName = new String('sid-sm-com')

// console.log(gameName[0])
// console.log(gameName.__proto__)

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('d'));


const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-3, 10);
console.log(anotherString);

const newStringOne = "   siddharth    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://siddharth.com/siddharth%20mishra"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));