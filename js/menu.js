let hamburguer = document.getElementById("btn-hamburguer")
let menu_items = document.querySelectorAll(".menu-items")
let menu_SocialIcons = document.getElementById("icons")



hamburguer.addEventListener("click",Show)





function Show(){
        for(let i = 0; i<menu_items.length;++i){
        menu_items[i].classList.toggle('visible')
        
    }
    menu_SocialIcons.classList.toggle('visible')
     }
     

     