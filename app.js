// console.log("Hello World");

// Chapter if and else statement







// var userValue = prompt("Enter the Number for Divide")
// var result = document.querySelector("#result")
// if(userValue%3 ===0){
//         var divideValue = userValue%3
//         result.innerHTML = divideValue
// }else{
//     alert("Number is not divisible by 3")
// }








// ya wali sign / divide karna ka bad jo opper value bhejti hai wo show karti hai aur ya wali sign % jo nicha value bhejti hai wo show kar ti hai is liya hum na abhi ya wa % sign lagai hai

// var num1 = prompt("Enter the Number to know even or odd Number")
// if(num1%2 ===0){
//     console.log(num1 + " is even Number")
// }else{
//     console.log(num1 + " is old Number");
// }









// var age = prompt("Enter Your Age")

// if(age > 18){
//     alert("Old enough")
// }else{
//     alert("Too young")
// }










// var username = prompt("Enter Your Name")

// if(username =="Hassan"){
//     alert("▬▬▬╳ Welcome Hassan ╳▬▬▬")
// }else{

// }








// var userValue = prompt("Enter the Number for Divide Conformation")
// var result = document.querySelector("#result")
// if(userValue%3 ===0){

//     alert("Number is divisible by 3")
// }
// else{
//     alert("Number is not divisible by 3")
// }





// var num1 = prompt("Enter Number 1")
// var num2 = prompt("Enter Number 2")
// var userSign = prompt("Enter the sign for calculate")
// var result = document.querySelector("#result")

// if(userSign == "+"){
//     var plus = +num1 + +num2
//     result.innerHTML = plus
// }else if(userSign == "-"){
//     var plus = +num1 - +num2
//     result.innerHTML = plus
// }else if(userSign == "*"){
//     var plus = +num1 * +num2
//     result.innerHTML = plus
// }else if(userSign == "/"){
//     var plus = +num1 / +num2
//     result.innerHTML = plus
// }else if(userSign == "%"){
//     var plus = +num1 % +num2
//     result.innerHTML = plus
// }









// var result = document.querySelector("#result")
// var time = prompt("Enter the Time with 24 Hours Clock")
// var goodMorning = "Good Morning!"
// var goodafternoon = "Good Afternoon!"
// var goodevening = "Good Evening!"
// var goodnight = "Good Night!"

// if(time >= "0000" && time < "1200"){
//         result.innerHTML = goodMorning
// }else if(time >= "1200" && time < "1700"){
//             result.innerHTML = goodafternoon
// }else if(time >= "1700" && time < "2100"){
//     result.innerHTML = goodevening
// }else if(time >= "2100" && time <="2359"){
//     result.innerHTML = goodnight
// }else{
//     alert("Enter the correct Time")
// }






// var correctPassword = 202709;
// var userPassword = prompt("Enter the Password")

// if(userPassword == ""){
//     alert("Please enter your Password")
// }else if(userPassword == correctPassword){
//     alert("Correct! The Password you entered matches original password")
// }else{
//     alert("Incorrect Password")
// }








// var username = prompt("Enter Your Name")

// if(username ==="Fahad"){
//     alert("Hello Fahad!")
// }else{
//     alert("You are not Fahad")
// }







// var result = document.querySelector("#result");
// var userHours = prompt("Enter the Hours");
// var goodDay = "Good Day";
// var goodEvening = "Good Evening";

// if(userHours < 18){
//     result.innerHTML = goodDay
// }else{
//     result.innerHTML = goodEvening
// }








// var result = document.querySelector("#result")
// var num1 = +prompt("Enter Number 1")
// var num2 = +prompt("Enter Number 2")

// if(num1 > num2){
//     result.innerHTML = num1 + " is a larger Number"
// }else if(num2 > num1){
//     result.innerHTML = num2 + " is a larger Number"
// }else{
//     result.innerHTML = num1 + " = " + num2
// }







// var userNumber = prompt("Enter the number to know its positive or negative")
// var result = document.querySelector("#result")

// if(userNumber > 0){
//     result.innerHTML = userNumber + " is Positive Number"
// }else if(userNumber < 0){
//     result.innerHTML = userNumber + " is Negative Number"
// }else{
//     result.innerHTML = userNumber + " is Zero Number"
// }






// var hours = 24;
// var userHours = prompt("Enter the Hours") 

// if(hours => "6am" || hours <= "9am"){
//     alert("Breakfast is Served")
// }else if(hours =>"11am" || hours <="1pm"){
//     alert("Time to Breakfast")
// }





// var enterType = prompt("enter the type")

// if(typeof(enterType) === "string"){
//     alert("This type is string")
// }else if(typeof(enterType) === "number"){
//     alert("This type is number")
// }else if(typeof(enterType) === "boolean"){
//     alert("This type is boolean")
// }else{
//     alert("This type is undefined")
// }

// console.log(typeof(enterType))


var value_ = +prompt("enter a value");
if(typeof(value_) == "number"){
    document.write("the given value is  number");
}else if(typeof(value_) == "string"){
    document.write("the given value is  string");
}else{
    document.write("the given value is boolean");
}

