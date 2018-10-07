//  ...........Start of modern javascript......

//Block scope [using let]--> whaterver decelareed in the bracket it should contain a out of the bracket 

/*var carPrice = 200000;
console.log(carPrice)*/
/*console.log(carPrice)
let carPrice = 200000;*/ //let and var both are same but the only difference it let keyword solve the variable facing problem.
/*var x=1;
for(var x=0;x<10;x++){
    console.log(x)
} 
console.log('x= '+x)*/ //resolve this problem using let
/*let x=1;
for(let x=0;x<10;x++){
    console.log(x)
}
console.log('x ='+x)*/

//const keyword
/*const discountPercentage = 10;
 discountPercentage =20;
 console.log(discountPercentage);*/ //const value never change
/*let oldUser = true
const discountPercentage = 10;
if(oldUser == true){
    const discountPercentage =20
    console.log("oldUser discountPercentage = "+discountPercentage)
}//whenever curly bracket involved the block scope changes
console.log("Normal user discountPercentage ="+discountPercentage)*/ //we re able to access the first decelared the variable

//Arrow Function--> leatest way to decelared the function
/*let multiply = (x,y) =>{
    return x*y;
}
console.log(multiply(4,8))*/
/*let generateEmail = (name,message) =>{
    let emailMessage = 'Hi '+name+"\n"+"this is the message we have for you - \n"+message+"\n copyright @shiviEdvisor.com 2018"
    return emailMessage
}
console.log(generateEmail("shivangi","welcome to edvisor"))*/
 
//Default parameters --> set some default to function
/*function multiply (x,y=x){// you can use arrow fun
    console.log(x)
    console.log(y)
    return x*y;
}
console.log(multiply(4))*/
/*let generateEmail = (name="user",message="welcome to edvisor.com") =>{
    let emailMessage = 'Hi '+name+"\n"+"this is the message we have for uh -\n"+message+"\n copyright @edvisor.com"
    return emailMessage
}
console.log(generateEmail("shivangi"))*/

//REST Parameters and SPREAD --> ...it is called rest perameter
/*let allUserAddress = []
 let storeUserAddress = (userId,...addressToStore) =>{
     console.log(userId)
     console.log(addressToStore)
     let customAddress = {userId:userId,userAddress:addressToStore}
     allUserAddress.push(customAddress)
     console.log(allUserAddress)
     return allUserAddress
 }
let firstAddress = {
    "streetAddress":"some streetAddress",
    "city":"New Delhi",
    "state":"delhi",
    "pincode":"232323",
    "country":"India"
}
let secondAddress ={
    "streetAddress":"anothersome streetAddress",
    "city":"Noida",
    "state":"delhi",
    "pincode":"202323",
    "country":"India"
}
storeUserAddress("shivangisharma12212",firstAddress,secondAddress)*/ //pass comma sperate value syntax
/*let allPeopleToWantToInvite = []
let pushToPartyList = (...people) =>{
    let newPeopleArray = people
    console.log(people)
    allPeopleToWantToInvite = allPeopleToWantToInvite.concat(newPeopleArray)
    console.log(allPeopleToWantToInvite)
    return allPeopleToWantToInvite;
}

pushToPartyList("shindu","Arohi","Renu","shivi")
pushToPartyList("sameer","Ryhan","subham","vivhan")*/

//SPREAD parmeters --> are exactly opposite of REST
/*function sum(x,y,z){
    console.log(x);
    console.log(y);
    console.log(z);
    return x+y+z;
}
const numbers =[1,2,3]
//console.log(sum(numbers[0],numbers[1],numbers[2]))
console.log(sum(...numbers))*/
/*var a = [25,36];
var b = [27,89];
var c =[...a,...b]
console.log(c);*/

//Object Literal --> object literals more like a shortcut
/*let firstName = "shivangi";
let lastName = "sharma";
nameStoreThePerson= {firstName,lastName}
console.log(nameStoreThePerson)*/
/*let actualPrize = 50000;
let discountPercentage = 10;


let priceOfProduct = {
    actualPrize,
    discountPercentage,
    calculateFinalPrice(){
        return actualPrize - ((actualPrize+discountPercentage)/100)
    }
}
console.log(priceOfProduct)
console.log(priceOfProduct.calculateFinalPrice())*/
/*let firstName = "shivi";
let lastName = "sharma";

let nameOfPerson ={
      firstName,//Object literals define this type
      lastName,//object literals
      calculateFullName(){
          return firstName+ " "+lastName
      }
}
console.log(nameOfPerson.calculateFullName())*/
//another cool feature handle object literals
/*let keyIamStoring = "some key"
let valueIamStoring = "some value"


let finalObject= {
    [keyIamStoring]: valueIamStoring //we put squre bracket around the variable its fetching a storing value
}
console.log(finalObject)*/

//Template literal-->backtick put begning to last pragraph
/*var someBigParagarph = 
`The shivangi sharma she is the up coming ceo in the it company of indial she is so strong girl by mentally and 
phiush dsahd shdashda she pulish the book anohtheb ddsad i ma the best person in the world so what happend man 
what are uh doing now iam waiting for uh last night in restron.
why re u not coming inside  the cancelAnimationFrame`
console.log(someBigParagarph)*/
/*var a = "This is siimple line"
var b = "this is another line example of template literal"
var combinedSentence = `${a} and ${b}`  //a +"."+b 
console.log(combinedSentence)*/
/*let generateEmail =function(name,message){//use this (firstname,lastname,message)
    var emailMessage = `Hi${name}\n //use this ${firstname+" "+lastname}
         this is the message we have for you\n
         ${message}\ncopyright @edvisor.com 2018`
         return emailMessage;
}
console.log(generateEmail("SHIVANGI","welcome to edvisor.com"))*/ 
//if uh want to be disable the $functionality
/*var someTextWithCurlyBraces = 'this is some with curly braces.${Here is the text}'
console.log(someTextWithCurlyBraces)*/

//For of loop--> print of whole object like in the form of 0,1 index //we can used for of loop in case of array only not in objects
/*var customers = [{
      'custId':'123',
      'signedUpDate':'2016-12-11'
},
{
    'custId':'456',
      'signedUpDate':'2016-12-16'
    }]
    for (x of customers)//we can used like this (custmer of customers)
    console.log(customers)*/

//...........End of the modern javascript..........
//Summary
/*1. Block Scope-let and const
 2. Arrow Functions
 3.Parameters -Default,REST and SPREAD
 4. Object literals and Template literals
 5.for of loop*/ 
 //left some topics
 /*1.lexical binding
   2.Destructuring
   3.iterators 
 */