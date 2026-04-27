const input = document.querySelector("#taskInput");
const form = document.querySelector("#todoForm");
const ul = document.querySelector("#task-list");

const exampletasks = [
  {
    title: "Finish Today's workout"
  }, {
    title: "Add a feature to app"
  }
]

const tasks = loadFromLocalStorage();

document.addEventListener("DOMContentLoaded", () => {
  renderTasks()
  listenForAddTask();
  listenForDeleteTask();
})

function listenForDeleteTask(){
  ul.addEventListener("click", (e)=>{
    const delBtn = e.target.closest(".del");
    if(!delBtn) return;

    const index = Number(delBtn.dataset.index);
    tasks.splice(index, 1);
    renderTasks();
  })
}

function listenForAddTask(){
  form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const taskWritten = input.value;
    if(!taskWritten){
      return;
    }

    tasks.push({title: taskWritten});
    renderTasks();
    input.value = '';
    input.focus();
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
            <span class="index">${idx + 1}</span>
            <span class="task-text truncate">${task.title}</span>
          </div>
          <button class="del rounded-lg p-2 hover:shadow-md flex-shrink-0" data-index="${idx}" title="Delete task">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </li>`
    ul.innerHTML += str
  })
  saveToLocalStorage(tasks);
}

function saveToLocalStorage(tasks){
  try{
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } catch {
    return exampletasks;
  }
}

function loadFromLocalStorage(){
  return JSON.parse(localStorage.getItem("tasks")) || exampletasks;
}