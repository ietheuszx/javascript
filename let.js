// Declaração de uma variável
//let nome; // Escopo de bloco
var idade; // Escopo global
const PI = 3.14; // Escopo de bloco e global

function soma() {
  if(true) {
    var nome = "Marans"
    console.log(nome)
  }
  nome = "José Londa"
  console.log(nome)
}
soma()