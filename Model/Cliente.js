import conexao from "../config/banco.js";

async function CadastrarCliente(nome, email, cpf, dt_nascimento) {
  try {
    const sqlCliente =
      "INSERT INTO cliente (nome_completo, email, cpf, dt_nascimento) VALUES (?, ?, ?, ?)";
    const [result] = await conexao.query(sqlCliente, [
      nome,
      email,
      cpf,
      dt_nascimento,
    ]);
    console.log("Cadastrado com sucesso", " ID - ", result.insertId);

    return result.insertId;
  } catch (err) {
    console.error("Erro ao cadastrar: ", err.message);
    throw err;
  }
}

export default CadastrarCliente;


