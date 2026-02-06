
export let TaskData = [];

export function SetItem(){

   localStorage.setItem("task",JSON.stringify(TaskData));
}


export function GetItem(){

   return TaskData = JSON.parse(localStorage.getItem("task")) || [];
}