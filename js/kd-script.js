let colorText = document.getElementById("text-change-color");
let colorIndex = 0;
let colorsArr = ["#41ead4","#fbff12"," #ff206e"];
function changeColorFn(){
    if(colorIndex > colorsArr.length - 1){
        colorIndex = 0;
    }
    colorText.style.color = colorsArr[colorIndex];
    colorIndex++;   
}

setInterval(changeColorFn, 500);