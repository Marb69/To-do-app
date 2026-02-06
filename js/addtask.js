import { task } from "./Interface.js";
import { SetItem, TaskData } from "./storage.js";


export function addtask(Task){


    TaskData.push(new task(Task));



}