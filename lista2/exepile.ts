import { Stack } from "./classStack";

import read from 'readline-sync'

const pilha = new Stack<string>();

let codMenu: number = 0;

do{
    console.clear();
    console.log("***********************************************\n");
    console.log("         1 - Adicionar Livro na Pilha");
    console.log("         2 - Listar todos os Livros");
    console.log("         3 - Retirar Livro da Pilha");
    console.log("         0 - Sair\n");
    console.log("***********************************************\n");

    codMenu = read.questionInt("Entre com a opcao desejada: ");

    switch(codMenu){
        case 1:
            pilha.push(read.question("Digite o nome: "));pilha
            console.log("\nPilha:\n");
            pilha.printStack();
            console.log("\nLivro adicionado!\n");
            break;
        case 2:
            console.log("\nLista de Livros na Pilha: \n");
            pilha.printStack();
            console.log();
            break;
        case 3:
            if (pilha.isEmpty() === true){
                console.log("\nA Pilha está vazia!\n");
            }else{
                console.log("\nPilha:\n");
                pilha.pop();
                pilha.printStack();
                console.log("\n Um Livro foi retirado da pilha!\n");
            }
            break;
    }
read.question("\nPressione ENTER para continuar...");
}while(codMenu !== 0)

console.log("Programa Finalizado!");