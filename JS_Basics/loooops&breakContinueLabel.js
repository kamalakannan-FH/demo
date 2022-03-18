// let i = 0
// while (i < 3)
// {
//     console.log(i)
//     i++
// }
// console.log("outsideeee",i)


// let i = 0;
// do {
//   console.log( i );
//   i++;
// } while (i > 3);


// for(let i =0 ; i < 3 ; i++){
//   console.log(i)
// }

// for(let i =0 ; i < 3 ; i++)
//   console.log(i)





// let i =0 
// for(; i < 3 ; i++)
// console.log(i)


// let i =0 
// for(; i < 3 ;){
//     console.log(i)
//     i++
// }


// for(;;){
//     console.log(0)
// }




// continueeee
// for(let i =0 ; i < 5 ; i++){
//     if(i === 2)
//         continue
//     console.log(i)
// }


// break

// for(let i =0 ; i < 5 ; i++){
//     if(i === 2)
//         break
//     console.log(i)
// }
// console.log("outside")





// multi loops


// for (let i = 0; i < 4; i++) {
//     console.log("in iiiii", i)
//     for (let j = 0; j < 4; j++) {
//         console.log("in j",j)
//     }
//   }







// for (let i = 0; i < 4; i++) {
//     console.log("in iiiii", i)
//     for (let j = 0; j < 4; j++) {
//         if(j === 2)
//             continue
//         console.log("in j",j)
//     }
//   }
// console.log("outside")




// for (let i = 0; i < 4; i++) {
//     console.log("in iiiii", i)
//     for (let j = 0; j < 4; j++) {
//         if(j === 2)
//             break
//         console.log("in j",j)
//     }
//   }
// console.log("outside")





outer: for (let i = 0; i < 4; i++) {
    console.log("in iiiii", i)
    for (let j = 0; j < 4; j++) {
        if(j === 2)
            break outer
        console.log("in j",j)
    }
  }
console.log("outside")


// outer: for (let i = 0; i < 4; i++) {
//     console.log("in iiiii", i)
//     for (let j = 0; j < 4; j++) {
//         if(j === 2)
//             continue outer
//         console.log("in j",j)
//     }
//   }
// console.log("outside")