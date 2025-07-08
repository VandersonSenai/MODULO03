-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema db_final_boss
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db_final_boss
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_final_boss` DEFAULT CHARACTER SET utf8 ;
USE `db_final_boss` ;

-- -----------------------------------------------------
-- Table `db_final_boss`.`clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_final_boss`.`clientes` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL DEFAULT NULL,
  `telefone` VARCHAR(11) NULL DEFAULT NULL,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `ativo` TINYINT(4) NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `db_final_boss`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_final_boss`.`usuarios` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `tipo` ENUM('Administrador', 'Atendente') NULL DEFAULT 'Atendente',
  `senha` VARCHAR(8) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `db_final_boss`.`pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_final_boss`.`pedido` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `clientes_id` INT(11) NOT NULL,
  `status` ENUM('Pendente', 'Em preparo', 'Enviado', 'Entregue', 'Cancelado') NULL DEFAULT 'Pendente',
  `usuarios_id` INT(11) NOT NULL,
  `forma_pgto` ENUM('Pix', 'Debito', 'Credito') NOT NULL DEFAULT 'Pix',
  `total` DECIMAL(8,2) NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `clientes_id`, `usuarios_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_pedido_clientes_idx` (`clientes_id` ASC) VISIBLE,
  INDEX `fk_pedido_usuarios1_idx` (`usuarios_id` ASC) VISIBLE,
  CONSTRAINT `fk_pedido_clientes`
    FOREIGN KEY (`clientes_id`)
    REFERENCES `db_final_boss`.`clientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedido_usuarios1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `db_final_boss`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `db_final_boss`.`produtos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_final_boss`.`produtos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `descricao` VARCHAR(45) NULL DEFAULT NULL,
  `preco` DECIMAL(8,2) NOT NULL,
  `estoque` INT(11) NULL DEFAULT NULL,
  `ativo` TINYINT(4) NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 13
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `db_final_boss`.`pedido_produtos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_final_boss`.`pedido_produtos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `produtos_id` INT(11) NOT NULL,
  `pedido_id` INT(11) NOT NULL,
  `pedido_clientes_id` INT(11) NOT NULL,
  `quatidade` DECIMAL(8,2) NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `produtos_id`, `pedido_id`, `pedido_clientes_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_produtos_has_pedido_pedido1_idx` (`pedido_id` ASC, `pedido_clientes_id` ASC) VISIBLE,
  INDEX `fk_produtos_has_pedido_produtos1_idx` (`produtos_id` ASC) VISIBLE,
  CONSTRAINT `fk_produtos_has_pedido_pedido1`
    FOREIGN KEY (`pedido_id` , `pedido_clientes_id`)
    REFERENCES `db_final_boss`.`pedido` (`id` , `clientes_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_produtos_has_pedido_produtos1`
    FOREIGN KEY (`produtos_id`)
    REFERENCES `db_final_boss`.`produtos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 23
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
