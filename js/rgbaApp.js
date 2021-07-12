

colorName = document.querySelector("[data-color-name]");
rgbaClickBtn = document.querySelector("[data-rgba-click-button]");
hexClickBtn = document.querySelector("[data-hex-click-button]");





// ------------------------------------for rgba colors-------------------------------
rgbaClickBtn.addEventListener("click", ()=>{
   changeColor();
});


function changeColor() {
    let firstValue = Math.floor(Math.random() *250);
    let secondValue = Math.floor(Math.random() *250);
    let thirdValue = Math.floor(Math.random() *250);
    let fourthValue = Math.random().toFixed(1); 

    document.body.style.background =`rgba(${firstValue},${secondValue},${thirdValue} ,${ fourthValue})`;
    colorName.innerText = `rgba(${firstValue},${secondValue},${thirdValue} ,${ fourthValue})`;

}








