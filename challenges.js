// =================TEST DATA FOR QUESTION 1===========
// Case1:
// const mainCourseCount1 = 2;
// const appetizerCount1 = 1;
// const dessertCount1 = 3;
// const restaurantLocation1 = "Domestic";


// //Case 2:
// const mainCourseCount2 = 3;
// const appetizerCount2 = 2;
// const dessertCount2 = 2;
// const restaurantLocation2 = "International";

//================== MY SOLUTION TO QUESTION 1 ==================

// const mainCourseBasePrice = 4000;
// const appetizerBasePrice = 1000;
// const dessertBasePrice = 500;
// const mainCourseCount = prompt("How many main course dishes are you ordering?");
// const appetizerCount = prompt("How many appetizer dishes are you ordering?");
// const dessertCount = prompt("How many dessert dishes are you ordering?");
// const restaurantLocation = prompt("Enter your restaurant location");
// const mainCourseFinalPrice = mainCourseBasePrice * mainCourseCount;
// const appetizerFinalPrice = appetizerBasePrice * appetizerCount;
// const dessertFinalPrice = dessertBasePrice * dessertCount;
// const totalPrice = mainCourseFinalPrice + appetizerFinalPrice + dessertFinalPrice;

// if(mainCourseCount + appetizerCount + dessertCount < 3 && restaurantLocation == "domestic"){
//     console.log(`Your total resturant bill is ${totalPrice} naira`);
// }else if(mainCourseCount + appetizerCount + dessertCount >= 3 && restaurantLocation == "domestic"){
//     console.log(`Your total resturant bill is ${totalPrice - ((totalPrice*10)/100)} naira`);
// }else if(mainCourseCount + appetizerCount + dessertCount >= 3 && restaurantLocation == "international"){
//     console.log(`Your total resturant bill is ${(totalPrice + ((totalPrice*15)/100)) - (((totalPrice + ((totalPrice*15)/100))*10)/100)} naira`);
// }else if(mainCourseCount + appetizerCount + dessertCount < 3 && restaurantLocation == "international"){
//     console.log(`Your total resturant bill is ${totalPrice + ((totalPrice*15)/100)} naira`);
// }else{
//     console.log(`There's an error in your inputted values. Check them , and try again`);
// }

// =================TEST DATA FOR QUESTION 2===========
// const age1 = 20;
// const vehicleType1 = "C";
// Output: "Eligible"

// const age2 = 16;
// const vehicleType2 = "M";
// Output: "Eligible"

// const age3 = 14;
// const vehicleType3 = "S";
// Output: "Not Eligible"

// ================== MY SOLUTION TO QUESTION 2 ==================

// const age = prompt("Please enter your age");
// const vehicleType = prompt("Please enter the vehicle type you want");

// if(age > 0 && age < 16){
//     console.log(`You're NOT ELIGIBLE for any vehicle`);
// }else if((age == 16 || age == 17) && (vehicleType == "M" || vehicleType == "S")){
//     console.log(`You're ELIGIBLE for a Moped(M) or Scooter(S)`);
// }else if((age == 16 || age == 17) && (vehicleType == "C")){
//     console.log(`You're NOT ELIGIBLE for a Car(C), but you're ELIGIBLE for a Moped(M) or Scooter(S)`);
// }else if(age >= 18){
//     console.log(`You're ELIGIBLE for any vehicle, including a Moped(M), Scooter(S) or Car(C)`);
// }else{
//     console.log(`You've inputted invalid details`);
// }

// =================TEST DATA FOR QUESTION 3===========

// const customerAge1 = 50;
// const purchaseAmount1 = 80;
// // Output: 80

// const customerAge2 = 65;
// const purchaseAmount2 = 120;
// // Output: 96

// const customerAge3 = 30;
// const purchaseAmount3 = 150;
// Output: 135

// ================== MY SOLUTION TO QUESTION 2 ==================
// const customerAge = prompt("Please enter the customer's age");
// const purchaseAmount = prompt("Please enter the purchase amount");

// if(customerAge >= 60){
//     console.log(`Your total purchase amount is ${purchaseAmount - ((purchaseAmount*20)/100)} naira`);
// }else if(customerAge < 60 && purchaseAmount >= 100){
//     console.log(`Your total purchase amount is ${purchaseAmount - ((purchaseAmount*10)/100)} naira`);
// }else{
//     console.log(`Your total purchase amount is ${purchaseAmount} naira`);
// }