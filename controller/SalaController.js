import CadastrarSala from "../Model/Sala.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

async function TratarCadastroDeSala() {
  let numero 
  let capacidade_total

  do{
    numero = prompt("Digite o numero da sala (ex: sala 1): ")
  }while(!Number(numero))

  do{
    capacidade_total = prompt("Digite a quantidade de assentos da sala: ")
  }while(!Number(capacidade_total))

  try{
    await CadastrarSala(numero, capacidade_total)
    console.log("Sala cadastrado com sucesso");
    
  }catch(err){
    console.error("erro ao cadastrar a sala", err.message);
    
  }
}
export default TratarCadastroDeSala

