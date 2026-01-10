import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });
// import { criar } from './conexao.js'
// import * as funcao from "./conexao.js";
import * as funcao from "./conct.js";

menuSelecao()

// function limparTela() {
//   console.clear();
// }
// function cadastroFilme(nome) {
//     nome
    
// }
// function relatorio() {}
// function listarClientes() {
//     console.log("--- Listas de Clientes ---");
//     console.log("Cliente 1 - João Silva");
//     console.log("Cliente 2 - Maria Santos");
//     console.log("Cliente 3 - Pedro Costa");
// }
// function cadastroCliente() {
  
// }
// function menuCliente() {
//   let opcao;
//   do {
//     console.log("--- selecione um menu ---");
//     console.log(" 1 - menu ADM");
//     console.log(" 2 - Cadastrar um cliente");
//     console.log(" 3 - Sair");

//     opcao = prompt("--- escolha uma opção---");

//     switch (opcao) {
//       case "1":
//         console.log("Menu ADM");
//         limparTela();
//         menuAdm();
//         break;
//       case "2":
//         console.log("Cadastrar um cliente");
//         limparTela();
//         funcao.inserirCadastro(
//           prompt("Digite seu nome: "),
//           prompt("Digite seu email: "),
//           prompt("Digite sua senha: "),
//           prompt("Digite seu Usuario: ")
//         )
//         console.log("Cadastrado com sucesso!!!");

//         funcao.fecharConexao()
        
//         break;
//       case "3":
//         console.log("saindo");
//         limparTela();
//         break;

//       default:
//         console.log("Digite um numero valido ");
//         limparTela();
//         break;
//     }
//   } while (opcao !== "3");
  
// }
// function menuAdm() {
//   let opcao;
//   do {
//     console.log("--- Sistema de gerenciamento cinema Aurora---");
//     console.log(" 1 - Cadastrar filmes");
//     console.log(" 2 - Relatorios de venda");
//     console.log(" 3 - Listar clientes");
//     console.log(" 0 - sair");

//     opcao = prompt("---Escolha uma opção: ");
//     limparTela();

//     switch (opcao) {
//         case "1":
//             console.log("Cadastrar filmes");
//             cadastroFilme(prompt("Digite o nome do filme: "));
//             limparTela();
//             break;
//         case "2":
//             console.log("Relatórios de venda");
//             relatorio();
//             limparTela();
//             break;
//         case "3":
//             limparTela();
//             console.log("Lista de clientes");
//             listarClientes();
//             break;
//         case "0":
//             console.log("Saindo do gerenciador");
//             limparTela();
//             break;
//         default:
//             console.log("Numero inexistente");
//             limparTela();
//             break;
//     }
//   } while (opcao !== "0");
// }
// menuCliente();
