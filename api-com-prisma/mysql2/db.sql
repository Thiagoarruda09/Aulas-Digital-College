CREATE DATABASE db_usando_mysql2;

USE db_usando_mysql2;

CREATE TABLE tb_usuarios(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (20) NOT NULL,
    email VARCHAR (40) NOT NULL
);

INSERT INTO tb_usuarios (nome, email)
VALUES ('joaquim da silva', 'joaquin@email.com');

INSERT INTO tb_usuarios (nome, email)
VALUES ('maria chiquinha', 'maria@email.com');