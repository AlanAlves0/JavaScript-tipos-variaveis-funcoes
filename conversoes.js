//tipo de dados 
//booleanos

const numero = 879;
const numeroString = "879";

//conversão implícita

//=== -> comparar o que está dentro e o tipo
console.log(numero === numeroString)

//== -> comparando apenas o que está dentro
console.log(numero == numeroString)


//conversão explicíta
//Number()
//String()

//adição de string
console.log(numero + numeroString)

//adição número
console.log(numero + Number(numeroString))

const numero3 = 859;
const numeroString4 = "859";

console.log(numero3 + Number (numeroString4))