console.log("anshu")
const accountId = 355
let accountPassword="1234"
var accountMail = "adh@gmail.com"
accountAddress = "jaipur"
let accountState
// donot use var due to scope issue it is global 
// accountId = 2 not allowed 
// use semicolon or not no issue 
accountPassword="123"
var accountMail = "h@gmail.com"
accountAddress = "rampur"
console.table([accountId , accountPassword,accountMail , accountAddress , accountState ])