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
      `<div>
        <p class="dothis">${e}</p>
        <button>&#xf00d;</button>
      </div>`
    );
  });
}
function getinput() {
  DOMSelectors.button.addEventListener("click", function () {
    let display = DOMSelectors.input.value;
    if (display !== "") {
      DOMSelectors.errmsg.className = "errmsghide";
      Todo.push(display);
      DOMSelectors.input.value = null;
      DOMSelectors.list.childNodes.forEach((e) => {
        e.remove();
      });
      Write();
    }
    if (display === "") {
      DOMSelectors.errmsg.className = "errmsg";
    }
  });
}

getinput();
