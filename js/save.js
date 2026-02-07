import { addtask } from "./addtask.js";
import { AddTask, SaveBtn, TaskInput } from "./main.js";
import { render } from "./render.js";
import { GetItem, SetItem } from "./storage.js";




export function save(){
    


SaveBtn.addEventListener('click',()=>{

    
    let InputValue = AddTask.value;

    if(InputValue == ''){

        alert('Please Fill the Input Field');
    }else{

          addtask(InputValue);
          render();
        
          
    }

 
})
}