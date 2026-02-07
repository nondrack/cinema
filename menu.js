import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });
import * as banco from "./banco.js";

function limparTela() {
  console.clear();
}

// ============= menu principal ===========

export async function menuInicial() {
  let opcao;

  do {
    console.log(" ( === Escolha uma das Opção de Teste === )");
    console.log(" 1 ( - ADM - )");
    console.log(" 2 ( - Comprar ingresso - )");
    console.log(" 3 ( - SAIR - )");

    opcao = prompt("== Digite uma escolha == : ");

    switch (opcao) {
      case "1":
        limparTela();
        console.log("( === MENU ADM === )");
        adm();
        break;
      case "2":
        limparTela();
        console.log("( === Cadastrando cliente ===");
        const id_cliente = await banco.inserirCadastroCliente(
          prompt("Digite seu Nome completo: "),
          prompt("Digite seu Email: "),
          prompt("Digite seu CPF: "),
          prompt("Digite sua Data de nascimento: "),
        );
        break;

      case "3":
        limparTela();
        console.log("Saindo...");
        banco.fecharConexao();
        break;
      default:
        limparTela();
        console.log("-- Digite um numero valido!!! --");
    }
  } while (opcao !== "3");
}

async function adm() {
  let opcao;
  do {
    console.log("--- Selecione uma Opção ---");
    console.log("-- 1 filmes --");
    console.log();
    opcao = prompt("-- Digite uma opção --");

    switch (opcao) {
      case "1":
        limparTela();
        filmes();
        break;
    }
  } while (opcao !== "2");
}
function filmes() {
  let opcao;

  do {
    console.log("--- Selecione uma Opção ---");
    console.log("-- 1 Cadastrar Filme --");
    console.log("-- 2 Editar Filme--");
    console.log("-- 3 Listar Filme--");
    console.log("-- 4 Sair --");

    opcao = prompt("--- Digite uma escolha : ");

    switch (opcao) {
      case "1":
        console.log("-- Cadastrando filme --");
        banco.cadastrarFilme(
          prompt("Nome : "),
          prompt("Duração em Minutos : "),
          prompt("Genero : "),
          prompt("Data Inicio : "),
          prompt("Data Final : "),
        );
        break;
      case "2":
        console.log("-- Editando filme --");
        break;
    }
  } while (opcao !== "4");
}
menuInicial();
