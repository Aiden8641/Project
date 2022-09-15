const DOMSelectors = {
  button: document.getElementById("btn"),
  input: document.getElementById("text"),
  errmsg: document.querySelector(`.error`),
};
let Todo = [];

function getinput() {
  DOMSelectors.button.addEventListener("click", function () {
    let display = DOMSelectors.input.value;
    if (display !== "") {
      Todo.push(display);
      console.log(display);
      DOMSelectors.input.value = null;
    }
    if (display === "") {
      console.log(DOMSelectors.errmsg);
      DOMSelectors.errmsg.insertAdjacentHTML(
        "beforeend",
        `<p class="errmsg">Write A Task to add to the To Do list</p>`
      );
      console.log("Write A Task to add to the To Do List");
    }
  });
}

getinput();
