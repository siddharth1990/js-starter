const accountId = 123456
let accountEmail = "mishrasiddharth00@gmail.com"
var accountPassword = "09876" // var has scope problem
accountCity = "Delhi"
let accountState;

// accountId = 2 // not allowed

accountEmail = "sm@sm.com"
accountPassword = "213232"
accountCity = "New Delhi"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])