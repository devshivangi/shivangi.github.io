// ..............start basic of javascript ..........

//variables
/*var str = "this is a string";
var num = 123;
var isPaid = true;
var isFree = false;
var Undef;
var isNull = null;
 var isEmpity = "";
alert(str)
 alert(num)
 alert(isPaid)
 alert(isFree)
 alert(Undef)
 alert(isNull)
 alert(isEmpity)*/

 //objects
 /*var foodItem = {
     "itemType":"coffee",
     "itemName": "kapachino",
     "itemQuality": "large",
     "cost": 230,
     "isAvailable": true,
     "qualityAvailable" : 20
 }
 var nameOfTheItem = foodItem.cost+100;
 alert(nameOfTheItem);*/

 //Arrays myarry[]
 /*var popularSports = ["soccer", "basketball","cricket","tennis","athletics","rugby","formula 1","boxing","ice hockey", "volleyball"]
 var mostPopularSports = popularSports[1]
 var lengthOfPopularSports = popularSports.length;
 alert(lengthOfPopularSports)*/
 /*var users = [{
     "email":"shivi@gmail.com",
     "password": "somepassword",
     "firstName":"shivi",
     "lastName":"sharma",
     "mobileNumber":9759387043,
     "isVarified":true,
     "isPaid":false
     },
     {
        "email":"aditya@gmail.com",
        "password": "somepassword",
        "firstName":"aditya",
        "lastName":"kumar",
        "mobileNumber":9259387043,
        "isVarified":true,
        "isPaid":false
        },
        {
            "email":"sagun@gmail.com",
            "password": "somepassword",
            "firstName":"sagun",
            "lastName":"oberio",
            "mobileNumber":9755387043,
            "isVarified":true,
            "isPaid":false
          }] //end users arry
  var firstUser = users[2].firstName;
  alert(firstUser)*/

 //operators Airthmatic +(use string also),-,*,/,%
 /*var a="shivangi";
 var b="sharma";
 var c=3;
 var d = a+" "+b;
 alert(d)*/
 //assignment operators =,+=,-=,*=,/=,%= so on..
  /*var a = 10;
  var b= 15;
  b+= a//b= b+a
  alert(b)*/

  //COMPARISON OPERATOR ==(string also),===(str also),!=(str also),>,< 
  /*var a= 10;
  var z= "10";
  alert(a===z);*/ //result print in boolean value

//typeof variable giving a which type of value;
  /*var a="shivi";
  var b =10;
  var c= true;
 alert (typeof(c))*/
 /*var a = ["apple","mango","banana"]
 var b = {"firstname":"shivi","lastname":"sharma","age":21}
alert(Array.isArray(a));*/ //find typeof array like using array.isarray

//conditionals IF ,ELSE
/*var itemsPurchased = window.prompt('please tell us the number of items purchased');
if(itemsPurchased > 3){
    alert('you have got a promo code')
}else {
    alert('you are not eligible for a promo code!!')
}*/
//IF,ELSE IF,ELSE
/*var itemsPurchased = window.prompt('please tell us the number of items purchased');
if(itemsPurchased > 3){
    alert('you have got a promo code')
}else if(itemsPurchased == 3){
alert("Purchased one more item and you will get a promo code");
}else {
    alert('you are not eligible for a promo code!!')
}*/

//logical operators or,and ,not
/*var marksObtained = window.prompt('Please enter the marks obtained');
if(marksObtained == undefined || marksObtained == null || marksObtained == ''){
    alert('Invalid input')
}else if(marksObtained < 0 || marksObtained > 100){
    alert('Invalid a number between 0 to 100')
}else{
//calculating the percent
marksObtained = Number(marksObtained)//convert in number
var totalMarks = 100;
var percentageOfMarksObtained = (marksObtained / totalMarks)*100;
//end calculating the percent

if(percentageOfMarksObtained > 90){
  isToper = true
}else{
    isToper = false
}
alert(isToper)
}*/
//ternary operators --its make easy code
/*var marksObtained = window.prompt('Please enter the marks obtained');
if(marksObtained == undefined || marksObtained == null || marksObtained == ''){
    alert('Invalid input')
}else if(marksObtained < 0 || marksObtained > 100){
    alert('Invalid a number between 0 to 100')
}else{
//calculating the percent
marksObtained = Number(marksObtained)//convert in number
var totalMarks = 100;
var percentageOfMarksObtained = (marksObtained / totalMarks)*100;
//end calculating the percent
isToper = (percentageOfMarksObtained > 90)?true:false //(this is syntax of ternary OP)using ternary operator instead of else block make easy and one line code in the place of if else condition! 
alert(isToper)
}*/

//switch case condition
/*var grade = window.prompt('what is your grade')
alert(grade)
var result
switch (grade){
    case 'A' :
    result = 'You have exelllent marks'
    break
    case 'B' :
    result = 'you have good marks'
    break
    case 'C' :
    result = 'you have just passed'
    break
    case 'D' : 
    result = 'you have failed'
    break
    default :
    result = 'this is not a valid input'
}
alert(result)*/

//loops ---for loop
/*var vegetable = ["carrots","patatos","tamato","pumpkin","spinach","turnips","mashrooms","broccoli"];
 for (i=0;i<vegetable.length;i++){
     alert(i);
     alert(vegetable[i]);
 }*/
 //while loop
 /*var i=5;
 while(i>0 && i<=5){
   alert(i)
   i--
 }*/
 //break statement --breaking loops
/* var userToFind = window.prompt('Enter the name of user you want to find');
 var friendList = ["Aditiya","shivi","shivangi","sinduja","sharen","abhay"];
    for (i=0;i<=friendList.length;i++){
        alert(i)
        if(friendList[i] == userToFind){
            alert("user found at position"+(Number(i)+1))
            break;
        }
        else{
            alert('doing nothing here')
        }
    }*/
    //for in loop
    /*var singleUser = {name:"shivi",email:"shivi@gmail.com",mobileNumber:"98756974569"}
    /*alert(singleUser['email'])
    alert(singleUser['name'])
    alert(singleUser['mobileNumber'])
    for (x in singleUser){ //x is nothing its a iterator 
        alert(x)
        alert(singleUser[x])
    }*/
    /*var customers = [{
        'custId': '123',
        'singnedDate':'2018-12-11'
    },
{
    'custId':'456',
    'singnedDate':'2018-12-12'
}]
for (x in customers){
    alert(x)
    alert(customers[x].custId)
}*/

//functions
/*function multiply (x,y){
   return x*y
}
 var myProduct = multiply(2,3);
 alert(myProduct)*/
/*var generateEmail = function(name,message){
    var emailMessage = 'Hi '+name+"\n"+"This is the message we have for you -\n"+message+"\n @copyright edvisor 2018";
    return emailMessage;
}
var welcomeEmail = generateEmail('shivangi','welcome to edvisor.com');
alert(welcomeEmail);*/
/*var users = [{
    "email":"shivi@gmail.com",
    "password": "shivi123",
    "firstName":"shivi",
    "lastName":"sharma",
    "mobileNumber":9759387043,
    "isVarified":true,
    "isPaid":false
    },
    {
       "email":"aditya@gmail.com",
       "password": "somepassword",
       "firstName":"aditya",
       "lastName":"kumar",
       "mobileNumber":9259387043,
       "isVarified":true,
       "isPaid":false
       },
       {
           "email":"sagun@gmail.com",
           "password": "sagun123",
           "firstName":"sagun",
           "lastName":"oberio",
           "mobileNumber":9755387043,
           "isVarified":true,
           "isPaid":false
         }]//end of user
var checkLogin = function(email,password,allusers){
    var isUserFound = false
    var passwordCorrect = false
    for (currentUser in allusers){
     //console.log(allUsers[currentUser])
     if (allusers[currentUser]['email'] == email){
         if (allusers[currentUser]['password'] == password){
             isUserFound = true
             passwordCorrect = true
             break
         }else{
             isUserFound= true
             passwordCorrect=false
             break
         }
     }else{
         isUserFound=false
     }
}//end for in loop

if (isUserFound == true && passwordCorrect == true){
    alert('you are logged in')
}else if(isUserFound == true && passwordCorrect == false){
    alert('you have provide incorrect password')
}else  {
    alert('No user with this email found')
}
}// end check login

var email = prompt('enter your email')
var password = prompt('enter your passsword')
checkLogin(email,password,users)
//end a sample login function*/

//special methods [string data type]--> 1.string find length of the string see ex
/*var myString = "this is the big sentence and you can learn a lot about this course";
var myStringLength = myString.length
alert(myStringLength)*/
//indexOf -->finding a string inside a string
/*var myString = "this is the big sentence and you can learn a lot about this course";
var myStringIndexString = myString.indexOf("b");
alert(myStringIndexString)*/
//substr or slice--> Extracting  parts of the string
/*var myString = "this is the big sentence and you can learn a lot about this course";
var myStringSlice = myString.slice(0,4);
alert(myStringSlice)*/
/*var myString = "this is the big sentence and you can learn a lot about this course";
var indexOfBig = myString.indexOf("big")
var aSubString = myString.slice(indexOfBig,indexOfBig+3);
alert(aSubString) this combination of index of and slice method */ 
//this is replace method
/*var myString = "this is the big sentence and you can learn a lot about this course";
var replacedString = myString.replace("big sentence","short sentence");
alert(replacedString)*/
//toupercase method
/*var myString = "this is the big sentence and you can learn a lot about this course";
alert(myString.toUpperCase());
alert(myString.toLowerCase())*/
//concat --> used merging two string
/*var myString = "this is the big sentence and you can learn a lot about this course";
var anotherSentence = " Are you ready ?";
var mergedString = myString.concat(anotherSentence)
alert(mergedString)*/
//split --> used to converting a string to array.
/*var myString = "this is the big sentence and you can learn a lot about this course";
var sentenceToArray = myString.split(" ");
alert(sentenceToArray)
alert(Array.isArray(sentenceToArray))*/

//Number data type -->1.toString()--> used to convert number to striing
/*var aBigNumber = 232133232131232
var convertedIntoString = aBigNumber.toString();
alert(typeof(convertedIntoString))*/
//Number()--> used to variablesto numbers
/*var someNumber = "1233"
var convertedToNumber = Number(someNumber)
alert(typeof(convertedToNumber))*/

//Array methods --> 1.to String() --> used to convert array to string
/*var vegetables = ["carrots","patotoes","tamato","pumpkin","spinach","turnips","mushrooms","broccoli"]
var convertedString = vegetables.toString()
alert(typeof(convertedString))*/
//push and pop -push(),pop()
/*var vegetables = ["carrots","patotoes","tamato","pumpkin","spinach","turnips","mushrooms","broccoli"]
vegetables.push("Ginger")
alert(vegetables)*/
/*var vegetables = ["carrots","patotoes","tamato","pumpkin","spinach","turnips","mushrooms","broccoli"]
vegetables.pop()
alert(vegetables)*/
//shift()method used shift element from beinging
/*var vegetables = ["carrots","patotoes","tamato","pumpkin","spinach","turnips","mushrooms","broccoli"]
vegetables.shift()//like pop
alert(vegetables)
vegetables.unshift("Ginger")//like push
alert(vegetables)*/

//how to changing element at an index-its a simple assignment
/*var vegetables = ["carrots","patotoes","tamato","pumpkin","spinach","turnips","mushrooms","broccoli"]
vegetables[2]="lettuce"
alert(vegetables)*/

//how to deleting element at an index
/*var vegetables = ["carrots","patotoes","tamato","pumpkin","spinach","turnips","mushrooms","broccoli"]
delete vegetables[1]
alert(vegetables)*/
//Merging two arrays
/*var vegetables = ["carrots","patotoes","tamato","pumpkin","spinach","turnips","mushrooms","broccoli"]
var fruits = ["Apple","banana","Orange"]
var mergedArray = vegetables.concat(fruits)
alert(mergedArray)*/

//Date methods
/*var today = new Date(Date.now())
alert(today)*/
/*var someDay = new Date(Date.now())
alert(someDay)
alert(someDay.getDate())
alert(someDay.getDay())
alert(someDay.getFullYear())
alert(someDay.getHours())
alert(someDay.getMilliseconds())
alert(someDay.getMinutes())
alert(someDay.getMonth())*/

//JSON Example-->1.json Object
/*{
    "firstName":"shivangi",
    "lastName":"sharma",
    "email":"shivangi@gmail.com",
    "mobileNumber":9759387043
}*/
//array of object
/*[{
        "firstName":"shivangi",
        "lastName":"sharma",
        "email":"shivangi@gmail.com",
        "mobileNumber":9759387043
    
},
{
    "firstName":"shivangi",
    "lastName":"sharma",
    "email":"shivangi@gmail.com",
    "mobileNumber":9759387043
}]*/ // acsess the particular value outside like array


//      .........End Basic of javascript .........





