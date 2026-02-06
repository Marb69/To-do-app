import { deleteTask } from "./delete.js";
import { GetItem, TaskData } from "./storage.js";

export function render() {
  const TaskWrapper = document.querySelector(".task-list");

  TaskWrapper.innerHTML = " ";

  GetItem().forEach((item,index) => {
   
    TaskWrapper.innerHTML += `<div class="task">
                    <span id="task-title">${item.task}</span>
                    <i class="fa-solid fa-trash" id="delete-icon" onclick="deleteTask(${index})"></i>
                    
                </div>`;
  });
}
