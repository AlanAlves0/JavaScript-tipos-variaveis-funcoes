//parametros

function soma(numero1 = 0, numero2 = 0){
  return numero1 + numero2;
}

console.log (soma(5)) 
console.log (soma(10,3)) 

//function texto(nome,idade){
  //  return `meu nome é ${nome}, tenho ${idade} anos, moro em Belo horizonte. `;
//}
 
//console.log(texto("joão",50)) 

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

console.log (multiplica(soma(5,7), soma(8,1)))