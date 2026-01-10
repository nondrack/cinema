import mysql from "mysql";


const conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cinema",
  connectionLimit: 10,
});


export function inserirCadastro(nome, email, cpf, dt_nascimento) {
  const sql =
    "INSERT INTO pessoa (nome, email, cpf, dt_nascimento) VALUES (?, ?, ?, ?)";
  conexao.query(sql, [nome, email, cpf, dt_nascimento], (err, result) => {
    if (err) {
      console.error("Erro ao inserir:", err);
      return;
    }
    console.log("Registro inserido, id:", result.insertId);
  });
}
export function excluir(){
  const sql = 
    "TRUNCATE TABLE pessoa;"
    conexao.query(sql)
}
export function fecharConexao() {
  conexao.end(err => { if (err) console.error(err); });
}
export function cadastrarFilme(nome, duracao_minutos, descricao, dt_inicio, dt_fim){
  const sql = 
  "INSERT INTO filme (nome, duracao_minutos, descricao, dt_inicio, dt_fim) VALUES (?, ?, ?, ?, ?)";
  conexao.query(sql, [nome, duracao_minutos, descricao,dt_inicio, dt_fim ])
}
