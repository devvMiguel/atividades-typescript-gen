import read from 'readline-sync'

const lista: Set<number> = new Set<number>();

for(let contador =0; contador < 10; contador++){
    lista.add(read.questionInt("Digite 10 numeros, sem repetir: "));
}

console.log("\nListar dados do Set: \n");

function compareAsc(a: number, b: number) {
  return a - b;
}

const numb = [...lista].sort(compareAsc);

for(let ordenad of numb){
    console.log(ordenad);
}