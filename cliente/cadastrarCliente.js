import * as banco from "../banco.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

export async function inserirCadastroCliente(nome, email, cpf, dt_nascimento) {
  try {
    const sqlCliente =
      "INSERT INTO cliente (nome_completo, email, cpf, dt_nascimento) VALUES (?, ?, ?, ?)";
    const [result] = await banco.conexao.query(sqlCliente, [
      nome,
      email,
      cpf,
      dt_nascimento,
    ]);
    return result.insertId;
  } catch (err) {
    console.error("Erro ao cadastrar: ", err.message);
    throw err;
  }
}

export async function cadastrandoCliente() {
  let primeiroNome;
  let sobrenome;
  let nome;
  let email;
  let cpf;
  let dt_nascimento;
  let dataFormatada

  do {
    primeiroNome = prompt("Digite seu Primeiro nome: ");
  } while (primeiroNome.length < 3 || Number(primeiroNome));

  do {
    sobrenome = prompt("Digite seu Sobrenome: ");
  } while (sobrenome.length < 3 || Number(sobrenome));
  nome =
    primeiroNome.charAt(0).toUpperCase() +
    primeiroNome.slice(1) +
    " " +
    sobrenome.charAt(0).toUpperCase() +
    sobrenome.slice(1);

  do {
    email = prompt("Digite um Email válido: ");
  } while (!email.includes("@"));

  do {
    cpf = prompt("Digite seu CPF sem pontos e sem traços: ");
  } while (!Number(cpf) || cpf.length !== 11);

  do {
    dt_nascimento= prompt("Digite sua data de nascimento (DD/MM/YYYY): ");
    dataFormatada = dt_nascimento.split("/").reverse().join("-");
  } while (!dt_nascimento.includes("/"));

  inserirCadastroCliente(nome, email, cpf, dataFormatada);
}
cadastrandoCliente()

