//Variables
// let message = 'Hello there!'
// var message2 = 50
// const msg = `${message} 19 ${message2}`
// alert(msg)

//Data Types

// let age = null
// if(!age)
//     alert(age)
// console.log(typeof 0)
// console.log(true)
// console.log('Hello')
// console.log(Math)
// console.log(console.log)
// console.log(alert)
// console.log(Symbol)

// Type Conversion
// status = true
// alert(status)
// status = String(status)
// alert(typeof(status))

let msg = 'Hello there'
const num = null
// alert(Number(msg))
// alert(Number(num))
// alert(null(msg)) //Shows error
// alert(Boolean(msg))
// alert(Boolean(0))
// alert(Boolean(''))

//Operators

// alert(2+ 2+ '1'+'1'+2 + 2) //41122
// alert(- + true) //-1
// alert(+ + true) //1
// alert(- - false)//False always gives 0
// alert(+'') //Unary conversion

// Precedence
// Unary Add/Sub > Mult/Div > Add/Sub > Assignment > Comma

//Multiple Assignments
// c = 4- (a=5+8)
// alert(c) // -9

//alert(4 ** 2)// 16
//alert(parseInt('1001',2))//Gives binary representation
//alert(0111 && 0101)//0101 // 65 
//alert('0101' & '1101')//65
// alert(a = 1 + 2, 3 + 4) // Comma has least precedence so 1+2 is assigned first

// let a = 0;
// alert( Boolean(a) ); // false

// let b = "0";
// alert( Boolean(b) ); // true

// alert(a == b); // true!

// alert('' == false) //true
// alert(undefined >= 0) //False
// alert("apple" < "pineapple") //compares size//true
// alert(null == "\n0\n") //false
// alert(null === +"\n0\n")//false

// let age = prompt('How old are you?', 100);

// alert(`You are ${age} years old!`); // You are 100 years old!

// confirm('are you the boss')
// alert(boss)

// let nam = prompt('Enter your name and age','Enter name here')
// confirm('Are you ' + nam+ ' ?')

// if ("0") {
//     alert( 'Hello' );
//   }

// let x;

// false || (x = 1);

// alert(x); // 1

// Loops

// let sum = 0;

// while (true) {

//   let value = +prompt("Enter a number", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Sum: ' + sum );
// let i = 3;

// while (i) {
//   alert( i-- );
// }

// let i = 0;
// while (i++ < 5) alert( i );

// for (let i = 0; i < 5; ++i) alert( i );

//Switch case
// let a = "1";
// let b = 0;

// switch (-a) {
//   case b + 1:
//     alert("this runs, because +a is 1, exactly equals b+1");
//     break;

//   default:
//     alert("this doesn't run");
// }

// let arg = prompt("Enter a value?");
// switch (arg) {
//   case '0':
//   case '1':
//     alert( 'One or zero' );
//     break;

//   case '2':
//     alert( 'Two' );
//     break;

//   case 3:
//     alert( 'Never executes!' );
//     break;
//   default:
//     alert( 'An unknown value' );
// }

// function showMessage(from, text) {

//     from = '*' + from + '*'; // make "from" look nicer
  
//     alert( from + ': ' + text );
//   }
  
//   let from = "Ann";
  
//   showMessage(from, "Hello"); // *Ann*: Hello
  
//   // the value of "from" is the same, the function modified a local copy
//   alert( from ); // Ann

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Do you have permission from your parents?');
//     }
//   }
  
//   let age = prompt('How old are you?', 18);
  
//   if ( checkAge(age) ) {
//     alert( 'Access granted' );
//   } else {
//     alert( 'Access denied' );

//   }

//   function showMovie(age) {
//     if ( !checkAge(age) ) {
//       return;
//     }
  
//     alert( "Showing you the movie" ); // (*)
//     // ...
//   }
//   showMovie(15)

// let user = {
//     name: "John",
//     age: 30
//   };
  
//   let key = prompt("What do you want to know about the user?", "name");
  
//   // access by variable
//   alert( user[key] ); // John (if enter "name")

// let user = {
//     name: "John",
//     age: 30
//   };
  
//   let key = "name";
//   alert( user.key ) // undefined


// let fruit = prompt("Which fruit to buy?", "apple");

// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };

// alert( bag.apple ); // 5 if fruit="apple"

// let fruit = 'apple';
// let bag = {
//   [fruit + 'Computers']: 5 // bag.appleComputers = 5
// };
// alert(bag.fruit)

// Interlinked Objects

// function marry(man, woman) {
//     woman.husband = man;
//     man.wife = woman;
  
//     return {
//       father: man,
//       mother: woman
//     }
//   }
  
//   let family = marry({
//     name: "John"
//   }, {
//     name: "Ann"
//   });

// let user = {
//     name: "John",
//     age: 30,
  
//     sayHi() {
//       alert( this.name ); // leads to an error
//     }  
//   }; 
  
//   let admin = user;
//   user = null; // overwrite to make things obvious
  
//   admin.sayHi(); // Whoops! inside sayHi(), the old name is used! error!

// let calculator = {
//     sum() {
//       return this.a + this.b;
//     },
  
//     mul() {
//       return this.a * this.b;
//     },
  
//     read() {
//       this.a = +prompt('a?', 0);
//       this.b = +prompt('b?', 0);
//     }
//   };
  
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );

// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep() {
//       alert( this.step );
//       return this;
//     }
//   }
  
//   ladder.up().up().down().up().down().showStep(); // 1

// function Calculator() {

//     this.read = function() {
//       this.a = +prompt('a?', 0);
//       this.b = +prompt('b?', 0);
//     };
  
//     this.sum = function() {
//       return this.a + this.b;
//     };
  
//     this.mul = function() {
//       return this.a * this.b;
//     };
//   }
  
//   let calculator = new Calculator();
//   calculator.read();
  
//   alert( "Sum=" + calculator.sum() );
//   alert( "Mul=" + calculator.mul() );

function makeWorker() {
  let name = "Pete";

  return function() {
    alert(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // what will it show?
