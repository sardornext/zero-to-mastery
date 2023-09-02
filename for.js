const todo = [
  "wash face",
  "brush teeth",
  "eat breakfast",
  "study javascript",
  "study javascript",
  "study javascript",
  "do homework",
  "wash face",
  "brush teeth",
  "eat breakfast",
  "study javascript",
  "study javascript",
  "study javascript",
  "do homework"
];

for (let i=0; i < todo.length; i++){
  // console.log("1" + todo[i]); // 1wash face
  //todo[i] = todo[i] + "!?"; // add !? to each element
  //console.log(todo[i]); // wash face!? ...
  todo.pop(); // remove last element of array each time through loop 
  console.log(todo); // [ 'wash face', 'brush teeth', 'eat breakfast', 'study javascript' ]

}
