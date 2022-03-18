




// ========  No block scope ===============

// let a = 1

// if(a){
//     let a = 2
//     console.log(a)
// }

// console.log(a)


// var a = 1

// if(a){
//     var a = 2
// }

// console.log(a)












//  ========  “var” tolerates re-declarations  =============

// let a = 1
// let a = 2

// var a = 1
// var a = 2

// console.log(a)














//  ======== “var” variables can be declared below their use  ==========

// a = 1             // Defined
// console.log(a)
// var a             // Declaration



// a = 1
// console.log(a)
// let a 




// console.log(a)
// var a


// console.log(a)
// let a 


// console.log(a)



// TDZ


// function yolo(){
// a = 10
// console.log(a)
// let a
// console.log(a)
// }

// yolo()