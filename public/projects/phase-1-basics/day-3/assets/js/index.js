document.addEventListener("DOMContentLoaded", ()=>{
  const menuBtn = document.querySelector("#menuBtn");
  const menu = document.querySelector(".menu")
  const overlay = document.querySelector(".overlay");
  
  
  menuBtn.addEventListener("click", () => {
    if (menu.classList.contains("-right-30")) {
      showMenu()
    } else {
      hideMenu();
    }
  })
  
  overlay.addEventListener("click", () => {
    hideMenu();
  })


  // abstractions
  function showMenu() {
    menu.classList.add("right-0");
    menu.classList.remove("-right-30");
    overlay.classList.remove("hidden");
  }

  function hideMenu() {
    menu.classList.add("-right-30");
    menu.classList.remove("right-0");
    overlay.classList.add("hidden");
  }
})