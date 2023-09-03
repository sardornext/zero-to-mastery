// var database = [
//   {
//     username: "a",
//     password: "s"
//   }
// ];

// var newsFeed = [
//   {
//     username: "Bobby",
//     timeline: "So tired from all that learning!"
//   },
//   {
//     username: "Sally",
//     timeline: "Javascript is sooooo cool!"
//   },
//   {
//     username: "Mitch",
//     timeline: "Javascript is preeetyy cool!"
//   }
// ];

// var userNamePrompt = prompt("What's your username?");
// var passwordPrompt = prompt("What's your password?");

// function signIn(user, pass) {
//   if (user === database[0].username && 
//       pass === database[0].password) {
//         console.log(newsFeed);
//       } else {
//         alert("Sorry, wrong username and password!");
//       }
// }
// signIn(userNamePrompt, passwordPrompt); 


// LOOOOOOOOOOOOOOOOOOOOOOOOOP

// var todo = [
//   "Have a shower",
//   "Have a breakfast",
//   "Go to work",
//   "Have a lunch",
//   "Go home",
//   "Have a dinner",
//   "Go to bed",
// ];

// for (var i = 0; i < todo.length; i++) {
//   console.log(todo[i]);
// }

// todo.forEach(function (todo, i) {
//   console.log(todo, i);
// });

// for (var i = 0; i < todo.length; i++) {
//   console.log(todo[i] + "!");
// }

// for (var i = 0; i < todo.length; i++) {
//   todo[i] = todo[i] + "!";
// }

// for (var i = 0; i < todo.length; i++) {
//   console.log(todo[i]);
// }

// for (var i = 0; i < todo.length; i++) {
//   todo.pop();
//   console.log(todo);  
// }

// var counterOne = 0;
// while (counterOne < 10) {
//   console.log(counterOne);
//   counterOne++;
// }

var counterOne = 10;
while (counterOne > 10) {
  console.log("while", counterOne);
  counterOne--;
}

var counterTwo = 10;
do {
  console.log("do while",counterTwo);
  counterTwo--;
} while (counterTwo > 10);
