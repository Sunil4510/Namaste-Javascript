//Function Statement
function a(){
    console.log("Function Statement");
}
a();

//Function Expression
var b = function(){
    console.log("Function Expression")
}
b();

//Function Named Expression
 var c = function xyz(){
     console.log("functio named expression");
 }
 c();

 //Anonymous Function
 var d = function(){//<-  anonymous function
     console.log("Anonymous Function");
 }
 d();

 //first class Function
 function x(param){
     console.log(param);
     param()
 }
 x(function(){
     console.log("First class Function");
 })


//callback in event listener 
function attch(){
    let count=0;
    document.getElementById("clickme").addEventListener("click", function(){
        console.log("Button Clicked",++count);
    })
}
attch();

//setTimeout trust issues
console.log("start");
setTimeout(function(){
    console.log("callback")
},5000)
console.log("end");

//Higher order function
//DRY principle dont repeat yourself 

//calculate the area
//bad way of writing they code->
//Not acheiving dry principle
const radius = [3,1,2,4];
const calculateArea = function(radius){
    const output = [];
    for(let i=0; i<radius.length; i++){
        output.push(radius[i]*radius[i]*Math.PI);
    }
    return output;
}
console.log(calculateArea(radius));

//Good way of writing they code->
//acheiving DRY principle 
const area = function(radius){
    return radius*radius*Math.PI
} 
const calculate = function(radius,logic){
    const output = [];
    for(let i=0; i<radius.length; i++){
        output.push(logic(radius[i]))        
    }
    return output;
}
console.log(calculate(radius,area));

//now to calculate circumference we just need to create a function logic only just like above area function
//now we dont need to repeat they code like loop,declaring variables etc.,
//Circumference logic = 2*pi*r;
const circumference = (radius)=>{
    return 2*Math.PI*radius;
}
console.log(calculate(radius,circumference));

//now to get diameter just needs to create logic function
const diameter = (radius)=>{
    return 2*radius;
}
console.log(calculate(radius,diameter));

//now we can use map directly see how
//with this line you dont need to write calculate function also 
//calculate function is just like map which attached our callback or
//function which is passed as parameter to the radius array to
// get they desired results 
console.log(radius.map(area))
//to use calculate just like map, we need to use prototype in js 
//let us see how 
Array.prototype.calculates = function(logic){
    const output = []; 
    for(let i=0; i<this.length; i++){
        output.push(logic(this[i]))
    }
    return output;
} 
console.log(radius.calculates(area)) 