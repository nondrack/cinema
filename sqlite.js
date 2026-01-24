import sqlite3 from "sqlite3";
import { open } from "sqlite";

const db = await open({
  filename: "./cinema.sql",
  driver: sqlite3.Database,
});
export async function criar(nome, sobrenome) {
  db.run(
    "CREATE TABLE IF NOT EXISTS pessoa (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, sobrenome TEXT)"
  );
  db.run("INSERT INTO pessoa (nome, sobrenome) VALUES (?,?)", [
    nome,
    sobrenome,
  ]);
}
export async function listar() {
    db.run(
        "SELECT * FROM pessoa"
    )
    console.log(db.run("SELECT * FROM pessoa"))
}
criar('lucas', 'fernando')
