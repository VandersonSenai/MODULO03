CREATE SCHEMA IF NOT EXISTS biblioteca DEFAULT CHARACTER SET utf8 ;
USE biblioteca;

CREATE TABLE IF NOT EXISTS `biblioteca`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE IF NOT EXISTS `biblioteca`.`livros` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NULL,
  `autor` VARCHAR(45) NULL,
  `genero` VARCHAR(45) NULL,
  `status` VARCHAR(45) NULL,
  `usuarios_id` INT NOT NULL,
  PRIMARY KEY (`id`),
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `biblioteca`.`usuarios` (`id`));