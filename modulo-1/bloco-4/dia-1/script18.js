let initialSalary = 3000;
var inss = 0;
var ir = 0;

if (initialSalary <= 1556.94) {
    var inss = initialSalary * 0.08;
} else if (initialSalary > 1556.94 && initialSalary <= 2594.92) {
    var inss = initialSalary * 0.09;
} else if (initialSalary > 2594.92 && initialSalary <= 5189.82) {
    var inss = initialSalary * 0.11;
} else {
    inss = 570.88
};

let salary2 = initialSalary - inss

if (salary2 <= 1903.98) {
    ir = 0
} else if (salary2 > 1903.98 && salary2 <= 2826.65){
    ir = salary2 * 0.075 - 142.80
} else if (salary2 > 2826.65 && salary2 <= 3751.05){
    ir = salary2 * 0.15 - 354.80
} else if (salary2 > 3751.05 && salary2 <= 4664.68){
    ir = salary2 * 0.225 - 636.13
} else if (salary2 > 4664.68){
    ir = salary2 * 0.275 - 869.36
};

let finalSalary = salary2 - ir

console.log(finalSalary);