const numero = 8;
const texto = "8";

// == -> compara o valor
// === -> compara o valor e o tipo 

//comparação implícita
console.log(numero == texto)
console.log(numero === texto)


//conversão explícita
Number()
String()

console.log(numero + Number(texto))
console.log(numero + texto)

//typeof - saber o tipo
console.log(typeof numero)
console.log(typeof texto)