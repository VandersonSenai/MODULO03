CREATE DATABASE biblioteca;

use biblioteca;

CREATE TABLE usuarios(
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_nome VARCHAR(50),
    user_email VARCHAR(50)
);

INSERT INTO usuarios (user_nome, user_email) VALUES
('Eu', 'eu@gmail.com'),
('Vanderson', 'vanderson@gmail.com');



CREATE TABLE livros(
    livro_id INT AUTO_INCREMENT PRIMARY KEY,    
    livro_titulo VARCHAR(50),
    livro_autor VARCHAR(50),
    livro_genero VARCHAR(50),
    livro_status enum('LIDO', 'LENDO', 'QUERO LER'),
    livro_id_usercad INT,
    FOREIGN KEY (livro_id_usercad) REFERENCES usuarios(user_id)
);

INSERT INTO livros (livro_titulo, livro_autor, livro_genero, livro_status, livro_id_usercad ) VALUES
('O Senhor dos Anéis', 'J. R. R. Tolkien', 'Fantasia/Ação', 'QUERO LER', '2'),
('Game of Thrones', 'George R. R. Martin', 'Fantasia/Ação', 'LIDO', '1'),
('Livro 3', 'Autor Livro 3', 'Documentario', 'LIDO', '2'),
('Livro 4', 'Autor Livro 4', 'Didatico', 'LIDO', '1'),
('Livro 5', 'Autor Livro 4', 'Terror', 'LIDO', '2'),
('Livro 6', 'Autor Livro 4', 'Biografico', 'LIDO', '2')
;
