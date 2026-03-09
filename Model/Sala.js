// import * as banco from "../banco.js";
import Conectar from "../config/banco.js";

async function CadastrarSala(numero, capacidade_total) {
  try {
    const sqlSala = "INSERT INTO sala (numero, capacidade_total) VALUES (?,?)";
    const [result] = await Conectar.query(sqlSala, [
      numero,
      capacidade_total,
    ]);
    return result.insertId;
  } catch (err) {
    console.error("Erro ao cadastrar: ", err.message);
    throw err;
    
  }
}
export default CadastrarSala