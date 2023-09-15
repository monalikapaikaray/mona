// var x=5 //x is a global variable
// console.log(x)
var x=100 //global variable
function display(){
         console.log("inside diplay function")
        console.log(x)
}
function show(){
      var x=300 //local variable
    console.log("inside show  function")
    console.log(x)
}
// function display(){
//     console.log("inside diplay function")
//     console.log(x)
// }
// show()
// display()



display()
show()
console.log(x)
// console.log(x)