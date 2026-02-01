
import { obj } from "./addtask.js";
import { GetTask, SetTask} from "./storage.js";

export function submit() {


  const AddBtn = document.querySelector("#add-sub");
  const TaskInput = document.querySelector("#input-task");

  AddBtn.addEventListener("click", () => {
    let InputValue = TaskInput.value;

    obj(InputValue);
      
    SetTask();

 
  });

  
}
