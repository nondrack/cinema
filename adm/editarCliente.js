import * as conectar from "../banco.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

export async function mostrarCliente() {
  try {
    const sqlCliente = "SELECT id, nome_completo FROM cliente";
    const [result] = await conectar.conexao.query(sqlCliente);
    console.table(result);
  } catch (err) {
    console.error("Erro ao mostrar a tabela", err.message);
  }
}
function buscarNomePorId(id) {
    const registro = conectar.conexao.find(item => item.id === id);
    
    // Retorna o nome ou uma mensagem de erro
    return registro ? registro.nome : "Nome não encontrado";
}



export async function editarCliente(nome, email, cpf, dataNascimento, id) {
  try {
    const sqlCliente =
      "UPDATE cliente SET nome_completo = ?, email = ?, cpf = ?, dt_nascimento = ? WHERE id_cliente = ?";
    await conectar.conexao.query(sqlCliente, [
      nome,
      email,
      cpf,
      dataNascimento,
      id,
    ]);
  } catch (err) {
    console.error("Erro ao cadastrar: ", err.message);
    throw err;
  }
}

export async function editandoCliente() {
  let primeiroNome;
  let sobrenome;
  let nome;
  let email;
  let cpf;
  let dt_nascimento;
  let dataFormatada;
  let id;

 
  do {
    await  mostrarCliente()
    id = prompt("Digite o ID do cliente que deseja alterar: ");
  } while (!id);
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
    dt_nascimento = prompt("Digite sua data de nascimento (DD/MM/YYYY): ");
    dataFormatada = dt_nascimento.split("/").reverse().join("-");
  } while (!dt_nascimento.includes("/"));

  editarCliente(nome, email, cpf, dataFormatada, id);
}
editandoCliente()


