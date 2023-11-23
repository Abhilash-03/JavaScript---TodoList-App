// ****TODO LIST WITH LOCALSTORAGE******

let input = document.getElementById("inp");
let addBtn = document.getElementById("addVal");
let lists = document.getElementById("ul");

// Adding todo list
addBtn.addEventListener("click", () => {
  let getTodo = localStorage.getItem("todos");

  const todoObj = {
    todo: input.value,
    check: false,
  };

  if (getTodo === null) {
    todoArr = [];
  } else {
    todoArr = JSON.parse(getTodo);
  }

  if (input.value === "") {
    document.getElementById("msgBox").style.display = "block";
  } else {
    document.getElementById("msgBox").style.display = "none";
    todoArr.push(todoObj);
  }

  localStorage.setItem("todos", JSON.stringify(todoArr));

  localStorage.getItem("todos");
  input.value = "";
  showTodoLists();
});

// Showing all the todo lists.
const showTodoLists = () => {
  let getTodo = localStorage.getItem("todos");
  //  localStorage.getItem('todos');
  if (getTodo === null) {
    todoArr = [];
  } else {
    todoArr = JSON.parse(getTodo);
  }

  let displayList = "";
  todoArr.forEach((task, index) => {
    if (!task.check) {
      displayList += `<li class="list-item">
      <span class="left-side">
          <span  id="task-${index}" onclick = "done(${index})">${task.todo}</span>
          </span>
          <div class = 'icons'>
          <i class="fa-solid fa-pen-to-square" onclick="edit(${index})"></i>
          <i class="fa-solid fa-trash" onclick="deleteList(${index})"></i>
          </div>
          </li>
      
          `;
    } else {
      displayList += `<li class="list-item" id="li-${index}">
          <span class="left-side">
             <span  id="task-${index}" onclick = "done(${index})" class='done'>${task.todo}</span>
             <small class="doneTsk"></small>
             </span>
             <div class = 'icons'>
             <i class="fa-solid fa-pen-to-square" onclick="edit(${index})"></i>
             <i class="fa-solid fa-trash" onclick="deleteList(${index})"></i>
             </div>
             </li>
         
             `;
    }
  });

  lists.innerHTML = displayList;
};

// Edit the todo list function
const edit = (listIndex) => {
  let getTodo = localStorage.getItem("todos");

  if (getTodo == null) {
    todoArr = [];
  } else {
    todoArr = JSON.parse(getTodo);
  }

  let editTxt = prompt("Enter your edit text.");
  if (editTxt !== "") {
    todoArr[listIndex].todo = editTxt;
  }
  localStorage.setItem("todos", JSON.stringify(todoArr));
  showTodoLists();
};

// Delete the todo list function

const deleteList = (delList) => {
  let getTodo = localStorage.getItem("todos");

  if (getTodo == null) {
    todoArr = [];
  } else {
    todoArr = JSON.parse(getTodo);
  }

  todoArr.splice(delList, 1);
  localStorage.setItem("todos", JSON.stringify(todoArr));

  showTodoLists();
};

// Check the list if task has done.
const done = (index) => {
  let doneTask = document.getElementById(`task-${index}`);

  let getTodo = localStorage.getItem("todos");

  if (getTodo == null) {
    todoArr = [];
  } else {
    todoArr = JSON.parse(getTodo);
  }

  if (!doneTask.classList.contains("done")) {
    todoArr[index].check = true;
  } else {
    todoArr[index].check = false;
  }

  localStorage.setItem("todos", JSON.stringify(todoArr));
  showTodoLists();
};

showTodoLists();
