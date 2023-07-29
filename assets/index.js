let input = document.getElementById('inp');
let addBtn = document.getElementById('addVal');
let lists = document.getElementById('ul');

let listArray = [];


addBtn.addEventListener('click', ()=>{
    let listValue = input.value;
    let task = {
        todo: listValue,
        check: false,
    }

    if(listValue === ""){
    document.getElementById('msgBox').style.display = 'block';
    }
    else{
    document.getElementById('msgBox').style.display = 'none';
    listArray.push(task);

    }
    
    showTodoLists();
        input.value = '';   
})

// All the Todo lists are showing
const showTodoLists = ()=>{
    let displayList = '';
    listArray.forEach((task, index)=>{
        if(!task.check){

        displayList += `<li class="list-item">
         <span  id="task-${index}" onclick = "done(${index})">${task.todo}</span>
         <div class = 'icons'>
         <i class="fa-solid fa-pen-to-square" onclick="edit(${index})"></i>
         <i class="fa-solid fa-trash" onclick="deleteList(${index})"></i>
         </div>
         </li>
     
         `
        }
        else{
            displayList += `<li class="list-item" id="li-${index}">
            <span  id="task-${index}" onclick = "done(${index})" class='done'>${task.todo}</span>
            <small class="doneTsk"></small>
        
            <div class = 'icons'>
            <i class="fa-solid fa-pen-to-square" onclick="edit(${index})"></i>
            <i class="fa-solid fa-trash" onclick="deleteList(${index})"></i>
            </div>
            </li>
        
            `
        }
     
    })
   

    lists.innerHTML = displayList;

}

// Edit the todo list function
const edit = (listIndex)=>{
  let editTxt = prompt("Enter your edit text.");
  if(editTxt !== ""){
    listArray[listIndex].todo = editTxt;

  }
   showTodoLists();

}
// Delete the todo list function

const deleteList = (delList)=>{
    listArray.splice(delList, 1);
    showTodoLists();
}

// Check the list if task has done.
const done = (index)=>{
    let doneTask = document.getElementById(`task-${index}`);

    if(!doneTask.classList.contains('done')){

        listArray[index].check = true;
    }
    else{
        listArray[index].check = false;

    }
    showTodoLists();

}

showTodoLists();