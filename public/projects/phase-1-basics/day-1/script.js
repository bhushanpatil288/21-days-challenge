const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".widget-container");



function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll(".draggable:not(.dragging)")];

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child };
    } else {
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}


document.addEventListener("DOMContentLoaded", () => {
  draggables.forEach(draggable => {
    draggable.addEventListener("dragstart", () => {
      draggable.classList.add("dragging");
      // Add a slight delay to allow the ghost image to be created before hiding the original
      setTimeout(() => {
        draggable.style.opacity = "0.5";
      }, 0);
    });

    draggable.addEventListener("dragend", () => {
      draggable.classList.remove("dragging");
      draggable.style.opacity = "1";
    });
  });

  containers.forEach(container => {
    container.addEventListener("dragover", e => {
      e.preventDefault();
      const afterElement = getDragAfterElement(container, e.clientY);
      const dragging = document.querySelector(".dragging");
      if (afterElement == null) {
        container.appendChild(dragging);
      } else {
        container.insertBefore(dragging, afterElement);
      }
    });
  });
  
  updateClock();

  // widgets
  updateSpentTime();
  updateDate();
})

const updateDate = () => {
  const dateView = document.querySelector(".date");
  let checkDateEveryTenMinutes = 1000 * 60 * 10;
  dateView.innerHTML = `${new Date().getDate()} / ${new Date().getMonth()} / ${new Date().getFullYear()}`;
  setInterval(() => {
    dateView.innerHTML = `${new Date().getDate()} / ${new Date().getMonth()} / ${new Date().getFullYear()}`;
  }, checkDateEveryTenMinutes)
}

const updateClock = () => {
  const hourView = document.querySelector(".hour");
  const minuteView = document.querySelector(".minute");
  const secondView = document.querySelector(".second");


  setInterval(() => {
    let currentTime = new Date();
    hourView.innerHTML = String(currentTime.getHours()).padStart(2, '0');
    minuteView.innerHTML = String(currentTime.getMinutes()).padStart(2, '0');
    secondView.innerHTML = String(currentTime.getSeconds()).padStart(2, '0');
  }, 1000)
}

const updateSpentTime = () => {
  const timeSpentView = document.querySelector(".timeSpent");
  let totalMinutes = 0
  timeSpentView.innerHTML = "00:00:00";
  setInterval(() => {
    totalMinutes += 1 / 60;
    let hours = Math.floor(totalMinutes / 60);
    let minutes = Math.floor(totalMinutes % 60);
    let seconds = Math.floor((totalMinutes % 1) * 60);
    timeSpentView.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, 1000)
}