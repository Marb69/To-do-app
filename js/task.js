export function template(taskname) {


return `<div class="task">

                   <label class="mark-done">
                     <input type="checkbox" name="" id="checkbox">
                        <span class="checkmark"></span>
                   </label>
                    <div class="task-label">
                         <span id="task-title">${taskname.Taskname}</span>
                          

                    <span id="delete-icon">
                        <i class="fa-solid fa-trash"></i>
                    </span>
                    </div>
                    
                </div>`

      
}
