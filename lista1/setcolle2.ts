import read from 'readline-sync'

const lista: Set<number> = new Set<number>([2,5,1,3,4,9,7,8,10,6]);

let numb = read.questionInt("\nDigite o numero que voce deseja encontrar: ");

if(!lista.has(numb)){
    console.log(`\nO número ${numb} não foi encontrado!`);
}
else{
    console.log(`\nO número ${numb} foi encontrado!`);
}