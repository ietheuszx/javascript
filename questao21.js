/*
Questão 21: Como você pode verificar se um objeto contém uma determinada 
propriedade em JavaScript?
*/

const carro = {
    marca: 'Chevrolet',
    modelo: 'Corvette',
    ano: 1974
  };

  console.log(carro.hasOwnProperty('marca')); // true
  console.log(carro.hasOwnProperty('cor')); // false