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

  let now = new Date();

  let formattedDate = now.toLocaleDateString("en-GB");
  let formattedTime = now.toLocaleTimeString("en-GB");

  const noteTitle = document.querySelector("#note-title").value;
  const noteText = document.querySelector("#note-text").value;

  console.log(noteTitle);
  console.log(noteText);

  let newNote = document.createElement("div");
  let newNoteTitle = document.createElement("h2");
  let newDate = document.createElement("span");
  let newNoteContent = document.createElement("p");

  newNote.classList.add("single-note");
  newNoteTitle.classList.add("heading-secondary");
  newDate.classList.add("note-date");
  newNoteContent.classList.add("note-text");

  newNoteTitle.textContent = noteTitle;
  newNoteContent.textContent = noteText;
  newDate.textContent = `${formattedDate} ${formattedTime}`;

  newNote.appendChild(newNoteTitle);
  newNoteTitle.insertAdjacentElement("afterend", newDate);
  newDate.insertAdjacentElement("afterend", newNoteContent);
  noteContainer.appendChild(newNote);

  modalWindow.style.display = "none";
});
