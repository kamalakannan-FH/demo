// Types

// =====> Number
// let a = 10
// console.log(a ,typeof a)


// =====> String
// let a = '10'
// console.log(a ,typeof a)

//=====> Boolean

// let a = true
// let b = false
// console.log(a, typeof a)
// console.log(b , typeof b)



// =====> Undefined

// let a 
// console.log(a,typeof a)



// =====> null 

// let a = null
// console.log(a , typeof a)



// =====> BigInt

// let a = 28n
// console.log(a , typeof a)

// let b = BigInt(10)
// console.log(b, typeof b)


// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MAX_SAFE_INTEGER)

// let c = Number.MAX_SAFE_INTEGER + 1
// console.log(c + 1)
// console.log(c + 2)
// console.log(c + 3)

// MIN_SAFE_INTEGER <between> Safe numbers <between> MAX_SAFE_INTEGER


// Big Int Calc

// let d = 12342536774839404038494839484939200393030303n
// console.log(d+1n)

// console.log(d + 1)

// Symbol -- Always Unique

// let a = Symbol()
// console.log(a)


// let a = Symbol('a')
// console.log(a)

// let b = Symbol('b')
// let c = Symbol('b')

// console.log(b === c)


// let name = {
//     id: '1',
//     name : 'Dhinesh'
// }

// name.id = '28888'

// console.log(name)

let person = {
    id : 28,
    name: 'Dhinesh'
}

let nameSymbol = Symbol('name')
person[nameSymbol] = 'Murali'

console.log(person)







//Dynamically changing

// let a = 'Yolo'
// a = 23

// console.log(a)