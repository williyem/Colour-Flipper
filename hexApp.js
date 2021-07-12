hexClickBtn = document.querySelector("[data-hex-click-button]");
colorName = document.querySelector("[data-color-name]");

// ------------------------------FOR HEXADECIMAL COLOURS---------------------------

const color = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

hexClickBtn.addEventListener("click",()=>{
    changeColor();

  

})

function changeColor(){
    
    document.body.style.backgroundColor =`${colorGenerator()}`;
    colorName.innerText = `${colorGenerator()}`;
}

function colorGenerator() {
    let letter = "#";
    for (let i = 0; i <= 5; i++) {  
     letter+= color[Math.floor(Math.random() * 16)];
    
    }
   return letter;
    
}