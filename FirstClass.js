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
