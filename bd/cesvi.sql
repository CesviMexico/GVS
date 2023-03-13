-- MariaDB dump 10.19  Distrib 10.4.22-MariaDB, for Win64 (AMD64)
--
-- Host: 92.204.138.178    Database: bd_gvs
-- ------------------------------------------------------
-- Server version	5.6.51

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `bd_gvs`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `bd_gvs` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;

USE `bd_gvs`;

--
-- Table structure for table `sys_attributes`
--

DROP TABLE IF EXISTS `sys_attributes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_attributes` (
  `attribute_id` int(11) NOT NULL AUTO_INCREMENT,
  `name_attribute` varchar(20) DEFAULT NULL,
  `help_description` text,
  `status` varchar(20) DEFAULT 'alta',
  PRIMARY KEY (`attribute_id`) USING BTREE,
  UNIQUE KEY `id` (`attribute_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_attributes`
--

LOCK TABLES `sys_attributes` WRITE;
/*!40000 ALTER TABLE `sys_attributes` DISABLE KEYS */;
INSERT INTO `sys_attributes` VALUES (1,'label','Texto de etiqueta del elementoo','alta'),(2,'name','Nombre del campo para el elemento','alta'),(3,'placeholder','Texto provisional o de marcado del elemento','alta'),(4,'rulesRequired','Reglas requeridas','alta'),(5,'rulesMessage','Mensaje cuando no se cumple la regla','alta'),(6,'rulestype','Tipo de regla','alta'),(7,'rulestypemessage','Mensaje cuando no se cumple el valor en ela regla','alta'),(8,'tooltip','Mensaje adicional que funciona al situar el cursor sobre algún elemento gráfico','alta'),(9,'extra',NULL,'alta'),(10,'hasFeedback','Muestra el icono cuando el elemento cumple con las reglas ','alta'),(11,'showSearch',NULL,'alta'),(12,'allowClear','Muestra el icono para limpiar el elemento','alta'),(13,'mode',NULL,'alta'),(14,'max','Máximo','alta'),(15,'min','Mínimo','alta'),(16,'initialValue',NULL,'alta'),(17,'valuePropName',NULL,'alta'),(19,'name_table_option','Nombre de la tabla donde se va llenar el combo','alta'),(20,'label_option','Campo de etiqueta del listado a mostrar','alta'),(21,'value_option','campo de el valor a mostrar en el listado','alta'),(22,'where_option','condición para la consulta de la lista  ','alta'),(23,'alias_combo_option',NULL,'alta'),(24,'children',NULL,'alta'),(27,'parent_option','combo padre dependiente','alta'),(28,'dragsorting','Ordenamiento de filas con evento de movimiento','alta'),(30,'namefile','Upload','alta'),(31,'actionUrl','Upload','alta'),(32,'listType','Upload','alta'),(33,'tipoFile','Upload','alta'),(34,'multipleFile','Upload','alta'),(35,'textButton','Upload','alta'),(36,'dragger','Upload','alta'),(37,'antuploadtext','Upload','alta'),(38,'antuploadhint','Upload','alta'),(39,'valuePropName','Upload','alta'),(40,'format','h:mm:ss','alta'),(41,'maxLength','tamaño máximo de caracteres','alta'),(42,'showCount','Si se muestra el numero caracteres escritos','alta'),(43,'allowHalf','es booleano y activa mitad de estrella','alta'),(44,'step','The number to which the current value is increased or decreased. It can be an integer or decimal','alta'),(45,'width','Tamanio','alta'),(47,'stringMode','Establezca el valor como cadena para admitir decimales de alta precisión. Devolverá el valor de la cadena por','alta');
/*!40000 ALTER TABLE `sys_attributes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_attributes_columns`
--

DROP TABLE IF EXISTS `sys_attributes_columns`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_attributes_columns` (
  `attribute_column_id` int(11) NOT NULL AUTO_INCREMENT,
  `name_attribute_column` varchar(20) DEFAULT NULL,
  `help_descrption` text,
  `status` char(4) DEFAULT 'alta',
  PRIMARY KEY (`attribute_column_id`) USING BTREE,
  UNIQUE KEY `id_columns` (`attribute_column_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_attributes_columns`
--

LOCK TABLES `sys_attributes_columns` WRITE;
/*!40000 ALTER TABLE `sys_attributes_columns` DISABLE KEYS */;
INSERT INTO `sys_attributes_columns` VALUES (1,'title',NULL,'alta'),(2,'dataIndex',NULL,'alta'),(3,'key',NULL,'alta'),(4,'tipoMoneda',NULL,'alta'),(5,'tipoMiles',NULL,'alta'),(6,'tipoFecha',NULL,'alta'),(7,'tipoFechaTime',NULL,'alta'),(8,'orderNumber',NULL,'alta'),(9,'orderString',NULL,'alta'),(10,'orderDouble',NULL,'alta'),(11,'orderDate',NULL,'alta'),(12,'busqueda',NULL,'alta'),(13,'filterSearch',NULL,'alta'),(14,'filter',NULL,'alta'),(15,'ellipsis',NULL,'alta'),(16,'badge100',NULL,'alta'),(17,'actions',NULL,'alta'),(18,'width',NULL,'alta'),(19,'titleMSG',NULL,'alta'),(20,'icon',NULL,'alta'),(21,'datePicker',NULL,'alta'),(22,'placeholder',NULL,'alta'),(23,'format',NULL,'alta'),(24,'showTime',NULL,'alta'),(25,'Input',NULL,'alta'),(26,'textArea',NULL,'alta'),(27,'height',NULL,'alta'),(28,'Select',NULL,'alta'),(29,'arrayOption',NULL,'alta'),(30,'upload',NULL,'alta'),(31,'titleMSGC',NULL,'alta'),(32,'titleMSGD',NULL,'alta'),(33,'iconC',NULL,'alta'),(34,'iconD',NULL,'alta'),(35,'tipoFile',NULL,'alta'),(36,'multipleFile',NULL,'alta'),(37,'listType',NULL,'alta'),(38,'align',NULL,'alta'),(39,'fixed',NULL,'alta'),(40,'responsive',NULL,'alta'),(41,'titleIMG',NULL,'alta'),(42,'suffixTitle',NULL,'alta'),(43,'padre','Bandera que indica si se muestra en columna oadre cuando tienen \r\nchildren','alta'),(44,'actionUrl',NULL,'alta'),(45,'avatar',NULL,'alta'),(46,'nameUrl','Nombre del campo donde esta la url del avatar','alta'),(47,'size','Tamanio del avatar','alta'),(48,'nameTexShow','Nombre del campo para mostrar texto cuando no tienen foto','alta'),(49,'icono','Columana con icono','alta'),(50,'nameValue','Nombre del campo que tiene el valor','alta'),(51,'rate',NULL,'alta'),(52,'no','Columana numero consecutivo','alta');
/*!40000 ALTER TABLE `sys_attributes_columns` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_cat_companys`
--

DROP TABLE IF EXISTS `sys_cat_companys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_cat_companys` (
  `id_company` int(11) NOT NULL AUTO_INCREMENT,
  `company` varchar(100) DEFAULT NULL,
  `initials` varchar(10) DEFAULT NULL,
  `status` char(4) DEFAULT 'alta',
  PRIMARY KEY (`id_company`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_cat_companys`
--

LOCK TABLES `sys_cat_companys` WRITE;
/*!40000 ALTER TABLE `sys_cat_companys` DISABLE KEYS */;
INSERT INTO `sys_cat_companys` VALUES (1,'CESVI MEXICO','CESVI','alta');
/*!40000 ALTER TABLE `sys_cat_companys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_cat_props_table`
--

DROP TABLE IF EXISTS `sys_cat_props_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_cat_props_table` (
  `cat_props_table_id` int(11) NOT NULL,
  `name_props_table` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `order` int(11) DEFAULT NULL,
  PRIMARY KEY (`cat_props_table_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci PACK_KEYS=0;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_cat_props_table`
--

LOCK TABLES `sys_cat_props_table` WRITE;
/*!40000 ALTER TABLE `sys_cat_props_table` DISABLE KEYS */;
INSERT INTO `sys_cat_props_table` VALUES (1,'pagination',1),(2,'pageSize',2),(3,'simplepage',3),(4,'positionBottom',4),(5,'positionTop',5),(6,'Title',6),(7,'size',7),(8,'bordered',8),(9,'scrollX',9),(10,'scrollY',10),(11,'IconAvatar',11),(12,'tableLayout',12),(13,'dragSorting',13);
/*!40000 ALTER TABLE `sys_cat_props_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_cat_rol`
--

DROP TABLE IF EXISTS `sys_cat_rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_cat_rol` (
  `id_rol` int(11) NOT NULL AUTO_INCREMENT,
  `rol` varchar(100) DEFAULT NULL,
  `status` char(4) DEFAULT 'alta',
  PRIMARY KEY (`id_rol`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_cat_rol`
--

LOCK TABLES `sys_cat_rol` WRITE;
/*!40000 ALTER TABLE `sys_cat_rol` DISABLE KEYS */;
INSERT INTO `sys_cat_rol` VALUES (1,'Administrador','alta'),(2,'Supervisor','alta'),(3,'Cotizador','alta');
/*!40000 ALTER TABLE `sys_cat_rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_cat_tables`
--

DROP TABLE IF EXISTS `sys_cat_tables`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_cat_tables` (
  `cat_table_id` int(11) NOT NULL AUTO_INCREMENT,
  `name_table` varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name_view` varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT 'NA',
  `alias_table` varchar(40) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pk` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `form_id` int(11) DEFAULT NULL,
  `table_id` int(11) DEFAULT NULL,
  `status` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT 'alta',
  PRIMARY KEY (`cat_table_id`),
  KEY `form_id` (`form_id`),
  KEY `table_id` (`table_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci PACK_KEYS=0;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_cat_tables`
--

LOCK TABLES `sys_cat_tables` WRITE;
/*!40000 ALTER TABLE `sys_cat_tables` DISABLE KEYS */;
INSERT INTO `sys_cat_tables` VALUES (1,'sys_elements','NA','Sys Catálogo de elementos','element_id','operation',1,9,'alta'),(2,'sys_attributes','NA','Sys Catálogo de atributos de elementos','attribute_id','operation',2,10,'alta'),(3,'sys_cat_tables','NA','Sys Catálogo General','cat_table_id','operation',15,11,'alta'),(4,'sys_elements_attributes','view_sys_elements_attributes','Sys Elementos vs Atributos','sys_elements_attributes_id','operation',3,12,'alta'),(5,'sys_menu','view_sys_cat_menu','Sys Menu','menu_id','operation',17,13,'alta'),(6,'sys_cat_companys','NA','Catálogo de companias','id_company','operation',18,14,'alta'),(7,'sys_cat_rol','NA','Catálogo de roles','id_rol','operation',19,15,'alta'),(16,'sys_attributes_columns','NA','Sys Catalogo de atributos Columna','attribute_column_id','operation',31,26,'alta'),(23,'sys_columns_attributes','view_sys_columns_attributes','Sys Columna vs atributos','sys_columns_props_id','operation',40,34,'alta'),(24,'sys_combos_virtuales','NA','Sys Combos Virtuales','id_combo_virtual','operation',41,35,'alta');
/*!40000 ALTER TABLE `sys_cat_tables` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_columns_attributes`
--

DROP TABLE IF EXISTS `sys_columns_attributes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_columns_attributes` (
  `sys_columns_props_id` int(11) NOT NULL AUTO_INCREMENT,
  `element_id` int(11) DEFAULT NULL,
  `attribute_column_id` int(11) DEFAULT NULL,
  `default` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` char(4) COLLATE utf8mb4_unicode_ci DEFAULT 'alta',
  PRIMARY KEY (`sys_columns_props_id`),
  KEY `element_id` (`element_id`),
  KEY `attribute_column_id` (`attribute_column_id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci PACK_KEYS=0;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_columns_attributes`
--

LOCK TABLES `sys_columns_attributes` WRITE;
/*!40000 ALTER TABLE `sys_columns_attributes` DISABLE KEYS */;
INSERT INTO `sys_columns_attributes` VALUES (1,15,1,NULL,'alta'),(2,15,2,NULL,'alta'),(3,15,3,NULL,'alta'),(4,15,4,NULL,'alta'),(5,15,5,NULL,'alta'),(6,15,6,NULL,'alta'),(7,15,7,NULL,'alta'),(8,15,8,NULL,'alta'),(9,15,9,'1','alta'),(10,15,10,NULL,'alta'),(11,15,11,NULL,'alta'),(12,15,12,'1','alta'),(13,15,13,'1','alta'),(14,15,15,NULL,'alta'),(15,15,16,NULL,'alta'),(16,16,17,'1','alta'),(17,16,3,NULL,'alta'),(18,16,20,NULL,'alta'),(19,16,19,NULL,'alta'),(20,16,1,NULL,'alta'),(21,16,2,NULL,'alta'),(22,15,18,NULL,'alta'),(23,16,18,NULL,'alta'),(24,14,30,'1','alta'),(25,14,3,NULL,'alta'),(26,14,18,NULL,'alta'),(27,14,2,NULL,'alta'),(28,14,1,NULL,'alta'),(29,14,31,NULL,'alta'),(30,14,32,NULL,'alta'),(31,14,33,NULL,'alta'),(32,14,34,NULL,'alta'),(33,14,35,NULL,'alta'),(34,14,36,NULL,'alta'),(35,14,37,NULL,'alta'),(36,14,44,NULL,'alta'),(37,17,45,'1','alta'),(38,17,3,NULL,'alta'),(39,17,2,NULL,'alta'),(40,17,18,NULL,'alta'),(41,17,1,NULL,'alta'),(42,17,46,NULL,'alta'),(43,17,47,NULL,'alta'),(44,17,48,NULL,'alta'),(45,18,49,'1','alta'),(46,18,3,NULL,'alta'),(47,18,2,NULL,'alta'),(48,18,18,NULL,'alta'),(49,18,1,NULL,'alta'),(50,18,46,NULL,'alta'),(51,18,47,NULL,'alta'),(52,19,1,NULL,'alta'),(53,19,2,NULL,'alta'),(54,19,3,NULL,'alta'),(55,19,18,NULL,'alta'),(56,19,50,NULL,'alta'),(57,19,51,'1','alta'),(58,20,52,'1','alta'),(59,20,3,NULL,'alta'),(60,20,2,NULL,'alta'),(61,20,18,NULL,'alta'),(62,20,1,NULL,'alta'),(63,16,39,NULL,'alta'),(64,15,39,NULL,'alta');
/*!40000 ALTER TABLE `sys_columns_attributes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_combos_virtuales`
--

DROP TABLE IF EXISTS `sys_combos_virtuales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_combos_virtuales` (
  `id_combo_virtual` int(11) NOT NULL AUTO_INCREMENT,
  `alias_combo` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `label` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` char(4) COLLATE utf8mb4_unicode_ci DEFAULT 'alta',
  PRIMARY KEY (`id_combo_virtual`),
  UNIQUE KEY `id_combo_virtual` (`id_combo_virtual`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci PACK_KEYS=0;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_combos_virtuales`
--

LOCK TABLES `sys_combos_virtuales` WRITE;
/*!40000 ALTER TABLE `sys_combos_virtuales` DISABLE KEYS */;
INSERT INTO `sys_combos_virtuales` VALUES (1,'Size','large','large','alta'),(2,'Size','middle','middle','alta'),(3,'Size','small','small','alta'),(4,'tableLayout','fixed','fixed','alta'),(5,'tableLayout','none','none','alta'),(6,'tableLayout','auto','auto','alta'),(7,'positionBottom','bottomLeft','bottomLeft','alta'),(8,'positionBottom','bottomCenter','bottomCenter','alta'),(9,'positionBottom','bottomRight','bottomRight','alta'),(10,'positionBottom','none','none','alta'),(11,'positionTop','topLeft','topLeft','alta'),(12,'positionTop','topCenter','topCenter','alta'),(13,'positionTop','topRight','topRight','alta'),(14,'positionTop','none','none','alta');
/*!40000 ALTER TABLE `sys_combos_virtuales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_components`
--

DROP TABLE IF EXISTS `sys_components`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_components` (
  `component_id` int(11) NOT NULL AUTO_INCREMENT,
  `component_no` int(11) DEFAULT NULL,
  `element_id` int(11) DEFAULT NULL,
  `attribute_id` int(11) DEFAULT NULL,
  `value` text,
  `type` varchar(20) DEFAULT NULL COMMENT 'column or form',
  PRIMARY KEY (`component_id`) USING BTREE,
  UNIQUE KEY `id_componente_props` (`component_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2704 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_components`
--

LOCK TABLES `sys_components` WRITE;
/*!40000 ALTER TABLE `sys_components` DISABLE KEYS */;
INSERT INTO `sys_components` VALUES (1,1,1,1,'Elemento','form'),(2,1,1,2,'name_element','form'),(3,1,1,3,'Elemento','form'),(4,1,1,4,'1','form'),(5,1,1,5,'Elemento','form'),(6,1,1,6,'0','form'),(7,1,1,7,'Elemento','form'),(10,1,1,10,'1','form'),(11,2,1,1,'Atributo','form'),(12,2,1,2,'name_attribute','form'),(13,2,1,3,'Atributo','form'),(14,2,1,4,'1','form'),(15,2,1,5,'Atributo','form'),(16,2,1,6,'0','form'),(17,2,1,7,'Atributo','form'),(18,2,1,10,'1','form'),(19,3,8,1,'Elemento','form'),(20,3,8,2,'element_id','form'),(21,3,8,3,'Selecciona Elemento','form'),(22,3,8,4,'1','form'),(23,3,8,5,'Elemento','form'),(24,3,8,6,'0','form'),(25,3,8,7,'Elemento','form'),(26,3,8,10,'1','form'),(27,3,8,11,'1','form'),(28,3,8,12,'1','form'),(29,3,8,13,'','form'),(30,4,8,1,'Atributo','form'),(31,4,8,2,'attribute_id','form'),(32,4,8,3,'Selecciona Atributo','form'),(33,4,8,4,'1','form'),(34,4,8,5,'Atributo','form'),(35,4,8,6,'0','form'),(36,4,8,7,'Atributo','form'),(37,4,8,10,'1','form'),(38,4,8,11,'1','form'),(39,4,8,12,'1','form'),(40,4,8,13,'','form'),(41,5,1,1,'Nombre Formulario','form'),(42,5,1,2,'name_form','form'),(43,5,1,3,'Nombre Formulario','form'),(44,5,1,4,'1','form'),(45,5,1,5,'Nombre Formulario','form'),(46,5,1,6,'0','form'),(47,5,1,7,'Nombre Formulario','form'),(48,5,1,10,'1','form'),(49,6,1,1,'Modulo','form'),(50,6,1,2,'module','form'),(51,6,1,3,'Modulo','form'),(52,6,1,4,'1','form'),(53,6,1,5,'Modulo','form'),(54,6,1,6,'0','form'),(55,6,1,7,'Modulo','form'),(56,6,1,10,'1','form'),(65,8,15,1,'Atributo','column'),(66,8,15,2,'name_attribute','column'),(67,8,15,3,'name_attribute','column'),(68,9,15,25,'true','column'),(69,9,15,22,'Ingrese el valor del atributo','column'),(70,9,15,18,'150','column'),(71,10,15,1,'Formulario','column'),(72,10,15,2,'name_form','column'),(73,10,15,3,'name_form','column'),(74,11,15,1,'Modulo','column'),(75,11,15,2,'module','column'),(76,11,15,3,'module','column'),(77,12,15,1,'Form.Item','column'),(78,12,15,2,'total_elements','column'),(79,12,15,3,'total_elements','column'),(80,13,15,3,'Editar','column'),(81,13,15,17,'true','column'),(82,13,15,18,'40px','column'),(83,13,15,19,'','column'),(84,13,15,20,'bxs:edit','column'),(85,14,15,3,'Eliminar','column'),(86,14,15,17,'true','column'),(87,14,15,18,'40px','column'),(88,14,15,19,'¿Desea eliminar esta fila?','column'),(89,14,15,20,'ci:table-delete','column'),(90,15,15,3,'Componetizar','column'),(91,15,15,17,'true','column'),(92,15,15,18,'40px','column'),(93,15,15,19,'','column'),(94,15,15,20,'fluent:window-bullet-list-add-20-filled','column'),(95,16,15,1,'Elemento','column'),(96,16,15,2,'name_element','column'),(97,16,15,3,'name_element','column'),(98,17,15,3,'Editar elemento','column'),(99,17,15,17,'true','column'),(100,17,15,18,'80px','column'),(101,17,15,19,'','column'),(102,17,15,20,'bxs:edit','column'),(103,18,15,3,'Eliminar elemento','column'),(104,18,15,17,'true','column'),(105,18,15,18,'80px','column'),(106,18,15,19,'¿Desea eliminar esta fila?','column'),(107,18,15,20,'ci:table-delete','column'),(108,19,15,1,'Label','column'),(109,19,15,2,'label','column'),(110,19,15,3,'label\r\nlabel','column'),(111,9,15,3,'Input','column'),(130,9,15,42,'true','column'),(260,31,1,4,'1','form'),(261,31,1,6,'0','form'),(262,31,1,7,'','form'),(263,31,1,8,'','form'),(264,31,1,9,'','form'),(265,31,1,1,'attribute','form'),(266,31,1,2,'name_attribute','form'),(267,31,1,3,'name_attribute','form'),(268,31,1,5,'name_attribute','form'),(269,31,1,10,'1','form'),(270,32,1,4,'1','form'),(271,32,1,6,'0','form'),(272,32,1,7,'','form'),(273,32,1,8,'','form'),(274,32,1,9,'','form'),(275,32,1,10,'1','form'),(276,32,1,1,'help_description','form'),(277,32,1,2,'help_description','form'),(278,32,1,3,'help_description','form'),(279,32,1,5,'help_description','form'),(280,33,1,4,'1','form'),(281,33,1,6,'0','form'),(282,33,1,7,'','form'),(283,33,1,8,'','form'),(284,33,1,9,'','form'),(285,33,1,10,'1','form'),(286,33,1,1,'IconAvatar','form'),(287,33,1,2,'IconAvatar','form'),(288,33,1,3,'IconAvatar','form'),(289,33,1,5,'IconAvatar','form'),(290,34,1,4,'1','form'),(291,34,1,6,'0','form'),(292,34,1,7,'','form'),(293,34,1,8,'','form'),(294,34,1,9,'','form'),(295,34,1,10,'1','form'),(296,34,1,1,'Title','form'),(297,34,1,2,'Title','form'),(298,34,1,3,'Title','form'),(299,34,1,5,'Title','form'),(300,35,9,4,'','form'),(301,35,9,6,'','form'),(302,35,9,7,'','form'),(303,35,9,8,'','form'),(304,35,9,9,'','form'),(305,35,9,10,'','form'),(306,35,9,1,'bordered','form'),(307,35,9,2,'bordered','form'),(308,35,9,3,'bordered','form'),(309,35,9,5,'','form'),(310,36,3,4,' ','form'),(311,36,3,6,' ','form'),(312,36,3,7,'','form'),(313,36,3,8,'','form'),(314,36,3,9,'','form'),(315,36,3,10,' 0','form'),(316,36,3,14,'','form'),(317,36,3,15,'1','form'),(318,36,3,1,'pageSize','form'),(319,36,3,2,'pageSize','form'),(320,36,3,3,'pageSize','form'),(321,36,3,5,' ','form'),(322,37,9,4,'','form'),(323,37,9,6,'','form'),(324,37,9,7,'','form'),(325,37,9,8,'','form'),(326,37,9,9,'','form'),(327,37,9,10,'','form'),(328,37,9,1,'pagination','form'),(329,37,9,2,'pagination','form'),(330,37,9,3,'pagination','form'),(331,37,9,5,'','form'),(352,40,3,4,'0','form'),(353,40,3,6,'0','form'),(354,40,3,7,'','form'),(355,40,3,8,'','form'),(356,40,3,9,'','form'),(357,40,3,10,'1','form'),(358,40,3,14,'','form'),(359,40,3,15,'1','form'),(360,40,3,1,'scrollX','form'),(361,40,3,2,'scrollX','form'),(362,40,3,3,'scrollX','form'),(363,40,3,5,'scrollX','form'),(364,41,3,4,'0','form'),(365,41,3,6,'0','form'),(366,41,3,7,'','form'),(367,41,3,8,'','form'),(368,41,3,9,'','form'),(369,41,3,10,'1','form'),(370,41,3,14,'','form'),(371,41,3,15,'1','form'),(372,41,3,1,'scrollY','form'),(373,41,3,2,'scrollY','form'),(374,41,3,3,'scrollY','form'),(375,41,3,5,'scrollY','form'),(376,42,9,4,' ','form'),(377,42,9,6,' ','form'),(378,42,9,7,'','form'),(379,42,9,8,'','form'),(380,42,9,9,'','form'),(381,42,9,10,'','form'),(382,42,9,1,'simplepage','form'),(383,42,9,2,'simplepage','form'),(384,42,9,3,'simplepage','form'),(385,42,9,5,' ','form'),(406,45,1,4,'1','form'),(407,45,1,6,'0','form'),(408,45,1,7,'','form'),(409,45,1,8,'','form'),(410,45,1,9,'','form'),(411,45,1,10,'1','form'),(412,45,1,1,'name_table','form'),(413,45,1,2,'sys_tables@name_table','form'),(414,45,1,3,'name_table','form'),(415,45,1,5,'name_table','form'),(416,46,1,4,'1','form'),(417,46,1,6,'0','form'),(418,46,1,8,'','form'),(419,46,1,10,'1','form'),(420,46,1,1,'module','form'),(421,46,1,2,'sys_tables@module','form'),(422,46,1,3,'module','form'),(423,46,1,5,'module','form'),(424,46,1,7,'','form'),(425,46,1,9,'','form'),(426,47,8,6,'','form'),(427,47,8,7,'','form'),(428,47,8,8,'','form'),(429,47,8,9,'','form'),(430,47,8,13,'','form'),(431,47,8,1,'Tipo','form'),(432,47,8,2,'tipo','form'),(433,47,8,3,'Tipo','form'),(434,47,8,4,'1','form'),(435,47,8,5,'Tipo','form'),(436,47,8,10,'1','form'),(437,47,8,11,'1','form'),(438,47,8,12,'1','form'),(439,48,15,1,'Tabla','column'),(440,48,15,2,'name_table','column'),(441,48,15,3,'name_table','column'),(442,49,15,1,'Modulo','column'),(443,49,15,2,'module','column'),(444,49,15,3,'module','column'),(445,50,15,1,'Columnas','column'),(446,50,15,2,'total_elements','column'),(447,50,15,3,'total_elements','column'),(448,51,15,3,'Editar','column'),(449,51,15,17,'true','column'),(450,51,15,18,'50px','column'),(451,51,15,19,'','column'),(452,51,15,20,'bxs:edit','column'),(453,52,15,3,'Eliminar','column'),(454,52,15,17,'true','column'),(455,52,15,18,'50px','column'),(456,52,15,19,'¿Desea eliminar esta fila?','column'),(457,52,15,20,'ci:table-delete','column'),(458,53,15,3,'Agregar Columnas','column'),(459,53,15,17,'true','column'),(460,53,15,18,'50px','column'),(461,53,15,19,'','column'),(462,53,15,20,'fluent:window-bullet-list-add-20-filled','column'),(463,35,9,16,'1','form'),(464,35,9,17,'checked','form'),(465,37,9,16,'','form'),(466,37,9,17,'checked','form'),(467,42,9,16,'','form'),(468,42,9,17,'checked','form'),(469,54,15,3,'Editar Columna','column'),(470,54,15,17,'true','column'),(471,54,15,18,'50px','column'),(472,54,15,19,'','column'),(473,54,15,20,'bxs:edit','column'),(474,55,15,3,'Eliminar Columna','column'),(475,55,15,17,'true','column'),(476,55,15,18,'50px','column'),(477,55,15,19,'¿Desea eliminar esta fila?','column'),(478,55,15,20,'ci:table-delete','column'),(479,56,15,1,'Columna','column'),(480,56,15,2,'columna','column'),(481,56,15,3,'columna','column'),(482,57,8,6,'','form'),(483,57,8,7,'','form'),(484,57,8,13,'','form'),(485,57,8,2,'element_id','form'),(486,57,8,1,'Tipo de columna','form'),(487,57,8,3,'Tipo de columna','form'),(488,57,8,4,'1','form'),(489,57,8,5,'Tipo de columna','form'),(490,57,8,8,'','form'),(491,57,8,9,'','form'),(492,57,8,11,'1','form'),(493,57,8,10,'1','form'),(494,57,8,12,'1','form'),(505,64,8,7,'','form'),(506,64,8,8,'','form'),(507,64,8,9,'','form'),(508,64,8,10,'','form'),(509,64,8,13,'','form'),(510,64,8,1,'Catalogo','form'),(511,64,8,2,'catalogo','form'),(512,64,8,3,'Catalogo','form'),(513,64,8,4,'1','form'),(514,64,8,5,'Catalogo','form'),(515,64,8,6,'','form'),(516,64,8,11,'1','form'),(517,64,8,12,'1','form'),(518,65,15,1,'Nombre del elemento','column'),(519,65,15,2,'name_element','column'),(520,65,15,3,'name_element','column'),(521,66,15,1,'Nombre del atributo','column'),(522,66,15,2,'name_attribute','column'),(523,66,15,3,'name_attribute','column'),(524,67,15,1,'Descripción de ayuda','column'),(525,67,15,2,'help_description','column'),(526,67,15,3,'help_description','column'),(527,68,1,4,'1','form'),(528,68,1,5,'','form'),(529,68,1,8,'','form'),(530,68,1,9,'','form'),(531,68,1,10,'1','form'),(532,68,1,2,'help_description','form'),(533,68,1,1,'Descripción de ayuda','form'),(534,68,1,3,'Descripción de ayuda','form'),(535,68,1,6,'0','form'),(536,68,1,7,'Descripción de ayuda','form'),(537,69,8,5,NULL,'form'),(538,69,8,7,NULL,'form'),(539,69,8,8,NULL,'form'),(540,69,8,9,NULL,'form'),(541,69,8,13,NULL,'form'),(542,69,8,1,'Nombre de la tabla BD','form'),(543,69,8,2,'name_table','form'),(544,69,8,3,'Nombre de la tabla BD','form'),(545,69,8,4,'1','form'),(546,69,8,6,'','form'),(547,69,8,10,'1','form'),(548,69,8,11,'1','form'),(549,69,8,12,'1','form'),(550,70,1,4,'1','form'),(551,70,1,5,'','form'),(552,70,1,6,'0','form'),(553,70,1,7,'','form'),(554,70,1,8,'','form'),(555,70,1,9,'','form'),(556,70,1,10,'1','form'),(557,70,1,1,'Alias de la tabla','form'),(558,70,1,2,'alias_table','form'),(559,70,1,3,'Alias de la tabla','form'),(560,71,15,3,'name_table','column'),(561,71,15,2,'name_table','column'),(562,71,15,1,'Catálogo','column'),(563,72,15,2,'alias_table','column'),(564,72,15,3,'alias_table','column'),(565,72,15,1,'Alias','column'),(566,73,8,5,'','form'),(567,73,8,6,'','form'),(568,73,8,7,'','form'),(569,73,8,8,'','form'),(570,73,8,9,'','form'),(571,73,8,1,'Tipo de catálogo','form'),(572,73,8,2,'type','form'),(573,73,8,3,'Tipo de catálogo','form'),(574,73,8,4,'1','form'),(575,73,8,10,'1','form'),(576,73,8,11,'1','form'),(577,73,8,12,'1','form'),(578,73,8,13,'','form'),(579,74,8,1,'Formulario para el catálogo','form'),(580,74,8,2,'form_id','form'),(581,74,8,3,'Formulario','form'),(582,74,8,4,'0','form'),(583,74,8,5,'','form'),(584,74,8,6,'0','form'),(585,74,8,7,'','form'),(586,74,8,8,'','form'),(587,74,8,9,'','form'),(588,74,8,10,'1','form'),(589,74,8,11,'1','form'),(590,74,8,12,'1','form'),(591,74,8,13,'','form'),(592,75,8,1,'Tabla para el catálogo','form'),(593,75,8,2,'table_id','form'),(594,75,8,3,'Tabla','form'),(595,75,8,4,'0','form'),(596,75,8,5,'','form'),(597,75,8,6,'0','form'),(598,75,8,7,'','form'),(599,75,8,8,'','form'),(600,75,8,9,'','form'),(601,75,8,10,'1','form'),(602,75,8,11,'1','form'),(603,75,8,12,'1','form'),(604,75,8,13,'','form'),(605,76,15,1,'Elemento','column'),(606,76,15,2,'name_element','column'),(607,76,15,3,'name_element','column'),(608,77,8,7,'','form'),(609,77,8,8,'','form'),(610,77,8,9,'','form'),(611,77,8,13,'','form'),(612,77,8,2,'name_view','form'),(613,77,8,1,'Nombre de la vista BD','form'),(614,77,8,3,'Nombre de la vista BD','form'),(615,77,8,11,'1','form'),(616,77,8,12,'1','form'),(617,77,8,10,'','form'),(618,77,8,4,'0','form'),(619,77,8,5,'','form'),(620,77,8,6,'0','form'),(621,78,1,4,'1','form'),(622,78,1,5,'','form'),(623,78,1,6,'0','form'),(624,78,1,7,'','form'),(625,78,1,8,'','form'),(626,78,1,9,'','form'),(627,78,1,10,'1','form'),(628,78,1,2,'default','form'),(629,78,1,3,'default','form'),(630,78,1,1,'default','form'),(631,4,8,8,'','form'),(632,4,8,9,'','form'),(633,79,15,2,'name_attribute','column'),(634,79,15,3,'name_attribute','column'),(635,79,15,1,'Atributo','column'),(636,80,15,2,'default','column'),(637,80,15,3,'default','column'),(638,80,15,1,'Default','column'),(639,71,15,4,'','column'),(640,71,15,5,'','column'),(641,71,15,6,'','column'),(642,71,15,7,'','column'),(643,71,15,8,'','column'),(644,71,15,10,'','column'),(645,71,15,11,'','column'),(646,71,15,12,'1','column'),(647,71,15,14,'','column'),(648,71,15,15,'','column'),(649,71,15,16,'','column'),(650,71,15,9,'1','column'),(651,81,1,6,'0','form'),(652,81,1,7,'','form'),(653,81,1,8,'','form'),(654,81,1,9,'','form'),(655,81,1,1,'Ruta','form'),(656,81,1,2,'key','form'),(657,81,1,3,'Ruta','form'),(658,81,1,4,'1','form'),(659,81,1,5,'Ruta','form'),(660,81,1,10,'0','form'),(661,82,1,6,'0','form'),(662,82,1,7,'','form'),(663,82,1,8,'','form'),(664,82,1,9,'','form'),(665,82,1,2,'label','form'),(666,82,1,3,'Nombre menu','form'),(667,82,1,4,'1','form'),(668,82,1,5,'Nombre menu','form'),(669,82,1,10,'0','form'),(670,82,1,1,'Nombre menu','form'),(671,83,1,6,'0','form'),(672,83,1,7,'','form'),(673,83,1,8,'','form'),(674,83,1,9,'','form'),(675,83,1,2,'icon','form'),(676,83,1,1,'Icon','form'),(677,83,1,3,'Icon','form'),(678,83,1,4,'1','form'),(679,83,1,5,'Icon','form'),(680,83,1,10,'0','form'),(691,85,1,4,'1','form'),(692,85,1,6,'0','form'),(693,85,1,7,'','form'),(694,85,1,8,'','form'),(695,85,1,9,'','form'),(696,85,1,2,'order','form'),(697,85,1,1,'Orden','form'),(698,85,1,3,'Orden','form'),(699,85,1,5,'Orden','form'),(700,85,1,10,'0','form'),(701,86,15,5,'','column'),(702,86,15,6,'','column'),(703,86,15,7,'','column'),(704,86,15,8,'','column'),(705,86,15,10,'','column'),(706,86,15,11,'','column'),(707,86,15,15,'','column'),(708,86,15,16,'','column'),(709,86,15,2,'key','column'),(710,86,15,3,'key','column'),(711,86,15,4,'','column'),(712,86,15,1,'Ruta Route','column'),(713,86,15,9,'1','column'),(714,86,15,12,'1','column'),(715,86,15,13,'1','column'),(716,87,15,5,'','column'),(717,87,15,6,'','column'),(718,87,15,7,'','column'),(719,87,15,8,'','column'),(720,87,15,10,'','column'),(721,87,15,11,'','column'),(722,87,15,16,'','column'),(723,87,15,1,'Nombre','column'),(724,87,15,2,'label','column'),(725,87,15,3,'label','column'),(726,87,15,4,'','column'),(727,87,15,9,'1','column'),(728,87,15,12,'1','column'),(729,87,15,13,'1','column'),(730,87,15,15,'','column'),(746,89,15,5,'','column'),(747,89,15,6,'','column'),(748,89,15,7,'','column'),(749,89,15,9,'1','column'),(750,89,15,10,'','column'),(751,89,15,11,'','column'),(752,89,15,16,'','column'),(753,89,15,1,'SubMenu','column'),(754,89,15,2,'submenu','column'),(755,89,15,3,'submenu','column'),(756,89,15,4,'','column'),(757,89,15,8,'0','column'),(758,89,15,12,'1','column'),(759,89,15,13,'1','column'),(760,89,15,15,'','column'),(761,90,15,6,'','column'),(762,90,15,7,'','column'),(763,90,15,8,'','column'),(764,90,15,10,'','column'),(765,90,15,11,'','column'),(766,90,15,16,'','column'),(767,90,15,1,'Orden','column'),(768,90,15,2,'order','column'),(769,90,15,3,'order','column'),(770,90,15,4,'','column'),(771,90,15,5,'','column'),(772,90,15,9,'1','column'),(773,90,15,12,'1','column'),(774,90,15,13,'1','column'),(775,90,15,15,'','column'),(788,91,8,5,'','form'),(789,91,8,6,'','form'),(790,91,8,7,'','form'),(791,91,8,8,'','form'),(792,91,8,9,'','form'),(793,91,8,10,'','form'),(794,91,8,13,'','form'),(795,91,8,2,'submenu_id','form'),(796,91,8,1,'Nombre menu padre','form'),(797,91,8,3,'Nombre menu padre','form'),(798,91,8,4,'','form'),(799,91,8,11,'1','form'),(800,91,8,12,'1','form'),(806,91,8,19,'sys_menu','form'),(807,91,8,20,'label','form'),(808,91,8,21,'menu_id','form'),(809,91,8,27,'0','form'),(810,91,8,22,'sys_menu.submenu_id IS NULL','form'),(811,92,1,4,'1','form'),(812,92,1,6,'0','form'),(813,92,1,7,'','form'),(814,92,1,8,'','form'),(815,92,1,9,'','form'),(816,92,1,1,'company','form'),(817,92,1,2,'company','form'),(818,92,1,3,'company','form'),(819,92,1,5,'company','form'),(820,92,1,10,'0','form'),(821,93,1,4,'1','form'),(822,93,1,6,'0','form'),(823,93,1,7,'','form'),(824,93,1,8,'','form'),(825,93,1,9,'','form'),(826,93,1,2,'initials','form'),(827,93,1,1,'Iniciales','form'),(828,93,1,3,'Iniciales','form'),(829,93,1,5,'Iniciales','form'),(830,93,1,10,'0','form'),(831,94,15,5,'','column'),(832,94,15,6,'','column'),(833,94,15,7,'','column'),(834,94,15,8,'','column'),(835,94,15,10,'','column'),(836,94,15,11,'','column'),(837,94,15,15,'','column'),(838,94,15,16,'','column'),(839,94,15,2,'company','column'),(840,94,15,3,'company','column'),(841,94,15,4,'','column'),(842,94,15,1,'Compañia','column'),(843,94,15,9,'1','column'),(844,94,15,12,'1','column'),(845,94,15,13,'1','column'),(846,95,15,5,'','column'),(847,95,15,6,'','column'),(848,95,15,7,'','column'),(849,95,15,8,'','column'),(850,95,15,10,'','column'),(851,95,15,11,'','column'),(852,95,15,15,'','column'),(853,95,15,16,'','column'),(854,95,15,1,'Iniciales','column'),(855,95,15,2,'initials','column'),(856,95,15,3,'initials','column'),(857,95,15,4,'','column'),(858,95,15,9,'1','column'),(859,95,15,12,'1','column'),(860,95,15,13,'1','column'),(861,96,1,4,'1','form'),(862,96,1,7,'','form'),(863,96,1,8,'','form'),(864,96,1,9,'','form'),(865,96,1,1,'Nombre del rol','form'),(866,96,1,2,'rol','form'),(867,96,1,3,'Nombre del rol','form'),(868,96,1,6,'0','form'),(869,96,1,5,'Nombre del rol','form'),(870,96,1,10,'0','form'),(871,97,15,5,'','column'),(872,97,15,6,'','column'),(873,97,15,7,'','column'),(874,97,15,8,'','column'),(875,97,15,10,'','column'),(876,97,15,11,'','column'),(877,97,15,15,'','column'),(878,97,15,16,'','column'),(879,97,15,1,'Rol','column'),(880,97,15,2,'rol','column'),(881,97,15,3,'rol','column'),(882,97,15,4,'','column'),(883,97,15,9,'1','column'),(884,97,15,12,'1','column'),(885,97,15,13,'1','column'),(886,98,1,4,'1','form'),(887,98,1,5,'','form'),(888,98,1,6,'0','form'),(889,98,1,7,'','form'),(890,98,1,8,'','form'),(891,98,1,9,'','form'),(892,98,1,10,'0','form'),(893,98,1,1,'Keycloak','form'),(894,98,1,2,'id_keycloak','form'),(895,98,1,3,'Keycloak','form'),(896,99,1,4,'1','form'),(897,99,1,5,'','form'),(898,99,1,6,'0','form'),(899,99,1,7,'','form'),(900,99,1,8,'','form'),(901,99,1,9,'','form'),(902,99,1,10,'0','form'),(903,99,1,1,'Nombre','form'),(904,99,1,2,'name','form'),(905,99,1,3,'Nombre','form'),(1009,107,16,17,'1','column'),(1010,107,16,2,'','column'),(1011,107,16,3,'Eliminar','column'),(1012,107,16,20,'material-symbols:delete-outline-rounded','column'),(1013,107,16,19,'¿Deseas elimnar ese usuario?','column'),(1014,107,16,1,'','column'),(1033,109,16,17,'1','column'),(1034,109,16,2,'','column'),(1035,109,16,3,'Permisos','column'),(1036,109,16,20,'mdi:key-chain','column'),(1037,109,16,19,'','column'),(1038,109,16,1,'','column'),(1039,5,1,8,'','form'),(1040,5,1,9,'','form'),(1041,110,9,5,'','form'),(1042,110,9,6,' ','form'),(1043,110,9,7,'','form'),(1044,110,9,8,'','form'),(1045,110,9,9,'','form'),(1046,110,9,10,' ','form'),(1047,110,9,1,'Drag Sorting','form'),(1048,110,9,2,'dragSorting','form'),(1049,110,9,3,'','form'),(1050,110,9,17,'checked','form'),(1051,110,9,16,NULL,'form'),(1052,110,9,4,' ','form'),(1053,111,1,6,'0','form'),(1054,111,1,7,'','form'),(1055,111,1,8,'','form'),(1056,111,1,9,'','form'),(1057,111,1,1,'Basico','form'),(1058,111,1,3,'Basico','form'),(1059,111,1,4,'0','form'),(1060,111,1,5,'','form'),(1061,111,1,10,'0','form'),(1062,111,1,2,'menu_basic','form'),(1198,13,15,1,'','column'),(1199,13,15,2,'','column'),(1200,13,15,4,'','column'),(1201,13,15,5,'','column'),(1202,13,15,6,'','column'),(1203,13,15,7,'','column'),(1204,13,15,8,'','column'),(1205,13,15,9,'','column'),(1206,13,15,10,'','column'),(1207,13,15,11,'','column'),(1208,13,15,12,'','column'),(1209,13,15,13,'','column'),(1210,13,15,15,'','column'),(1211,13,15,16,'','column'),(1212,107,16,18,'40px','column'),(1213,109,16,18,'40px','column'),(1443,141,17,45,'1','column'),(1444,141,17,3,'avatar','column'),(1445,141,17,2,'','column'),(1446,141,17,18,'70px','column'),(1447,141,17,1,'','column'),(1448,141,17,46,'path_avatar','column'),(1449,14,15,1,'','column'),(1450,14,15,2,'','column'),(1451,14,15,4,'','column'),(1452,14,15,5,'','column'),(1453,14,15,6,'','column'),(1454,14,15,7,'','column'),(1455,14,15,8,'','column'),(1456,14,15,9,'','column'),(1457,14,15,10,'','column'),(1458,14,15,11,'','column'),(1459,14,15,12,'','column'),(1460,14,15,13,'','column'),(1461,14,15,15,'','column'),(1462,14,15,16,'','column'),(1463,89,15,18,'','column'),(1464,141,17,47,'50','column'),(1465,141,17,48,'name_avatar','column'),(1466,142,18,49,'1','column'),(1467,142,18,3,'icon','column'),(1468,142,18,2,'icon','column'),(1469,142,18,1,'Icono','column'),(1470,142,18,46,'icon','column'),(1471,142,18,47,'40','column'),(1472,142,18,18,'60px','column'),(1473,90,15,18,'60px','column'),(1582,76,15,4,'','column'),(1583,76,15,5,'','column'),(1584,76,15,6,'','column'),(1585,76,15,7,'','column'),(1586,76,15,8,'','column'),(1587,76,15,10,'','column'),(1588,76,15,11,'','column'),(1589,76,15,15,'','column'),(1590,76,15,16,'','column'),(1591,76,15,18,'','column'),(1592,76,15,9,'1','column'),(1593,76,15,12,'1','column'),(1594,76,15,13,'1','column'),(1645,156,1,4,'1','form'),(1646,156,1,5,NULL,'form'),(1647,156,1,6,'0','form'),(1648,156,1,7,NULL,'form'),(1649,156,1,8,NULL,'form'),(1650,156,1,9,NULL,'form'),(1651,156,1,2,'pk','form'),(1652,156,1,1,'Campo PK BD','form'),(1653,156,1,3,'Campo PK BD','form'),(1654,156,1,10,'0','form'),(1679,50,15,4,'','column'),(1680,50,15,5,'','column'),(1681,50,15,6,'','column'),(1682,50,15,7,'','column'),(1683,50,15,9,'','column'),(1684,50,15,10,'','column'),(1685,50,15,11,'','column'),(1686,50,15,15,'','column'),(1687,50,15,16,'','column'),(1688,50,15,18,'150px','column'),(1689,50,15,8,'1','column'),(1690,50,15,12,'1','column'),(1691,50,15,13,'1','column'),(1692,48,15,4,'','column'),(1693,48,15,5,'','column'),(1694,48,15,6,'','column'),(1695,48,15,7,'','column'),(1696,48,15,8,'','column'),(1697,48,15,10,'','column'),(1698,48,15,11,'','column'),(1699,48,15,15,'','column'),(1700,48,15,16,'','column'),(1701,48,15,18,'','column'),(1702,48,15,9,'1','column'),(1703,48,15,12,'1','column'),(1704,48,15,13,'1','column'),(1705,49,15,4,'','column'),(1706,49,15,5,'','column'),(1707,49,15,6,'','column'),(1708,49,15,7,'','column'),(1709,49,15,8,'','column'),(1710,49,15,10,'','column'),(1711,49,15,11,'','column'),(1712,49,15,15,'','column'),(1713,49,15,16,'','column'),(1714,49,15,18,'','column'),(1715,49,15,9,'1','column'),(1716,49,15,12,'1','column'),(1717,49,15,13,'1','column'),(1752,10,15,4,'','column'),(1753,10,15,5,'','column'),(1754,10,15,6,'','column'),(1755,10,15,7,'','column'),(1756,10,15,8,'','column'),(1757,10,15,10,'','column'),(1758,10,15,11,'','column'),(1759,10,15,15,'','column'),(1760,10,15,16,'','column'),(1761,10,15,18,'','column'),(1762,10,15,9,'1','column'),(1763,10,15,12,'1','column'),(1764,10,15,13,'1','column'),(1765,11,15,4,'','column'),(1766,11,15,5,'','column'),(1767,11,15,6,'','column'),(1768,11,15,7,'','column'),(1769,11,15,8,'','column'),(1770,11,15,10,'','column'),(1771,11,15,11,'','column'),(1772,11,15,15,'','column'),(1773,11,15,16,'','column'),(1774,11,15,18,'','column'),(1775,11,15,9,'1','column'),(1776,11,15,12,'1','column'),(1777,11,15,13,'1','column'),(1778,12,15,4,'','column'),(1779,12,15,5,'','column'),(1780,12,15,6,'','column'),(1781,12,15,7,'','column'),(1782,12,15,9,'','column'),(1783,12,15,10,'','column'),(1784,12,15,11,'','column'),(1785,12,15,15,'','column'),(1786,12,15,16,'','column'),(1787,12,15,8,'1','column'),(1788,12,15,12,'1','column'),(1789,12,15,13,'1','column'),(1790,12,15,18,'150px','column'),(1791,71,15,18,'','column'),(1792,71,15,13,'1','column'),(1793,72,15,4,'','column'),(1794,72,15,5,'','column'),(1795,72,15,6,'','column'),(1796,72,15,7,'','column'),(1797,72,15,8,'','column'),(1798,72,15,10,'','column'),(1799,72,15,11,'','column'),(1800,72,15,15,'','column'),(1801,72,15,16,'','column'),(1802,72,15,18,'','column'),(1803,72,15,9,'1','column'),(1804,72,15,12,'1','column'),(1805,72,15,13,'1','column'),(1906,15,15,1,'','column'),(1907,15,15,2,'','column'),(1908,15,15,4,'','column'),(1909,15,15,5,'','column'),(1910,15,15,6,'','column'),(1911,15,15,7,'','column'),(1912,15,15,8,'','column'),(1913,15,15,9,'','column'),(1914,15,15,10,'','column'),(1915,15,15,11,'','column'),(1916,15,15,12,'','column'),(1917,15,15,13,'','column'),(1918,15,15,15,'','column'),(1919,15,15,16,'','column'),(1976,65,15,4,'','column'),(1977,65,15,5,'','column'),(1978,65,15,6,'','column'),(1979,65,15,7,'','column'),(1980,65,15,8,'','column'),(1981,65,15,10,'','column'),(1982,65,15,11,'','column'),(1983,65,15,15,'','column'),(1984,65,15,16,'','column'),(1985,65,15,18,'','column'),(1986,65,15,9,'1','column'),(1987,65,15,12,'1','column'),(1988,65,15,13,'1','column'),(1989,173,15,5,NULL,'column'),(1990,173,15,6,NULL,'column'),(1991,173,15,7,NULL,'column'),(1992,173,15,8,NULL,'column'),(1993,173,15,10,NULL,'column'),(1994,173,15,11,NULL,'column'),(1995,173,15,15,NULL,'column'),(1996,173,15,16,NULL,'column'),(1997,173,15,18,NULL,'column'),(1998,173,15,2,'name_attribute_column','column'),(1999,173,15,3,'name_attribute_column','column'),(2000,173,15,4,'','column'),(2001,173,15,1,'Nombre','column'),(2002,173,15,9,'1','column'),(2003,173,15,12,'1','column'),(2004,173,15,13,'1','column'),(2005,174,15,5,NULL,'column'),(2006,174,15,6,NULL,'column'),(2007,174,15,7,NULL,'column'),(2008,174,15,8,NULL,'column'),(2009,174,15,10,NULL,'column'),(2010,174,15,11,NULL,'column'),(2011,174,15,16,NULL,'column'),(2012,174,15,18,NULL,'column'),(2013,174,15,2,'help_descrption','column'),(2014,174,15,3,'help_descrption','column'),(2015,174,15,1,'Help','column'),(2016,174,15,4,'','column'),(2017,174,15,9,'1','column'),(2018,174,15,12,'1','column'),(2019,174,15,13,'1','column'),(2020,174,15,15,'1','column'),(2021,175,1,4,'1','form'),(2022,175,1,6,'0','form'),(2023,175,1,7,NULL,'form'),(2024,175,1,8,NULL,'form'),(2025,175,1,9,NULL,'form'),(2026,175,1,2,'name_attribute_column','form'),(2027,175,1,1,'Nombre','form'),(2028,175,1,3,'Nombre','form'),(2029,175,1,5,'Nombre','form'),(2030,175,1,10,'0','form'),(2031,176,4,5,NULL,'form'),(2032,176,4,6,NULL,'form'),(2033,176,4,7,NULL,'form'),(2034,176,4,8,NULL,'form'),(2035,176,4,9,NULL,'form'),(2036,176,4,41,NULL,'form'),(2037,176,4,2,'help_descrption','form'),(2038,176,4,1,'Help','form'),(2039,176,4,3,'Help','form'),(2040,176,4,4,'','form'),(2041,176,4,10,'0','form'),(2042,176,4,42,'0','form'),(2043,177,15,5,NULL,'column'),(2044,177,15,6,NULL,'column'),(2045,177,15,7,NULL,'column'),(2046,177,15,8,NULL,'column'),(2047,177,15,10,NULL,'column'),(2048,177,15,11,NULL,'column'),(2049,177,15,16,NULL,'column'),(2050,177,15,18,NULL,'column'),(2051,177,15,1,'Elemento','column'),(2052,177,15,2,'name_element','column'),(2053,177,15,3,'name_element','column'),(2054,177,15,4,'','column'),(2055,177,15,9,'1','column'),(2056,177,15,12,'1','column'),(2057,177,15,13,'1','column'),(2058,177,15,15,'','column'),(2059,178,15,5,NULL,'column'),(2060,178,15,6,NULL,'column'),(2061,178,15,7,NULL,'column'),(2062,178,15,8,NULL,'column'),(2063,178,15,10,NULL,'column'),(2064,178,15,11,NULL,'column'),(2065,178,15,15,NULL,'column'),(2066,178,15,16,NULL,'column'),(2067,178,15,18,NULL,'column'),(2068,178,15,2,'name_attribute_column','column'),(2069,178,15,3,'name_attribute_column','column'),(2070,178,15,4,'','column'),(2071,178,15,1,'Attribute','column'),(2072,178,15,9,'1','column'),(2073,178,15,12,'1','column'),(2074,178,15,13,'1','column'),(2075,179,15,5,NULL,'column'),(2076,179,15,6,NULL,'column'),(2077,179,15,7,NULL,'column'),(2078,179,15,8,NULL,'column'),(2079,179,15,10,NULL,'column'),(2080,179,15,11,NULL,'column'),(2081,179,15,16,NULL,'column'),(2082,179,15,1,'Default','column'),(2083,179,15,2,'default','column'),(2084,179,15,3,'default','column'),(2085,179,15,4,'','column'),(2086,179,15,9,'1','column'),(2087,179,15,12,'1','column'),(2088,179,15,13,'1','column'),(2089,179,15,15,'1','column'),(2090,179,15,18,'100px','column'),(2091,180,16,17,'1','column'),(2092,180,16,19,'','column'),(2093,180,16,3,'Editar','column'),(2094,180,16,20,'bxs:edit','column'),(2095,180,16,1,'Editar','column'),(2096,180,16,2,'Editar','column'),(2097,180,16,18,'80px','column'),(2098,181,16,17,'1','column'),(2099,181,16,3,'Eliminar','column'),(2100,181,16,20,'ci:table-delete','column'),(2101,181,16,19,'¿Desea eliminar esta fila?','column'),(2102,181,16,1,'Eliminar','column'),(2103,181,16,2,'Eliminar','column'),(2104,181,16,18,'80px','column'),(2105,182,8,6,NULL,'form'),(2106,182,8,7,NULL,'form'),(2107,182,8,8,NULL,'form'),(2108,182,8,9,NULL,'form'),(2109,182,8,10,NULL,'form'),(2110,182,8,13,NULL,'form'),(2111,182,8,2,'element_id','form'),(2112,182,8,1,'Elemento','form'),(2113,182,8,3,'Elemento','form'),(2114,182,8,4,'1','form'),(2115,182,8,5,'Elemento','form'),(2116,182,8,11,'1','form'),(2117,182,8,12,'1','form'),(2118,182,8,19,'sys_elements','form'),(2119,182,8,20,'name_element','form'),(2120,182,8,21,'element_id','form'),(2121,182,8,22,'element_id <> 2 AND status = \'alta\'','form'),(2122,182,8,23,'Combo elementos','form'),(2123,183,8,6,NULL,'form'),(2124,183,8,7,NULL,'form'),(2125,183,8,8,NULL,'form'),(2126,183,8,9,NULL,'form'),(2127,183,8,13,NULL,'form'),(2128,183,8,2,'attribute_column_id','form'),(2129,183,8,1,'Atributo','form'),(2130,183,8,3,'Atributo','form'),(2131,183,8,4,'1','form'),(2132,183,8,5,'Atributo','form'),(2133,183,8,10,'0','form'),(2134,183,8,11,'1','form'),(2135,183,8,12,'1','form'),(2136,183,8,19,'sys_attributes_columns','form'),(2137,183,8,20,'name_attribute_column','form'),(2138,183,8,21,'attribute_column_id','form'),(2139,183,8,22,'status = \'alta\'','form'),(2140,183,8,23,'Combo atributos Columna','form'),(2141,184,1,5,NULL,'form'),(2142,184,1,6,'0','form'),(2143,184,1,7,NULL,'form'),(2144,184,1,8,NULL,'form'),(2145,184,1,9,NULL,'form'),(2146,184,1,1,'default','form'),(2147,184,1,2,'default','form'),(2148,184,1,3,'default','form'),(2149,184,1,4,'0','form'),(2150,184,1,10,'0','form'),(2151,185,20,52,'1','column'),(2152,185,20,2,NULL,'column'),(2153,185,20,3,'#','column'),(2154,185,20,18,'50px','column'),(2155,185,20,1,'#','column'),(2396,109,16,39,'right','column'),(2397,13,15,39,'','column'),(2398,186,15,5,NULL,'column'),(2399,186,15,6,NULL,'column'),(2400,186,15,7,NULL,'column'),(2401,186,15,8,NULL,'column'),(2402,186,15,10,NULL,'column'),(2403,186,15,11,NULL,'column'),(2404,186,15,16,NULL,'column'),(2405,186,15,18,NULL,'column'),(2406,186,15,39,NULL,'column'),(2407,186,15,1,'id_keycloak','column'),(2408,186,15,2,'id_keycloak','column'),(2409,186,15,3,'id_keycloak','column'),(2410,186,15,4,'','column'),(2411,186,15,9,'1','column'),(2412,186,15,12,'1','column'),(2413,186,15,13,'1','column'),(2414,186,15,15,'1','column'),(2415,187,15,5,NULL,'column'),(2416,187,15,6,NULL,'column'),(2417,187,15,7,NULL,'column'),(2418,187,15,8,NULL,'column'),(2419,187,15,10,NULL,'column'),(2420,187,15,11,NULL,'column'),(2421,187,15,15,NULL,'column'),(2422,187,15,16,NULL,'column'),(2423,187,15,18,NULL,'column'),(2424,187,15,39,NULL,'column'),(2425,187,15,1,'preferred_username','column'),(2426,187,15,2,'preferred_username','column'),(2427,187,15,3,'preferred_username','column'),(2428,187,15,4,'','column'),(2429,187,15,9,'1','column'),(2430,187,15,12,'1','column'),(2431,187,15,13,'1','column'),(2432,188,15,4,NULL,'column'),(2433,188,15,5,NULL,'column'),(2434,188,15,6,NULL,'column'),(2435,188,15,7,NULL,'column'),(2436,188,15,8,NULL,'column'),(2437,188,15,10,NULL,'column'),(2438,188,15,11,NULL,'column'),(2439,188,15,15,NULL,'column'),(2440,188,15,16,NULL,'column'),(2441,188,15,18,NULL,'column'),(2442,188,15,39,NULL,'column'),(2443,188,15,1,'email','column'),(2444,188,15,2,'email','column'),(2445,188,15,3,'email','column'),(2446,188,15,12,'1','column'),(2447,188,15,9,'1','column'),(2448,188,15,13,'1','column'),(2449,189,15,4,NULL,'column'),(2450,189,15,5,NULL,'column'),(2451,189,15,6,NULL,'column'),(2452,189,15,7,NULL,'column'),(2453,189,15,8,NULL,'column'),(2454,189,15,9,'1','column'),(2455,189,15,10,NULL,'column'),(2456,189,15,11,NULL,'column'),(2457,189,15,12,'1','column'),(2458,189,15,13,'1','column'),(2459,189,15,15,NULL,'column'),(2460,189,15,16,NULL,'column'),(2461,189,15,18,NULL,'column'),(2462,189,15,39,NULL,'column'),(2463,189,15,1,'name','column'),(2464,189,15,2,'name','column'),(2465,189,15,3,'name','column'),(2466,190,16,17,'1','column'),(2467,190,16,19,NULL,'column'),(2468,190,16,3,'Editar','column'),(2469,190,16,20,'bxs:edit','column'),(2470,190,16,1,'','column'),(2471,190,16,2,'','column'),(2472,190,16,18,'40px','column'),(2473,190,16,39,'right','column'),(2475,191,8,6,NULL,'form'),(2476,191,8,7,NULL,'form'),(2477,191,8,8,NULL,'form'),(2478,191,8,9,NULL,'form'),(2479,191,8,10,NULL,'form'),(2480,191,8,13,NULL,'form'),(2481,191,8,1,'Rol','form'),(2482,191,8,2,'id_rol','form'),(2483,191,8,3,'Rol','form'),(2484,191,8,4,'1','form'),(2485,191,8,5,'Rol','form'),(2486,191,8,11,'1','form'),(2487,191,8,12,'1','form'),(2488,191,8,19,'sys_cat_rol','form'),(2489,191,8,20,'rol','form'),(2490,191,8,21,'id_rol','form'),(2491,191,8,22,'status = \'alta\'','form'),(2492,191,8,23,'Combo Rol','form'),(2493,192,15,4,NULL,'column'),(2494,192,15,5,NULL,'column'),(2495,192,15,6,NULL,'column'),(2496,192,15,7,NULL,'column'),(2497,192,15,8,NULL,'column'),(2498,192,15,9,'1','column'),(2499,192,15,10,NULL,'column'),(2500,192,15,11,NULL,'column'),(2501,192,15,12,'1','column'),(2502,192,15,13,'1','column'),(2503,192,15,15,NULL,'column'),(2504,192,15,16,NULL,'column'),(2505,192,15,18,NULL,'column'),(2506,192,15,39,NULL,'column'),(2507,192,15,1,'Rol','column'),(2508,192,15,2,'rol','column'),(2509,192,15,3,'rol','column'),(2510,174,15,39,'200px','column'),(2511,173,15,39,'','column'),(2512,193,1,5,NULL,'form'),(2513,193,1,7,NULL,'form'),(2514,193,1,8,NULL,'form'),(2515,193,1,9,NULL,'form'),(2516,193,1,1,'scrollX','form'),(2517,193,1,2,'scrollX','form'),(2518,193,1,3,'scrollX','form'),(2519,193,1,4,'0','form'),(2520,193,1,6,'','form'),(2521,193,1,10,'0','form'),(2522,194,1,5,NULL,'form'),(2523,194,1,7,NULL,'form'),(2524,194,1,8,NULL,'form'),(2525,194,1,9,NULL,'form'),(2526,194,1,1,'scrollY','form'),(2527,194,1,2,'scrollY','form'),(2528,194,1,3,'scrollY','form'),(2529,194,1,4,'0','form'),(2530,194,1,6,'','form'),(2531,194,1,10,'','form'),(2532,36,3,47,'0','form'),(2533,36,3,45,'','form'),(2534,36,3,44,'1','form'),(2535,195,1,7,NULL,'form'),(2536,195,1,8,NULL,'form'),(2537,195,1,9,NULL,'form'),(2538,195,1,4,'1','form'),(2539,195,1,1,'Alias Combo','form'),(2540,195,1,2,'alias_combo','form'),(2541,195,1,3,'Alias Combo','form'),(2542,195,1,5,'Alias Combo','form'),(2543,195,1,6,' ','form'),(2544,195,1,10,' ','form'),(2545,196,1,4,'1','form'),(2546,196,1,7,NULL,'form'),(2547,196,1,8,NULL,'form'),(2548,196,1,9,NULL,'form'),(2549,196,1,2,'label','form'),(2550,196,1,1,'Label','form'),(2551,196,1,3,'Label','form'),(2552,196,1,5,'Label','form'),(2553,196,1,6,'','form'),(2554,196,1,10,'','form'),(2555,197,1,4,'1','form'),(2556,197,1,7,NULL,'form'),(2557,197,1,8,NULL,'form'),(2558,197,1,9,NULL,'form'),(2559,197,1,2,'value','form'),(2560,197,1,1,'Value','form'),(2561,197,1,3,'Value','form'),(2562,197,1,5,'Value','form'),(2563,197,1,6,'','form'),(2564,197,1,10,'','form'),(2565,198,15,4,NULL,'column'),(2566,198,15,5,NULL,'column'),(2567,198,15,6,NULL,'column'),(2568,198,15,7,NULL,'column'),(2569,198,15,8,NULL,'column'),(2570,198,15,10,NULL,'column'),(2571,198,15,11,NULL,'column'),(2572,198,15,12,'1','column'),(2573,198,15,13,'1','column'),(2574,198,15,15,NULL,'column'),(2575,198,15,16,NULL,'column'),(2576,198,15,18,NULL,'column'),(2577,198,15,39,NULL,'column'),(2578,198,15,3,'alias_combo','column'),(2579,198,15,1,'Alias Combo','column'),(2580,198,15,2,'alias_combo','column'),(2581,198,15,9,'1','column'),(2582,199,15,4,NULL,'column'),(2583,199,15,5,NULL,'column'),(2584,199,15,6,NULL,'column'),(2585,199,15,7,NULL,'column'),(2586,199,15,8,NULL,'column'),(2587,199,15,9,'1','column'),(2588,199,15,10,NULL,'column'),(2589,199,15,11,NULL,'column'),(2590,199,15,12,'1','column'),(2591,199,15,13,'1','column'),(2592,199,15,15,NULL,'column'),(2593,199,15,16,NULL,'column'),(2594,199,15,18,NULL,'column'),(2595,199,15,39,NULL,'column'),(2596,199,15,2,'label','column'),(2597,199,15,3,'label','column'),(2598,199,15,1,'Label','column'),(2599,200,15,4,NULL,'column'),(2600,200,15,5,NULL,'column'),(2601,200,15,6,NULL,'column'),(2602,200,15,7,NULL,'column'),(2603,200,15,8,NULL,'column'),(2604,200,15,9,'1','column'),(2605,200,15,10,NULL,'column'),(2606,200,15,11,NULL,'column'),(2607,200,15,12,'1','column'),(2608,200,15,13,'1','column'),(2609,200,15,15,NULL,'column'),(2610,200,15,16,NULL,'column'),(2611,200,15,18,NULL,'column'),(2612,200,15,39,NULL,'column'),(2613,200,15,2,'value','column'),(2614,200,15,3,'value','column'),(2615,200,15,1,'Value','column'),(2616,201,16,17,'1','column'),(2617,201,16,19,NULL,'column'),(2618,201,16,2,NULL,'column'),(2619,201,16,3,'Editar','column'),(2620,201,16,1,'Editar','column'),(2621,201,16,20,'bxs:edit','column'),(2622,201,16,18,'80px','column'),(2623,201,16,39,'','column'),(2624,202,16,17,'1','column'),(2625,202,16,3,'Eliminar','column'),(2626,202,16,20,'ci:table-delete','column'),(2627,202,16,19,'¿Desea eliminar esta fila?','column'),(2628,202,16,1,'Eliminar','column'),(2629,202,16,2,'Eliminar','column'),(2630,202,16,39,'','column'),(2631,202,16,18,'80px','column'),(2632,203,8,6,NULL,'form'),(2633,203,8,7,NULL,'form'),(2634,203,8,8,NULL,'form'),(2635,203,8,9,NULL,'form'),(2636,203,8,10,NULL,'form'),(2637,203,8,13,NULL,'form'),(2638,203,8,1,'size','form'),(2639,203,8,2,'size','form'),(2640,203,8,3,'size','form'),(2641,203,8,4,'1','form'),(2642,203,8,5,'size','form'),(2643,203,8,11,'1','form'),(2644,203,8,12,'1','form'),(2645,203,8,19,'sys_combos_virtuales','form'),(2646,203,8,20,'label','form'),(2647,203,8,21,'value','form'),(2648,203,8,22,'alias_combo` = \'Size\' AND status` = \'alta\'','form'),(2649,203,8,23,'Combo Size_tabla','form'),(2650,204,8,5,NULL,'form'),(2651,204,8,6,NULL,'form'),(2652,204,8,7,NULL,'form'),(2653,204,8,8,NULL,'form'),(2654,204,8,9,NULL,'form'),(2655,204,8,10,NULL,'form'),(2656,204,8,13,NULL,'form'),(2657,204,8,1,'positionBottom','form'),(2658,204,8,2,'positionBottom','form'),(2659,204,8,3,'','form'),(2660,204,8,4,'','form'),(2661,204,8,11,'1','form'),(2662,204,8,12,'1','form'),(2663,204,8,20,'label','form'),(2664,204,8,19,'sys_combos_virtuales','form'),(2665,204,8,21,'value','form'),(2666,204,8,22,'alias_combo = \'positionBottom\' AND status = \'alta\'','form'),(2667,204,8,23,'Combo positionBottom_tabla','form'),(2668,205,8,3,NULL,'form'),(2669,205,8,4,NULL,'form'),(2670,205,8,5,NULL,'form'),(2671,205,8,6,NULL,'form'),(2672,205,8,7,NULL,'form'),(2673,205,8,8,NULL,'form'),(2674,205,8,9,NULL,'form'),(2675,205,8,10,NULL,'form'),(2676,205,8,13,NULL,'form'),(2677,205,8,1,'positionTop','form'),(2678,205,8,2,'positionTop','form'),(2679,205,8,11,'1','form'),(2680,205,8,12,'1','form'),(2681,205,8,19,'sys_combos_virtuales','form'),(2682,205,8,20,'label','form'),(2683,205,8,21,'value','form'),(2684,205,8,22,'alias_combo = \'positionTop\' AND status = \'alta\'','form'),(2685,205,8,23,'Combo positionTop_tabla','form'),(2686,206,8,4,NULL,'form'),(2687,206,8,5,NULL,'form'),(2688,206,8,6,NULL,'form'),(2689,206,8,7,NULL,'form'),(2690,206,8,8,NULL,'form'),(2691,206,8,9,NULL,'form'),(2692,206,8,10,NULL,'form'),(2693,206,8,13,NULL,'form'),(2694,206,8,1,'tableLayout','form'),(2695,206,8,2,'tableLayout','form'),(2696,206,8,3,'','form'),(2697,206,8,11,'1','form'),(2698,206,8,12,'1','form'),(2699,206,8,19,'sys_combos_virtuales','form'),(2700,206,8,20,'label','form'),(2701,206,8,21,'value','form'),(2702,206,8,22,'alias_combo = \'tableLayout\' AND status = \'alta\'','form'),(2703,206,8,23,'Combo tableLayout_tabla','form');
/*!40000 ALTER TABLE `sys_components` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_data_forms`
--

DROP TABLE IF EXISTS `sys_data_forms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_data_forms` (
  `data_form_id` int(11) NOT NULL AUTO_INCREMENT,
  `form_id` int(11) DEFAULT NULL,
  `component_no` int(11) DEFAULT NULL,
  `order` int(11) DEFAULT NULL,
  `dependency` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`data_form_id`)
) ENGINE=InnoDB AUTO_INCREMENT=132 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci PACK_KEYS=0;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_data_forms`
--

LOCK TABLES `sys_data_forms` WRITE;
/*!40000 ALTER TABLE `sys_data_forms` DISABLE KEYS */;
INSERT INTO `sys_data_forms` VALUES (1,1,1,1,0),(2,2,2,1,0),(3,3,3,1,1),(4,3,4,2,1),(5,4,5,1,0),(6,4,6,2,0),(8,5,3,1,1),(20,10,31,1,0),(21,10,32,2,0),(22,11,33,2,0),(23,11,34,1,0),(24,11,35,3,0),(25,11,36,4,0),(26,11,37,5,0),(31,11,42,10,0),(34,11,45,13,0),(35,11,46,14,0),(36,12,47,1,0),(37,13,57,1,1),(38,14,64,1,1),(39,2,68,2,0),(40,15,69,1,1),(41,15,70,2,0),(42,15,73,7,1),(43,15,74,4,1),(44,15,75,5,1),(45,15,77,-1,1),(46,3,78,3,0),(47,17,81,1,0),(48,17,82,2,0),(49,17,83,3,0),(51,17,85,4,0),(52,17,91,5,1),(53,18,92,1,0),(54,18,93,2,0),(55,19,96,1,0),(56,20,98,5,0),(57,20,99,1,0),(61,11,110,15,0),(62,17,111,6,0),(92,31,175,1,0),(93,31,176,1,0),(110,15,156,3,0),(119,40,182,1,1),(120,40,183,2,1),(121,40,184,3,0),(122,20,191,6,1),(123,11,193,8,0),(124,11,194,9,0),(125,41,195,1,0),(126,41,196,2,0),(127,41,197,3,0),(128,11,203,11,1),(129,11,204,6,1),(130,11,205,7,1),(131,11,206,12,1);
/*!40000 ALTER TABLE `sys_data_forms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_data_tables`
--

DROP TABLE IF EXISTS `sys_data_tables`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_data_tables` (
  `data_table_id` int(11) NOT NULL AUTO_INCREMENT,
  `table_id` int(11) DEFAULT NULL,
  `component_no` int(11) DEFAULT NULL,
  `order` int(11) DEFAULT NULL,
  PRIMARY KEY (`data_table_id`)
) ENGINE=InnoDB AUTO_INCREMENT=222 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci PACK_KEYS=0;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_data_tables`
--

LOCK TABLES `sys_data_tables` WRITE;
/*!40000 ALTER TABLE `sys_data_tables` DISABLE KEYS */;
INSERT INTO `sys_data_tables` VALUES (1,1,8,1),(2,1,9,2),(3,2,10,1),(4,2,11,2),(5,2,12,3),(6,2,13,4),(7,2,14,5),(8,2,15,6),(9,3,16,1),(10,3,17,3),(11,3,18,4),(12,3,19,2),(13,4,48,1),(14,4,49,2),(15,4,52,5),(16,4,53,6),(17,4,50,3),(18,4,51,4),(19,5,54,2),(20,5,55,3),(21,5,56,1),(23,9,65,1),(24,10,66,1),(25,10,67,2),(26,9,13,2),(27,9,14,3),(28,10,13,3),(29,10,14,4),(30,11,71,1),(31,11,72,2),(32,11,13,4),(33,11,14,5),(40,12,76,1),(41,12,13,6),(42,12,14,7),(43,12,79,4),(44,12,80,5),(45,13,86,1),(46,13,87,2),(48,13,89,4),(49,13,90,5),(50,13,13,6),(51,13,14,7),(52,14,94,1),(53,14,95,2),(54,15,97,1),(55,14,13,3),(56,14,14,4),(57,15,13,2),(58,15,14,3),(66,-16,107,7),(67,16,109,7),(120,26,13,3),(121,26,14,4),(139,13,142,-1),(155,11,168,3),(159,26,173,1),(160,26,174,2),(161,34,177,1),(162,34,178,2),(163,34,179,3),(164,34,180,4),(165,34,181,5),(166,34,185,-1),(170,2,185,-1),(171,3,185,-1),(172,4,185,-1),(173,5,185,-1),(174,9,185,-1),(175,10,185,-1),(176,11,185,-1),(177,12,185,-1),(178,14,185,-1),(179,15,185,-1),(181,26,185,-1),(210,16,186,1),(211,16,187,3),(212,16,188,4),(213,16,189,2),(214,16,190,6),(215,16,192,5),(216,16,141,-1),(217,35,198,1),(218,35,199,2),(219,35,200,3),(220,35,201,4),(221,35,202,5);
/*!40000 ALTER TABLE `sys_data_tables` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_dependencys`
--

DROP TABLE IF EXISTS `sys_dependencys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_dependencys` (
  `dependency_id` int(11) NOT NULL AUTO_INCREMENT,
  `component_id` int(11) DEFAULT NULL,
  `dependency_combo_id` int(11) DEFAULT NULL,
  `parent` int(11) DEFAULT '0',
  `children` int(11) DEFAULT '0',
  PRIMARY KEY (`dependency_id`),
  KEY `component_id` (`component_id`),
  KEY `dependency_combo_id` (`dependency_combo_id`),
  KEY `parent` (`parent`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci PACK_KEYS=0;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_dependencys`
--

LOCK TABLES `sys_dependencys` WRITE;
/*!40000 ALTER TABLE `sys_dependencys` DISABLE KEYS */;
INSERT INTO `sys_dependencys` VALUES (1,3,1,0,0),(2,4,2,0,0),(3,57,3,0,0),(4,64,4,0,0),(5,69,5,0,0),(6,73,6,0,0),(7,74,7,0,0),(8,75,8,0,0),(9,77,9,0,0),(10,91,10,0,0),(11,108,12,0,0),(12,101,13,0,0),(23,182,23,0,0),(24,183,24,0,0),(25,191,25,0,0),(26,203,26,0,0),(27,204,27,0,0),(28,205,28,0,0),(29,206,29,0,0);
/*!40000 ALTER TABLE `sys_dependencys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_dependencys_combos`
--

DROP TABLE IF EXISTS `sys_dependencys_combos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_dependencys_combos` (
  `dependency_combo_id` int(11) NOT NULL AUTO_INCREMENT,
  `name_table` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `alias_combo` varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `label` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `where` text COLLATE utf8mb4_unicode_ci,
  `status` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT 'alta',
  PRIMARY KEY (`dependency_combo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci PACK_KEYS=0;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_dependencys_combos`
--

LOCK TABLES `sys_dependencys_combos` WRITE;
/*!40000 ALTER TABLE `sys_dependencys_combos` DISABLE KEYS */;
INSERT INTO `sys_dependencys_combos` VALUES (1,'sys_elements','Combo elementos formularios','name_element','element_id','element_id <> 15 AND status = \'alta\'','alta'),(2,'sys_attributes','Combo atributos','name_attribute','attribute_id','','alta'),(3,'sys_elements','Combo elementos tablas','name_element','element_id','element_id <> 2 AND status = \'alta\'','alta'),(4,'sys_cat_tables','Combo tablas catalogos','alias_table','cat_table_id','type = \'operation\'','alta'),(5,'INFORMATION_SCHEMA.TABLES','Combo tablas del sistema','TABLE_NAME','TABLE_NAME','TABLE_SCHEMA = \'bd_gvs\' AND\r\nTABLE_NAME NOT LIKE  \'view%\'','alta'),(6,'type_catalog','Combo tipo catalogo','','','','alta'),(7,'sys_forms','Combo de formularios','name_form','forms_id','status = \'alta\'','alta'),(8,'sys_tables','Combo de tablas columnas','name_table','table_id','status = \'alta\'','alta'),(9,'INFORMATION_SCHEMA.TABLES','Combo vistas del sistema','TABLE_NAME','TABLE_NAME','TABLE_SCHEMA = \'bd_gvs\'','alta'),(10,'sys_menu','Combo menu del sistema','label','menu_id','submenu_id IS NULL','alta'),(12,'sys_cat_rol','Combo menu de roles','rol','id_rol','status = \'alta\'','alta'),(13,'sys_cat_deptos','Combo de deptos','depto','id_depto','status = \'alta\'','alta'),(23,'sys_elements','Combo elementos','name_element','element_id','element_id <> 2 AND status = \'alta\'','alta'),(24,'sys_attributes_columns','Combo atributos Columna','name_attribute_column','attribute_column_id','status = \'alta\'','alta'),(25,'sys_cat_rol','Combo Rol','rol','id_rol','status = \'alta\'','alta'),(26,'sys_combos_virtuales','Combo Size_tabla','label','value','alias_combo = \'Size\' AND status = \'alta\'','alta'),(27,'sys_combos_virtuales','Combo positionBottom_tabla','label','value','alias_combo = \'positionBottom\' AND status = \'alta\'','alta'),(28,'sys_combos_virtuales','Combo positionTop_tabla','label','value','alias_combo = \'positionTop\' AND status = \'alta\'','alta'),(29,'sys_combos_virtuales','Combo tableLayout_tabla','label','value','alias_combo = \'tableLayout\' AND status = \'alta\'','alta');
/*!40000 ALTER TABLE `sys_dependencys_combos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_elements`
--

DROP TABLE IF EXISTS `sys_elements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_elements` (
  `element_id` int(11) NOT NULL AUTO_INCREMENT,
  `name_element` varchar(50) DEFAULT NULL,
  `status` varchar(20) DEFAULT 'alta',
  PRIMARY KEY (`element_id`) USING BTREE,
  UNIQUE KEY `id` (`element_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_elements`
--

LOCK TABLES `sys_elements` WRITE;
/*!40000 ALTER TABLE `sys_elements` DISABLE KEYS */;
INSERT INTO `sys_elements` VALUES (1,'Input','alta'),(2,'InputPassword','alta'),(3,'InputNumber','alta'),(4,'InputTextArea','alta'),(5,'DatePicker','alta'),(6,'RangePicker','alta'),(7,'TimePicker','alta'),(8,'Select','alta'),(9,'Switch','alta'),(10,'Slider','alta'),(11,'RadioGroup','alta'),(12,'CheckboxGroup','alta'),(13,'Rate','alta'),(14,'Upload','alta'),(15,'Column','alta'),(16,'Column Action','alta'),(17,'Column Avatar','alta'),(18,'Column Icon','alta'),(19,'Column Rate','alta'),(20,'Column No','alta');
/*!40000 ALTER TABLE `sys_elements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_elements_attributes`
--

DROP TABLE IF EXISTS `sys_elements_attributes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_elements_attributes` (
  `sys_elements_attributes_id` int(11) NOT NULL AUTO_INCREMENT,
  `element_id` int(11) DEFAULT NULL,
  `attribute_id` int(11) DEFAULT NULL,
  `default` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT 'alta',
  PRIMARY KEY (`sys_elements_attributes_id`),
  UNIQUE KEY `sys_elements_attributes_id` (`sys_elements_attributes_id`)
) ENGINE=InnoDB AUTO_INCREMENT=114 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci PACK_KEYS=0;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_elements_attributes`
--

LOCK TABLES `sys_elements_attributes` WRITE;
/*!40000 ALTER TABLE `sys_elements_attributes` DISABLE KEYS */;
INSERT INTO `sys_elements_attributes` VALUES (1,1,1,NULL,'alta'),(2,1,2,NULL,'alta'),(3,1,3,NULL,'alta'),(4,1,4,'1','alta'),(5,1,5,NULL,'alta'),(6,1,6,'0','alta'),(7,1,7,NULL,'alta'),(8,1,8,NULL,'alta'),(9,1,9,NULL,'alta'),(10,1,10,'1','alta'),(11,8,1,NULL,'alta'),(12,8,2,NULL,'alta'),(13,8,3,NULL,'alta'),(14,8,4,NULL,'alta'),(15,8,5,NULL,'alta'),(16,8,6,NULL,'alta'),(17,8,7,NULL,'alta'),(18,8,8,NULL,'alta'),(19,8,9,NULL,'alta'),(20,8,10,NULL,'alta'),(21,8,11,NULL,'alta'),(22,8,12,NULL,'alta'),(23,8,13,NULL,'alta'),(24,9,1,NULL,'alta'),(25,9,2,NULL,'alta'),(26,9,3,NULL,'alta'),(27,9,4,'1','alta'),(28,9,5,NULL,'alta'),(29,9,6,'0','alta'),(30,9,7,NULL,'alta'),(31,9,8,NULL,'alta'),(32,9,9,NULL,'alta'),(33,9,10,'1','alta'),(34,3,1,NULL,'alta'),(35,3,2,NULL,'alta'),(36,3,3,NULL,'alta'),(37,3,4,'1','alta'),(38,3,5,NULL,'alta'),(39,3,6,'0','alta'),(40,3,7,NULL,'alta'),(41,3,8,NULL,'alta'),(42,3,9,NULL,'alta'),(43,3,10,'1','alta'),(44,3,14,NULL,'alta'),(45,3,15,'1','alta'),(46,9,16,'true','alta'),(47,9,17,'checked','alta'),(49,8,19,NULL,'alta'),(50,8,20,NULL,'alta'),(51,8,21,NULL,'alta'),(52,8,22,NULL,'alta'),(53,8,23,NULL,'alta'),(55,14,30,NULL,'alta'),(56,14,31,NULL,'alta'),(57,14,32,NULL,'alta'),(58,14,33,NULL,'alta'),(59,14,34,NULL,'alta'),(60,14,35,NULL,'alta'),(61,14,36,NULL,'alta'),(62,14,37,NULL,'alta'),(63,14,38,NULL,'alta'),(64,14,1,NULL,'alta'),(65,14,2,NULL,'alta'),(66,14,3,NULL,'alta'),(67,14,4,NULL,'alta'),(68,14,5,NULL,'alta'),(69,14,6,NULL,'alta'),(70,14,7,NULL,'alta'),(71,14,8,NULL,'alta'),(72,14,9,NULL,'alta'),(73,14,10,NULL,'alta'),(74,14,39,NULL,'alta'),(75,7,1,NULL,'alta'),(76,7,2,NULL,'alta'),(77,7,3,NULL,'alta'),(78,7,4,NULL,'alta'),(79,7,5,NULL,'alta'),(80,7,6,NULL,'alta'),(81,7,7,NULL,'alta'),(82,7,8,NULL,'alta'),(83,7,9,NULL,'alta'),(84,7,10,NULL,'alta'),(85,7,40,NULL,'alta'),(86,4,1,NULL,'alta'),(87,4,2,NULL,'alta'),(88,4,3,NULL,'alta'),(89,4,4,'','alta'),(90,4,5,NULL,'alta'),(91,4,6,NULL,'alta'),(92,4,7,NULL,'alta'),(93,4,8,NULL,'alta'),(94,4,9,NULL,'alta'),(95,4,10,NULL,'alta'),(96,4,41,NULL,'alta'),(97,4,42,NULL,'alta'),(98,13,1,NULL,'alta'),(99,13,2,NULL,'alta'),(100,13,3,NULL,'alta'),(101,13,4,NULL,'alta'),(102,13,5,NULL,'alta'),(104,13,6,NULL,'alta'),(105,13,7,NULL,'alta'),(106,13,8,NULL,'alta'),(107,13,9,NULL,'alta'),(108,13,10,NULL,'alta'),(109,13,43,'0','alta'),(110,3,44,'0.01','alta'),(111,3,45,'200','alta'),(113,3,47,'0','alta');
/*!40000 ALTER TABLE `sys_elements_attributes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_forms`
--

DROP TABLE IF EXISTS `sys_forms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_forms` (
  `forms_id` int(11) NOT NULL AUTO_INCREMENT,
  `name_form` varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `module` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `total_elements` int(11) DEFAULT NULL,
  `status` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT 'alta',
  `editable` int(11) DEFAULT '1',
  `created_at` timestamp(6) NULL DEFAULT NULL,
  `update_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`forms_id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci PACK_KEYS=0;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_forms`
--

LOCK TABLES `sys_forms` WRITE;
/*!40000 ALTER TABLE `sys_forms` DISABLE KEYS */;
INSERT INTO `sys_forms` VALUES (1,'Catalogo de elementos','Configuración',NULL,'alta',1,'2022-10-05 22:00:00.000000','2022-10-05 22:00:00.000000'),(2,'Catalogo atributos de elementos','Configuración',NULL,'alta',1,'2022-10-05 22:33:09.000000','2022-10-05 22:33:15.000000'),(3,'Catalogo de elemento vs atributos','Configuración',NULL,'alta',1,'2022-10-05 22:33:20.000000','2022-10-05 22:33:25.000000'),(4,'Fritter Forms','Configuración',NULL,'alta',1,'2022-10-05 23:38:35.000000','2022-10-05 23:38:39.000000'),(5,'Form Elementos','Configuración',NULL,'alta',1,NULL,'2023-02-02 21:31:58.000000'),(10,'Attributes','Configuración',NULL,'alta',1,NULL,'2023-02-02 21:31:58.000000'),(11,'Fritter Tables','Configuración',NULL,'alta',1,NULL,'2023-02-02 21:31:58.000000'),(12,'Tipo Columna','Configuración',NULL,'alta',1,NULL,'2023-02-02 21:31:58.000000'),(13,'Form Columnas','Configuración',NULL,'alta',1,NULL,'2023-02-02 21:31:58.000000'),(14,'Catalogos','Configuración',NULL,'alta',1,NULL,'2023-02-02 21:31:58.000000'),(15,'Catálogo general','Configuración',NULL,'alta',1,NULL,'2023-02-02 21:31:58.000000'),(17,'Catálogo de Menu','Configuración',NULL,'alta',1,NULL,'2023-02-02 21:31:58.000000'),(18,'Catálogo de Companias','Configuración',NULL,'alta',1,NULL,'2023-02-02 21:31:58.000000'),(19,'Catálogo de Roles','Configuración',NULL,'alta',1,NULL,'2023-02-02 21:31:58.000000'),(20,'Usuarios','Usuario',NULL,'alta',1,NULL,'2023-02-02 21:31:58.000000'),(31,'Atributos Columna','Configuración',NULL,'alta',1,NULL,'2023-02-02 21:31:58.000000'),(40,'Catalogo de columna vs atributos','Configuración',NULL,'alta',1,NULL,NULL),(41,'Combos Virtuales','Configuración',NULL,'alta',1,NULL,'2023-03-10 17:31:17.687296');
/*!40000 ALTER TABLE `sys_forms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_menu`
--

DROP TABLE IF EXISTS `sys_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_menu` (
  `menu_id` int(11) NOT NULL AUTO_INCREMENT,
  `key` varchar(30) DEFAULT NULL,
  `label` varchar(50) DEFAULT NULL,
  `icon` varchar(100) DEFAULT NULL,
  `submenu_id` int(11) DEFAULT NULL,
  `order` int(11) DEFAULT NULL,
  `status` varchar(20) DEFAULT 'alta',
  `menu_basic` char(2) DEFAULT 'no',
  PRIMARY KEY (`menu_id`) USING BTREE,
  UNIQUE KEY `id_menu` (`menu_id`) USING BTREE,
  KEY `submenu_id` (`submenu_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_menu`
--

LOCK TABLES `sys_menu` WRITE;
/*!40000 ALTER TABLE `sys_menu` DISABLE KEYS */;
INSERT INTO `sys_menu` VALUES (1,'Dashboard','Dashboard','ic:outline-developer-board',NULL,1,'alta','Si'),(2,'Configuracion','Configuracion','file-icons:config-react',NULL,3,'alta','no'),(3,'login','Salir','mdi:exit-run',NULL,4,'alta','Si'),(4,'Users','Usuario','fluent:people-settings-24-filled',NULL,2,'alta','no'),(5,'Configuracion/Forms','Forms','fluent:content-settings-24-filled',2,1,'alta','no'),(6,'Configuracion/Tables','Tables','fluent:table-settings-28-regular',2,2,'alta','no'),(7,'Configuracion/Catalogos','Catalogos','svg-spinners:blocks-scale',2,3,'alta','no');
/*!40000 ALTER TABLE `sys_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_permissions`
--

DROP TABLE IF EXISTS `sys_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_permissions` (
  `permission_id` int(11) NOT NULL AUTO_INCREMENT,
  `keycloak_id` varchar(60) DEFAULT NULL,
  `menu_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`permission_id`) USING BTREE,
  UNIQUE KEY `id_permimso` (`permission_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_permissions`
--

LOCK TABLES `sys_permissions` WRITE;
/*!40000 ALTER TABLE `sys_permissions` DISABLE KEYS */;
INSERT INTO `sys_permissions` VALUES (1,'15bebb07-5369-4373-b4d9-689bcbac9174',1,1,'2022-11-30 21:30:47','2022-11-30 21:30:47'),(3,'15bebb07-5369-4373-b4d9-689bcbac9174',3,1,'2022-11-30 21:30:47','2022-11-30 21:30:47'),(5,'15bebb07-5369-4373-b4d9-689bcbac9174',5,1,'2022-11-30 21:30:47','2022-11-30 21:30:47'),(6,'15bebb07-5369-4373-b4d9-689bcbac9174',6,1,'2022-11-30 21:30:47','2022-11-30 21:30:47'),(21,'15bebb07-5369-4373-b4d9-689bcbac9174',2,1,'2022-11-30 21:30:47','2022-11-30 21:30:47'),(22,'15bebb07-5369-4373-b4d9-689bcbac9174',4,1,'2022-11-30 21:30:48','2022-11-30 21:30:48'),(30,'15bebb07-5369-4373-b4d9-689bcbac9174',7,1,'2023-03-09 19:29:06','2023-03-09 19:29:06'),(31,'df94b7fe-ea13-4943-bdca-2e2be75f8417',1,6,'2023-03-10 16:37:10','2023-03-10 16:37:10'),(32,'df94b7fe-ea13-4943-bdca-2e2be75f8417',4,6,'2023-03-10 16:37:11','2023-03-10 16:37:11'),(33,'df94b7fe-ea13-4943-bdca-2e2be75f8417',2,6,'2023-03-10 16:37:12','2023-03-10 16:37:12'),(34,'df94b7fe-ea13-4943-bdca-2e2be75f8417',3,6,'2023-03-10 16:37:12','2023-03-10 16:37:12'),(35,'df94b7fe-ea13-4943-bdca-2e2be75f8417',5,6,'2023-03-10 16:37:13','2023-03-10 16:37:13'),(36,'df94b7fe-ea13-4943-bdca-2e2be75f8417',6,6,'2023-03-10 16:37:14','2023-03-10 16:37:14'),(37,'df94b7fe-ea13-4943-bdca-2e2be75f8417',7,6,'2023-03-10 16:37:15','2023-03-10 16:37:15'),(38,'0989da2f-1672-4956-8836-058479b3ba08',1,8,'2023-03-10 16:37:23','2023-03-10 16:37:23'),(39,'0989da2f-1672-4956-8836-058479b3ba08',4,8,'2023-03-10 16:37:23','2023-03-10 16:37:23'),(40,'0989da2f-1672-4956-8836-058479b3ba08',2,8,'2023-03-10 16:37:24','2023-03-10 16:37:24'),(41,'0989da2f-1672-4956-8836-058479b3ba08',3,8,'2023-03-10 16:37:24','2023-03-10 16:37:24'),(42,'0989da2f-1672-4956-8836-058479b3ba08',5,8,'2023-03-10 16:37:25','2023-03-10 16:37:25'),(43,'0989da2f-1672-4956-8836-058479b3ba08',6,8,'2023-03-10 16:37:25','2023-03-10 16:37:25'),(44,'0989da2f-1672-4956-8836-058479b3ba08',7,8,'2023-03-10 16:37:26','2023-03-10 16:37:26'),(45,'b7919700-ed03-4832-823a-23c9f61309be',1,7,'2023-03-10 16:37:40','2023-03-10 16:37:40'),(46,'b7919700-ed03-4832-823a-23c9f61309be',4,7,'2023-03-10 16:37:40','2023-03-10 16:37:40'),(47,'b7919700-ed03-4832-823a-23c9f61309be',2,7,'2023-03-10 16:37:40','2023-03-10 16:37:40'),(48,'b7919700-ed03-4832-823a-23c9f61309be',3,7,'2023-03-10 16:37:41','2023-03-10 16:37:41'),(49,'b7919700-ed03-4832-823a-23c9f61309be',5,7,'2023-03-10 16:37:41','2023-03-10 16:37:41'),(50,'b7919700-ed03-4832-823a-23c9f61309be',6,7,'2023-03-10 16:37:41','2023-03-10 16:37:41'),(51,'b7919700-ed03-4832-823a-23c9f61309be',7,7,'2023-03-10 16:37:42','2023-03-10 16:37:42'),(52,'fe7e295e-3e91-44ed-a949-0022fee59f58',1,9,'2023-03-10 16:37:48','2023-03-10 16:37:48'),(53,'fe7e295e-3e91-44ed-a949-0022fee59f58',4,9,'2023-03-10 16:37:48','2023-03-10 16:37:48'),(54,'fe7e295e-3e91-44ed-a949-0022fee59f58',2,9,'2023-03-10 16:37:48','2023-03-10 16:37:48'),(55,'fe7e295e-3e91-44ed-a949-0022fee59f58',3,9,'2023-03-10 16:37:49','2023-03-10 16:37:49'),(56,'fe7e295e-3e91-44ed-a949-0022fee59f58',5,9,'2023-03-10 16:37:49','2023-03-10 16:37:49'),(57,'fe7e295e-3e91-44ed-a949-0022fee59f58',6,9,'2023-03-10 16:37:49','2023-03-10 16:37:49'),(58,'fe7e295e-3e91-44ed-a949-0022fee59f58',7,9,'2023-03-10 16:37:50','2023-03-10 16:37:50');
/*!40000 ALTER TABLE `sys_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_props_table`
--

DROP TABLE IF EXISTS `sys_props_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_props_table` (
  `props_table_id` int(11) NOT NULL AUTO_INCREMENT,
  `table_id` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cat_props_table_id` int(11) DEFAULT NULL,
  `value` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`props_table_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=391 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_props_table`
--

LOCK TABLES `sys_props_table` WRITE;
/*!40000 ALTER TABLE `sys_props_table` DISABLE KEYS */;
INSERT INTO `sys_props_table` VALUES (1,'2',1,''),(2,'2',2,'5'),(3,'2',3,''),(4,'2',4,'none'),(5,'2',5,'none'),(6,'2',6,'Creacion de formularios'),(7,'2',7,'small'),(8,'2',8,'1'),(9,'2',9,'true'),(10,'2',10,'false'),(11,'2',11,'skill-icons:react-dark'),(12,'2',12,'fixed'),(13,'3',1,''),(14,'3',2,'5'),(15,'3',3,''),(16,'3',4,'none'),(17,'3',5,'none'),(18,'3',6,'Fritter Dynamic God Forms'),(19,'3',7,'small'),(20,'3',8,'1'),(21,'3',9,'true'),(22,'3',10,'auto'),(23,'3',11,'skill-icons:react-dark'),(24,'3',12,'fixed'),(25,'4',1,'false'),(27,'4',3,''),(28,'4',4,'none'),(30,'4',6,'Tablas de sistema'),(31,'4',7,'small'),(32,'4',8,'1'),(35,'4',11,'skill-icons:react-dark'),(36,'4',12,'fixed'),(61,'8',11,'IconAvatar3'),(62,'8',6,'Title3'),(63,'8',8,'1'),(64,'8',2,'20'),(65,'8',1,''),(66,'8',4,'none'),(67,'8',5,'positionTop2'),(68,'8',9,'100'),(69,'8',10,'10'),(70,'8',3,''),(71,'8',7,'small'),(72,'8',12,'fixed'),(73,'9',11,'skill-icons:react-dark'),(74,'9',6,'Catálogo de elementos'),(75,'9',8,'1'),(76,'9',2,'5'),(77,'9',1,''),(78,'9',4,'none'),(79,'9',5,''),(80,'9',9,''),(81,'9',10,''),(82,'9',3,''),(83,'9',7,'small'),(84,'9',12,'fixed'),(85,'10',11,'skill-icons:react-dark'),(86,'10',6,'Catálogo de atributos de elementos'),(87,'10',8,'1'),(88,'10',2,'5'),(89,'10',1,''),(90,'10',4,'none'),(91,'10',5,''),(92,'10',9,''),(93,'10',10,''),(94,'10',3,''),(95,'10',7,'small'),(96,'10',12,'fixed'),(97,'11',11,'svg-spinners:blocks-scale'),(98,'11',6,'Catálogo General'),(99,'11',8,'1'),(100,'11',2,'5'),(101,'11',1,''),(102,'11',3,''),(103,'11',7,'small'),(104,'11',12,'fixed'),(105,'11',4,'none'),(106,'11',5,''),(107,'11',9,''),(108,'11',10,''),(109,'12',11,'skill-icons:react-dark'),(110,'12',6,'Catalogo de  elementos vs atributos'),(111,'12',8,'1'),(112,'12',2,'1'),(113,'12',1,''),(114,'12',4,'none'),(115,'12',5,'positionTop'),(116,'12',9,'100'),(117,'12',10,'100'),(118,'12',3,''),(119,'12',7,'small'),(120,'12',12,'fixed'),(121,'5',11,'skill-icons:react-dark'),(122,'5',6,'Agregar Columnas'),(123,'5',8,'1'),(125,'5',1,''),(126,'5',4,'none'),(127,'5',3,''),(128,'5',7,'small'),(129,'5',12,'fixed'),(130,'5',13,NULL),(142,'4',13,'false'),(143,'3',13,NULL),(243,'26',11,'skill-icons:react-dark'),(244,'26',6,'Atributos Columna'),(245,'26',8,'1'),(246,'26',2,'100'),(247,'26',1,''),(248,'26',3,''),(249,'26',7,'small'),(250,'26',12,'fixed'),(251,'26',13,NULL),(270,'11',13,NULL),(271,'16',11,'mdi:user-group'),(272,'16',6,'Usuarios'),(273,'16',8,'1'),(274,'16',2,'7'),(275,'16',1,''),(276,'16',3,''),(277,'16',7,'small'),(278,'16',12,'fixed'),(279,'16',13,NULL),(280,'16',4,'none'),(281,'16',5,'none'),(300,'16',9,''),(301,'16',10,'380px'),(302,'13',11,'bi:menu-button-wide-fill'),(303,'13',6,'Menu'),(304,'13',8,'1'),(305,'13',2,'1'),(306,'13',1,''),(307,'13',3,''),(308,'13',7,'small'),(309,'13',12,'fixed'),(310,'13',13,NULL),(320,'2',13,NULL),(330,'1',11,'skill-icons:react-dark'),(331,'1',6,'Agregar Atributos'),(332,'1',8,'1'),(334,'1',1,''),(335,'1',3,''),(336,'1',7,'small'),(337,'1',12,'fixed'),(338,'1',13,NULL),(348,'9',13,NULL),(349,'34',11,'skill-icons:react-dark'),(350,'34',6,'Catalogo de  columna vs atributos'),(351,'34',8,'1'),(352,'34',2,'10'),(353,'34',1,''),(354,'34',3,''),(355,'34',7,'small'),(356,'34',12,'fixed'),(357,'34',13,NULL),(358,'10',13,NULL),(359,'35',6,'Combos Virtuales'),(360,'35',11,'skill-icons:react-dark'),(361,'35',8,'1'),(362,'35',1,''),(363,'35',3,''),(364,'35',7,'small'),(365,'35',12,'fixed'),(366,'35',13,NULL),(370,'1',4,'none'),(372,'35',4,'none'),(373,'14',6,'Compañias'),(374,'14',11,'skill-icons:react-dark'),(375,'14',8,'1'),(376,'14',1,''),(377,'14',4,'none'),(378,'14',5,'none'),(379,'14',3,''),(380,'14',7,'small'),(381,'14',12,'fixed'),(382,'14',13,NULL),(383,'15',6,'Roles'),(384,'15',11,'skill-icons:react-dark'),(385,'15',8,'1'),(386,'15',1,''),(387,'15',3,''),(388,'15',7,'small'),(389,'15',13,NULL),(390,'12',13,NULL);
/*!40000 ALTER TABLE `sys_props_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_tables`
--

DROP TABLE IF EXISTS `sys_tables`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_tables` (
  `table_id` int(11) NOT NULL AUTO_INCREMENT,
  `name_table` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `module` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT 'alta' COMMENT 'alta',
  `editable` tinyint(1) DEFAULT '1',
  `created_at` timestamp(6) NULL DEFAULT NULL,
  `update_at` timestamp(6) NULL DEFAULT NULL,
  PRIMARY KEY (`table_id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci PACK_KEYS=0;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_tables`
--

LOCK TABLES `sys_tables` WRITE;
/*!40000 ALTER TABLE `sys_tables` DISABLE KEYS */;
INSERT INTO `sys_tables` VALUES (1,'Agregar Atributos','System','alta',1,'2022-10-06 15:44:07.000000','2022-10-06 15:44:12.000000'),(2,'Agregar Forms','System','alta',1,NULL,NULL),(3,'Agregar Elementos','System','alta',1,NULL,NULL),(4,'Tablas de sistema','System','alta',1,NULL,NULL),(5,'Agregar Columnas','System','alta',1,NULL,NULL),(9,'Catalogo de elementos','System','alta',1,NULL,NULL),(10,'Catalogo de atributos de elementos','System','alta',1,NULL,NULL),(11,'Catalogo General','System','alta',1,NULL,NULL),(12,'Catalogo de  elementos vs atributos','System','alta',1,NULL,NULL),(13,'Menu','System','alta',1,NULL,NULL),(14,'Compañias','Configuración','alta',1,NULL,NULL),(15,'Roles','Configuración','alta',1,NULL,NULL),(16,'Usuarios','Configuración','alta',1,NULL,NULL),(26,'Atributos Columna','System','alta',1,NULL,NULL),(34,'Catalogo de  columna vs atributos','System','alta',1,NULL,NULL),(35,'Combos Virtuales','System','alta',1,NULL,NULL);
/*!40000 ALTER TABLE `sys_tables` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_users`
--

DROP TABLE IF EXISTS `sys_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_users` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `id_keycloak` varchar(60) NOT NULL,
  `preferred_username` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `given_name` varchar(100) DEFAULT NULL,
  `family_name` varchar(100) DEFAULT NULL,
  `name` varchar(150) DEFAULT NULL,
  `status` char(4) DEFAULT 'ALTA',
  `id_company` int(11) DEFAULT NULL,
  `id_rol` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_user`) USING BTREE,
  UNIQUE KEY `id_user` (`id_user`) USING BTREE,
  UNIQUE KEY `id_keycloak` (`id_keycloak`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_users`
--

LOCK TABLES `sys_users` WRITE;
/*!40000 ALTER TABLE `sys_users` DISABLE KEYS */;
INSERT INTO `sys_users` VALUES (1,'15bebb07-5369-4373-b4d9-689bcbac9174','jrpavon','jrpavon@cesvimexico.com.mx','Jose Roberto ','Pavone','Jose Roberto Pavon Campos','ALTA',1,3,'2022-08-30 15:13:16','2023-03-10 16:35:30'),(6,'df94b7fe-ea13-4943-bdca-2e2be75f8417','gvega','gvega@cesvimexico.com.mx','Gilberto','Vega','Gilberto Vega','ALTA',1,3,'2023-03-10 16:32:02','2023-03-10 16:32:32'),(7,'b7919700-ed03-4832-823a-23c9f61309be','jaragon','jaragon@cesvimexico.com.mx','Juan Jesus','Aragon Alva','Juan Jesus Aragon Alva','ALTA',1,2,'2023-03-10 16:33:51','2023-03-10 16:33:51'),(8,'0989da2f-1672-4956-8836-058479b3ba08','jvicencio','jvicencio@cesvimexico.com.mx','jvicenJJaimeaimecio','Vicencio','Jaime Vicencio','ALTA',1,3,'2023-03-10 16:34:45','2023-03-10 16:34:52'),(9,'fe7e295e-3e91-44ed-a949-0022fee59f58','rperez','rperez@cesvimexico.com.mx','Ricardo','Perez Avila','Ricardo Perez Avila','ALTA',1,3,'2023-03-10 16:36:47','2023-03-10 16:36:47');
/*!40000 ALTER TABLE `sys_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `view_column_data`
--

DROP TABLE IF EXISTS `view_column_data`;
/*!50001 DROP VIEW IF EXISTS `view_column_data`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `view_column_data` (
  `data_table_id` tinyint NOT NULL,
  `name_table` tinyint NOT NULL,
  `component_no` tinyint NOT NULL,
  `name_element` tinyint NOT NULL,
  `name_attribute_column` tinyint NOT NULL,
  `value` tinyint NOT NULL,
  `type` tinyint NOT NULL,
  `module` tinyint NOT NULL,
  `order` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `view_form_data`
--

DROP TABLE IF EXISTS `view_form_data`;
/*!50001 DROP VIEW IF EXISTS `view_form_data`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `view_form_data` (
  `data_form_id` tinyint NOT NULL,
  `name_form` tinyint NOT NULL,
  `component_no` tinyint NOT NULL,
  `name_element` tinyint NOT NULL,
  `name_attribute` tinyint NOT NULL,
  `value` tinyint NOT NULL,
  `order` tinyint NOT NULL,
  `dependency` tinyint NOT NULL,
  `type` tinyint NOT NULL,
  `module` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `view_sys_cat_menu`
--

DROP TABLE IF EXISTS `view_sys_cat_menu`;
/*!50001 DROP VIEW IF EXISTS `view_sys_cat_menu`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `view_sys_cat_menu` (
  `menu_id` tinyint NOT NULL,
  `key` tinyint NOT NULL,
  `label` tinyint NOT NULL,
  `icon` tinyint NOT NULL,
  `submenu_id` tinyint NOT NULL,
  `order` tinyint NOT NULL,
  `submenu` tinyint NOT NULL,
  `menu_basic` tinyint NOT NULL,
  `status` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `view_sys_columns_attributes`
--

DROP TABLE IF EXISTS `view_sys_columns_attributes`;
/*!50001 DROP VIEW IF EXISTS `view_sys_columns_attributes`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `view_sys_columns_attributes` (
  `sys_columns_props_id` tinyint NOT NULL,
  `element_id` tinyint NOT NULL,
  `name_element` tinyint NOT NULL,
  `attribute_column_id` tinyint NOT NULL,
  `name_attribute_column` tinyint NOT NULL,
  `help_descrption` tinyint NOT NULL,
  `default` tinyint NOT NULL,
  `status` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `view_sys_elements_attributes`
--

DROP TABLE IF EXISTS `view_sys_elements_attributes`;
/*!50001 DROP VIEW IF EXISTS `view_sys_elements_attributes`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `view_sys_elements_attributes` (
  `sys_elements_attributes_id` tinyint NOT NULL,
  `element_id` tinyint NOT NULL,
  `attribute_id` tinyint NOT NULL,
  `default` tinyint NOT NULL,
  `name_element` tinyint NOT NULL,
  `name_attribute` tinyint NOT NULL,
  `help_description` tinyint NOT NULL,
  `status` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `view_sys_menu`
--

DROP TABLE IF EXISTS `view_sys_menu`;
/*!50001 DROP VIEW IF EXISTS `view_sys_menu`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `view_sys_menu` (
  `menu_id` tinyint NOT NULL,
  `key` tinyint NOT NULL,
  `label` tinyint NOT NULL,
  `icon` tinyint NOT NULL,
  `submenu_id` tinyint NOT NULL,
  `order` tinyint NOT NULL,
  `keycloak_id` tinyint NOT NULL,
  `submenu` tinyint NOT NULL,
  `menu_basic` tinyint NOT NULL,
  `status` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `view_users_data`
--

DROP TABLE IF EXISTS `view_users_data`;
/*!50001 DROP VIEW IF EXISTS `view_users_data`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `view_users_data` (
  `id_user` tinyint NOT NULL,
  `id_keycloak` tinyint NOT NULL,
  `preferred_username` tinyint NOT NULL,
  `name_avatar` tinyint NOT NULL,
  `given_name` tinyint NOT NULL,
  `family_name` tinyint NOT NULL,
  `created_at` tinyint NOT NULL,
  `updated_at` tinyint NOT NULL,
  `name` tinyint NOT NULL,
  `email` tinyint NOT NULL,
  `status` tinyint NOT NULL,
  `rol` tinyint NOT NULL,
  `id_rol` tinyint NOT NULL,
  `company` tinyint NOT NULL,
  `id_company` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Current Database: `bd_gvs`
--

USE `bd_gvs`;

--
-- Final view structure for view `view_column_data`
--

/*!50001 DROP TABLE IF EXISTS `view_column_data`*/;
/*!50001 DROP VIEW IF EXISTS `view_column_data`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = latin1 */;
/*!50001 SET character_set_results     = latin1 */;
/*!50001 SET collation_connection      = latin1_swedish_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`umngrc`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `view_column_data` AS select `sys_data_tables`.`data_table_id` AS `data_table_id`,`sys_tables`.`name_table` AS `name_table`,`sys_data_tables`.`component_no` AS `component_no`,`sys_elements`.`name_element` AS `name_element`,`sys_attributes_columns`.`name_attribute_column` AS `name_attribute_column`,`sys_components`.`value` AS `value`,`sys_components`.`type` AS `type`,`sys_tables`.`module` AS `module`,`sys_data_tables`.`order` AS `order` from ((((`sys_components` join `sys_elements` on((`sys_elements`.`element_id` = `sys_components`.`element_id`))) join `sys_attributes_columns` on((`sys_components`.`attribute_id` = `sys_attributes_columns`.`attribute_column_id`))) join `sys_data_tables` on((`sys_data_tables`.`component_no` = `sys_components`.`component_no`))) join `sys_tables` on((`sys_tables`.`table_id` = `sys_data_tables`.`table_id`))) where (`sys_components`.`type` = 'column') order by `sys_tables`.`name_table`,`sys_data_tables`.`order` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_form_data`
--

/*!50001 DROP TABLE IF EXISTS `view_form_data`*/;
/*!50001 DROP VIEW IF EXISTS `view_form_data`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = latin1 */;
/*!50001 SET character_set_results     = latin1 */;
/*!50001 SET collation_connection      = latin1_swedish_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`umngrc`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `view_form_data` AS select `sys_data_forms`.`data_form_id` AS `data_form_id`,`sys_forms`.`name_form` AS `name_form`,`sys_data_forms`.`component_no` AS `component_no`,`sys_elements`.`name_element` AS `name_element`,`sys_attributes`.`name_attribute` AS `name_attribute`,`sys_components`.`value` AS `value`,`sys_data_forms`.`order` AS `order`,`sys_data_forms`.`dependency` AS `dependency`,`sys_components`.`type` AS `type`,`sys_forms`.`module` AS `module` from ((((`sys_forms` join `sys_data_forms` on((`sys_forms`.`forms_id` = `sys_data_forms`.`form_id`))) join `sys_components` on((`sys_data_forms`.`component_no` = `sys_components`.`component_no`))) join `sys_elements` on((`sys_elements`.`element_id` = `sys_components`.`element_id`))) join `sys_attributes` on((`sys_components`.`attribute_id` = `sys_attributes`.`attribute_id`))) where (`sys_components`.`type` = 'form') order by `sys_forms`.`name_form`,`sys_data_forms`.`order` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_sys_cat_menu`
--

/*!50001 DROP TABLE IF EXISTS `view_sys_cat_menu`*/;
/*!50001 DROP VIEW IF EXISTS `view_sys_cat_menu`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`umngrc`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `view_sys_cat_menu` AS select `sys_menu`.`menu_id` AS `menu_id`,`sys_menu`.`key` AS `key`,`sys_menu`.`label` AS `label`,`sys_menu`.`icon` AS `icon`,`sys_menu`.`submenu_id` AS `submenu_id`,`sys_menu`.`order` AS `order`,`submenu`.`label` AS `submenu`,`sys_menu`.`menu_basic` AS `menu_basic`,`sys_menu`.`status` AS `status` from (`sys_menu` left join `sys_menu` `submenu` on((`sys_menu`.`submenu_id` = `submenu`.`menu_id`))) where (`sys_menu`.`status` = 'alta') group by `sys_menu`.`menu_id` order by `sys_menu`.`submenu_id`,`sys_menu`.`order` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_sys_columns_attributes`
--

/*!50001 DROP TABLE IF EXISTS `view_sys_columns_attributes`*/;
/*!50001 DROP VIEW IF EXISTS `view_sys_columns_attributes`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`umngrc`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `view_sys_columns_attributes` AS select `sys_columns_attributes`.`sys_columns_props_id` AS `sys_columns_props_id`,`sys_columns_attributes`.`element_id` AS `element_id`,`sys_elements`.`name_element` AS `name_element`,`sys_columns_attributes`.`attribute_column_id` AS `attribute_column_id`,`sys_attributes_columns`.`name_attribute_column` AS `name_attribute_column`,`sys_attributes_columns`.`help_descrption` AS `help_descrption`,`sys_columns_attributes`.`default` AS `default`,`sys_columns_attributes`.`status` AS `status` from ((`sys_columns_attributes` join `sys_elements` on((`sys_columns_attributes`.`element_id` = `sys_elements`.`element_id`))) join `sys_attributes_columns` on((`sys_columns_attributes`.`attribute_column_id` = `sys_attributes_columns`.`attribute_column_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_sys_elements_attributes`
--

/*!50001 DROP TABLE IF EXISTS `view_sys_elements_attributes`*/;
/*!50001 DROP VIEW IF EXISTS `view_sys_elements_attributes`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`umngrc`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `view_sys_elements_attributes` AS select `sys_elements_attributes`.`sys_elements_attributes_id` AS `sys_elements_attributes_id`,`sys_elements_attributes`.`element_id` AS `element_id`,`sys_elements_attributes`.`attribute_id` AS `attribute_id`,`sys_elements_attributes`.`default` AS `default`,`sys_elements`.`name_element` AS `name_element`,`sys_attributes`.`name_attribute` AS `name_attribute`,`sys_attributes`.`help_description` AS `help_description`,`sys_elements_attributes`.`status` AS `status` from ((`sys_elements_attributes` join `sys_elements` on((`sys_elements_attributes`.`element_id` = `sys_elements`.`element_id`))) join `sys_attributes` on((`sys_elements_attributes`.`attribute_id` = `sys_attributes`.`attribute_id`))) where (`sys_elements_attributes`.`status` = 'alta') */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_sys_menu`
--

/*!50001 DROP TABLE IF EXISTS `view_sys_menu`*/;
/*!50001 DROP VIEW IF EXISTS `view_sys_menu`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`umngrc`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `view_sys_menu` AS select `sys_menu`.`menu_id` AS `menu_id`,`sys_menu`.`key` AS `key`,`sys_menu`.`label` AS `label`,`sys_menu`.`icon` AS `icon`,`sys_menu`.`submenu_id` AS `submenu_id`,`sys_menu`.`order` AS `order`,`sys_permissions`.`keycloak_id` AS `keycloak_id`,`submenu`.`label` AS `submenu`,`sys_menu`.`menu_basic` AS `menu_basic`,`sys_menu`.`status` AS `status` from ((`sys_permissions` join `sys_menu` on((`sys_permissions`.`menu_id` = `sys_menu`.`menu_id`))) left join `sys_menu` `submenu` on((`sys_menu`.`submenu_id` = `submenu`.`menu_id`))) where (`sys_menu`.`status` = 'alta') order by `sys_menu`.`order` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_users_data`
--

/*!50001 DROP TABLE IF EXISTS `view_users_data`*/;
/*!50001 DROP VIEW IF EXISTS `view_users_data`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`umngrc`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `view_users_data` AS select `sys_users`.`id_user` AS `id_user`,`sys_users`.`id_keycloak` AS `id_keycloak`,`sys_users`.`preferred_username` AS `preferred_username`,ucase(left(substr(`sys_users`.`preferred_username`,1,2),2)) AS `name_avatar`,`sys_users`.`given_name` AS `given_name`,`sys_users`.`family_name` AS `family_name`,`sys_users`.`created_at` AS `created_at`,`sys_users`.`updated_at` AS `updated_at`,`sys_users`.`name` AS `name`,lcase(`sys_users`.`email`) AS `email`,`sys_users`.`status` AS `status`,`sys_cat_rol`.`rol` AS `rol`,`sys_cat_rol`.`id_rol` AS `id_rol`,`sys_cat_companys`.`company` AS `company`,`sys_cat_companys`.`id_company` AS `id_company` from ((`sys_users` left join `sys_cat_rol` on((`sys_users`.`id_rol` = `sys_cat_rol`.`id_rol`))) left join `sys_cat_companys` on((`sys_users`.`id_company` = `sys_cat_companys`.`id_company`))) order by `sys_users`.`name` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-13  8:43:55
