CREATE DATABASE SAP_2025_1;

USE SAP_2025_1;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) ,
    email VARCHAR(100) ,
);

CREATE TABLE livros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100),
    autor VARCHAR(100) ,
    generos VARCHAR(50) ,
    `status` VARCHAR(100),
    usuario VARCHAR

);