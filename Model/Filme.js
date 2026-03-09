
import conexao from "../../config/banco.js";

async function CadastrarFilme(nome, duracao_minutos, descricao) {
  try {
    const sqlFilme =
      "INSERT INTO filme (nome, duracao_minutos, descricao) VALUES(?,?,?)";
    const [result] = await conexao.query(sqlFilme, [
      nome,
      duracao_minutos,
      descricao,
    ]);
    return result.insertId;
  } catch (err) {
    console.error("Erro ao cadastrar um Filme: ", err.message);
  }
}
export default CadastrarFilme