export function modal(){


     const modal = document.querySelector('#modal');
     const OpenBtn = document.querySelector('#add-task');
     const CloseBtn = document.querySelector('#exit');


     OpenBtn.addEventListener('click',()=>{

          modal.classList.add('toggle');
     })

     CloseBtn.addEventListener('click',()=>{

          modal.classList.remove('toggle');
          
     })
}