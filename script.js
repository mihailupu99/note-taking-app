"use strict";

let modalWindow = document.querySelector(".modal-window");
let newNoteButton = document.querySelector(".new-note");
let spanClose = document.querySelector(".btn-close");

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
