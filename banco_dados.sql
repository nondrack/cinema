-- Criar banco de dados
CREATE DATABASE IF NOT EXISTS cinema_simples;
USE cinema_simples;

-- Tabela de filmes
CREATE TABLE IF NOT EXISTS filme (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  duracao_minutos INT NOT NULL,
  descricao TEXT,
  data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de salas
CREATE TABLE IF NOT EXISTS sala (
  id INT AUTO_INCREMENT PRIMARY KEY,
  numero INT NOT NULL UNIQUE,
  capacidade_total INT NOT NULL,
  data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de sessões
CREATE TABLE IF NOT EXISTS sessao (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_filme INT NOT NULL,
  id_sala INT NOT NULL,
  data_hora DATETIME NOT NULL,
  preco_base DECIMAL(10, 2) NOT NULL,
  data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_filme) REFERENCES filme(id) ON DELETE CASCADE,
  FOREIGN KEY (id_sala) REFERENCES sala(id) ON DELETE CASCADE,
  UNIQUE KEY unique_sessao (id_sala, data_hora)
);

-- Tabela de clientes
CREATE TABLE IF NOT EXISTS cliente (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome_completo VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  cpf VARCHAR(14) NOT NULL UNIQUE,
  dt_nascimento DATE NOT NULL,
  data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de pedidos
CREATE TABLE IF NOT EXISTS pedido (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_cliente INT NOT NULL,
  forma_pagamento VARCHAR(50) NOT NULL,
  total_pago DECIMAL(10, 2) NOT NULL,
  data_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_cliente) REFERENCES cliente(id) ON DELETE CASCADE
);

-- Tabela de ingressos
CREATE TABLE IF NOT EXISTS ingresso (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_pedido INT NOT NULL,
  id_sessao INT NOT NULL,
  assento VARCHAR(10) NOT NULL,
  tipo_ingresso VARCHAR(50) NOT NULL,
  categoria_meia BOOLEAN DEFAULT FALSE,
  valor_unitario DECIMAL(10, 2) NOT NULL,
  data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_pedido) REFERENCES pedido(id) ON DELETE CASCADE,
  FOREIGN KEY (id_sessao) REFERENCES sessao(id) ON DELETE CASCADE,
  UNIQUE KEY unique_assento (id_sessao, assento)
);

-- Índices para melhorar performance
CREATE INDEX idx_cliente_email ON cliente(email);
CREATE INDEX idx_cliente_cpf ON cliente(cpf);
CREATE INDEX idx_pedido_cliente ON pedido(id_cliente);
CREATE INDEX idx_pedido_data ON pedido(data_pedido);
CREATE INDEX idx_sessao_filme ON sessao(id_filme);
CREATE INDEX idx_sessao_sala ON sessao(id_sala);
CREATE INDEX idx_sessao_data ON sessao(data_hora);
CREATE INDEX idx_ingresso_pedido ON ingresso(id_pedido);
CREATE INDEX idx_ingresso_sessao ON ingresso(id_sessao);
