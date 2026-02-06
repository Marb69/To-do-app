import { deleteBtn } from "./main.js";
import { render } from "./render.js";
import { GetItem, SetItem, TaskData } from "./storage.js";

export function deleteTask(index){

      console.log(GetItem())
  


            TaskData.splice(index,0);

            SetItem();
   render();

 


       
}