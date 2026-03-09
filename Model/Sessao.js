import conexao from "../config/banco";

async function CadastrarSessao(
  id_filme,
  id_sala,
  data_hora,
  preco_base,
) {
  try {
    const sqlSessao =
      "INSERT INTO sessao (id_filme, id_sala, data_hora, preco_base) VALUES (?,?,?,?)";
    const [result] = await conexao.query(sqlSessao, [
      id_filme,
      id_sala,
      data_hora,
      preco_base,
    ]);
    return result.insertId;
  } catch (err) {
    console.error("Erro ao cadastrar Sessão: ", err.message);
  }
}

export default CadastrarSessao