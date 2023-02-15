//Der er 3 JavaScript keywords der bruges til at definere variabler

// const er en konstant, som ikke kan ændres
// const scope er lokalt (kan kun ses i den funktion, hvor den er defineret)
// const scope kan være globalt, hvis den defineres udenfor en funktion (kan ses i hele programmet)
const a = 5

// let er en variabel, som kan ændres
// let scope er lokalt (kan kun ses i den funktion, hvor den er defineret)
// let scope kan være globalt, hvis den defineres udenfor en funktion (kan ses i hele programmet)
let b = 6
b = "hej"

// var er en variabel, som kan ændres (gammel måde at definere variabler på)
// var scope er globalt (kan ses i hele programmet)
// var scope kan være lokalt, hvis den defineres i en funktion
var c = 5.5

console.log(b)

function testScope() {
    let a1 = "xjeg er lokal"
    var v1 = "jeg er lokal"
    if(a1>v1){
        let a2 = "a1 var større end v1"
        console.log(a2)
            if(3==3){
                let a3 = 3
                var v3 = 3.3
                console.log("3=3")
            }
           // console.log(a3) kan ikke ses her
            console.log(v3) //block scope virker ikke med var
    }
}

testScope()
//console.log(a2) function scope virker
//console.log(v1) function scope virker

