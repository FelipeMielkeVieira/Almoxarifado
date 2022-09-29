CREATE DATABASE  IF NOT EXISTS `alma_sis` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `alma_sis`;
-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: alma_sis
-- ------------------------------------------------------
-- Server version	8.0.25

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
-- Table structure for table `classificacao`
--

DROP TABLE IF EXISTS `classificacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classificacao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `classificacao` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classificacao`
--

LOCK TABLES `classificacao` WRITE;
/*!40000 ALTER TABLE `classificacao` DISABLE KEYS */;
INSERT INTO `classificacao` VALUES (1,'P1'),(2,'P2');
/*!40000 ALTER TABLE `classificacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `localizacao`
--

DROP TABLE IF EXISTS `localizacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `localizacao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `localizacao`
--

LOCK TABLES `localizacao` WRITE;
/*!40000 ALTER TABLE `localizacao` DISABLE KEYS */;
INSERT INTO `localizacao` VALUES (2,'bbbb'),(3,'P3');
/*!40000 ALTER TABLE `localizacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto`
--

DROP TABLE IF EXISTS `produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produto` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `quantidade` int NOT NULL,
  `descartavel` tinyint NOT NULL,
  `imagem` varchar(100) DEFAULT NULL,
  `anexos` varchar(100) DEFAULT NULL,
  `classificacao_id` int NOT NULL,
  `caracteristicas` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `classificacao_id` (`classificacao_id`),
  CONSTRAINT `produto_ibfk_1` FOREIGN KEY (`classificacao_id`) REFERENCES `classificacao` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto`
--

LOCK TABLES `produto` WRITE;
/*!40000 ALTER TABLE `produto` DISABLE KEYS */;
INSERT INTO `produto` VALUES (1,'Teste',120,1,NULL,NULL,1,NULL),(2,'Teclado mecanico full gold',10,0,'0','as',1,'amarelo'),(3,'Teclado mecanico full gold',10,0,'0','as',1,'amarelo'),(4,'Teclado mecanico full gold',10,0,'0','as',1,'amarelo'),(5,'Teclado mecanico full gold',10,0,'0','as',1,'amarelo'),(6,'Teclado mecanico full gold',10,0,'0','as',1,'amarelo'),(7,'Teclado mecanico full gold',10,0,'0','as',1,'amarelo'),(8,'Teclado mecanico full gold',10,0,'0','as',1,'amarelo'),(9,'Teclado mecanico full gold',10,0,'0','as',1,'amarelo'),(10,'Teclado mecanico full gold',10,0,'0','as',1,'amarelo'),(11,'Teclado mecanico full gold',10,0,'0','as',1,'amarelo'),(12,'Teclado mecanico full gold',10,0,'0','as',1,'amarelo'),(13,'Teclado mecanico full gold',10,0,'0','as',1,'amarelo'),(14,'Teclado mecanico full gold',10,0,'0','as',1,'amarelo'),(15,'Teclado mecanico full gold',10,0,'0','as',1,'amarelo'),(16,'Teclado mecanico full gold',10,0,'0','as',1,'amarelo'),(17,'Teclado mecanico full gold',10,0,'0','as',1,'amarelo'),(18,'Teclado mecanico full gold',10,0,'0','as',1,'amarelo'),(19,'Teclado mecanico full gold',10,0,'0','as',1,'amarelo'),(20,'Teclado mecanico full gold',10,0,'0','as',1,'amarelo'),(21,'Teclado mecanico full gold',10,0,'0','as',1,'amarelo'),(22,'Teclado mecanico full gold',10,0,'0','as',1,'amarelo'),(23,'Teclado mecanico full gold',10,0,'0','as',1,'amarelo');
/*!40000 ALTER TABLE `produto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto_localizacao`
--

DROP TABLE IF EXISTS `produto_localizacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produto_localizacao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `produto_id` int NOT NULL,
  `localizacao_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `produto_id` (`produto_id`),
  KEY `localizacao_id` (`localizacao_id`),
  CONSTRAINT `produto_localizacao_ibfk_1` FOREIGN KEY (`produto_id`) REFERENCES `produto` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `produto_localizacao_ibfk_2` FOREIGN KEY (`localizacao_id`) REFERENCES `localizacao` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto_localizacao`
--

LOCK TABLES `produto_localizacao` WRITE;
/*!40000 ALTER TABLE `produto_localizacao` DISABLE KEYS */;
INSERT INTO `produto_localizacao` VALUES (2,1,2),(3,1,3),(8,1,2),(16,1,2),(17,20,2),(18,21,2),(19,22,2),(20,23,2);
/*!40000 ALTER TABLE `produto_localizacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto_reserva`
--

DROP TABLE IF EXISTS `produto_reserva`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produto_reserva` (
  `id` int NOT NULL AUTO_INCREMENT,
  `qtd_produto` int NOT NULL,
  `reserva_id` int NOT NULL,
  `produto_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `reserva_id` (`reserva_id`),
  KEY `produto_id` (`produto_id`),
  CONSTRAINT `produto_reserva_ibfk_1` FOREIGN KEY (`reserva_id`) REFERENCES `reserva` (`id`),
  CONSTRAINT `produto_reserva_ibfk_2` FOREIGN KEY (`produto_id`) REFERENCES `produto` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto_reserva`
--

LOCK TABLES `produto_reserva` WRITE;
/*!40000 ALTER TABLE `produto_reserva` DISABLE KEYS */;
/*!40000 ALTER TABLE `produto_reserva` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reserva`
--

DROP TABLE IF EXISTS `reserva`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reserva` (
  `id` int NOT NULL AUTO_INCREMENT,
  `data_retirada` date NOT NULL,
  `data_devolucao` date DEFAULT NULL,
  `usuario_email` varchar(70) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_email` (`usuario_email`),
  CONSTRAINT `reserva_ibfk_1` FOREIGN KEY (`usuario_email`) REFERENCES `usuario` (`email`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reserva`
--

LOCK TABLES `reserva` WRITE;
/*!40000 ALTER TABLE `reserva` DISABLE KEYS */;
/*!40000 ALTER TABLE `reserva` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sacola`
--

DROP TABLE IF EXISTS `sacola`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sacola` (
  `id` int NOT NULL AUTO_INCREMENT,
  `data_retirada` date NOT NULL,
  `data_devolucao` date DEFAULT NULL,
  `usuario_email` varchar(70) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_email` (`usuario_email`),
  CONSTRAINT `sacola_ibfk_1` FOREIGN KEY (`usuario_email`) REFERENCES `usuario` (`email`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sacola`
--

LOCK TABLES `sacola` WRITE;
/*!40000 ALTER TABLE `sacola` DISABLE KEYS */;
/*!40000 ALTER TABLE `sacola` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sacola_produto`
--

DROP TABLE IF EXISTS `sacola_produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sacola_produto` (
  `id` int NOT NULL AUTO_INCREMENT,
  `qtd_produto` int NOT NULL,
  `sacola_id` int NOT NULL,
  `produto_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sacola_id` (`sacola_id`),
  KEY `produto_id` (`produto_id`),
  CONSTRAINT `sacola_produto_ibfk_1` FOREIGN KEY (`sacola_id`) REFERENCES `sacola` (`id`),
  CONSTRAINT `sacola_produto_ibfk_2` FOREIGN KEY (`produto_id`) REFERENCES `produto` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sacola_produto`
--

LOCK TABLES `sacola_produto` WRITE;
/*!40000 ALTER TABLE `sacola_produto` DISABLE KEYS */;
/*!40000 ALTER TABLE `sacola_produto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `email` varchar(100) NOT NULL,
  `senha` varchar(45) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `tipo` enum('PROFESSOR','ATENDENTE1','ATENDENTE2','SUPERVISOR') DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES ('teste','teste','teste','ATENDENTE1'),('teste2','teste2','teste2','ATENDENTE1'),('testee','teste','teste','ATENDENTE1');
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

-- Dump completed on 2022-09-29 14:54:10
