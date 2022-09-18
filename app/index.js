const DOMSelectors = {
  button: document.getElementById("btn"),
  input: document.getElementById("text"),
  errmsg: document.getElementById("erCont"),
  list: document.querySelector(`.todoCont`),
};
let Todo = [];

function Write() {
  Todo.forEach((e) => {
    DOMSelectors.list.insertAdjacentHTML(
      "beforeend",
      `<div class="docont">
        <p class="dothis">${e}</p>
        <div class="btnCont">
          <button id="${e}" class="check"></button>
          <button id="${e}" class="delete"></button>
          <button id="${e}" class="edit"></button>
        </div>

        
      </div>`
    );
  });
}
function getrid() {
  let remove = document.querySelectorAll(`.delete`);
  remove.forEach((node) => {
    node.addEventListener("click", function (e) {
      e.target.parentElement.parentElement.remove();
      Todo.splice(e.id);
      console.log("hello");
    });
  });
}
function getinput() {
  DOMSelectors.button.addEventListener("click", function () {
    let display = DOMSelectors.input.value;
    if (display !== "") {
      DOMSelectors.errmsg.className = "errmsghide";
      Todo.push(display);
      DOMSelectors.input.value = null;
      /* DOMSelectors.list.childNodes.forEach((e) => {
        e.remove();
      }); */
      DOMSelectors.list.innerHTML = "";
      Write();
      getrid();
    }
    if (display === "") {
      DOMSelectors.errmsg.className = "errmsg";
    }
  });
}
function check() {}

getinput();
