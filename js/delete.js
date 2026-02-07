import { TaskWrapper } from "./main.js";
import { render } from "./render.js";
import { GetItem, SetItem } from "./storage.js";

export function deleteTask(){



        TaskWrapper.addEventListener("click", (e) => {

        let dataTask = GetItem();
           
    if (e.target.classList.contains("delete-icon")){

 

       let id = Number(e.target.dataset.id);

      let update = dataTask.filter(item=> item.id !== id);




      SetItem(update);
      
      render();
    };

 
     
    


});
    

 


       
}