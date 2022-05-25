let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let temImpar = false

for(let index of numbers) {
    if (index % 2 === 1) {
        temImpar = true
    } 
}

console.log(temImpar);