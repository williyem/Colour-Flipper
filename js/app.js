clickBtn = document.querySelector("[data-click-button]");
colorName = document.querySelector("[data-color-name]");
colorBox = document.querySelector("[data-color-box]");

// ------------------------------------------for simple colors--------------------------------
const color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow ", "White", "Black","Brown","Cyan","DeepPink","Grey","SkyBlue","Tomato","purple","pink"];
clickBtn.addEventListener("click", ()=>{
   
    console.log(Math.floor(Math.random() *17));
    colorBlackFix();
    changeColor();
     

});

function changeColor(){
    
   let randomNumber = Math.floor(Math.random() *16);
 document.body.style.backgroundColor = `${color[randomNumber]}`; 
 colorName.innerText = `${color[randomNumber]}`
 
}
function colorBlackFix() {
    if( document.body.style.backgroundColor = "Black" ) {
        clickBtn.style.color="white";
}
}