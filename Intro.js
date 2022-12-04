// Day 1 session-------------------------------------------------
/*alert("hi");*/

/*
let id=21;
let Fname="viknesh";
let mail="vikeyviknesh@gmail.com";
let contact=8610860489;
let currstatus=true;

console.log(id+" "+Fname+" "+mail+" "+contact+" "+currstatus+" ");
*/
//Variables: let, const, var
//-------------------
/* 
let birthyear=1990; 
   birthyear=1995;       //let is change value
   let age=2022-birthyear;
   console.log(age);
*/
/*
   const birthyear=1990; 
   birthyear=1995;       // const is can't change value
   let age=2022-birthyear;
   console.log(age);
   */
/*
   var birthyear=1990; 
   birthyear=1995;       //var is change value
   let age=2022-birthyear;
   console.log(age);
    */
/*
   const age="20";     //this string

   if(age===20){    //  === this is integer strict validation
    console.log("age is valid");
   }
   else{
    console.log("age is not valid");
   }  
   */
// day 2 session--------------------------------------------------

// String & Template literals
// --------------------------
/*
const Fname="viknesh";
const mail="vikeyviknesh@gmail.com";
const birthyear=1990;
const age=2022 - birthyear;

console.log("My name is"+Fname+"mail id is"+mail+"and age is"+age);  //------String

console.log(`My name is ${Fname}       
mail id is ${mail} 
and age is ${age}`);            //--------Template literal
*/

//   for(let i=0; i<=100; i++){ consol.log(i);  } // --------For loop used (let)

// Type conversion & Type coersion
// -------------------------------
/*
const birthyear="1990";
const currentyear=32 + Number(birthyear);  //---string to Number(Type conversion)
console.log(currentyear);
*/
/*
const birthyear="vikey";
const currentyear=String(32) + (birthyear);  //---Number to string(Type conversion)
console.log(currentyear);
*/
//---Type coersion
//---------------------
/*
console.log('23' - '10' -3);
console.log('24' / '2');      //---Type coersion
*/

//Truthy & Falsy values:
//----------------------
/*
let i=0;   //  0
let i=''; // empty valu
let i      // undefinee
let i=null;// null
           //NaN
if(i){
   console.log("condition True");
}else{
   console.log("condition False");
}
*/

//Tow alert: 1. alert("hi") 2. prompt("hi")
//-----------------------------------------

//(Typeof) Variable
//----------------
/*
const input=23;            
const Sinput="vikey";
console.log(typeof input);      // number Type
console.log(typeof Sinput);     // string Type
*/
/*
const input = prompt("Enter your number");
console.log(Number(input) + 100);      // Convert Number
*/

//Statement & Expression:
//-----------------------
/*
console.log("condition false"); // this string is Statment
console.log(`Hi ${24-(21-3)} is a number`); // string + Logic= Expression
*/
//Ternary OPerator:
//----------------
/*
const age=7;
if(age){
   console.log('I can drink');    //sample
}else{
   console.log(`I can't drink`);
}
*/
/*
const age=7;
age >= 18 ? console.log('I can drink') : console.log(`I can't drink`); // This is Ternary OPerator
*/
/*
     const License= true;
     const result = License ? 'yes': 'no' ; // This is Ternary OPerator, no using if condition statement
     console.log(result)
*/
/*
     const License= true;
     const result=License ? console.log('yes'): console.log('no')    // This is Ternary OPerator
*/
//Strict Mode
//-----------
/*
'use strict';

i="vikey"       // i is not defined (let)
console.log(i);
*/

// Day 3 session--------------------------------------------------------------------

//Functions:
//----------
//Normal function method
/*
   function calAge(){
      console.log("we are going to calculate the age")
   }
   calAge();
   */
//Functions Declaration
//---------------------
/*
     let currentyear=2022;

     function calAge(birthyear){       // this syntex is declaration

            let age=currentyear - birthyear;
            console.log(age);                
     }
     calAge(1989);
     */

//Another type Function Declaration

/*
     let currentyear=2022;

     function calAge(birthyear){

         return currentyear - birthyear;
                       
     }
     const age= calAge(1989);
     console.log(age);
     */

//Function Expression
//-------------------
/*
     let currentyear=2022;

     const calAge=function (birthyear){       // this syntex is Expresstion 

         return currentyear - birthyear;
                       
     }
     const age= calAge(1989);
     console.log(age);
     */

//Arrow Function
//--------------
/*
     let currentyear=2022;

     const calAge= birthyear => currentyear - birthyear;        //this syntex is Arrow
                       
     const age= calAge(1989);
     console.log(age);
     */
//Multiple line Arrow function  //Mandatory {} and return
//----------------------------
/*
     let currentyear=2022;

     const calAge= birthyear => {
      console.log("hi")                      //First line
      return currentyear - birthyear;        //second line
     }                 
     const age= calAge(1989);
     console.log(age);
     */

//using function inside another function
//--------------------------------------
/*
     function cutFruit(furit){
            return furit * 4;
     }

     const juiceProcessor=function(apple,orange){

         const applePieces= cutFruit(apple);
         const orangePieces= cutFruit(orange);

      const juice=`Make a juice with ${apple} apple cut into ${applePieces} pieces, and ${orange} strawbery cut into ${orangePieces} pieces`;
      return juice;
     }
     console.log(juiceProcessor(3,2));
     */
//function inside function
//------------------------
/*
const high5 = function () {
  return function () {
    console.log("hi");
  };
};

const msg = high5();
console.log(msg());
*/

//---Normal return statement-----------------------------
/*
const high5 = function () {
  return "hi";
};
const msg = high5();
console.log(msg);
*/

//Array
//------
/*
      const arr=[10,20,30,40,50];
      const arr= new Array(10,20,30,40,50);  // another type Array
      console.log(arr);
      console.log(arr[0]);

      for(let i=0; i< arr.length; i++){
         console.log(arr[i])
      }
      */

//const arr = new Array(10, 20, 30, 40, 50);

/*
       console.log(arr.push(60));      // add the value in last
       console.log(arr);
       */
/*
       console.log(arr.unshift(5,11));   // add the value in starting
       console.log(arr);
       */
/*
       console.log(arr.pop())  // removing last value
       console.log(arr);
       */
/* 
      const a= arr.shift();   // removing starting value
       console.log(arr);
      */
/*
       console.log(arr.indexOf(30));    // 2 nd index
       */
/* 
       console.log(arr.includes(50));   // includes is boolen (true) 
      */

//const arr = ["a", "b", "c", "d", "e"];

/*
const arr2 = arr.slice(2, -1);         // slice
console.log(arr2);
*/
/*
arr.splice(2);                         // splice
console.log(arr);
*/
/*
arr.reverse();                         // reverse
console.log(arr);
*/
//const arr1 = ["g", "h"];
/*
const arr2 = arr.concat(arr1);         // concat
console.log(arr2);
*/
/*
const arr2 = arr.concat(arr1);
console.log(arr2.join("-"));           //  join
*/
//-------------------Day 4 session--------------------------------------------------------
// Objects-heap memory
//-----------------------
/*
     const detail={                   //this is Object
      firstname:"vikey",
      lastname:"viknesh",
      mail:"vikeyviknesh@gmail.com",
      contact: 9566443279,
      interests:['teaching','playing','watching'],  //Array
      birthyear: 1990,
      calAge: function(){
         return 2022 - this.birthyear;           //using THIS
      }
     };

     const age = detail.calAge();
     console.log(age);                         //using THIS output
     */
/*
     console.log(detail); 
     //Dot notation
     //------------
     console.log(detail.firstname);      //Dot notation 
     console.log(detail['firstname']);   //Bracket notation

     console.log(detail.interests);       //Array output
     console.log(detail.interests[0]);    //Array output
     */

//Bracket notation
//-----------------
/*
const detail = {
  //this is Object
  firstname: "vikey",
  lastname: "viknesh",
  mail: "vikeyviknesh@gmail.com",
  contact: 9566443279,
  driverLicense:true,
  interests: ["teaching", "playing", "watching"],    //Array
  birthyear: 1990,
  calAge: function () {
    return 2022 - this.birthyear;        //using THIS
  },
};
*/
/*
     const Gaveinput = prompt('What do you want to know about my detail');     // User can take input detail only used for bracket notation
     console.log(Gaveinput);

     if(detail[Gaveinput]){
            console.log(detail[Gaveinput]);
     }else{
      console.log('wrong command')
     }
 */

// console.log(detail.calAge());

//Taske:   Karthi is a age year old and he has Yes/no driver license.
//-------------------------------------------------------------------
/*
if (detail.driverLicense) {       // inside object value used
  console.log("Yes");
} else {
  console.log("No");
}
*/
// detail.driverLicense ? "yes" : "No";   // Ternary OPerator
/*
const age = detail.calAge();
const result = detail.driverLicense ? "a" : "not";
console.log(`vikey is ${age} Year old and he has ${result} driver license`);
*/

//Scope
//-------

//Global Scope
// --------------
// const name='vikey';   // function outside the value is goble

//function Scope  // let,const,var is function scope
//------------------------------------------------
/*
     function age(){
      const birthyear=1990;     // inside the function is local variable not give output
      return 2022-birthyear;
     }
     console.log(age());         // this function give output
     console.log(birthyear);     // this variable hide in side function (error output)
     */
//block Scope  // let & const are block scoped
//----------------------------------------------
/*
     if(true){
      var lastname='vikey';    //var is only give output so this not block scope
     }
     console.log(lastname)
     */
//----------Day 5 session--------------------------------------------------------------------------
//THIS Keyword:
//--------------
/*
     console.log(this);  //window                     //Gobal
     */
/*
     function first(){
      console.log(this);  //undefined                 //declaration   //THIS keyword inside the function working
     }
     first();
     */
/* 
     const second =function(){
      console.log(this);   //undefined                 //Experssion   //THIS keyword inside the function working
     }
     second();
     */
/*
     const third=() => console.log(this); //window     //Arrow 
     third();
     */
/*
     const details={
      birthYear: 1990,
      calAge: function(){
         console.log(this);              // (THIS) is mention the inside object details
         return 2022 - this.birthYear;    
      }
     }
     console.log(details.calAge());
    */
/*
     const details={
      birthYear: 1990,
      name: 'vikey',
      calAge: function(){
         console.log(this);              
         const self = this;              // (THIS) is using 2 function not working but this seprate varable
           const basic=function(){
           return 2022 - self.birthYear;
         } 
         return basic();  
      }
     }
     console.log(details.calAge());
     */
/* 
     const details={
      birthYear: 1990,
      name: 'vikey',
      calAge: function(){
         console.log(this);             
         const age= 2022 - this.birthYear;
         const basic= () => {                        // (THIS) But Arrow function THIS is 2 fuction is working
            return console.log(`${this.name} is ${age} year old.`)
         } 
         return basic();  
      }
     }
     console.log(details.calAge());
    
      //Method Borrowing
      //--------------------
     const vikey ={
         birthYear:1994,
         name: 'rajan'
     }
      
     vikey.calAge = details.calAge;    //Method Borrowing
     console.log(vikey.calAge());
     */
//Primetive & Referances
//-----------------------
/*
     let age =30;
     let oldAge = age;

     console.log(age,oldAge);

     age = 32;

     console.log(age,oldAge);

     const me={
         age:30,
         name: 'vikey'
     }

     const friend= Object.assign({},me);  // me is take copy object 
     friend.name = 'rajan'
     console.log(friend);
     console.log(me);
     */
//Defaul Parameter
//------------------
/*
     const calAge = function (name='rajan',birthYear=1994) {
     const age= 2022 - birthYear;
      const cal = () => {                       
         return `${name} is ${age} year old.`;
      } 
      return cal();  
   }

    console.log(calAge());
   */
//Spread operator
//----------------
/*
  const age=[30,24,50,34];

  const calAverageAge = function(){
     const sum= age[0]+ age[1] + age[2] + age[3]
     const avg = sum/5
     return avg
  }

  console.log(calAverageAge());
 */
/*
  const age=[30,24,50,34];
  const calAverageAge=function(age1,age2,age3,age4,age5){
  const sum= age1 + age2 + age3 + age4 + age5
  const avg= sum/5
}
console.log(calAverageAge(age[1],age[2],age[3],age[4],age[5]));
console.log(calAverageAge(...age));
console.log(...age);
*/
//Destructing
//---------------
/*
const [age1, age2, age3, age4, age5] = [30, 24, 50, 34];
const calAverageAge = function (age1, age2, age3, age4, age5) {
  const sum = age1 + age2 + age3 + age4 + age5;
  const avg = sum / 5;
};
console.log(calAverageAge(age[1], age[2], age[3], age[4], age[5]));
console.log(...age);
*/
//DOM - Document Object Model
//---------------------------
/*
let header = document.querySelector(".message"); // change the element
console.log(header.textContent);
header.textContent = "Registeration Form";

let contact = document.querySelector("#contact");
console.log(contact);

let id = document.getElementById("contact");
console.log(id);

let a = document.getElementsByTagName("a");
console.log(a);
*/
//Events:
//-----------
/*
let user = document.querySelector(".username");  //classname
console.log(user.value);

let btn = document.querySelector(".subButton");  //classname
console.log(btn);

document.querySelector(".subButton").addEventListener("click", function () {  
  console.log(user.value);
});
*/
//-----------------------------------------------------------------------------
/*
let user = document.querySelector(".username");  //classname
console.log(user.value);

let btn = document.querySelector(".subButton");  //classname
console.log(btn);

var runMefunction () {  
  console.log(user.value);
}
document.querySelector(".subButton").addEventListener("click",runMe);
*/
//-----------------------------------------------------------------------------
/*
let user = document.querySelector(".username"); 
console.log(user.value);

let btn = document.querySelector(".subButton"); 
console.log(btn);

let wrng = document.querySelector(".warning-message");

var runMe = function () {
  console.log(user.value);
  if (user.value.length < 3) {
    user.style.backgroundColor = "red";
    wrng.textContent = "length is too low";
  } else if (user.value.length >= 5) {
    user.style.backgroundColor = "green";
    wrng.textContent = "Password is strong";
  }
};
document.querySelector(".subButton").addEventListener("click", runMe);
*/
//Enhanced for loop(forEach loop)
//-------------------
/*
const arr = ["a", "b", "c", "d", "e"];

arr.forEach(function (value, index) {
  console.log(value + " : " + index);
});
*/
//Bank Task
//-------------
/*
const arr = [200, 500, -120, 0, 700, 3000, -500];

arr.forEach(function (value, index) {
  if (value > 0) {
    console.log(`Amount Credited = ${value}(${index})`);
  } else if (value < 0) {
    console.log(`Amount Withdrawl = ${Math.abs(value)} (${index})`);
  } else {
    console.log(`Zero Blance = ${value} (${index})`);
  }
});
*/
//Map
//---------------
/*
const currencies = new Map([
  ["USD", "United States Dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound Sterling"],
]);

currencies.forEach(function (value, key) {
  console.log(value + " : " + key);
});
*/
//Map Method
//---------------
/*
const sum = [1, 3, 5, 4, 2];
const newSum = sum.map(function (elements) {
  return elements * 2;
});
console.log(newSum);
*/
//Set
//---------------
/*
const unique = new Set(["USD", "EUR", "GBP", "USD"]);

unique.forEach(function (value, value2) {
  console.log(value + " : " + value2);
});
*/
//Filter Method
//----------------
/*
const sumFilter = [1, 3, 5, 4, 2];
const newSumFilter = sumFilter.filter(function (elements) {
  return elements > 2;
});
console.log(newSumFilter);
*/
/*
const sumReduce = [1, 3, 5, 4, 2];

const sumArr = sumReduce.reduce(function (previous, current) {
  return previous + current;
});
console.log(sumArr);
*/
