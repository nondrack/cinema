import CadastroCliente from "../controller/ClienteController.js";
import InserirPedido from "../Model/Pedido.js";
import PromptSync from "prompt-sync";
import { fecharConexao } from "../config/banco.js";
const prompt = PromptSync ({ sigint: true})

async function TelaInicial() {
    let opcao 

    do{
        console.log("--- Menu Inicial ---");
        console.log("--- Escolha uma das opções para proceguir ---");
        console.log("(1)- Cadastrar um Cliente");
        console.log("(2)- Sair");

        opcao = prompt("Digite uma das opção: ")

        switch (opcao) {
            case "1":
                CadastroCliente()
                
                break;
        
            default:
                break;
        }
    }while( opcao !== "2")
}

TelaInicial()