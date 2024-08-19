"use strict";

const modalWindow = document.querySelector(".modal-window");
const newNoteButton = document.querySelector(".new-note");
const spanClose = document.querySelector(".btn-close");
const submitNote = document.querySelector(".submit-note");
const noteForm = document.querySelector(".new-note-form");
const noteContainer = document.querySelector(".notes-area");

newNoteButton.onclick = function () {
  modalWindow.style.display = "block";
};

spanClose.onclick = function () {
  modalWindow.style.display = "none";
};

window.onclick = function (e) {
  if (e.target == modalWindow) {
    modalWindow.style.display = "none";
  }
};

noteForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form submission prevented");
  const noteTitle = document.querySelector("#note-title").value;
  const noteText = document.querySelector("#note-text").value;

  console.log(noteTitle);
  console.log(noteText);

  let newNote = document.createElement("div");
  let newNoteTitle = document.createElement("h2");
  let newNoteContent = document.createElement("p");

  newNote.classList.add("single-note");
  newNoteTitle.classList.add("heading-secondary");
  newNoteContent.classList.add("note-text");

  newNoteTitle.textContent = noteTitle;
  newNoteContent.textContent = noteText;

  newNote.appendChild(newNoteTitle);
  newNoteTitle.insertAdjacentElement("afterend", newNoteContent);
  noteContainer.appendChild(newNote);

  modalWindow.style.display = "none";
});
