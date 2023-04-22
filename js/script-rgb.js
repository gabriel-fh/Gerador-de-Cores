const color = document.querySelector(".color")
const btnRgb = document.querySelector("button.btnRGB")


function randomNumber(type){
    return Math.floor(Math.random() * type)
}

btnRgb.addEventListener('click', changeColorRgb)

function changeColorRgb(){
    let red = 0;
    let green = 0;
    let blue = 0;
    let finalColor;

    for(let i = 0; i < 1; i++){
        red += randomNumber(255);
        blue += randomNumber(255);
        green += randomNumber(255);

    }

    finalColor = `rgb(${red}, ${blue}, ${green})`;

    color.textContent = finalColor;
    document.querySelector(".container").style.backgroundColor = finalColor;
    document.querySelector("span").style.color = finalColor

}
