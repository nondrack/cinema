import * as banco from "../banco.js";

export async function inserirPedido(id_cliente, forma_pagamento, total_pago) {
  try {
    const sqlPedido =
      "INSERT INTO pedido (id_cliente, forma_pagamento, total_pago) VALUES (?,?,?)";
    const [result] = await banco.conexao.query(sqlPedido, [
      id_cliente,
      forma_pagamento,
      total_pago,
    ]);
    return result.insertId;
  } catch (err) {
    console.log("Errdo ao cadastrar: ", err);
  }
}

export async function pedido(){
  let id_cliente
  let forma_pagamento
  let total_pago
}

