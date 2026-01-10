const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ARQUIVO = 'assentos.json';

// Estrutura padrão da sala (2x5)
const salaPadrao = [
  [false, false, false, false, false], // A
  [false, false, false, false, false]  // B
];

// Cria arquivo se não existir
if (!fs.existsSync(ARQUIVO)) {
  fs.writeFileSync(ARQUIVO, JSON.stringify(salaPadrao, null, 2));
}

let sala;

// Leitura segura
try {
  sala = JSON.parse(fs.readFileSync(ARQUIVO));
  if (!Array.isArray(sala[0])) throw new Error();
} catch {
  sala = salaPadrao;
}

function salvar() {
  fs.writeFileSync(ARQUIVO, JSON.stringify(sala, null, 2));
}

// 🔹 NOVO: lista os assentos ocupados
function listarAssentosOcupados() {
  const letras = ['A', 'B'];
  let ocupados = [];

  sala.forEach((fileira, i) => {
    fileira.forEach((ocupado, j) => {
      if (ocupado) {
        ocupados.push(`${letras[i]}${j + 1}`);
      }
    });
  });

  if (ocupados.length === 0) {
    return 'Nenhum assento reservado';
  }

  return ocupados.join(', ');
}

function mostrarSala() {
  console.clear();
  console.log('\n        🎥 TELA 🎥\n');

  const letras = ['A', 'B'];

  sala.forEach((fileira, i) => {
    let linha = '';
    fileira.forEach((ocupado, j) => {
      const simbolo = ocupado ? '🟥' : '🟩';
      linha += `${letras[i]}${j + 1} ${simbolo}   `;
    });
    console.log(linha);
  });

  console.log('\n🎟️ Assentos reservados:', listarAssentosOcupados());
}

function reservar() {
  rl.question('\nEscolha um assento (ex: A1) ou 0 para sair: ', (resp) => {
    if (resp === '0') {
      console.log('Sessão encerrada 🎬');
      rl.close();
      return;
    }

    const fileira = resp[0]?.toUpperCase();
    const numero = Number(resp[1]) - 1;

    const map = { A: 0, B: 1 };

    if (!(fileira in map) || numero < 0 || numero > 4) {
      console.log('❌ Assento inválido');
      return reservar();
    }

    if (sala[map[fileira]][numero]) {
      console.log('❌ Assento já ocupado');
    } else {
      sala[map[fileira]][numero] = true;
      salvar();
      console.log(`✅ Assento ${fileira}${numero + 1} reservado!`);
    }

    mostrarSala();
    reservar();
  });
}

// Início
mostrarSala();
reservar();
