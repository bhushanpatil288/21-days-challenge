document.addEventListener("DOMContentLoaded", () => {
  const notes = getNotesFromLocalStorage();
  const notes_container = document.querySelector(".notes_container");
  const save_note_button = document.querySelector("#save_note");

  renderNotes(notes, notes_container);

  listenForAddNoteClick(notes, notes_container);
  listenForNoteEdit(notes, notes_container);
  listenForSaveNotes(save_note_button, notes, notes_container);
})

const listenForSaveNotes = (save_note_button, notes, notes_container) => {
  save_note_button.addEventListener("click", () => {
    save_note_button.innerHTML = `<i class="ri-check-line"></i>`;
    save_note_button.classList.remove("bg-blue-500");
    save_note_button.classList.add("bg-green-500");
    saveNotesToLocalStorage(notes)
    setTimeout(() => {
      save_note_button.innerHTML = `<i class="ri-save-line"></i>`;
      save_note_button.classList.remove("bg-green-500");
      save_note_button.classList.add("bg-blue-500");
    }, 1000);
  })
}

const saveNotesToLocalStorage = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
}

const getNotesFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("notes")) || [
    "JavaScript is a versatile, high-level programming language mainly used for web development.",
    "Variables in JavaScript can be declared using var, let, or const depending on scope and mutability.",
    "Functions allow you to encapsulate reusable logic and can be declared or expressed in different ways.",
    "Arrays are used to store multiple values in a single variable and provide many built-in methods like map, filter, and reduce."
  ];;
}

const listenForNoteEdit = (notes, notes_container) => {
  notes_container.addEventListener("input", (e) => {
    if (e.target.id === "note") {
      const noteIndex = e.target.dataset.id;
      notes[noteIndex] = e.target.value;
      console.log(notes)
    }
  })
}

const listenForAddNoteClick = (notes, notes_container) => {
  notes_container.addEventListener("click", (e) => {
    if (e.target.id === "add_note") {
      notes.push("");
      renderNotes(notes, notes_container);
    }
    if (e.target.closest("#delete_note")) {
      const noteElement = e.target.closest(".note");
      const note_idx = noteElement.dataset.id;
      notes.splice(note_idx, 1);
      renderNotes(notes, notes_container);
      saveNotesToLocalStorage(notes);
    }
  })
}

const renderNotes = (notes, notes_container) => {
  notes_container.innerHTML = "";
  notes.forEach((note, idx) => {
    notes_container.innerHTML += `
      <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <div data-id=${idx} class="note mx-10 mt-10 bg-slate-100 p-4 rounded-md shadow-md">
          <div class="flex justify-end mb-2">
            <div id="delete_note" title="delete note" class="text-red-500 hover:bg-red-500 hover:text-white cursor-pointer p-1 px-2 rounded-md transition-all duration-200">
              <i class="ri-delete-bin-line"></i>
            </div>
          </div>
            <div>
              <textarea class="w-full h-35 p-2 outline-none" id="note" data-id=${idx} placeholder="Start writing"
                class="border border-gray-300 rounded px-2 py-1">${note}</textarea>
            </div>
          </div>
        </div>
    `
  })
  notes_container.innerHTML += `
    <!-- add note button -->
    <div class="flex min-h-35 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 items-center justify-center">
      <button id="add_note" class="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded text-2xl font-bold"
        title="add note">+</button>
    </div>
  `
}

