import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });
// import { criar } from './conexao.js'
// import * as funcao from "./conexao.js";
import * as banco from "./banco.js";

function limparTela() {
  console.clear();
}

export function menuSelecao() {
  let opcao;
  do {
    console.log(" --- Escolha uma das Opção de Teste ---");
    console.log(" 1 - ADM --");
    console.log(" 2 - Comprar ingresso --");
    console.log(" 3 - Sair --");
    opcao = prompt("--Digite uma escolha-- ");

    switch (opcao) {
      case "1":
        limparTela();
        console.log("menu ADM selecionado");
        adm()
        return;
      case "2":
        limparTela();
        console.log("menu Comprando Ingresso");
        banco.inserirCadastro(
          prompt("Digite seu nome: "),
          prompt("Digite seu email: "),
          prompt("Digite seu cpf: "),
          prompt("Digite sua data de nascimento: "),
          (err, result) => {
            if (err) console.log("Falha ao inserir cadastro.");
            else console.log("Cadastro concluído.");
          }
        );
        banco.fecharConexao();
        return;
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

function adm() {
    let opcao
    do{
        console.log("--- Selecione uma Opção ---");
        console.log("-- 1 filmes --");
        console.log();
        opcao = prompt("-- Digite uma opção --")

        switch(opcao){
            case "1":
                limparTela()
                filmes()
                return
        }
    }while(opcao !== "2")

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

          banco.fecharConexao()
        );
      case "2":
        console.log("-- Editando filme --");
    }
  } while (opcao !== "4");
}
menuSelecao()