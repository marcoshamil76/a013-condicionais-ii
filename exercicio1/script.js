
const numDigitado = Number(prompt("Digite um número"))
console.log(numDigitado)

// if (numDigitado % 2 === 0) {
//     console.log("Número divisível por 2")

//   } else
//     console.log("Número não divisível por 2")

// if (numDigitado % 3 === 0) {
//     console.log("Número divisível por 3")
// }else
//     console.log("Número não divisível por 3")


    if (numDigitado % 2 === 0 && !numDigitado % 3 === 0){
        console.log ("Número divisível por 2")

    }else if (!numDigitado % 2 === 0 && numDigitado % 3 === 0){
        console.log ("Número divisível por 3")
    }else
        console.log ("Número não divisível por 2 e 3")