
let a = 2 + 2;

// switch (a) {
//   case 3:
//     console.log( 'Too small' );
//     break;
//   case 4:
//     console.log( 'Exactly!' );
//     break;
//   case 5:
//     console.log( 'Too big' );
//     break;
//   default:
//     console.log( "I don't know such values" );
// }


// without break
// switch (a) {
//     case 3:
//       console.log( 'Too small' );
//     case 4:
//       console.log( 'Exactly!' );
//     case 5:
//       console.log( 'Too big' );
//     default:
//       console.log( "I don't know such values" );
//   }


// club
switch (a) {
  case 3:
    console.log( 'Too small' );
    break;
  case 4:
  case 5:
    console.log( 'Almost close' );
    break;
  default:
    console.log( "I don't know such values" );
}


//compare if else & switch