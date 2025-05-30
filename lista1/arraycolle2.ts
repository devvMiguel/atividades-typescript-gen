import leia from 'readline-sync'

const lista: Array<number> = new Array<number>(2,5,1,3,4,9,7,8,10,6);

console.log(`Array: ${lista}\n`);

let numb = leia.questionInt("Digite o numero que voce deseja encontrar: ");

if(!lista.includes(numb)){
    console.log(`\nO número ${numb} não foi encontrado!`);
}
else{
    console.log(`\nO número ${numb} está localizado na posição: ${lista.indexOf(numb)}`);
}