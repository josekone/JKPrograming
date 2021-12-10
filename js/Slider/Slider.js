let arr = document.getElementsByClassName("Slide")
let arrLastElement = arr[arr.length-1]
let containerSlider = document.getElementById("container-slider")


containerSlider.insertAdjacentElement("afterbegin",arrLastElement)

function foward(){
containerSlider.style.transition = "margin 1.5s ease"
containerSlider.style.marginLeft = "-200%"



let bar = document.querySelectorAll(".text")
let Title = document.querySelectorAll(".Title-Slide")
let Subtitle = document.querySelectorAll(".Subtitle-Slide")
let arr1 = document.getElementsByClassName("Slide")

let arrFirstElement = arr1[0]
let count = 0
setTimeout(function(){
    Title[2].classList.toggle("TextAnimation")
    Subtitle[2].classList.toggle("TextAnimation")
    bar[2].classList.toggle("BarAnimation")
    containerSlider.style.transition = "none"
    containerSlider.insertAdjacentElement("beforeend",arrFirstElement)
    containerSlider.style.marginLeft = "-100%"
     ++count
     bar[1].classList.remove("BarAnimation")
     Title[1].classList.remove("TextAnimation")
     Subtitle[1].classList.remove("TextAnimation")
    
    
   
},1500)



}

setInterval(function(){
    
    
foward()






}, 8000);


////Animation -Slide///



