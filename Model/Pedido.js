import conexao from "../config/banco";

async function InserirPedido(id_cliente, forma_pagamento, total_pago) {
  try {
    const sqlPedido =
      "INSERT INTO pedido (id_cliente, forma_pagamento, total_pago) VALUES (?,?,?)";
    const [result] = await conexao.query(sqlPedido, [
      id_cliente,
      forma_pagamento,
      total_pago,
    ]);
    return result.insertId;
  } catch (err) {
    console.log("Errdo ao cadastrar: ", err);
  }
}

export default InserirPedido