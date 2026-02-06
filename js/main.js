import { deleteTask } from "./delete.js";
import { modal } from "./modal.js";
import { render } from "./render.js";
import { save } from "./save.js";
import { GetItem } from "./storage.js";

export const TaskInput = document.querySelector("#input");
export const SaveBtn = document.querySelector("#add-sub");
export const AddBtn = document.querySelector("#add-task");
export const Modal = document.querySelector("#modal");
export const ExitBtn = document.querySelector("#exit");
export const AddTask = document.querySelector('#input-task');
export const deleteBtn = document.querySelector('#delete-icon');

document.addEventListener("DOMContentLoaded", () => {
  modal();
  render();
  save();

 console.log(deleteBtn);
});
