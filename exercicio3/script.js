//código a ser reescrito

// if(nome === "José"){
// 	console.log("Oi, Zé!");
// } else {
// 	console.log("Olá, "+nome);
// }

// if(idade >= 18){
// 	console.log("pode tirar carteira de motorista!");
// } else {
// 	console.log("Ainda não pode tirar carteira de motorista");
// }

const nomeDigitado = prompt("Digite seu nome").toLowerCase()
const idadeDigitada = prompt("Digite sua idade")
const listaDeNomes = ["marcos", "bento","jose"]
console.log (listaDeNomes.includes(nomeDigitado))
listaDeNomes.includes(nomeDigitado) ? console.log ("Olá o nome",nomeDigitado ,"está cadastrado") : console.log("O nome", nomeDigitado ," não está cadastrado")
idadeDigitada >= 18 ? console.log(nomeDigitado, "Você está apto a tirar a carteira de motorista"): console.log(nomeDigitado, "Você precisa aguardar completar 18 anos:)")

