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
function changeStatus() {
  let complete = document.querySelectorAll(`.check`);

  complete.forEach((node) => {
    console.log(node);
    node.addEventListener("click", function (e) {
      let dot = e.target.parentElement.parentElement.children[0].id;
      let arrayitem = Todo.find((item) => item.text === dot);
      console.log(arrayitem);
      if (arrayitem.status === "new") {
        arrayitem.status = "InProgress";
        createList("change", Todo);
        return arrayitem;
      } else if (arrayitem.status === "InProgress") {
        arrayitem.status = "Completed";
        createList("change", Todo);
        return arrayitem;
      }
    });
  });
}
function remove() {
  let remove = document.querySelectorAll(`.delete`);
  remove.forEach((node) => {
    node.addEventListener("click", function (e) {
      let ridtis = Todo.find((item) => item.text === e.target.id);
      e.target.parentElement.parentElement.remove();
      console.log(ridtis);
      Todo.splice(ridtis);

      console.log("deleted");
      console.log(Todo);
    });
  });
}
function createList(input, list) {
  let update = false;
  if (input !== "") {
    if (input !== "change") {
      let obj = {
        text: input,
        status: "new",
      };
      list.push(obj);
    }

    update = true;
    if (update === true) {
      while (DOMSelectors.new.firstChild) {
        DOMSelectors.new.removeChild(DOMSelectors.new.lastChild);
        console.log("done1");
      }
      while (DOMSelectors.progress.firstChild) {
        DOMSelectors.progress.removeChild(DOMSelectors.progress.lastChild);
        console.log("done2");
      }
      while (DOMSelectors.complete.firstChild) {
        DOMSelectors.complete.removeChild(DOMSelectors.complete.lastChild);
        console.log("done3");
      }

      if (DOMSelectors.complete.firstChild === null) {
        list.forEach(function (e) {
          if (e.status === "new") {
            DOMSelectors.new.insertAdjacentHTML(
              "beforeend",
              `<div class="docont">
                  <p  id="${e.text}"class="dothis">${e.text}</p>
                  <div class="btnCont">
                      <button id="${(e.text, e.status)}" class="check"></button>
                      <button id="${e.text}" class="delete"></button>
                  </div>        
                </div>`
            );
          } else if (e.status === "InProgress") {
            DOMSelectors.progress.insertAdjacentHTML(
              "beforeend",
              `<div class="docont">
                  <p id="${e.text}"class="dothis">${e.text}</p>
                  <div class="btnCont">
                      <button id="${(e.text, e.status)}" class="check"></button>
                      <button id="${e.text}" class="delete"></button>
                  </div>        
                </div>`
            );
            console.log(e);
          } else if (e.status === "Completed") {
            DOMSelectors.complete.insertAdjacentHTML(
              "beforeend",
              `<div class="docont">
                  <p id="${e.text}"class="dothis">${e.text}</p>
                  <div class="btnCont">
                      <button id="${e.text}" class="delete"></button>
                  </div>        
                </div>`
            );
            console.log(e);
          }
        });
        update = false;
        DOMSelectors.input.value = null;
        changeStatus();
        remove();
      }
    }
  } else {
    DOMSelectors.errmsg.className = "errmsg";
  }
}

add();
