const DOMSelectors = {
  button: document.getElementById("btn"),
  input: document.getElementById("text"),
};
let Todo = [];

function getinput() {
  DOMSelectors.button.addEventListener("click", function () {
    let display = DOMSelectors.input.value;
    Todo.push(display);
    console.log(display);
    DOMSelectors.input.value = null;
  });
}

getinput();
