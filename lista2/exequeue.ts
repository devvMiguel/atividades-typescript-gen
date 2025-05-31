import read from 'readline-sync';

import { Queue } from "./classqueue";

const fila = new Queue<string>();

let codMenu: number = 0;

do{
    console.clear(); //LIMPA A TELA ANTES DE MOSTRAR O MENU XD GEPETO AJUDOU NISSO
    console.log("***********************************************\n");
    console.log("         1 - Adicionar Cliente na Fila");
    console.log("         2 - Listar todos os Clientes");
    console.log("         3 - Retirar Cliente da Fila");
    console.log("         0 - Sair\n");
    console.log("***********************************************\n");

    codMenu = read.questionInt("Digite uma opcao: ");

    switch(codMenu){
        case 1:
            fila.enqueue(read.question("Digite o nome: "));
            console.log("\nFila:\n");
            fila.printQueue();
            console.log("\nCliente Adicionado!\n");
            break;
        case 2:
            console.log("\nLista de Clientes na Fila: \n");
            fila.printQueue();
            console.log();
            break;
        case 3:
            if (fila.isEmpty() === true){
                console.log("\nA Fila está vazia!\n");
            }else{
                console.log("\nFila:\n");
                fila.dequeue();
                fila.printQueue();
                console.log("\n O Cliente foi Chamado!\n");
            }
            break;
    }
read.question("\nPressione ENTER para continuar...")
}while(codMenu !== 0)

console.log("Programa Finalizado!");