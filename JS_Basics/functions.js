// function sayHi(){
//     console.log("hiiii")
// }
// sayHi()




// function sayHi(message){
//     console.log("hiiii " + message)
// }
// sayHi("Dhinesh")




// function sayHi(message){
//     return "hiiii " + message
// }

// let a = sayHi("Mahesh")
// console.log(a)



// function sayHi(message = 'User'){
//     return "hiiii " + message
// }

// let a = sayHi()
// console.log(a)



// function sayHi(message = 'User'){
//     return "hiiii " + message
// }

// let a = sayHi("Murali")
// console.log(a)



// function sayHi(welcomeMessage , name = 'Dhinesh'){
//     return welcomeMessage + name
// }

// let a = sayHi("Hello")
// console.log(a)




function sayHi(welcomeMessage = 'Hiiii', name){
    return welcomeMessage + name
}

let a = sayHi(null,"Dhinesh")
console.log(a)