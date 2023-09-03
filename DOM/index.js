// var button = document.getElementsByTagName('button')[0];

// button.addEventListener('click', function() {
//   console.log('Hello, World!');
  
// });

// var button = document.getElementById('enter');
// var input = document.getElementById('userinput');
// var ul = document.querySelector('ul');
// var li = document.getElementsByTagName('li');

// button.addEventListener('click', function() {
//   if (input.value.length > 0 ) {
//     var li = document.createElement('li');
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = '';
//   }
// });

// input.addEventListener('keypress', function(event) {
//   if (input.value.length > 0 && event.key === 'Enter') {
//     var li = document.createElement('li');
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = '';
//   }
// });


var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = '';
}

function addListAfterClick() {
  if (inputLength() > 0 ) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.key === 'Enter') {
    createListElement();
  }
}

button.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListAfterKeypress);

