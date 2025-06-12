-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `listatarefas` DEFAULT CHARACTER SET utf8 ;

USE `listatarefas` ;

-- -----------------------------------------------------
-- Table `tarefas`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `listatarefas`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

-- -----------------------------------------------------
-- Table `tarefas`.`tarefas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `listatarefas`.`tarefas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `descrica` VARCHAR(45) NULL,
  `autor` VARCHAR(45) NULL,
  `setor` VARCHAR(45) NULL,
  `prioridade` ENUM('baixa', 'média ', 'alta'),
  `status` ENUM('a fazer', 'fazendo ', 'pronto'),
  `usuarios_id` INT NOT NULL,
  PRIMARY KEY (`id`),
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `listatarefas`.`usuarios` (`id`));
    