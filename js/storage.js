


export function SetItem(update){

   localStorage.setItem("task",JSON.stringify(update));
   
}


export function GetItem(){

  return JSON.parse(localStorage.getItem("task")) || [];
}