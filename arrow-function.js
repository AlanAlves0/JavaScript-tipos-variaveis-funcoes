function apresentar2 (nome){
  return `meu nome é ${nome}`
}

console.log(apresentar2("Douglas"))


//arrow function 

//1 linha de instrução
const apresentar = nome => `meu nome é ${nome}`;
const somar = (num1, num2) => num1 + num2;

console.log(apresentar("Douglas"))
console.log(somar(5,6))

//2 ou mais linha 
const somarNumeroPequeno = (num1,num2) => {
   if (num1 > 9 , num2 > 9){
     return "numeros apenas menores que 9"
 }else {
       return num1 + num2;
    } 
}

console.log(somarNumeroPequeno(10, 50))