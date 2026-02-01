import { GetTask, SetTask } from "./storage.js";



let Task = GetTask();



export function obj(task){

    let taskObj = {

        Taskname:task,
        done:false
    }

  Task.push(taskObj);

  

   
}


export {Task};