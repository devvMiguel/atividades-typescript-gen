import leia from 'readline-sync'

const lista: Array<string> = new Array<string>;

for(let contador =0; contador < 5; contador++){
    lista.push(leia.question("Digita uma cor pls: "));
}

console.log("\nListar todas as cores: \n")

for(let colors of lista){
    console.log(colors);
}

console.log("\n Ordernar as cores: \n")

lista.sort();

for(let colors of lista){
    console.log(colors);
}