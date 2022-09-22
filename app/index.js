const DOMSelectors = {
  button: document.getElementById("btn"),
  input: document.getElementById("text"),
  errmsg: document.getElementById("erCont"),
  new: document.querySelector(`.newCont`),
  progress: document.querySelector(`.inprogress`),
  complete: document.querySelector(`.completed`),
};
let Todo = [];

/* function Write() {
  Todo.forEach((e) => {
    DOMSelectors.list.insertAdjacentHTML(
      "beforeend",
      `<div class="docont">
        <p class="dothis">${e}</p>
        <div class="btnCont">
          <button id="${e}" class="check"></button>
          <button id="${e}" class="delete"></button>
        </div>        
      </div>`
    );
    console.log(e);
  });
}
function getrid() {
  let remove = document.querySelectorAll(`.delete`);
  remove.forEach((node) => {
    node.addEventListener("click", function (e) {
      e.target.parentElement.parentElement.remove();
      Todo.splice(e.id);
      console.log("deleted");
    });
  });
}
function check() {
  let complete = document.querySelectorAll(`.check`);
  complete.forEach((node) => {
    node.addEventListener("click", function (e) {
      e.target.parentElement.parentElement.children[0].className =
        "dothiscomplete";
      setTimeout(() => e.target.parentElement.parentElement.remove(), 1000);
      Todo.splice(e.id);
      console.log("completed");
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
      while (DOMSelectors.list.firstChild) {
        DOMSelectors.list.removeChild(DOMSelectors.list.lastChild);
      }
      console.log(Todo);
      Write();
      getrid();
      check();
    }
    if (display === "") {
      DOMSelectors.errmsg.className = "errmsg";
    }
  });
}

getinput();
 */
function add() {
  DOMSelectors.button.addEventListener("click", function () {
    let input = DOMSelectors.input.value;
    createList(input, Todo);
  });
}

function createList(input, list) {
  let update = false;
  if (DOMSelectors.input.value !== "") {
    let obj = {
      text: input,
      status: "new",
    };
    list.push(obj);
    update = true;
    if (update === true) {
      while (DOMSelectors.new.firstChild) {
        DOMSelectors.new.removeChild(DOMSelectors.new.lastChild);
      }
      while (DOMSelectors.progress.firstChild) {
        DOMSelectors.progress.removeChild(DOMSelectors.progress.lastChild);
      }
      while (DOMSelectors.complete.firstChild) {
        DOMSelectors.complete.removeChild(DOMSelectors.complete.lastChild);
      }
      if (DOMSelectors.complete.firstChild === null) {
        list.forEach(function (e) {
          if (e.status === "new") {
            DOMSelectors.new.insertAdjacentHTML(
              "beforeend",
              `<div class="docont">
                  <p class="dothis">${e.text}</p>
                  <div class="btnCont">
                      <button id="${(e.text, e.status)}" class="check"></button>
                      <button id="${e.text}" class="delete"></button>
                  </div>        
                </div>`
            );
          } else if (e.status === "In Progress") {
            console.log(e);
          } else if (e.status === "Completed") {
            console.log(e);
          }
        });
        update = false;
        DOMSelectors.input.value = null;
      }
    }
  } else {
    DOMSelectors.errmsg.className = "errmsg";
  }
}

add();
