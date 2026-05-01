const input = document.querySelector("#taskInput");
const form = document.querySelector("#todoForm");
const ul = document.querySelector("#task-list");
let editIndex = false;

const exampletasks = [
  {
    title: "Finish Today's workout",
    complete: true
  }, {
    title: "Add a feature to app",
    complete: false
  }
]

const tasks = loadFromLocalStorage();

document.addEventListener("DOMContentLoaded", () => {
  renderTasks()
  listenForAddTask();
  listenForDeleteTask();
  listenForEditTask();
  listenForTaskCompletion();
})

function listenForTaskCompletion(){
  ul.addEventListener("click", (e)=>{
    const checkmark = e.target.closest(".checkmark");
    const index = checkmark.dataset.index;
    tasks[index].complete = !tasks[index].complete;
    renderTasks();
  })
}

function listenForDeleteTask() {
  ul.addEventListener("click", (e) => {
    const delBtn = e.target.closest(".del");
    if (!delBtn) return;

    const index = Number(delBtn.dataset.index);
    tasks.splice(index, 1);
    renderTasks();
  })
}

function listenForEditTask() {
  ul.addEventListener("click", (e) => {
    const editBtn = e.target.closest(".edit");
    if (!editBtn) return;

    const index = Number(editBtn.dataset.index);

    EditTaskState(index);

  })
}

function EditTaskState(index) {
  if (index !== false) {
    input.value = tasks[index].title;
    const addBtn = document.querySelector("form button");
    addBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Edit`
    editIndex = index;
    return;
  }
  input.value = '';
  const addBtn = document.querySelector("form button");
  addBtn.innerHTML = `<i class="fas fa-plus mr-2"></i>Add`
  editIndex = false;
}

function listenForAddTask() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskWritten = input.value;
    if (!taskWritten) {
      return;
    }

    if (editIndex !== false) {
      tasks[editIndex].title = taskWritten;
      EditTaskState(false);
      renderTasks();
    } else {
      tasks.push({ title: taskWritten });
      renderTasks();
      input.value = '';
      input.focus();
    }
  })
}

function renderTasks() {
  if (tasks.length === 0) {
    ul.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-inbox"></i>
        <p class="text-sm">No tasks yet. Add one to get started!</p>
      </div>
    `;
    return;
  }

  ul.innerHTML = ''
  tasks.forEach((task, idx) => {
    let str = ` 
        <li class="task-item flex items-center gap-4 justify-between rounded-lg p-4 transition-all">
          <div class="flex items-center gap-3 flex-1 min-w-0">
            <div class="checkmark cursor-pointer" data-index=${idx} >
              ${task.complete ? `<div>
                  <i class="fa-solid fa-circle-check"></i>
                </div>`
                :`<div>
                  <i class="fa-regular fa-circle-check"></i>
                </div>`
              }
              
            </div>
            <span class="${task.complete ? "task-text truncate line-through !text-gray-400" : "task-text truncate"}">${task.title}</span>
          </div>
          <div>
          <button class="edit rounded-lg p-2 hover:shadow-md shrink-0" data-index="${idx}" title="Delete task">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button class="del rounded-lg p-2 hover:shadow-md shrink-0" data-index="${idx}" title="Delete task">
            <i class="fa-solid fa-trash-can"></i>
          </button>
          </div>
        </li>`
    ul.innerHTML += str
  })
  saveToLocalStorage(tasks);
}

function saveToLocalStorage(tasks) {
  try {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } catch {
    return exampletasks;
  }
}

function loadFromLocalStorage() {
  return JSON.parse(localStorage.getItem("tasks")) || exampletasks;
}