import PromptSync from "prompt-sync";
import CadastrarFilme from "../Model/Filme.js";
const prompt = PromptSync({ sigint: true });

async function TratarCadastroDeFilme() {
  let nome;
  let duracao_minutos;
  let descricao;

  do {
    nome = prompt("Digite o nome do filme: ").trim();
  } while (!nome);

  do {
    duracao_minutos = prompt("Digite a duração do filme em minutos (APENAS NUMEROS): ").trim();
  } while (!(Number(duracao_minutos)));

  do {
    descricao = prompt("Digite o gênero do filme: ").trim();
  } while (!descricao);

  try {
    await CadastrarFilme(nome,  Number(duracao_minutos), descricao);
    console.log("Filme cadastrado com sucesso!");
  } catch (err) {
    console.log("Erro ao cadastrar filme:", err.message);
  }
}
export default TratarCadastroDeFilme


