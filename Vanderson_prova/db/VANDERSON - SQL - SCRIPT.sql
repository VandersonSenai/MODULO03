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
-- Table `listatarefas`.`tarefas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `listatarefas`.`tarefas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(45) NULL,
  `setor` VARCHAR(45) NULL,
  `prioridade` ENUM('baixa', 'média', 'alta'),
  `datacadastro` DATE NULL,
  `status` ENUM('a fazer', 'fazendo', 'pronto'),
  `usuarios_id` INT NOT NULL,
  PRIMARY KEY (`id`),
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `listatarefas`.`usuarios` (`id`));
    
    
    -- Inserir usuários
INSERT INTO `listatarefas`.`usuarios` (`nome`, `email`) VALUES
('Eu', 'eu@email.com'),
('Tu', 'tu@email.com');

-- Inserir tarefas
INSERT INTO `listatarefas`.`tarefas` (`descricao`, `setor`, `prioridade`, `datacadastro`, `status`, `usuarios_id`) VALUES
('Revisar relatório de vendas', 'Comercial', 'alta', '2025-06-10', 'a fazer', 1),
('Organizar documentos fiscais', 'Financeiro', 'média ', '2025-06-09', 'fazendo ', 2),
('Atualizar planilha de estoque', 'Logística', 'baixa', '2025-06-08', 'a fazer', 1),
('Planejar reunião trimestral', 'RH', 'alta', '2025-06-07', 'pronto', 2),
('Testar novo sistema de e-mail', 'TI', 'média ', '2025-06-06', 'fazendo ', 1);