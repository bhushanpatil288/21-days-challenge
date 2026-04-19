document.addEventListener("DOMContentLoaded", () => {
  updateClock();

  // widgets
  updateSpentTime();
  updateDate();
})

const updateDate = () =>{
  const dateView = document.querySelector(".date");
  let checkDateEveryTenMinutes = 1000*60*10;
  dateView.innerHTML = `${new Date().getDate()} / ${new Date().getMonth()} / ${new Date().getFullYear()}`;
  setInterval(()=>{
    dateView.innerHTML = new Date();
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