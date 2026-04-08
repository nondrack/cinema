import PromptSync from "prompt-sync";
const prompt = PromptSync ({sigint: true});
import CadastrarSessao from "../Model/Sessao.js";


export async function sessao() {
  let id_filme;
  let id_sala;
  let data_hora;
  let preco_base;
  let dia, mes, ano;
  let hora;
  do {
    dia = prompt("Digite o dia da sessao (DD): ");
    mes = prompt("Digite o mes da sessao (MM): ");
    ano = prompt("Digite o ano da sessao (YYYY): ");
  } while (!Number(dia) || !Number(dia) || !Number(ano));

  do {
    hora = prompt("Digite a hora no padrao H:M:S ");
  } while (!hora.includes(":"));

  data_hora = ano + "-" + mes + "-" + dia + " " + hora;

  
}