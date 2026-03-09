import * as banco from "../banco.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync({sigint: true});

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

export async function sala() {
  let numero 
  let capacidade_total

  do{
    numero = prompt("Digite o numero da sala (ex: sala 1): ")
  }while(!Number(numero))

  do{
    capacidade_total = prompt("Digite a quantidade de assentos da sala: ")
  }while(!Number(capacidade_total))

  try{
    await cadastrarSala(numero, capacidade_total)
    console.log("Sala cadastrado com sucesso");
    
  }catch(err){
    console.error("erro ao cadastrar a sala", err.message);
    
  }
}
