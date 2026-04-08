import conexao from "../config/banco.js";

async function cadastrarIngresso(
  id_pedido,
  id_sessao,
  assento,
  tipo_ingresso,
  categoria_meia,
  valor_unitario,
) {
  try {
    const sqlIngresso =
      "INSERT INTO ingresso (id_pedido, id_sessao, assento, tipo_ingresso, categoria_meia, valor_unitario) VALUES (?,?,?,?,?,?)";
    const [result] = await conexao.query(sqlIngresso, [
      id_pedido,
      id_sessao,
      assento,
      tipo_ingresso,
      categoria_meia,
      valor_unitario,
    ]);
    return result.insertId;
  } catch (err) {
    console.error("Erro ao comprar um ingresso: ", err.message);
  }
}

export default cadastrarIngresso