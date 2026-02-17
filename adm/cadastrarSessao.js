import * as banco from "../banco.js";

export async function cadastrarSessao(
  id_filme,
  id_sala,
  data_hora,
  preco_base,
) {
  try {
    const sqlSessao =
      "INSERT INTO sessao (id_filme, id_sala, data_hora, preco_base) VALUES (?,?,?,?)";
    const [result] = await banco.conexao.query(sqlSessao, [
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
