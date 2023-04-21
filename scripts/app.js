
// Task - 01

// var zakat = 0.025;
// var userInput = +prompt("Write a Number");

// var zakatAmount = zakat * userInput;

// alert("Your Zakat Value is " +  zakatAmount); 


// Task - 02

// var familyMembers = prompt("Enter total Number of Family Member");

// var chooseOption = prompt("Choose a fitrah method from the following options: \n 1. Wheat (RS 10 per person) \n 2. Barley (RS 20 per person)");

// var pricePerPerson;

// if(chooseOption === "1"){
//     pricePerPerson = 10;
  
// }
// else if(chooseOption === "2"){
//     pricePerPerson = 20;
  
// }
// else{
//     console.log("No Other available")
// }

// var fitrahAmount = pricePerPerson * familyMembers;

// alert(`The fitrah amount for ${familyMembers} family members using the ${chooseOption === "1" ? "Wheat": "Barley"} chooseOption is RS ${fitrahAmount}.`);


// Task - 03

// var secretNumber = Math.floor(Math.random() * 10) + 1;

// var guessNumber = prompt("Enter a Guess Number!");

// if(secretNumber == guessNumber){
//     alert("Congratulations! You guessed");
//     // console.log("Congratulations! You guessed");
// }

// else{
//     alert("Try more to guess exact same");
//     // console.log("Guess again to get exact same");
// }


// Task - 04

// var userName = prompt("Enter your Name");

// var firstLetterCapitalized = userName.charAt(0).toUpperCase() + userName.slice(1);

// console.log(firstLetterCapitalized);

// Task - 05

// var arr1 = [];
// var arr2 = [];

// var userName = prompt("Enter Contact Name");
// var userNum = prompt("Enter Contact Number");

// // arr1.unshift("Tayyab");
// // arr2.unshift(998);

// arr1.push(userName);
// arr2.push(userNum);

// for(var i=0 ; i<=2; i++){
//     console.log(arr1);
// console.log(arr2);
// }


// Task - 06

// var productName = ["Pencil", "Eraser", "Scale", "Color Pencil", "Remover"];

// var userAsk = prompt("Please enter the position of the element you want: ");

// productName.push(userAsk);

// var removeItem = productName.splice(5, 1);
// console.log("My Array Items: " + productName);
// console.log("Remaining array: "+ productName.length);
// console.log("My removed Item: "+ removeItem);


// Task - 07

// var nationality = prompt("What is your nationality?");
// var gender = prompt("What is your gender?");
// var age = prompt("What is your age?");

// // var nationalityCheck = "Pakistani";
// // var nationalityCheck1 = "Indian";

// // var genderCheck = "male";
// // var ageCheck = 18;

// // var genderCheck1 = "female";
// // var ageCheck1 = 18;



// if (nationality == "Pakistani" || nationality == "Indian") {
//     // console.log("Youe are Pakistani or Indian. So, You are eligible for vote.")



//     if (gender == "male" && age >= 18) {
//         console.log("You are eligible and you can go for vote");

//     }
//     else if (gender == "female" && age >= 18) {
//         // console.log("You are eligible for vote")
//         var maritalStatus = prompt("Are you married?");
//         if(maritalStatus === "yes"){
//             console.log("You are eligible to vote.");
//         }
//         else{
//             console.log("You are not eligible to vote.");
//         }

//     }
//     else {
//         console.log("You are not eligible for vote")

//     }
// }

// else {
//     console.log("Youe are not Pakistani or Indian. So, You are not eligible for vote.")
// }


// Task - 08

// var worldCupSquad = ["M.Rizwan", "Babar Azam", "M.Haris", "Saim Ayyub", "Fakar Zaman", "Haris Sohail", "Iftikhar Ahmed", "Shadab Khan", "Imad Wasim", "M.Nawaz", "Shaheen Shah", "Haris Rouf", "Naseem Shah", "Sarfaraz Ahmed", "Ihsanullah"];

// var finalTeamForIndia = worldCupSquad.slice(0, 3);
// finalTeamForIndia.push("Fakar Zaman", "Haris Sohail", "Iftikhar Ahmed", "Shadab Khan", "Imad Wasim","Shaheen Shah", "Haris Rouf", "Naseem Shah");

// console.log(worldCupSquad);
// console.log(finalTeamForIndia);






