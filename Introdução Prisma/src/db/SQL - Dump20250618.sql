CREATE DATABASE  IF NOT EXISTS `db_japedidos` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `db_japedidos`;
-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: db_japedidos
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `pedido`
--

DROP TABLE IF EXISTS `pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedido` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dthr_criacao_pedido` datetime NOT NULL,
  `entrega_tipo` enum('ENVIO','RETIRADA') DEFAULT NULL,
  `entrega_dthr` datetime DEFAULT NULL,
  `valor_frete` decimal(8,2) DEFAULT NULL,
  `valor_total_pedido` decimal(10,2) DEFAULT NULL,
  `valor_custo_pedido` decimal(10,2) DEFAULT NULL,
  `dt_venc_pagamento` datetime DEFAULT NULL,
  `dt_pagamento` datetime DEFAULT NULL,
  `dest_logradouro` varchar(60) DEFAULT NULL,
  `dest_numero` varchar(12) DEFAULT NULL,
  `dest_bairro` varchar(45) DEFAULT NULL,
  `dest_cidade` varchar(45) DEFAULT NULL,
  `dest_estado` enum('AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MS','MT','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO') DEFAULT NULL,
  `status` enum('Em Andamento','Aguardando Pgto','Agendado','Entregue','Cancelado') DEFAULT NULL,
  `observacao` varchar(255) DEFAULT NULL,
  `usuario_id` int(11) NOT NULL,
  `pedido_cliente_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`usuario_id`,`pedido_cliente_id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_pedido_usuario_idx` (`usuario_id`),
  KEY `fk_pedido_pedido_cliente_idx` (`pedido_cliente_id`),
  CONSTRAINT `fk_pedido_pedido_cliente` FOREIGN KEY (`pedido_cliente_id`) REFERENCES `pedido_cliente` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedido_usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido`
--

LOCK TABLES `pedido` WRITE;
/*!40000 ALTER TABLE `pedido` DISABLE KEYS */;
INSERT INTO `pedido` VALUES (1,'2025-06-15 15:17:00','ENVIO','2025-06-15 15:17:00',15.00,52.80,27.00,'2025-07-09 15:17:00','2025-06-15 15:17:00','Rua Antônio Roberto Braga','2','Cobilandia','Vila Velha','ES','Entregue','N/A',3,1),(2,'2025-06-15 15:17:00','RETIRADA','2025-06-16 15:17:00',0.00,155.80,39.00,'2025-07-09 15:17:00','2025-06-16 15:17:00','Rua das Caieiras','79','Santo Antonio','Vitória','ES','Aguardando Pgto','N/A',3,2),(3,'2025-06-15 15:17:00','ENVIO','2025-06-17 15:17:00',15.00,141.90,41.45,'2025-07-09 15:17:00','2025-06-17 15:17:00','Rua dos Anjos Mirins','32','Marataizes','Vitória','ES','Agendado','N/A',3,3),(4,'2025-06-15 15:17:00','RETIRADA','2025-06-18 15:17:00',0.00,18.75,13.15,'2025-07-09 15:17:00','2025-06-18 15:17:00','Avenida São João','150','Jardim Camburi','Vitória','ES','Entregue','N/A',3,4),(5,'2025-06-15 15:17:00','ENVIO','2025-06-19 15:17:00',22.00,264.60,93.00,'2025-07-09 15:17:00','2025-06-19 15:17:00','Rua Serra de Bragança','20','Mata da Praia','Vitória','ES','Cancelado','N/A',3,5),(6,'2025-06-15 15:17:00','RETIRADA','2025-06-20 15:17:00',0.00,146.25,54.45,'2025-07-09 15:17:00','2025-06-20 15:17:00','Rua Carlos Augusto Cornelsen','200','Vila Rubim','Vitória','ES','Em Andamento','N/A',3,6),(7,'2025-06-15 15:17:00','RETIRADA','2025-06-21 15:17:00',0.00,37.50,7.50,'2025-07-09 15:17:00','2025-06-21 15:17:00','Rua Serra de Bragança','32','Cobilandia','Vitória','ES','Agendado','N/A',3,7),(8,'2025-06-15 15:17:00','ENVIO','2025-06-22 15:17:00',22.00,95.25,28.45,'2025-07-09 15:17:00','2025-06-22 15:17:00','Rua das Mariposas Ciganas','213','Santo Antonio','Vitória','ES','Agendado','N/A',3,8),(9,'2025-06-15 15:17:00','ENVIO','2025-06-23 15:17:00',22.00,18.75,3.75,'2025-07-09 15:17:00','2025-06-23 15:17:00','Belmira Altares','98','Marataizes','Vitória','ES','Entregue','N/A',3,9),(11,'2025-06-15 15:17:00','ENVIO','2025-06-24 15:17:00',22.00,112.50,41.30,'2025-07-09 15:17:00','2025-06-24 15:17:00','Palmeiras Cintilantes','32','Jardim Camburi','Vitória','ES','Cancelado','N/A',3,11),(12,'2025-06-15 15:17:00','RETIRADA','2025-06-25 15:17:00',0.00,88.35,28.00,'2025-07-09 15:17:00','2025-06-25 15:17:00','Avenida Roberto Braga','2','Mata da Praia','Vitória','ES','Em Andamento','N/A',3,12),(13,'2025-06-15 15:17:00','ENVIO','2025-06-26 15:17:00',22.00,120.18,31.50,'2025-07-09 15:17:00','2025-06-26 15:17:00','Avenida Caieiras Grandes','79','Vila Rubim','Vitória','ES','Aguardando Pgto','N/A',3,13),(14,'2025-06-15 15:17:00','RETIRADA','2025-06-27 15:17:00',0.00,55.50,20.50,'2025-07-09 15:17:00','2025-06-27 15:17:00','Avenida dos Anjos','32','Cobilandia','Vitória','ES','Agendado','N/A',3,14),(15,'2025-06-15 15:17:00','RETIRADA','2025-06-28 15:17:00',0.00,279.00,63.00,'2025-07-09 15:17:00','2025-06-28 15:17:00','Rua São João Segundo','323','Santo Antonio','Vitória','ES','Entregue','N/A',3,15),(16,'2025-06-15 15:17:00','ENVIO','2025-06-29 15:17:00',20.00,163.44,43.15,'2025-07-09 15:17:00','2025-06-29 15:17:00','Avenida Bragança','454','Marataizes','Vitória','ES','Cancelado','N/A',3,16),(17,'2025-06-15 15:17:00','ENVIO','2025-06-30 15:17:00',15.00,466.80,157.65,'2025-07-09 15:17:00','2025-06-30 15:17:00','Avenida Augusto Cornelsen','342','Jardim Camburi','Vitória','ES','Agendado','N/A',3,17),(18,'2025-06-15 15:17:00','ENVIO','2025-07-01 15:17:00',22.00,12.60,9.00,'2025-07-09 15:17:00','2025-07-01 15:17:00','Avenida da Serra','32','Mata da Praia','Vitória','ES','Agendado','N/A',3,18),(19,'2025-06-15 15:17:00','RETIRADA','2025-07-02 15:17:00',0.00,78.75,53.15,'2025-07-09 15:17:00','2025-07-02 15:17:00','Avenida das Ciganas','213','Vila Rubim','Vitória','ES','Agendado','N/A',3,19);
/*!40000 ALTER TABLE `pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido_cliente`
--

DROP TABLE IF EXISTS `pedido_cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedido_cliente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(80) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  `data_cadastro` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido_cliente`
--

LOCK TABLES `pedido_cliente` WRITE;
/*!40000 ALTER TABLE `pedido_cliente` DISABLE KEYS */;
INSERT INTO `pedido_cliente` VALUES (1,'Yudy e Priscila','40028922','2025-06-15 15:17:00'),(2,'Thiago Moura','33365759','2025-06-15 15:17:00'),(3,'Maria Antônia Zeneide','33365758','2025-06-15 15:17:00'),(4,'Roberto Marinho','33875845','2025-06-15 15:17:00'),(5,'Mário Elias Silva','33335566','2025-06-15 15:17:00'),(6,'Maria Conceição da Barra','34395548','2025-06-15 15:17:00'),(7,'Gilberto Farias Júnio','27999449548','2025-06-15 15:17:00'),(8,'Miriã Dias','27999457878','2025-06-15 15:17:00'),(9,'Gisleide Andrade Pulquerio','27999147858','2025-06-15 15:17:00'),(11,'Tenário Antônio Márcio','27999456473','2025-06-15 15:17:00'),(12,'Richard Rodriges Meirelli','28998447868','2025-06-15 15:17:00'),(13,'Walmira Andrade Ritchtofen','11999694578','2025-06-15 15:17:00'),(14,'Antônio Márcio','27998485766','2025-06-15 15:17:00'),(15,'Roberto Marciano Gaulês','2833245968','2025-06-15 15:17:00'),(16,'Thiago Moura Baiense','27999483254','2025-06-15 15:17:00'),(17,'José María Trindade','27998875468','2025-06-15 15:17:00'),(18,'Rosemilda Andrade','40085922','2025-06-15 15:17:00'),(19,'Robert Nathan','27999694567','2025-06-15 15:17:00');
/*!40000 ALTER TABLE `pedido_cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido_produto`
--

DROP TABLE IF EXISTS `pedido_produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedido_produto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantidade` int(11) NOT NULL,
  `valor_venda` decimal(8,2) NOT NULL,
  `valor_custo` decimal(8,2) NOT NULL,
  `infor_adicional` varchar(45) DEFAULT NULL,
  `produto_id` int(11) NOT NULL,
  `produto_unidade_id` int(11) NOT NULL,
  `produto_categoria_id` int(11) NOT NULL,
  `pedido_id` int(11) NOT NULL,
  `pedido_usuario_id` int(11) NOT NULL,
  `pedido_pedido_cliente_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`produto_id`,`produto_unidade_id`,`produto_categoria_id`,`pedido_id`,`pedido_usuario_id`,`pedido_pedido_cliente_id`),
  KEY `fk_pedido_produto_produto_idx` (`produto_id`,`produto_unidade_id`,`produto_categoria_id`),
  KEY `fk_pedido_produto_pedido_idx` (`pedido_id`,`pedido_usuario_id`,`pedido_pedido_cliente_id`),
  CONSTRAINT `fk_pedido_produto_pedido` FOREIGN KEY (`pedido_id`, `pedido_usuario_id`, `pedido_pedido_cliente_id`) REFERENCES `pedido` (`id`, `usuario_id`, `pedido_cliente_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedido_produto_produto` FOREIGN KEY (`produto_id`, `produto_unidade_id`, `produto_categoria_id`) REFERENCES `produto` (`id`, `unidade_id`, `categoria_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido_produto`
--

LOCK TABLES `pedido_produto` WRITE;
/*!40000 ALTER TABLE `pedido_produto` DISABLE KEYS */;
INSERT INTO `pedido_produto` VALUES (1,1,19.50,12.45,'N/A',1,8,4,3,3,3),(2,1,19.50,12.45,'N/A',1,8,4,17,3,17),(3,1,21.75,14.15,'N/A',2,8,4,17,3,17),(4,1,18.75,13.15,'N/A',3,8,4,4,3,4),(5,3,18.75,13.15,'N/A',3,8,4,6,3,6),(6,2,18.75,13.15,'N/A',3,8,4,11,3,11),(7,1,18.75,13.15,'N/A',3,8,4,16,3,16),(8,1,18.75,13.15,'N/A',3,8,4,17,3,17),(9,1,18.75,13.15,'N/A',3,8,4,19,3,19),(10,3,14.00,9.00,'N/A',4,11,1,1,3,1),(11,1,14.00,9.00,'N/A',4,11,1,13,3,13),(12,1,14.00,9.00,'N/A',4,11,1,17,3,17),(13,1,14.00,9.00,'N/A',4,11,1,18,3,18),(14,1,9.00,6.50,'N/A',5,11,1,1,3,1),(15,3,9.00,6.50,'N/A',5,11,1,5,3,5),(16,2,9.00,6.50,'N/A',5,11,1,8,3,8),(17,2,9.00,6.50,'N/A',5,11,1,14,3,14),(18,1,9.00,6.50,'N/A',5,11,1,17,3,17),(19,1,14.00,9.00,'N/A',6,11,1,2,3,2),(20,2,9.00,6.50,'N/A',7,11,1,12,3,12),(21,1,9.00,6.50,'N/A',7,11,1,17,3,17),(22,1,16.50,10.50,'N/A',8,11,1,15,3,15),(23,1,16.50,10.50,'N/A',8,11,1,17,3,17),(24,3,14.00,9.50,'N/A',9,11,1,5,3,5),(25,1,14.00,9.50,'N/A',9,11,1,17,3,17),(26,1,0.75,0.15,'N/A',10,1,5,8,3,8),(27,50,0.75,0.15,'N/A',10,1,5,14,3,14),(28,1,0.75,0.15,'N/A',10,1,5,17,3,17),(29,50,0.75,0.15,'N/A',12,1,5,3,3,3),(30,50,0.75,0.15,'N/A',12,1,5,7,3,7),(31,25,0.75,0.15,'N/A',12,1,5,9,3,9),(32,1,0.75,0.15,'N/A',12,1,5,17,3,17),(33,1,0.75,0.15,'N/A',13,1,5,17,3,17),(34,2,75.00,15.00,'N/A',14,2,5,5,3,5),(35,1,75.00,15.00,'N/A',14,2,5,12,3,12),(36,1,75.00,15.00,'N/A',14,2,5,15,3,15),(37,1,75.00,15.00,'N/A',14,2,5,16,3,16),(38,1,75.00,15.00,'N/A',14,2,5,17,3,17),(39,1,75.00,15.00,'N/A',15,2,5,17,3,17),(40,2,75.00,15.00,'N/A',16,2,5,2,3,2),(41,1,75.00,15.00,'N/A',16,2,5,6,3,6),(42,1,75.00,15.00,'N/A',16,2,5,15,3,15),(43,1,75.00,15.00,'N/A',16,2,5,17,3,17),(44,1,75.00,15.00,'N/A',17,2,5,3,3,3),(45,1,75.00,15.00,'N/A',17,2,5,11,3,11),(46,1,75.00,15.00,'N/A',17,2,5,1,3,1),(47,1,75.00,15.00,'N/A',17,2,5,1,3,1),(48,1,75.00,15.00,'N/A',17,2,5,16,3,16),(49,1,75.00,15.00,'N/A',17,2,5,17,3,17),(50,1,75.00,15.00,'N/A',18,2,5,5,3,5),(51,1,75.00,15.00,'N/A',18,2,5,17,3,17),(52,50,0.75,0.15,'N/A',19,1,5,15,3,15),(53,1,0.75,0.15,'N/A',19,1,5,17,3,17),(54,50,0.75,0.15,'N/A',20,1,5,13,3,13),(55,2,0.75,0.15,'N/A',20,1,5,17,3,17),(56,1,20.00,15.00,'N/A',25,1,2,19,3,19),(57,1,40.00,25.00,'N/A',31,10,2,19,3,19);
/*!40000 ALTER TABLE `pedido_produto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto`
--

DROP TABLE IF EXISTS `produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `preco_custo` decimal(8,2) NOT NULL,
  `preco_venda` decimal(8,2) NOT NULL,
  `unidade_id` int(11) NOT NULL,
  `categoria_id` int(11) NOT NULL,
  `estado` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`,`unidade_id`,`categoria_id`),
  KEY `fk_produto_unidade_idx` (`unidade_id`),
  KEY `fk_produto_categoria_idx` (`categoria_id`),
  CONSTRAINT `fk_produto_categoria` FOREIGN KEY (`categoria_id`) REFERENCES `produto_categoria` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_produto_unidade` FOREIGN KEY (`unidade_id`) REFERENCES `produto_unidade` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto`
--

LOCK TABLES `produto` WRITE;
/*!40000 ALTER TABLE `produto` DISABLE KEYS */;
INSERT INTO `produto` VALUES (1,'SORVETE LUIGI 1,5lt',12.45,19.50,8,4,1),(2,'SORVETE LUIGI 1,7lt',14.15,21.75,8,4,1),(3,'AÇAI 1,2lt',13.15,18.75,8,4,1),(4,'COCA-COLA 2lts',9.00,14.00,11,1,1),(5,'COCA-COLA 600ml',6.50,9.00,11,1,1),(6,'GUARANA ANTARTICA 2lt',9.00,14.00,11,1,1),(7,'GUARANA ANTARTICA 600ml',6.50,9.00,11,1,1),(8,'HEINIKEN 600lm',10.50,16.50,11,1,1),(9,'FANTA UVA 2lT',9.50,14.00,11,1,1),(10,'COXINHA DE FRANGO',0.15,0.75,1,5,1),(11,'RIZOLE DE PIZZA',0.15,0.75,1,5,1),(12,'BOLINHA DE QUEIJO',0.15,0.75,1,5,1),(13,'RISSOLE DE CAMARÃO',0.15,0.75,1,5,1),(14,'COXINHA DE FRANGO',15.00,75.00,2,5,1),(15,'RIZOLE DE PIZZA',15.00,75.00,2,5,1),(16,'BOLINHA DE QUEIJO',15.00,75.00,2,5,1),(17,'KIBE DE CARNE',15.00,75.00,2,5,1),(18,'RISSOLE DE CAMARÃO',15.00,75.00,2,5,1),(19,'MINI CHURROS',0.15,0.75,1,5,1),(20,'ENROLADO DE SALSICHA',0.15,0.75,1,5,1),(21,'AÇAI 600ML',6.00,10.00,1,4,1),(22,'X TUDO',15.00,25.00,1,2,1),(23,'X EGG',13.00,20.00,1,2,1),(24,'X EGG BACON',14.00,21.00,1,2,1),(25,'PIZZA PORTUGUESA 4 PED.',15.00,20.00,1,2,1),(26,'PIZZA PORTUGUESA 6 PED.',20.00,30.00,1,2,1),(27,'PIZZA PORTUGUESA 8 PED.',25.00,40.00,1,2,1),(28,'HAMBURGUER',12.00,16.00,1,2,1),(29,'PICOLÉ AJELSO SABORES',1.00,3.50,1,4,1),(30,'COCA-COLA LATA',3.50,5.00,1,1,1),(31,'BATATA FRITA C/FRANGO',25.00,40.00,10,2,1),(32,'SORVETE KIBOM 1,5LT',16.00,30.00,1,4,1);
/*!40000 ALTER TABLE `produto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto_categoria`
--

DROP TABLE IF EXISTS `produto_categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produto_categoria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(24) NOT NULL,
  `descricao` varchar(120) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto_categoria`
--

LOCK TABLES `produto_categoria` WRITE;
/*!40000 ALTER TABLE `produto_categoria` DISABLE KEYS */;
INSERT INTO `produto_categoria` VALUES (1,'Bebida','Produtos como refrigerantes, água, sucos.'),(2,'Lanche','Produtos como hambúrger e similares.'),(3,'Fritas','Produtos com batata-frita.'),(4,'Sorvete','Produtos com sorvete.'),(5,'Salgado','Produtos como coxinha, enrroladinho e outros.'),(6,'Bolo','Produtos de Padarias'),(7,'Pão','Produtos de Padarias'),(8,'Torta','Produtos de Padarias'),(9,'Refeição','Produtos de SelfServices ou Restaurantes'),(10,'Bala','Produtos doces e pequenos.'),(11,'Gelatina','Doces');
/*!40000 ALTER TABLE `produto_categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto_unidade`
--

DROP TABLE IF EXISTS `produto_unidade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produto_unidade` (
  `id` int(11) NOT NULL,
  `nome` varchar(25) NOT NULL,
  `abreviacao` varchar(8) NOT NULL,
  `ativo` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto_unidade`
--

LOCK TABLES `produto_unidade` WRITE;
/*!40000 ALTER TABLE `produto_unidade` DISABLE KEYS */;
INSERT INTO `produto_unidade` VALUES (1,'Unidade','UND',1),(2,'Cento','CENTO',1),(3,'Dúzia','DUZIA',1),(4,'Pacote','PCT',1),(5,'Caixa','CX',1),(6,'Grama','G',1),(7,'Miligrama','MG',1),(8,'Litros','L',1),(9,'Mililitros','ML',1),(10,'Kilograma','KG',1),(11,'Garrafa','GRFA',1),(12,'Pote','POTE',1);
/*!40000 ALTER TABLE `produto_unidade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `login` varchar(10) NOT NULL,
  `senha` varchar(10) NOT NULL,
  `tipo` enum('Administrador','Operador','Gerente') NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `login_UNIQUE` (`login`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Administrador','admin','admin','Administrador'),(2,'Atendente','atendente','atendente','Operador'),(3,'Vanderson','vanderson','vanderson','Gerente'),(8,'Marcio','marcio','marcio','Gerente'),(9,'Felipe','felipe','felipe','Gerente'),(10,'Henrique','henrique','Henrique','Gerente');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-18 17:40:52
