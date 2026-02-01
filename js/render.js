import { GetTask } from "./storage.js";
import { template } from "./task.js";

export function render(){

    const taskTable =document.querySelector('.task-list');

    taskTable.innerHTML = '';

  

        let TaskData = GetTask();


       TaskData.forEach((task) => {
        
         
       taskTable.innerHTML +=  template(task);
       

           
       });

}