let imagenesFirst =document.querySelectorAll('.img-Uno')
let rowOne = document.getElementById("row-one")



setInterval(function () {
        let FirstElement = document.querySelectorAll('.img-Uno');
        rowOne.insertAdjacentElement("beforeend", FirstElement[0]);
        rowOne.style.transition = "margin 2s ease";
        rowOne.style.marginLeft = "-10px";
        rowOne.style.marginLeft = "0";
        


    }, 3000);