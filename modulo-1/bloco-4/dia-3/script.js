let number = Math.floor(Math.random() * 10) + 1;

console.log('O fatorial de ' + number + ' é:');

for(let multiplicador = number - 1; multiplicador > 0; multiplicador -= 1) {
     number = number * multiplicador
     
}

console.log(number);