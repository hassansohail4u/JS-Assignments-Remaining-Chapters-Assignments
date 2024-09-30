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


// var value_ = +prompt("enter a value");
// if(typeof(value_) == "number"){
//     document.write("the given value is  number");
// }else if(typeof(value_) == "string"){
//     document.write("the given value is  string");
// }else{
//     document.write("the given value is boolean");
// }



// Arrays


// Question 1


// var array = []

// Question 2

// var array = []


// // Question 3

// var fruits = ["Apple" , "Banana" , "Strawberry" , "Orange"]
// console.log(fruits);


// Question 4


// var marks = [90 , 79 , 95 , 67 , 88]
// console.log(marks);


// Question 5


// var boolean = [true , false]
// console.log(boolean);



// Question 6

// var mix = ["Hassan" , 15 , true]
// console.log(mix);



// Question 7



// var networks = ["Jazz" , "Warid" , "Zong" , "Ufone" , "PTCL"]
// console.log(networks);


// Question 8

// var ol = document.querySelector("ol")
// var qualifications = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M. Phil" , "Phd"] 
// ol.innerHTML += `<li>${qualifications[0]}</li>`
// ol.innerHTML += `<li>${qualifications[1]}</li>`
// ol.innerHTML += `<li>${qualifications[2]}</li>`
// ol.innerHTML += `<li>${qualifications[3]}</li>`
// ol.innerHTML += `<li>${qualifications[4]}</li>`
// ol.innerHTML += `<li>${qualifications[5]}</li>`
// ol.innerHTML += `<li>${qualifications[6]}</li>`
// ol.innerHTML += `<li>${qualifications[7]}</li>`


// Question 9

// var heading = document.querySelector("#heading")
// var ol = document.querySelector("ol")
// var movies = ["Avengers: Age of Ultron" , "Spectre" , "Jurassic World" , "Inside Out"]
// ol.innerHTML += `<li>${movies[0]}</li>`
// ol.innerHTML += `<li>${movies[1]}</li>`
// ol.innerHTML += `<li>${movies[2]}</li>`
// ol.innerHTML += `<li>${movies[3]}</li>`
// heading.innerHTML += `Length of the array ${movies.length}`



// // Question 10


// var head = document.querySelector("#head")
// var car = document.querySelector("#car")
// var firstIndex = document.querySelector("#first-index")
// var carsArray = ["Audi" , "Volvo" , "Ford" , "Lamborgini"]

// car.innerHTML = carsArray
// head.innerHTML += `First index of the array: ${carsArray.indexOf("Audi")}<br>`
// head.innerHTML += `Car at first index of the array: ${carsArray[0]}<br>`
// head.innerHTML += `First index of the array: ${carsArray.indexOf("Lamborgini")}<br>`
// head.innerHTML += `Car at first index of the array: ${carsArray[3]}<br>`


 // Question 11


//  var names = ["Michael" , "John" , "Tony"]
//  var marks = [320 , 230 , 480]
// var h1 = document.querySelector("h1")

// h1.innerHTML += `Score of ${names[0]} is ${marks[0]}. Percentage: ${marks[0] / 500 * 100}% <br>`
// h1.innerHTML += `Score of ${names[1]} is ${marks[1]}. Percentage: ${marks[1] / 500 * 100}% <br>`
// h1.innerHTML += `Score of ${names[2]} is ${marks[2]}. Percentage: ${marks[2] / 500 * 100}%`


 // Question 12

//  var beginnigColour = prompt("Enter the Colour to add in Beginnig") 
//  var endColour = prompt("Enter the Colour to add in End")
//  var onecolourbeginning = prompt("Enter One Colour to add in Beginning")
//  var secondcolourbeginning = prompt("Enter Second Colour to add in Beginning")

// var colours = []
// colours.unshift(beginnigColour)
// colours.push(endColour)
// colours.unshift(onecolourbeginning)
// colours.unshift(secondcolourbeginning)
// colours.shift()
// colours.pop()
// console.log(colours);

// var addColourindex = prompt("Enter the Index Number to add Colour")
//  var addColourEverywhere = prompt("Enter the Colour to put in this Index Number")
//  colours.splice(addColourindex , 1 , addColourEverywhere); 
//  console.log(colours);

//  var removeColourIndex = prompt("Enter the Index Number to remove Colour")
//  var removeColourEverywhere = prompt("Enter the number how many you remove in this Index Number")
//  colours.splice(removeColourIndex , removeColourEverywhere)
//  console.log(colours);
 
 
 
 // Question 13



// var h1 = document.querySelector("h1")
// var scores = [320 , 230 , 480 , 120]
// h1.innerHTML += `Scores of Students${scores}<br>`
// scores.sort()
// h1.innerHTML += `Ordered Scores of Students${scores}`


 // Question 14


//  var orderfruits = document.querySelector("#orderfruits")
// var fruitshtml = document.querySelector("#fruitshtml")
//  var fruits = ["strawbery" , "apple" , "orange" , "banana"]
//  fruitshtml.innerHTML += fruits


//  fruits.sort()
//  orderfruits.innerHTML = fruits


 // Question 15



 