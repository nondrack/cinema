import * as banco from "../banco.js";

export async function cadastrarSala(numero, capacidade_total) {
  try {
    const sqlSala = "INSERT INTO sala (numero, capacidade_total) VALUES (?,?)";
    const [result] = await banco.conexao.query(sqlSala, [
      numero,
      capacidade_total,
    ]);
    return result.insertId;
  } catch (err) {
    console.error("Erro ao cadastrar: ", err.message);
    throw err;
    
  }
}
