
const colorsHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F" ]
const btn = document.querySelector(".btn")
const color = document.querySelector(".color")
const hexaLength = colorsHex.length
btn.addEventListener("click", changeColorHex)


function randomNumber(type){
    return Math.floor(Math.random() * type)
}

function changeColorHex(){
    let finalColor = '#'
    for(let i = 0; i < 6; i++){
        finalColor += colorsHex[randomNumber(hexaLength)]
    }
    console.log(finalColor)
    color.textContent = finalColor;
    document.querySelector(".container").style.backgroundColor = finalColor;
    document.querySelector("span").style.color = finalColor
    
}




// function randomNumber(type){
//     return Math.floor(Math.random() * type)
// }

// console.log(randomNumber(255))

// let red = 0;
//     let green = 0;
//     let blue = 0;
// for(let i = 0; i < 1; i++){
//     red += randomNumber(255);
//     blue += randomNumber(255);
//     green += randomNumber(255);
// }


