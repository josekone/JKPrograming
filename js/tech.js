let arrimg = document.querySelectorAll(".container-img")
let arrtxt = document.querySelectorAll(".text-tech")
let containerinvisible=document.getElementById("container-invisible")

function click(){
for(let i =0; i<arrimg.length;++i){
//let relleno = document.getElementById("container-relleno")


arrimg[i].addEventListener("click",function(){
arrimg[i].classList.toggle("border")

containerinvisible.classList.add("invisible")
arrtxt[i].classList.toggle("visible")
let cont=0;
for(let i =0; i<arrimg.length;++i){
    if(!(arrimg[i].classList.contains("border"))){
        ++cont;
        //containerinvisible.classList.add("invisible")
        console.log(arrimg.length)
        if(cont===(arrimg.length)){
            containerinvisible.classList.remove("invisible")

        }
    }
    }



})


}
}
click()