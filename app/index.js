const DOMSelectors = {
  button: document.getElementById("btn"),
  input: document.getElementById("text"),
  errmsg: document.getElementById("erCont"),
  list: document.querySelector(`.newCont`),
};
const Todo = [];

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
function add() {}
function createList(input, list) {
  let update = false;
  console.log(input);
  console.log(list);
  DOMSelectors.button.addEventListener("click", function () {
    if (DOMSelectors.input.value !== "") {
      let array = list;
      let add = input;
      Todo.push(`${add}: {text: ${add}, status: "new"} `);

      update = true;
      if (update === true) {
        console.log("working");
        console.log(DOMSelectors.list.firstChild);
        if (DOMSelectors.list.firstChild === null) {
          console.log("2.-");
          array.forEach(
            (e) =>
              function () {
                if (e.status === "new") {
                  console.log(e);
                  console.log(Todo);
                } else if (e.status === "In Progress") {
                  console.log(e);
                } else if (e.status === "Completed") {
                  console.log(e);
                }
                update = false;
              }
          );
        }
      }
    } /* (DOMSelectors.input.value === null)  */ else {
      DOMSelectors.errmsg.className = "errmsg";
    }
  });
}
createList(DOMSelectors.input.value, Todo);
