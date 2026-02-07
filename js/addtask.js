import { task } from "./Interface.js";
import { render } from "./render.js";
import {  GetItem, SetItem } from "./storage.js";

    
let updated = GetItem()

export function addtask(Task){



    updated.push(new task(Task));

    SetItem(updated);
    console.log(updated);


}