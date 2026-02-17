import * as banco from "../banco.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

export async function cadastrarFilme(nome, duracao_minutos, descricao) {
  try {
    const sqlFilme =
      "INSERT INTO filme (nome, duracao_minutos, descricao) VALUES(?,?,?)";
    const [result] = await banco.conexao.query(sqlFilme, [
      nome,
      duracao_minutos,
      descricao,
    ]);
    return result.insertId;
  } catch (err) {
    console.error("Erro ao cadastrar um Filme: ", err.message);
  }
}

export async function cadastroFilme() {
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
    await cadastrarFilme(nome,  Number(duracao_minutos), descricao);
    console.log("Filme cadastrado com sucesso!");
  } catch (err) {
    console.log("Erro ao cadastrar filme:", err.message);
  }
}
