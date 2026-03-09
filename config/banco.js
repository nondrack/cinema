import mysql from "mysql2/promise";

const conexao = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "cinema_simples",
  connectionLimit: 10,
});

export default conexao;


// ======= FECHAR CONEXAO ========//

export async function fecharConexao() {
  try {
    await conexao.end();
    console.log("Conexao encerrada.");
  } catch (err) {
    console.log("Erro ao fechar conexão: ", err);
  }
}