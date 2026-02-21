import mysql from "mysql2/promise";
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

export const conexao = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "cinema_simples",
  connectionLimit: 10,
});

// ======= FECHAR CONEXAO ========//

export async function fecharConexao() {
  try {
    await conexao.end();
    console.log("Conexao encerrada.");
  } catch (err) {
    console.log("Erro ao fechar conexão: ", err);
  }
}

// // ===== CLIENTE =======//

// export async function inserirCadastroCliente(nome, email, cpf, dt_nascimento) {
//   try {
//     const sqlCliente =
//       "INSERT INTO cliente (nome_completo, email, cpf, dt_nascimento) VALUES (?, ?, ?, ?)";
//     const [result] = await conexao.query(sqlCliente, [
//       nome,
//       email,
//       cpf,
//       dt_nascimento,
//     ]);
//     return result.insertId;
//   } catch (err) {
//     console.log("Erro ao cadastrar: ", err);
//   }
// }

// export async function inserirPedido(id_cliente, forma_pagamento, total_pago) {
//   try {
//   const sqlPedido =
//     "INSERT INTO pedido (id_cliente, forma_pagamento, total_pago) VALUES (?,?,?)";
//   const [result] = await conexao.query(sqlPedido, [
//     id_cliente,
//     forma_pagamento,
//     total_pago,
//   ]);
//   return result.insertId;
// }catch(err){
//   console.log("Errdo ao cadastrar: ", err);
  
// }
// }

// export async function cadastrarSala(numero, capacidade_total) {
//   const sqlSala = "INSERT INTO sala (numero, capacidade_total) VALUES (?,?)";
//   const [result] = await conexao.query(sqlSala, [numero, capacidade_total]);
//   return result.insertId;
// }

// export async function cadastrarSessao(id_filme, id_sala, data_hora, preco_base) {
//   const sqlSessao =
//     "INSERT INTO sessao (id_filme, id_sala, data_hora, preco_base) VALUES (?,?,?,?)";
//   const [result] = await conexao.query(sqlSessao, [
//     id_filme,
//     id_sala,
//     data_hora,
//     preco_base,
//   ]);
//   return result.insertId;
// }

// // ======== MENU DE ADM ======= //

// export async function cadastrarFilme(nome, duracao_minutos, descricao) {
//   const sqlFilme =
//     "INSERT INTO filme (nome, duracao_minutos, descricao) VALUES(?,?,?)";
//   const [result] = await conexao.query(sqlFilme, [
//     nome,
//     duracao_minutos,
//     descricao,
//   ]);
//   return result.insertId;
// }

// export async function cadastrarIngresso(id_pedido, id_sessao, assento, tipo_ingresso, categoria_meia, valor_unitario) {
//   const sqlIngresso =
//     "INSERT INTO ingresso (id_pedido, id_sessao, assento, tipo_ingresso, categoria_meia, valor_unitario) VALUES (?,?,?,?,?,?)";
//   const [result] = await conexao.query(sqlIngresso, [
//     id_pedido,
//     id_sessao,
//     assento,
//     tipo_ingresso,
//     categoria_meia,
//     valor_unitario,
//   ]);
//   return result.insertId;
// }
