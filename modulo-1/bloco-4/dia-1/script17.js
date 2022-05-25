let custoInicial = 100;
let valorDeVenda = 150;
let imposto = custoInicial * 20 / 100

let custoTotal = custoInicial + imposto
let lucro = valorDeVenda - custoTotal

console.log(lucro * 1000);
