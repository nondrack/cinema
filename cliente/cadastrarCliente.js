import * as banco from "../banco.js"

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


