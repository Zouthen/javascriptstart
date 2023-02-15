console.log("Jeg er i setbackgroundcolor")

const inp = document.querySelector(".inpColor")
console.log(inp)

const pbCol = document.querySelector(".pbSetColor")
console.log(pbCol)

const colpicker = document.querySelector(".colpicker")
console.log(colpicker)

function setBackGrColor(e){
    console.log(e)
    const bdy = document.querySelector("body")
    let col = inp.value
    console.log(col)
    bdy.style.backgroundColor = col
}

function setBackGrColorPicker(e){
    const bdy = document.querySelector("body")
    let col = colpicker.value
    console.log(col)
    bdy.style.backgroundColor = col
}

function setBackGrHexValue(){
    inp.value = colpicker.value
}

pbCol.addEventListener("click", setBackGrColor)
pbCol.addEventListener("keyup",setBackGrColor)
colpicker.addEventListener("input",setBackGrColorPicker)
colpicker.addEventListener("change",setBackGrHexValue)