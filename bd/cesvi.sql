-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: appweb.cesvimexico.com.mx    Database: cesvi
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
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_attributes`
--

LOCK TABLES `sys_attributes` WRITE;
/*!40000 ALTER TABLE `sys_attributes` DISABLE KEYS */;
INSERT INTO `sys_attributes` VALUES (1,'label','Texto de etiqueta del elemento','alta'),(2,'name','Nombre del campo para el elemento','alta'),(3,'placeholder','Texto provisional o de marcado del elemento','alta'),(4,'rulesRequired','Reglas requeridas','alta'),(5,'rulesMessage','Mensaje cuando no se cumple la regla','alta'),(6,'rulestype','Tipo de regla','alta'),(7,'rulestypemessage','Mensaje cuando no se cumple el valor en ela regla','alta'),(8,'tooltip','Mensaje adicional que funciona al situar el cursor sobre algún elemento gráfico','alta'),(9,'extra',NULL,'alta'),(10,'hasFeedback','Muestra el icono cuando el elemento cumple con las reglas ','alta'),(11,'showSearch',NULL,'alta'),(12,'allowClear','Muestra el icono para limpiar el elemento','alta'),(13,'mode',NULL,'alta'),(14,'max','Máximo','alta'),(15,'min','Mínimo','alta'),(16,'initialValue',NULL,'alta'),(17,'valuePropName',NULL,'alta'),(18,'CHURRITO','HELP CHURRITO','baja'),(19,'name_table_option','Nombre de la tabla donde se va llenar el combo','alta'),(20,'label_option','Campo de etiqueta del listado a mostrar','alta'),(21,'value_option','campo de el valor a mostrar en el listado','alta'),(22,'where_option','condición para la consulta de la lista  ','alta'),(23,'alias_combo_option',NULL,'alta'),(24,'children',NULL,'alta');
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
  PRIMARY KEY (`attribute_column_id`) USING BTREE,
  UNIQUE KEY `id_columns` (`attribute_column_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_attributes_columns`
--

LOCK TABLES `sys_attributes_columns` WRITE;
/*!40000 ALTER TABLE `sys_attributes_columns` DISABLE KEYS */;
INSERT INTO `sys_attributes_columns` VALUES (1,'title',NULL),(2,'dataIndex',NULL),(3,'key',NULL),(4,'tipoMoneda',NULL),(5,'tipoMiles',NULL),(6,'tipoFecha',NULL),(7,'tipoFechaTime',NULL),(8,'orderNumber',NULL),(9,'orderString',NULL),(10,'orderDouble',NULL),(11,'orderDate',NULL),(12,'busqueda',NULL),(13,'filterSearch',NULL),(14,'filter',NULL),(15,'ellipsis',NULL),(16,'badge100',NULL),(17,'actions',NULL),(18,'width',NULL),(19,'titleMSG',NULL),(20,'icon',NULL),(21,'datePicker',NULL),(22,'placeholder',NULL),(23,'format',NULL),(24,'showTime',NULL),(25,'Input',NULL),(26,'textArea',NULL),(27,'height',NULL),(28,'Select',NULL),(29,'arrayOption',NULL),(30,'upload',NULL),(31,'titleMSGC',NULL),(32,'titleMSGD',NULL),(33,'iconC',NULL),(34,'iconD',NULL),(35,'tipoFile',NULL),(36,'multipleFile',NULL),(37,'listType',NULL),(38,'align',NULL),(39,'fixed',NULL),(40,'responsive',NULL),(41,'titleIMG',NULL),(42,'suffixTitle',NULL);
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
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
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
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci PACK_KEYS=0;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_cat_tables`
--

LOCK TABLES `sys_cat_tables` WRITE;
/*!40000 ALTER TABLE `sys_cat_tables` DISABLE KEYS */;
INSERT INTO `sys_cat_tables` VALUES (1,'sys_elements','NA','Catálogo de elementos','element_id','system',1,9,'alta'),(2,'sys_attributes','NA','Catálogo de atributos de elementos','attribute_id','system',2,10,'alta'),(3,'sys_cat_tables','NA','Catálogo General','cat_table_id','operation',15,11,'alta'),(4,'sys_elements_attributes','view_sys_elements_attributes','Elementos vs Atributos','sys_elements_attributes_id','system',3,12,'alta'),(5,'sys_menu','view_sys_menu','Menu','menu_id','operation',17,13,'alta'),(6,'sys_cat_companys','NA','Catalogo de companias','id_compay','operation',18,14,'alta'),(7,'sys_cat_rol','NA','Catalogo de roles','id_rol','operation',19,15,'alta');
/*!40000 ALTER TABLE `sys_cat_tables` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sys_columns_attributes`
--

DROP TABLE IF EXISTS `sys_columns_attributes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_columns_attributes` (
  `sys_columns_props_id` int(11) NOT NULL,
  `element_id` int(11) DEFAULT NULL,
  `attribute_column_id` int(11) DEFAULT NULL,
  `default` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`sys_columns_props_id`),
  KEY `element_id` (`element_id`),
  KEY `attribute_column_id` (`attribute_column_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci PACK_KEYS=0;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_columns_attributes`
--

LOCK TABLES `sys_columns_attributes` WRITE;
/*!40000 ALTER TABLE `sys_columns_attributes` DISABLE KEYS */;
INSERT INTO `sys_columns_attributes` VALUES (1,15,1,NULL),(2,15,2,NULL),(3,15,3,NULL),(4,15,4,'$'),(5,15,5,NULL),(6,15,6,NULL),(7,15,7,NULL),(8,15,8,NULL),(9,15,9,NULL),(10,15,10,NULL),(11,15,11,NULL),(12,15,12,NULL),(13,15,13,NULL),(14,15,15,NULL),(15,15,16,NULL);
/*!40000 ALTER TABLE `sys_columns_attributes` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=1067 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_components`
--

LOCK TABLES `sys_components` WRITE;
/*!40000 ALTER TABLE `sys_components` DISABLE KEYS */;
INSERT INTO `sys_components` VALUES (1,1,1,1,'Elemento','form'),(2,1,1,2,'name_element','form'),(3,1,1,3,'Elemento','form'),(4,1,1,4,'1','form'),(5,1,1,5,'Elemento','form'),(6,1,1,6,'0','form'),(7,1,1,7,'Elemento','form'),(10,1,1,10,'1','form'),(11,2,1,1,'Atributo','form'),(12,2,1,2,'name_attribute','form'),(13,2,1,3,'Atributo','form'),(14,2,1,4,'1','form'),(15,2,1,5,'Atributo','form'),(16,2,1,6,'0','form'),(17,2,1,7,'Atributo','form'),(18,2,1,10,'1','form'),(19,3,8,1,'Elemento','form'),(20,3,8,2,'element_id','form'),(21,3,8,3,'Selecciona Elemento','form'),(22,3,8,4,'1','form'),(23,3,8,5,'Elemento','form'),(24,3,8,6,'0','form'),(25,3,8,7,'Elemento','form'),(26,3,8,10,'1','form'),(27,3,8,11,'1','form'),(28,3,8,12,'1','form'),(29,3,8,13,NULL,'form'),(30,4,8,1,'Atributo','form'),(31,4,8,2,'attribute_id','form'),(32,4,8,3,'Selecciona Atributo','form'),(33,4,8,4,'1','form'),(34,4,8,5,'Atributo','form'),(35,4,8,6,'0','form'),(36,4,8,7,'Atributo','form'),(37,4,8,10,'1','form'),(38,4,8,11,'1','form'),(39,4,8,12,'1','form'),(40,4,8,13,'','form'),(41,5,1,1,'Nombre Formulario','form'),(42,5,1,2,'name_form','form'),(43,5,1,3,'Nombre Formulario','form'),(44,5,1,4,'1','form'),(45,5,1,5,'Nombre Formulario','form'),(46,5,1,6,'0','form'),(47,5,1,7,'Nombre Formulario','form'),(48,5,1,10,'1','form'),(49,6,1,1,'Modulo','form'),(50,6,1,2,'module','form'),(51,6,1,3,'Modulo','form'),(52,6,1,4,'1','form'),(53,6,1,5,'Modulo','form'),(54,6,1,6,'0','form'),(55,6,1,7,'Modulo','form'),(56,6,1,10,'1','form'),(57,7,1,1,'Total Elementos','form'),(58,7,1,2,'total_elements','form'),(59,7,1,3,'Total Elementos','form'),(60,7,1,4,'1','form'),(61,7,1,5,'Total Elementos','form'),(62,7,1,6,'0','form'),(63,7,1,7,'Total Elementos','form'),(64,7,1,10,'1','form'),(65,8,15,1,'Atributo','column'),(66,8,15,2,'name_attribute','column'),(67,8,15,3,'name_attribute','column'),(68,9,15,25,'true','column'),(69,9,15,22,'Ingrese el valor del atributo','column'),(70,9,15,18,'150','column'),(71,10,15,1,'Formulario','column'),(72,10,15,2,'name_form','column'),(73,10,15,3,'name_form','column'),(74,11,15,1,'Modulo','column'),(75,11,15,2,'module','column'),(76,11,15,3,'module','column'),(77,12,15,1,'Elementos','column'),(78,12,15,2,'total_elements','column'),(79,12,15,3,'total_elements','column'),(80,13,15,3,'Editar','column'),(81,13,15,17,'true','column'),(82,13,15,18,'80px','column'),(83,13,15,19,NULL,'column'),(84,13,15,20,'bxs:edit','column'),(85,14,15,3,'Eliminar','column'),(86,14,15,17,'true','column'),(87,14,15,18,'80px','column'),(88,14,15,19,'¿Desea eliminar esta fila?','column'),(89,14,15,20,'ci:table-delete','column'),(90,15,15,3,'Componetizar','column'),(91,15,15,17,'true','column'),(92,15,15,18,'80px','column'),(93,15,15,19,NULL,'column'),(94,15,15,20,'fluent:window-bullet-list-add-20-filled','column'),(95,16,15,1,'Elemento','column'),(96,16,15,2,'name_element','column'),(97,16,15,3,'name_element','column'),(98,17,15,3,'Editar elemento','column'),(99,17,15,17,'true','column'),(100,17,15,18,'80px','column'),(101,17,15,19,NULL,'column'),(102,17,15,20,'bxs:edit','column'),(103,18,15,3,'Eliminar elemento','column'),(104,18,15,17,'true','column'),(105,18,15,18,'80px','column'),(106,18,15,19,'¿Desea eliminar esta fila?','column'),(107,18,15,20,'ci:table-delete','column'),(108,19,15,1,'Label','column'),(109,19,15,2,'label','column'),(110,19,15,3,'label\r\nlabel','column'),(111,9,15,3,'Input','column'),(127,20,1,1,'Mi primer elemento','form'),(128,20,1,2,'status','form'),(129,20,1,3,'Ingrese el estatus del elemento','form'),(130,9,15,42,'true','column'),(131,21,1,1,'label	','form'),(132,21,1,2,'name','form'),(133,21,1,3,'placeholder','form'),(134,21,1,4,'','form'),(135,21,1,10,'','form'),(136,22,1,1,'label','form'),(137,22,1,2,'name','form'),(138,22,1,3,'placeholder','form'),(139,23,1,1,'label','form'),(140,23,1,2,'name','form'),(141,23,1,3,'placeholder','form'),(152,24,1,1,'1','form'),(153,24,1,2,'1','form'),(154,24,1,10,'1','form'),(155,24,1,4,'1','form'),(156,24,1,4,'1','form'),(157,24,1,5,NULL,'form'),(158,24,1,6,NULL,'form'),(159,24,1,7,NULL,'form'),(160,24,1,8,NULL,'form'),(161,24,1,9,NULL,'form'),(162,24,1,10,'1','form'),(163,24,1,1,'label','form'),(164,24,1,2,'name','form'),(165,24,1,3,'placeholder','form'),(166,23,1,5,NULL,'form'),(167,23,1,7,NULL,'form'),(168,23,1,8,NULL,'form'),(169,23,1,9,NULL,'form'),(170,23,1,1,'label1','form'),(171,23,1,2,'name1','form'),(172,23,1,3,'placeholder1','form'),(173,23,1,10,'1','form'),(174,23,1,6,'','form'),(175,23,1,4,'1','form'),(176,25,1,1,'label','form'),(177,25,1,2,'name','form'),(178,25,1,3,'placeholder','form'),(179,25,1,10,'1','form'),(180,25,1,1,'label','form'),(181,25,1,2,'name','form'),(182,25,1,3,'placeholder','form'),(183,25,1,5,NULL,'form'),(184,25,1,6,NULL,'form'),(185,25,1,7,NULL,'form'),(186,25,1,8,NULL,'form'),(187,25,1,9,NULL,'form'),(188,25,1,10,'1','form'),(189,25,1,4,'1','form'),(190,26,1,1,'label	','form'),(191,26,1,2,'name','form'),(192,26,1,3,'placeholder','form'),(193,26,1,4,'1','form'),(194,26,1,6,'0','form'),(195,26,1,10,'1','form'),(196,26,1,1,'label1','form'),(197,27,1,1,'test1','form'),(198,27,1,2,'test1','form'),(199,27,1,3,'test1','form'),(210,28,1,1,'test1','form'),(211,28,1,2,'test1','form'),(212,28,1,3,'test1','form'),(213,28,1,6,'0','form'),(214,28,1,7,NULL,'form'),(215,28,1,8,NULL,'form'),(216,28,1,9,NULL,'form'),(217,28,1,10,'1','form'),(218,28,1,5,'rulesMessage','form'),(219,28,1,4,'1','form'),(220,29,1,4,'1','form'),(221,29,1,5,NULL,'form'),(222,29,1,6,'0','form'),(223,29,1,7,NULL,'form'),(224,29,1,8,NULL,'form'),(225,29,1,9,NULL,'form'),(226,29,1,10,'1','form'),(227,29,1,1,'labelTest2','form'),(228,29,1,2,'nameTest2','form'),(229,29,1,3,'placeholderTest2','form'),(250,30,1,4,'1','form'),(251,30,1,5,NULL,'form'),(252,30,1,6,'0','form'),(253,30,1,7,NULL,'form'),(254,30,1,8,NULL,'form'),(255,30,1,9,NULL,'form'),(256,30,1,10,'1','form'),(257,30,1,1,'label','form'),(258,30,1,2,'name','form'),(259,30,1,3,'placeholder','form'),(260,31,1,4,'1','form'),(261,31,1,6,'0','form'),(262,31,1,7,NULL,'form'),(263,31,1,8,NULL,'form'),(264,31,1,9,NULL,'form'),(265,31,1,1,'attribute','form'),(266,31,1,2,'name_attribute','form'),(267,31,1,3,'name_attribute','form'),(268,31,1,5,'name_attribute','form'),(269,31,1,10,'1','form'),(270,32,1,4,'1','form'),(271,32,1,6,'0','form'),(272,32,1,7,NULL,'form'),(273,32,1,8,NULL,'form'),(274,32,1,9,NULL,'form'),(275,32,1,10,'1','form'),(276,32,1,1,'help_description','form'),(277,32,1,2,'help_description','form'),(278,32,1,3,'help_description','form'),(279,32,1,5,'help_description','form'),(280,33,1,4,'1','form'),(281,33,1,6,'0','form'),(282,33,1,7,NULL,'form'),(283,33,1,8,NULL,'form'),(284,33,1,9,NULL,'form'),(285,33,1,10,'1','form'),(286,33,1,1,'IconAvatar','form'),(287,33,1,2,'IconAvatar','form'),(288,33,1,3,'IconAvatar','form'),(289,33,1,5,'IconAvatar','form'),(290,34,1,4,'1','form'),(291,34,1,6,'0','form'),(292,34,1,7,NULL,'form'),(293,34,1,8,NULL,'form'),(294,34,1,9,NULL,'form'),(295,34,1,10,'1','form'),(296,34,1,1,'Title','form'),(297,34,1,2,'Title','form'),(298,34,1,3,'Title','form'),(299,34,1,5,'Title','form'),(300,35,9,4,'1','form'),(301,35,9,6,'0','form'),(302,35,9,7,NULL,'form'),(303,35,9,8,NULL,'form'),(304,35,9,9,NULL,'form'),(305,35,9,10,'1','form'),(306,35,9,1,'bordered','form'),(307,35,9,2,'bordered','form'),(308,35,9,3,'bordered','form'),(309,35,9,5,'bordered','form'),(310,36,3,4,'1','form'),(311,36,3,6,'0','form'),(312,36,3,7,NULL,'form'),(313,36,3,8,NULL,'form'),(314,36,3,9,NULL,'form'),(315,36,3,10,'1','form'),(316,36,3,14,NULL,'form'),(317,36,3,15,'1','form'),(318,36,3,1,'pageSize','form'),(319,36,3,2,'pageSize','form'),(320,36,3,3,'pageSize','form'),(321,36,3,5,'pageSize','form'),(322,37,9,4,'1','form'),(323,37,9,6,'0','form'),(324,37,9,7,NULL,'form'),(325,37,9,8,NULL,'form'),(326,37,9,9,NULL,'form'),(327,37,9,10,'1','form'),(328,37,9,1,'pagination','form'),(329,37,9,2,'pagination','form'),(330,37,9,3,'pagination','form'),(331,37,9,5,'pagination','form'),(332,38,1,4,'0','form'),(333,38,1,6,'0','form'),(334,38,1,7,NULL,'form'),(335,38,1,8,NULL,'form'),(336,38,1,9,NULL,'form'),(337,38,1,10,'1','form'),(338,38,1,1,'positionBottom','form'),(339,38,1,2,'positionBottom','form'),(340,38,1,3,'positionBottom','form'),(341,38,1,5,'positionBottom','form'),(342,39,1,4,'0','form'),(343,39,1,6,'0','form'),(344,39,1,7,NULL,'form'),(345,39,1,8,NULL,'form'),(346,39,1,9,NULL,'form'),(347,39,1,10,'1','form'),(348,39,1,1,'positionTop','form'),(349,39,1,2,'positionTop','form'),(350,39,1,3,'positionTop','form'),(351,39,1,5,'positionTop','form'),(352,40,3,4,'0','form'),(353,40,3,6,'0','form'),(354,40,3,7,NULL,'form'),(355,40,3,8,NULL,'form'),(356,40,3,9,NULL,'form'),(357,40,3,10,'1','form'),(358,40,3,14,NULL,'form'),(359,40,3,15,'1','form'),(360,40,3,1,'scrollX','form'),(361,40,3,2,'scrollX','form'),(362,40,3,3,'scrollX','form'),(363,40,3,5,'scrollX','form'),(364,41,3,4,'0','form'),(365,41,3,6,'0','form'),(366,41,3,7,NULL,'form'),(367,41,3,8,NULL,'form'),(368,41,3,9,NULL,'form'),(369,41,3,10,'1','form'),(370,41,3,14,NULL,'form'),(371,41,3,15,'1','form'),(372,41,3,1,'scrollY','form'),(373,41,3,2,'scrollY','form'),(374,41,3,3,'scrollY','form'),(375,41,3,5,'scrollY','form'),(376,42,9,4,'0','form'),(377,42,9,6,'0','form'),(378,42,9,7,NULL,'form'),(379,42,9,8,NULL,'form'),(380,42,9,9,NULL,'form'),(381,42,9,10,'1','form'),(382,42,9,1,'simplepage','form'),(383,42,9,2,'simplepage','form'),(384,42,9,3,'simplepage','form'),(385,42,9,5,'simplepage','form'),(386,43,1,4,'1','form'),(387,43,1,6,'0','form'),(388,43,1,7,NULL,'form'),(389,43,1,8,NULL,'form'),(390,43,1,9,NULL,'form'),(391,43,1,10,'1','form'),(392,43,1,1,'size','form'),(393,43,1,2,'size','form'),(394,43,1,3,'size','form'),(395,43,1,5,'size','form'),(396,44,1,4,'1','form'),(397,44,1,6,'0','form'),(398,44,1,7,NULL,'form'),(399,44,1,8,NULL,'form'),(400,44,1,9,NULL,'form'),(401,44,1,10,'1','form'),(402,44,1,1,'tableLayout','form'),(403,44,1,2,'tableLayout','form'),(404,44,1,3,'tableLayout','form'),(405,44,1,5,'tableLayout','form'),(406,45,1,4,'1','form'),(407,45,1,6,'0','form'),(408,45,1,7,NULL,'form'),(409,45,1,8,NULL,'form'),(410,45,1,9,NULL,'form'),(411,45,1,10,'1','form'),(412,45,1,1,'name_table','form'),(413,45,1,2,'sys_tables@name_table','form'),(414,45,1,3,'name_table','form'),(415,45,1,5,'name_table','form'),(416,46,1,4,'1','form'),(417,46,1,6,'0','form'),(418,46,1,8,NULL,'form'),(419,46,1,10,'1','form'),(420,46,1,1,'module','form'),(421,46,1,2,'sys_tables@module','form'),(422,46,1,3,'module','form'),(423,46,1,5,'module','form'),(424,46,1,7,'','form'),(425,46,1,9,'','form'),(426,47,8,6,NULL,'form'),(427,47,8,7,NULL,'form'),(428,47,8,8,NULL,'form'),(429,47,8,9,NULL,'form'),(430,47,8,13,NULL,'form'),(431,47,8,1,'Tipo','form'),(432,47,8,2,'tipo','form'),(433,47,8,3,'Tipo','form'),(434,47,8,4,'1','form'),(435,47,8,5,'Tipo','form'),(436,47,8,10,'1','form'),(437,47,8,11,'1','form'),(438,47,8,12,'1','form'),(439,48,15,1,'Tabla','column'),(440,48,15,2,'name_table','column'),(441,48,15,3,'name_table','column'),(442,49,15,1,'Modulo','column'),(443,49,15,2,'module','column'),(444,49,15,3,'module','column'),(445,50,15,1,'Elementos','column'),(446,50,15,2,'total_elements','column'),(447,50,15,3,'total_elements','column'),(448,51,15,3,'Editar','column'),(449,51,15,17,'true','column'),(450,51,15,18,'50px','column'),(451,51,15,19,NULL,'column'),(452,51,15,20,'bxs:edit','column'),(453,52,15,3,'Eliminar','column'),(454,52,15,17,'true','column'),(455,52,15,18,'50px','column'),(456,52,15,19,'¿Desea eliminar esta fila?','column'),(457,52,15,20,'ci:table-delete','column'),(458,53,15,3,'Agregar Columnas','column'),(459,53,15,17,'true','column'),(460,53,15,18,'50px','column'),(461,53,15,19,NULL,'column'),(462,53,15,20,'fluent:window-bullet-list-add-20-filled','column'),(463,35,9,16,'1','form'),(464,35,9,17,'checked','form'),(465,37,9,16,'1','form'),(466,37,9,17,'checked','form'),(467,42,9,16,'1','form'),(468,42,9,17,'checked','form'),(469,54,15,3,'Editar Columna','column'),(470,54,15,17,'true','column'),(471,54,15,18,'50px','column'),(472,54,15,19,NULL,'column'),(473,54,15,20,'bxs:edit','column'),(474,55,15,3,'Eliminar Columna','column'),(475,55,15,17,'true','column'),(476,55,15,18,'50px','column'),(477,55,15,19,'¿Desea eliminar esta fila?','column'),(478,55,15,20,'ci:table-delete','column'),(479,56,15,1,'Columna','column'),(480,56,15,2,'columna','column'),(481,56,15,3,'columna','column'),(482,57,8,6,NULL,'form'),(483,57,8,7,NULL,'form'),(484,57,8,13,NULL,'form'),(485,57,8,2,'element_id','form'),(486,57,8,1,'Tipo de columna','form'),(487,57,8,3,'Tipo de columna','form'),(488,57,8,4,'1','form'),(489,57,8,5,'Tipo de columna','form'),(490,57,8,8,'','form'),(491,57,8,9,'','form'),(492,57,8,11,'1','form'),(493,57,8,10,'1','form'),(494,57,8,12,'1','form'),(499,62,15,1,'title','column'),(500,62,15,2,'dataIndex','column'),(501,62,15,3,'key','column'),(502,63,15,1,'title','column'),(503,63,15,2,'dataIndex','column'),(504,63,15,3,'key','column'),(505,64,8,7,NULL,'form'),(506,64,8,8,NULL,'form'),(507,64,8,9,NULL,'form'),(508,64,8,10,NULL,'form'),(509,64,8,13,NULL,'form'),(510,64,8,1,'Catalogo','form'),(511,64,8,2,'catalogo','form'),(512,64,8,3,'Catalogo','form'),(513,64,8,4,'1','form'),(514,64,8,5,'Catalogo','form'),(515,64,8,6,'','form'),(516,64,8,11,'1','form'),(517,64,8,12,'1','form'),(518,65,15,1,'Nombre del elemento','column'),(519,65,15,2,'name_element','column'),(520,65,15,3,'name_element','column'),(521,66,15,1,'Nombre del atributo','column'),(522,66,15,2,'name_attribute','column'),(523,66,15,3,'name_attribute','column'),(524,67,15,1,'Descripción de ayuda','column'),(525,67,15,2,'help_description','column'),(526,67,15,3,'help_description','column'),(527,68,1,4,'1','form'),(528,68,1,5,NULL,'form'),(529,68,1,8,NULL,'form'),(530,68,1,9,NULL,'form'),(531,68,1,10,'1','form'),(532,68,1,2,'help_description','form'),(533,68,1,1,'Descripción de ayuda','form'),(534,68,1,3,'Descripción de ayuda','form'),(535,68,1,6,'0','form'),(536,68,1,7,'Descripción de ayuda','form'),(537,69,8,5,NULL,'form'),(538,69,8,7,NULL,'form'),(539,69,8,8,NULL,'form'),(540,69,8,9,NULL,'form'),(541,69,8,13,NULL,'form'),(542,69,8,1,'Nombre de la tabla BD','form'),(543,69,8,2,'name_table','form'),(544,69,8,3,'Nombre de la tabla BD','form'),(545,69,8,4,'1','form'),(546,69,8,6,'','form'),(547,69,8,10,'1','form'),(548,69,8,11,'1','form'),(549,69,8,12,'1','form'),(550,70,1,4,'1','form'),(551,70,1,5,NULL,'form'),(552,70,1,6,'0','form'),(553,70,1,7,NULL,'form'),(554,70,1,8,NULL,'form'),(555,70,1,9,NULL,'form'),(556,70,1,10,'1','form'),(557,70,1,1,'Alias de la tabla','form'),(558,70,1,2,'alias_table','form'),(559,70,1,3,'Alias de la tabla','form'),(560,71,15,3,'name_table','column'),(561,71,15,2,'name_table','column'),(562,71,15,1,'Catálogo','column'),(563,72,15,2,'alias_table','column'),(564,72,15,3,'alias_table','column'),(565,72,15,1,'Alias','column'),(566,73,8,5,NULL,'form'),(567,73,8,6,NULL,'form'),(568,73,8,7,NULL,'form'),(569,73,8,8,NULL,'form'),(570,73,8,9,NULL,'form'),(571,73,8,1,'Tipo de catálogo','form'),(572,73,8,2,'type','form'),(573,73,8,3,'Tipo de catálogo','form'),(574,73,8,4,'1','form'),(575,73,8,10,'1','form'),(576,73,8,11,'1','form'),(577,73,8,12,'1','form'),(578,73,8,13,'','form'),(579,74,8,1,'Formulario para el catálogo','form'),(580,74,8,2,'form_id','form'),(581,74,8,3,'Formulario','form'),(582,74,8,4,'0','form'),(583,74,8,5,'','form'),(584,74,8,6,'0','form'),(585,74,8,7,'','form'),(586,74,8,8,'','form'),(587,74,8,9,'','form'),(588,74,8,10,'1','form'),(589,74,8,11,'1','form'),(590,74,8,12,'1','form'),(591,74,8,13,'','form'),(592,75,8,1,'Tabla para el catálogo','form'),(593,75,8,2,'table_id','form'),(594,75,8,3,'Tabla','form'),(595,75,8,4,'0','form'),(596,75,8,5,'','form'),(597,75,8,6,'0','form'),(598,75,8,7,'','form'),(599,75,8,8,'','form'),(600,75,8,9,'','form'),(601,75,8,10,'1','form'),(602,75,8,11,'1','form'),(603,75,8,12,'1','form'),(604,75,8,13,'','form'),(605,76,15,1,'Elemento','column'),(606,76,15,2,'name_element','column'),(607,76,15,3,'name_element','column'),(608,77,8,7,NULL,'form'),(609,77,8,8,NULL,'form'),(610,77,8,9,NULL,'form'),(611,77,8,13,NULL,'form'),(612,77,8,2,'name_view','form'),(613,77,8,1,'Nombre de la vista BD','form'),(614,77,8,3,'Nombre de la vista BD','form'),(615,77,8,11,'1','form'),(616,77,8,12,'1','form'),(617,77,8,10,'','form'),(618,77,8,4,'0','form'),(619,77,8,5,'','form'),(620,77,8,6,'0','form'),(621,78,1,4,'1','form'),(622,78,1,5,NULL,'form'),(623,78,1,6,'0','form'),(624,78,1,7,NULL,'form'),(625,78,1,8,NULL,'form'),(626,78,1,9,NULL,'form'),(627,78,1,10,'1','form'),(628,78,1,2,'default','form'),(629,78,1,3,'default','form'),(630,78,1,1,'default','form'),(631,4,8,8,NULL,'form'),(632,4,8,9,NULL,'form'),(633,79,15,2,'name_attribute','column'),(634,79,15,3,'name_attribute','column'),(635,79,15,1,'Atributo','column'),(636,80,15,2,'default','column'),(637,80,15,3,'default','column'),(638,80,15,1,'Default','column'),(639,71,15,4,NULL,'column'),(640,71,15,5,NULL,'column'),(641,71,15,6,NULL,'column'),(642,71,15,7,NULL,'column'),(643,71,15,8,NULL,'column'),(644,71,15,10,NULL,'column'),(645,71,15,11,NULL,'column'),(646,71,15,12,NULL,'column'),(647,71,15,14,NULL,'column'),(648,71,15,15,NULL,'column'),(649,71,15,16,NULL,'column'),(650,71,15,9,'1','column'),(651,81,1,6,'0','form'),(652,81,1,7,NULL,'form'),(653,81,1,8,NULL,'form'),(654,81,1,9,NULL,'form'),(655,81,1,1,'Ruta','form'),(656,81,1,2,'key','form'),(657,81,1,3,'Ruta','form'),(658,81,1,4,'1','form'),(659,81,1,5,'Ruta','form'),(660,81,1,10,'0','form'),(661,82,1,6,'0','form'),(662,82,1,7,NULL,'form'),(663,82,1,8,NULL,'form'),(664,82,1,9,NULL,'form'),(665,82,1,2,'label','form'),(666,82,1,3,'Nombre menu','form'),(667,82,1,4,'1','form'),(668,82,1,5,'Nombre menu','form'),(669,82,1,10,'0','form'),(670,82,1,1,'Nombre menu','form'),(671,83,1,6,'0','form'),(672,83,1,7,NULL,'form'),(673,83,1,8,NULL,'form'),(674,83,1,9,NULL,'form'),(675,83,1,2,'icon','form'),(676,83,1,1,'Icon','form'),(677,83,1,3,'Icon','form'),(678,83,1,4,'1','form'),(679,83,1,5,'Icon','form'),(680,83,1,10,'0','form'),(691,85,1,4,'1','form'),(692,85,1,6,'0','form'),(693,85,1,7,NULL,'form'),(694,85,1,8,NULL,'form'),(695,85,1,9,NULL,'form'),(696,85,1,2,'order','form'),(697,85,1,1,'Orden','form'),(698,85,1,3,'Orden','form'),(699,85,1,5,'Orden','form'),(700,85,1,10,'0','form'),(701,86,15,5,NULL,'column'),(702,86,15,6,NULL,'column'),(703,86,15,7,NULL,'column'),(704,86,15,8,NULL,'column'),(705,86,15,10,NULL,'column'),(706,86,15,11,NULL,'column'),(707,86,15,15,NULL,'column'),(708,86,15,16,NULL,'column'),(709,86,15,2,'key','column'),(710,86,15,3,'key','column'),(711,86,15,4,'','column'),(712,86,15,1,'Ruta Route','column'),(713,86,15,9,'1','column'),(714,86,15,12,'1','column'),(715,86,15,13,'1','column'),(716,87,15,5,NULL,'column'),(717,87,15,6,NULL,'column'),(718,87,15,7,NULL,'column'),(719,87,15,8,NULL,'column'),(720,87,15,10,NULL,'column'),(721,87,15,11,NULL,'column'),(722,87,15,16,NULL,'column'),(723,87,15,1,'Nombre','column'),(724,87,15,2,'label','column'),(725,87,15,3,'label','column'),(726,87,15,4,'','column'),(727,87,15,9,'1','column'),(728,87,15,12,'1','column'),(729,87,15,13,'1','column'),(730,87,15,15,'','column'),(731,88,15,5,NULL,'column'),(732,88,15,6,NULL,'column'),(733,88,15,7,NULL,'column'),(734,88,15,8,NULL,'column'),(735,88,15,10,NULL,'column'),(736,88,15,11,NULL,'column'),(737,88,15,15,NULL,'column'),(738,88,15,16,NULL,'column'),(739,88,15,2,'icon','column'),(740,88,15,3,'icon','column'),(741,88,15,1,'Icon','column'),(742,88,15,4,'','column'),(743,88,15,9,'1','column'),(744,88,15,12,'1','column'),(745,88,15,13,'1','column'),(746,89,15,5,NULL,'column'),(747,89,15,6,NULL,'column'),(748,89,15,7,NULL,'column'),(749,89,15,9,'1','column'),(750,89,15,10,NULL,'column'),(751,89,15,11,NULL,'column'),(752,89,15,16,NULL,'column'),(753,89,15,1,'SubMenu','column'),(754,89,15,2,'submenu','column'),(755,89,15,3,'submenu','column'),(756,89,15,4,'','column'),(757,89,15,8,'0','column'),(758,89,15,12,'1','column'),(759,89,15,13,'1','column'),(760,89,15,15,'','column'),(761,90,15,6,NULL,'column'),(762,90,15,7,NULL,'column'),(763,90,15,8,NULL,'column'),(764,90,15,10,NULL,'column'),(765,90,15,11,NULL,'column'),(766,90,15,16,NULL,'column'),(767,90,15,1,'Orden','column'),(768,90,15,2,'order','column'),(769,90,15,3,'order','column'),(770,90,15,4,'','column'),(771,90,15,5,'','column'),(772,90,15,9,'1','column'),(773,90,15,12,'1','column'),(774,90,15,13,'1','column'),(775,90,15,15,'','column'),(788,91,8,5,NULL,'form'),(789,91,8,6,NULL,'form'),(790,91,8,7,NULL,'form'),(791,91,8,8,NULL,'form'),(792,91,8,9,NULL,'form'),(793,91,8,10,NULL,'form'),(794,91,8,13,NULL,'form'),(795,91,8,2,'submenu_id','form'),(796,91,8,1,'Nombre menu padre','form'),(797,91,8,3,'Nombre menu padre','form'),(798,91,8,4,'','form'),(799,91,8,11,'1','form'),(800,91,8,12,'1','form'),(806,91,8,19,'sys_menu','form'),(807,91,8,20,'label','form'),(808,91,8,21,'menu_id','form'),(809,91,8,27,'0','form'),(810,91,8,22,'sys_menu.submenu_id IS NULL','form'),(811,92,1,4,'1','form'),(812,92,1,6,'0','form'),(813,92,1,7,NULL,'form'),(814,92,1,8,NULL,'form'),(815,92,1,9,NULL,'form'),(816,92,1,1,'company','form'),(817,92,1,2,'company','form'),(818,92,1,3,'company','form'),(819,92,1,5,'company','form'),(820,92,1,10,'0','form'),(821,93,1,4,'1','form'),(822,93,1,6,'0','form'),(823,93,1,7,NULL,'form'),(824,93,1,8,NULL,'form'),(825,93,1,9,NULL,'form'),(826,93,1,2,'initials','form'),(827,93,1,1,'Iniciales','form'),(828,93,1,3,'Iniciales','form'),(829,93,1,5,'Iniciales','form'),(830,93,1,10,'0','form'),(831,94,15,5,NULL,'column'),(832,94,15,6,NULL,'column'),(833,94,15,7,NULL,'column'),(834,94,15,8,NULL,'column'),(835,94,15,10,NULL,'column'),(836,94,15,11,NULL,'column'),(837,94,15,15,NULL,'column'),(838,94,15,16,NULL,'column'),(839,94,15,2,'company','column'),(840,94,15,3,'company','column'),(841,94,15,4,'','column'),(842,94,15,1,'Compañia','column'),(843,94,15,9,'1','column'),(844,94,15,12,'1','column'),(845,94,15,13,'1','column'),(846,95,15,5,NULL,'column'),(847,95,15,6,NULL,'column'),(848,95,15,7,NULL,'column'),(849,95,15,8,NULL,'column'),(850,95,15,10,NULL,'column'),(851,95,15,11,NULL,'column'),(852,95,15,15,NULL,'column'),(853,95,15,16,NULL,'column'),(854,95,15,1,'Iniciales','column'),(855,95,15,2,'initials','column'),(856,95,15,3,'initials','column'),(857,95,15,4,'','column'),(858,95,15,9,'1','column'),(859,95,15,12,'1','column'),(860,95,15,13,'1','column'),(861,96,1,4,'1','form'),(862,96,1,7,NULL,'form'),(863,96,1,8,NULL,'form'),(864,96,1,9,NULL,'form'),(865,96,1,1,'Nombre del rol','form'),(866,96,1,2,'rol','form'),(867,96,1,3,'Nombre del rol','form'),(868,96,1,6,'0','form'),(869,96,1,5,'Nombre del rol','form'),(870,96,1,10,'0','form'),(871,97,15,5,NULL,'column'),(872,97,15,6,NULL,'column'),(873,97,15,7,NULL,'column'),(874,97,15,8,NULL,'column'),(875,97,15,10,NULL,'column'),(876,97,15,11,NULL,'column'),(877,97,15,15,NULL,'column'),(878,97,15,16,NULL,'column'),(879,97,15,1,'Rol','column'),(880,97,15,2,'rol','column'),(881,97,15,3,'rol','column'),(882,97,15,4,'','column'),(883,97,15,9,'1','column'),(884,97,15,12,'1','column'),(885,97,15,13,'1','column'),(886,98,1,4,'1','form'),(887,98,1,5,NULL,'form'),(888,98,1,6,'0','form'),(889,98,1,7,NULL,'form'),(890,98,1,8,NULL,'form'),(891,98,1,9,NULL,'form'),(892,98,1,10,'1','form'),(893,98,1,1,'Correo electronico','form'),(894,98,1,2,'email','form'),(895,98,1,3,'Correo electronico','form'),(896,99,1,4,'1','form'),(897,99,1,5,NULL,'form'),(898,99,1,6,'0','form'),(899,99,1,7,NULL,'form'),(900,99,1,8,NULL,'form'),(901,99,1,9,NULL,'form'),(902,99,1,10,'1','form'),(903,99,1,1,'Nombre','form'),(904,99,1,2,'given_name','form'),(905,99,1,3,'Nombre','form'),(906,100,1,4,'1','form'),(907,100,1,5,NULL,'form'),(908,100,1,6,'0','form'),(909,100,1,7,NULL,'form'),(910,100,1,8,NULL,'form'),(911,100,1,9,NULL,'form'),(912,100,1,10,'1','form'),(913,100,1,2,'family_name','form'),(914,100,1,1,'Apellidos','form'),(915,100,1,3,'Apellidos','form'),(916,101,8,5,NULL,'form'),(917,101,8,6,NULL,'form'),(918,101,8,7,NULL,'form'),(919,101,8,8,NULL,'form'),(920,101,8,9,NULL,'form'),(921,101,8,10,NULL,'form'),(922,101,8,11,NULL,'form'),(923,101,8,12,NULL,'form'),(924,101,8,13,NULL,'form'),(925,101,8,27,NULL,'form'),(926,101,8,1,'Compania','form'),(927,101,8,2,'id_company','form'),(928,101,8,3,'Compania','form'),(929,101,8,4,'1','form'),(930,101,8,19,'sys_cat_companys','form'),(931,101,8,20,'company','form'),(932,101,8,21,'id_company','form'),(933,101,8,22,'status = \'alta\'','form'),(934,102,15,5,NULL,'column'),(935,102,15,6,NULL,'column'),(936,102,15,7,NULL,'column'),(937,102,15,8,NULL,'column'),(938,102,15,9,NULL,'column'),(939,102,15,10,NULL,'column'),(940,102,15,11,NULL,'column'),(941,102,15,16,NULL,'column'),(942,102,15,1,'E-mail','column'),(943,102,15,2,'email','column'),(944,102,15,4,'','column'),(945,102,15,3,'email','column'),(946,102,15,12,'1','column'),(947,102,15,13,'','column'),(948,102,15,15,'1','column'),(949,103,15,5,NULL,'column'),(950,103,15,6,NULL,'column'),(951,103,15,7,NULL,'column'),(952,103,15,8,NULL,'column'),(953,103,15,10,NULL,'column'),(954,103,15,11,NULL,'column'),(955,103,15,13,NULL,'column'),(956,103,15,15,NULL,'column'),(957,103,15,16,NULL,'column'),(958,103,15,1,'Nombre','column'),(959,103,15,2,'given_name','column'),(960,103,15,3,'given_name','column'),(961,103,15,4,'','column'),(962,103,15,9,'1','column'),(963,103,15,12,'1','column'),(964,104,15,5,NULL,'column'),(965,104,15,6,NULL,'column'),(966,104,15,7,NULL,'column'),(967,104,15,8,NULL,'column'),(968,104,15,10,NULL,'column'),(969,104,15,11,NULL,'column'),(970,104,15,13,NULL,'column'),(971,104,15,15,NULL,'column'),(972,104,15,16,NULL,'column'),(973,104,15,1,'Apellidos','column'),(974,104,15,2,'family_name','column'),(975,104,15,3,'family_name','column'),(976,104,15,4,'','column'),(977,104,15,9,'1','column'),(978,104,15,12,'1','column'),(979,105,15,5,NULL,'column'),(980,105,15,6,NULL,'column'),(981,105,15,7,NULL,'column'),(982,105,15,8,NULL,'column'),(983,105,15,9,NULL,'column'),(984,105,15,10,NULL,'column'),(985,105,15,11,NULL,'column'),(986,105,15,12,NULL,'column'),(987,105,15,13,NULL,'column'),(988,105,15,15,NULL,'column'),(989,105,15,16,NULL,'column'),(990,105,15,1,'Compania','column'),(991,105,15,2,'company','column'),(992,105,15,3,'company','column'),(993,105,15,4,'','column'),(994,106,15,5,NULL,'column'),(995,106,15,6,NULL,'column'),(996,106,15,7,NULL,'column'),(997,106,15,8,NULL,'column'),(998,106,15,9,NULL,'column'),(999,106,15,10,NULL,'column'),(1000,106,15,11,NULL,'column'),(1001,106,15,12,NULL,'column'),(1002,106,15,13,NULL,'column'),(1003,106,15,15,NULL,'column'),(1004,106,15,16,NULL,'column'),(1005,106,15,1,'Rol','column'),(1006,106,15,2,'rol','column'),(1007,106,15,3,'rol','column'),(1008,106,15,4,'','column'),(1009,107,16,17,'1','column'),(1010,107,16,2,NULL,'column'),(1011,107,16,3,'Eliminar','column'),(1012,107,16,20,'material-symbols:delete-outline-rounded','column'),(1013,107,16,19,'¿Deseas elimnar ese usuario?','column'),(1014,107,16,1,'','column'),(1015,108,8,5,NULL,'form'),(1016,108,8,6,NULL,'form'),(1017,108,8,7,NULL,'form'),(1018,108,8,8,NULL,'form'),(1019,108,8,9,NULL,'form'),(1020,108,8,10,NULL,'form'),(1021,108,8,11,NULL,'form'),(1022,108,8,12,NULL,'form'),(1023,108,8,13,NULL,'form'),(1024,108,8,27,NULL,'form'),(1025,108,8,1,'Rol','form'),(1026,108,8,3,'rol','form'),(1027,108,8,2,'id_rol','form'),(1028,108,8,4,'1','form'),(1029,108,8,19,'sys_cat_rol','form'),(1030,108,8,20,'rol','form'),(1031,108,8,21,'id_rol','form'),(1032,108,8,22,'status = \'alta\'','form'),(1033,109,16,17,'1','column'),(1034,109,16,2,NULL,'column'),(1035,109,16,3,'Permisos','column'),(1036,109,16,20,'mdi:key-chain','column'),(1037,109,16,19,'','column'),(1038,109,16,1,'','column'),(1039,5,1,8,NULL,'form'),(1040,5,1,9,NULL,'form'),(1041,110,9,5,NULL,'form'),(1042,110,9,6,'0','form'),(1043,110,9,7,NULL,'form'),(1044,110,9,8,NULL,'form'),(1045,110,9,9,NULL,'form'),(1046,110,9,10,'1','form'),(1047,110,9,1,'Drag Sorting','form'),(1048,110,9,2,'dragSorting','form'),(1049,110,9,3,'','form'),(1050,110,9,17,'checked','form'),(1051,110,9,16,'0','form'),(1052,110,9,4,'0','form'),(1053,111,1,6,'0','form'),(1054,111,1,7,NULL,'form'),(1055,111,1,8,NULL,'form'),(1056,111,1,9,NULL,'form'),(1057,111,1,1,'Basico','form'),(1058,111,1,3,'Basico','form'),(1059,111,1,4,'0','form'),(1060,111,1,5,'','form'),(1061,111,1,10,'0','form'),(1062,111,1,2,'menu_basic','form'),(1063,112,15,5,NULL,'column'),(1064,112,15,6,NULL,'column'),(1065,112,15,7,NULL,'column'),(1066,112,15,8,NULL,'column');
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
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci PACK_KEYS=0;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_data_forms`
--

LOCK TABLES `sys_data_forms` WRITE;
/*!40000 ALTER TABLE `sys_data_forms` DISABLE KEYS */;
INSERT INTO `sys_data_forms` VALUES (1,1,1,1,0),(2,2,2,1,0),(3,3,3,1,1),(4,3,4,2,1),(5,4,5,1,0),(6,4,6,2,0),(8,5,3,1,1),(20,10,31,1,0),(21,10,32,2,0),(22,11,33,1,0),(23,11,34,2,0),(24,11,35,3,0),(25,11,36,4,0),(26,11,37,5,0),(27,11,38,6,0),(28,11,39,7,0),(29,11,40,8,0),(30,11,41,9,0),(31,11,42,10,0),(32,11,43,11,0),(33,11,44,12,0),(34,11,45,13,0),(35,11,46,14,0),(36,12,47,1,0),(37,13,57,1,1),(38,14,64,1,1),(39,2,68,2,0),(40,15,69,1,1),(41,15,70,2,0),(42,15,73,3,1),(43,15,74,4,1),(44,15,75,5,1),(45,15,77,6,1),(46,3,78,3,0),(47,17,81,1,0),(48,17,82,2,0),(49,17,83,3,0),(51,17,85,4,0),(52,17,91,5,1),(53,18,92,1,0),(54,18,93,2,0),(55,19,96,1,0),(56,20,98,1,0),(57,20,99,2,0),(58,20,100,3,0),(59,20,101,4,1),(60,20,108,5,1),(61,11,110,15,0),(62,17,111,6,0);
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
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci PACK_KEYS=0;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_data_tables`
--

LOCK TABLES `sys_data_tables` WRITE;
/*!40000 ALTER TABLE `sys_data_tables` DISABLE KEYS */;
INSERT INTO `sys_data_tables` VALUES (1,1,8,1),(2,1,9,2),(3,2,10,1),(4,2,11,2),(5,2,12,3),(6,2,13,4),(7,2,14,5),(8,2,15,6),(9,3,16,1),(10,3,17,3),(11,3,18,4),(12,3,19,2),(13,4,48,1),(14,4,49,2),(15,4,52,5),(16,4,53,6),(17,4,50,3),(18,4,51,4),(19,5,54,2),(20,5,55,3),(21,5,56,1),(23,9,65,1),(24,10,66,1),(25,10,67,2),(26,9,13,2),(27,9,14,3),(28,10,13,3),(29,10,14,4),(30,11,71,1),(31,11,72,2),(32,11,13,3),(33,11,14,4),(40,12,76,1),(41,12,13,2),(42,12,14,3),(43,12,79,1),(44,12,80,1),(45,13,86,1),(46,13,87,2),(47,13,88,3),(48,13,89,4),(49,13,90,5),(50,13,13,6),(51,13,14,7),(52,14,94,1),(53,14,95,2),(54,15,97,1),(55,14,13,3),(56,14,14,4),(57,15,13,2),(58,15,14,3),(59,16,102,1),(60,16,103,2),(61,16,104,3),(62,16,105,4),(63,16,106,5),(64,16,13,6),(66,16,107,7),(67,16,109,8),(68,13,112,8);
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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci PACK_KEYS=0;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_dependencys`
--

LOCK TABLES `sys_dependencys` WRITE;
/*!40000 ALTER TABLE `sys_dependencys` DISABLE KEYS */;
INSERT INTO `sys_dependencys` VALUES (1,3,1,0,0),(2,4,2,0,0),(3,57,3,0,0),(4,64,4,0,0),(5,69,5,0,0),(6,73,6,0,0),(7,74,7,0,0),(8,75,8,0,0),(9,77,9,0,0),(10,91,10,0,0),(11,108,12,0,0),(12,101,13,0,0);
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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci PACK_KEYS=0;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_dependencys_combos`
--

LOCK TABLES `sys_dependencys_combos` WRITE;
/*!40000 ALTER TABLE `sys_dependencys_combos` DISABLE KEYS */;
INSERT INTO `sys_dependencys_combos` VALUES (1,'sys_elements','Combo elementos formularios','name_element','element_id','element_id <> 15 AND status = \'alta\'','alta'),(2,'sys_attributes','Combo atributos','name_attribute','attribute_id',NULL,'alta'),(3,'sys_elements','Combo elementos tablas','name_element','element_id','element_id <> 2 AND status = \'alta\'','alta'),(4,'sys_cat_tables','Combo tablas catalogos','alias_table','cat_table_id','type = \'operation\'','alta'),(5,'INFORMATION_SCHEMA.TABLES','Combo tablas del sistema','TABLE_NAME','TABLE_NAME','TABLE_SCHEMA = \'cesvi\' AND\r\nTABLE_NAME NOT LIKE  \'view%\'','alta'),(6,'type_catalog','Combo tipo catalogo',NULL,NULL,NULL,'alta'),(7,'sys_forms','Combo de formularios','name_form','forms_id','status = \'alta\'','alta'),(8,'sys_tables','Combo de tablas columnas','name_table','table_id','status = \'alta\'','alta'),(9,'INFORMATION_SCHEMA.TABLES','Combo vistas del sistema','TABLE_NAME','TABLE_NAME','TABLE_SCHEMA = \'cesvi\'','alta'),(10,'sys_menu','Combo menu del sistema','label','menu_id','submenu_id IS NULL','alta'),(12,'sys_cat_rol','Combo menu de roles','rol','id_rol','status = \'alta\'','alta'),(13,'sys_cat_companys','Combo de companias','company','id_company','status = \'alta\'','alta');
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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_elements`
--

LOCK TABLES `sys_elements` WRITE;
/*!40000 ALTER TABLE `sys_elements` DISABLE KEYS */;
INSERT INTO `sys_elements` VALUES (1,'Input','alta'),(2,'InputPassword','alta'),(3,'InputNumber','alta'),(4,'InputTextArea','alta'),(5,'DatePicker','alta'),(6,'RangePicker','alta'),(7,'TimePicker','alta'),(8,'Select','alta'),(9,'Switch','alta'),(10,'Slider','alta'),(11,'RadioGroup','alta'),(12,'CheckboxGroup','alta'),(13,'Rate','alta'),(14,'Upload','alta'),(15,'Column','alta'),(16,'CHURRITO 4','baja');
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
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci PACK_KEYS=0;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_elements_attributes`
--

LOCK TABLES `sys_elements_attributes` WRITE;
/*!40000 ALTER TABLE `sys_elements_attributes` DISABLE KEYS */;
INSERT INTO `sys_elements_attributes` VALUES (1,1,1,NULL,'alta'),(2,1,2,NULL,'alta'),(3,1,3,NULL,'alta'),(4,1,4,'1','alta'),(5,1,5,NULL,'alta'),(6,1,6,'0','alta'),(7,1,7,NULL,'alta'),(8,1,8,NULL,'alta'),(9,1,9,NULL,'alta'),(10,1,10,'1','alta'),(11,8,1,NULL,'alta'),(12,8,2,NULL,'alta'),(13,8,3,NULL,'alta'),(14,8,4,NULL,'alta'),(15,8,5,NULL,'alta'),(16,8,6,NULL,'alta'),(17,8,7,NULL,'alta'),(18,8,8,NULL,'alta'),(19,8,9,NULL,'alta'),(20,8,10,NULL,'alta'),(21,8,11,NULL,'alta'),(22,8,12,NULL,'alta'),(23,8,13,NULL,'alta'),(24,9,1,NULL,'alta'),(25,9,2,NULL,'alta'),(26,9,3,NULL,'alta'),(27,9,4,'1','alta'),(28,9,5,NULL,'alta'),(29,9,6,'0','alta'),(30,9,7,NULL,'alta'),(31,9,8,NULL,'alta'),(32,9,9,NULL,'alta'),(33,9,10,'1','alta'),(34,3,1,NULL,'alta'),(35,3,2,NULL,'alta'),(36,3,3,NULL,'alta'),(37,3,4,'1','alta'),(38,3,5,NULL,'alta'),(39,3,6,'0','alta'),(40,3,7,NULL,'alta'),(41,3,8,NULL,'alta'),(42,3,9,NULL,'alta'),(43,3,10,'1','alta'),(44,3,14,NULL,'alta'),(45,3,15,'1','alta'),(46,9,16,'true','alta'),(47,9,17,'checked','alta'),(48,7,1,'default','baja'),(49,8,19,NULL,'alta'),(50,8,20,NULL,'alta'),(51,8,21,NULL,'alta'),(52,8,22,NULL,'alta'),(53,8,23,NULL,'alta');
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
  `update_at` timestamp(6) NULL DEFAULT NULL,
  PRIMARY KEY (`forms_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci PACK_KEYS=0;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_forms`
--

LOCK TABLES `sys_forms` WRITE;
/*!40000 ALTER TABLE `sys_forms` DISABLE KEYS */;
INSERT INTO `sys_forms` VALUES (1,'Catalogo de elementos','Configuración',NULL,'alta',1,'2022-10-05 22:00:00.000000','2022-10-05 22:00:00.000000'),(2,'Catalogo atributos de elementos','Configuración',NULL,'alta',1,'2022-10-05 22:33:09.633000','2022-10-05 22:33:15.881000'),(3,'Catalogo de elemento vs atributos','Configuración',NULL,'alta',1,'2022-10-05 22:33:20.573000','2022-10-05 22:33:25.356000'),(4,'Fritter Forms','1',NULL,'alta',0,'2022-10-05 23:38:35.476000','2022-10-05 23:38:39.425000'),(5,'Form Elementos','Configuración',NULL,'alta',0,NULL,NULL),(10,'Attributes','Configuración',NULL,'alta',0,NULL,NULL),(11,'Fritter Tables','Configuración',NULL,'alta',1,NULL,NULL),(12,'Tipo Columna','Configuración',NULL,'alta',0,NULL,NULL),(13,'Form Columnas','Configuración',NULL,'alta',0,NULL,NULL),(14,'Catalogos','Configuración',NULL,'alta',1,NULL,NULL),(15,'Catálogo general','Configuración',NULL,'alta',1,NULL,NULL),(16,'Catalogo General','Configuración',NULL,'baja',1,NULL,NULL),(17,'Menu','Configuracion',NULL,'alta',1,NULL,NULL),(18,'Companias','Configuracion',NULL,'alta',1,NULL,NULL),(19,'Roles','Configuracion',NULL,'alta',1,NULL,NULL),(20,'Usuarios','Usuario',NULL,'alta',1,NULL,NULL);
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
INSERT INTO `sys_menu` VALUES (1,'Dashboard','Dashboard','ic:outline-developer-board',NULL,1,'alta','Si'),(2,'Configuracion','Configuracion','file-icons:config-react',NULL,3,'alta','no'),(3,'login','Salir','mdi:exit-run',NULL,4,'alta','Si'),(4,'Users','Usuario','fluent:people-settings-24-filled',NULL,2,'alta','no'),(5,'Configuracion/Forms','Forms','fluent:content-settings-24-filled',2,1,'alta','no'),(6,'Configuracion/Tables','Tables','fluent:table-settings-28-regular',2,2,'alta','no'),(7,'Configuracion/Catalogos','Catalogos','simple-icons:apachekafka',2,3,'alta','no');
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
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_permissions`
--

LOCK TABLES `sys_permissions` WRITE;
/*!40000 ALTER TABLE `sys_permissions` DISABLE KEYS */;
INSERT INTO `sys_permissions` VALUES (1,'15bebb07-5369-4373-b4d9-689bcbac9174',1,1,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(3,'15bebb07-5369-4373-b4d9-689bcbac9174',3,1,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(5,'15bebb07-5369-4373-b4d9-689bcbac9174',5,1,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(6,'15bebb07-5369-4373-b4d9-689bcbac9174',6,1,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(8,'0989da2f-1672-4956-8836-058479b3ba08',1,2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(9,'0989da2f-1672-4956-8836-058479b3ba08',2,2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(10,'0989da2f-1672-4956-8836-058479b3ba08',3,2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(11,'0989da2f-1672-4956-8836-058479b3ba08',4,2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(12,'0989da2f-1672-4956-8836-058479b3ba08',5,2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(13,'0989da2f-1672-4956-8836-058479b3ba08',6,2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(14,'0989da2f-1672-4956-8836-058479b3ba08',7,2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(21,'15bebb07-5369-4373-b4d9-689bcbac9174',2,1,'2022-11-30 21:30:47','2022-11-30 21:30:47'),(22,'15bebb07-5369-4373-b4d9-689bcbac9174',4,1,'2022-11-30 21:30:48','2022-11-30 21:30:48'),(28,'75934c3c-426c-411e-96a7-6a213b80f553',3,5,'2022-12-05 15:06:48','2022-12-05 15:06:48');
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
) ENGINE=InnoDB AUTO_INCREMENT=144 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_props_table`
--

LOCK TABLES `sys_props_table` WRITE;
/*!40000 ALTER TABLE `sys_props_table` DISABLE KEYS */;
INSERT INTO `sys_props_table` VALUES (1,'2',1,'false'),(2,'2',2,'5'),(3,'2',3,'false'),(4,'2',4,'bottomRight'),(5,'2',5,'none'),(6,'2',6,'Creacion de formularios'),(7,'2',7,'small'),(8,'2',8,'true'),(9,'2',9,'true'),(10,'2',10,'false'),(11,'2',11,'iconoir:system-restart'),(12,'2',12,'none'),(13,'3',1,'false'),(14,'3',2,'5'),(15,'3',3,'false'),(16,'3',4,'bottomRight'),(17,'3',5,'none'),(18,'3',6,'Fritter Dynamic God Forms'),(19,'3',7,'small'),(20,'3',8,'true'),(21,'3',9,'true'),(22,'3',10,'auto'),(23,'3',11,'iconoir:system-restart'),(24,'3',12,'auto'),(25,'4',1,'false'),(26,'4',2,'5'),(27,'4',3,'false'),(28,'4',4,'bottomRight'),(29,'4',5,'none'),(30,'4',6,'Creacion de tablas'),(31,'4',7,'small'),(32,'4',8,'true'),(33,'4',9,'true'),(34,'4',10,'auto'),(35,'4',11,'iconoir:system-restart'),(36,'4',12,'auto'),(61,'8',11,'IconAvatar3'),(62,'8',6,'Title3'),(63,'8',8,'true'),(64,'8',2,'20'),(65,'8',1,'false'),(66,'8',4,'Bottom2'),(67,'8',5,'positionTop2'),(68,'8',9,'100'),(69,'8',10,'10'),(70,'8',3,'false'),(71,'8',7,'100'),(72,'8',12,'fixed'),(73,'9',11,'iconoir:system-restart'),(74,'9',6,'Catálogo de elementos'),(75,'9',8,'1'),(76,'9',2,'5'),(77,'9',1,'1'),(78,'9',4,''),(79,'9',5,''),(80,'9',9,NULL),(81,'9',10,NULL),(82,'9',3,'false'),(83,'9',7,'small'),(84,'9',12,'auto'),(85,'10',11,'iconoir:system-restart'),(86,'10',6,'Catálogo de atributos de elementos'),(87,'10',8,'1'),(88,'10',2,'5'),(89,'10',1,'true'),(90,'10',4,''),(91,'10',5,''),(92,'10',9,NULL),(93,'10',10,NULL),(94,'10',3,'false'),(95,'10',7,'small'),(96,'10',12,'auto'),(97,'11',11,'iconoir:system-restart'),(98,'11',6,'Catálogo General'),(99,'11',8,'1'),(100,'11',2,'5'),(101,'11',1,'1'),(102,'11',3,'false'),(103,'11',7,'small'),(104,'11',12,'fixed'),(105,'11',4,''),(106,'11',5,''),(107,'11',9,''),(108,'11',10,''),(109,'12',11,'iconoir:system-restart'),(110,'12',6,'Catalogo de  elementos vs atributos'),(111,'12',8,'1'),(112,'12',2,'1'),(113,'12',1,'false'),(114,'12',4,'positionBottom'),(115,'12',5,'positionTop'),(116,'12',9,'100'),(117,'12',10,'100'),(118,'12',3,'false'),(119,'12',7,'small'),(120,'12',12,'fixed'),(121,'5',11,'fa6-solid:users-gear'),(122,'5',6,'Agregar Columnas'),(123,'5',8,'false'),(124,'5',2,'10'),(125,'5',1,'false'),(126,'5',4,'bottomRight'),(127,'5',3,'false'),(128,'5',7,'small'),(129,'5',12,'auto'),(130,'5',13,'true'),(141,'5',5,''),(142,'4',13,'false'),(143,'3',13,'true');
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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci PACK_KEYS=0;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_tables`
--

LOCK TABLES `sys_tables` WRITE;
/*!40000 ALTER TABLE `sys_tables` DISABLE KEYS */;
INSERT INTO `sys_tables` VALUES (1,'Agregar Atributos','Configuración','alta',1,'2022-10-06 15:44:07.893000','2022-10-06 15:44:12.088000'),(2,'Agregar Forms','Configuración','alta',1,NULL,NULL),(3,'Agregar Elementos','Configuración','alta',1,NULL,NULL),(4,'Agregar Tablas','Configuración','alta',1,NULL,NULL),(5,'Agregar Columnas','Configuración','alta',1,NULL,NULL),(8,'testOne3','one3','baja',1,NULL,NULL),(9,'Catalogo de elementos','Configuración','alta',1,NULL,NULL),(10,'Catalogo de atributos de elementos','Configuración','alta',1,NULL,NULL),(11,'Catalogo General','Configuración','alta',1,NULL,NULL),(12,'Catalogo de  elementos vs atributos','Configuración','alta',1,NULL,NULL),(13,'Menu','Configuracion','alta',1,NULL,NULL),(14,'Compañias','Configuracion','alta',1,NULL,NULL),(15,'Roles','Configuracion','alta',1,NULL,NULL),(16,'Usuarios','Usuario','alta',1,NULL,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_users`
--

LOCK TABLES `sys_users` WRITE;
/*!40000 ALTER TABLE `sys_users` DISABLE KEYS */;
INSERT INTO `sys_users` VALUES (1,'15bebb07-5369-4373-b4d9-689bcbac9174','jrpavon','jrpavon@cesvimexico.com.mx','Roberto','Pavone','Roberto Pavone','ALTA',1,1,'2022-08-30 15:13:16','2022-11-30 16:35:45'),(2,'0989da2f-1672-4956-8836-058479b3ba08','jvicencio','E-mail@com.mx','Jaime','Vicencio',NULL,'ALTA',1,1,'2022-09-01 00:03:50','2022-11-30 16:35:47'),(5,'75934c3c-426c-411e-96a7-6a213b80f553','bjaramillo','bjaramillo@cesvimexico.com.mx','Bryant','Jaramillo','Bryant Jaramillo','ALTA',1,1,'2022-12-05 15:06:47','2022-12-05 15:06:47');
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
  `keycloak_id` tinyint NOT NULL
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
  `menu_basic` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

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
/*!50001 SET character_set_client      = latin1 */;
/*!50001 SET character_set_results     = latin1 */;
/*!50001 SET collation_connection      = latin1_swedish_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`umngrc`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `view_sys_cat_menu` AS select `sys_menu`.`menu_id` AS `menu_id`,`sys_menu`.`key` AS `key`,`sys_menu`.`label` AS `label`,`sys_menu`.`icon` AS `icon`,`sys_menu`.`submenu_id` AS `submenu_id`,`sys_menu`.`order` AS `order`,`submenu`.`label` AS `submenu`,`sys_menu`.`menu_basic` AS `menu_basic`,`sys_permissions`.`keycloak_id` AS `keycloak_id` from ((`sys_menu` left join `sys_menu` `submenu` on((`sys_menu`.`submenu_id` = `submenu`.`menu_id`))) left join `sys_permissions` on((`sys_menu`.`menu_id` = `sys_permissions`.`menu_id`))) where (`sys_menu`.`status` = 'alta') group by `sys_menu`.`menu_id` order by `sys_menu`.`order` */;
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
/*!50001 SET character_set_client      = latin1 */;
/*!50001 SET character_set_results     = latin1 */;
/*!50001 SET collation_connection      = latin1_swedish_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`umngrc`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `view_sys_menu` AS select `sys_menu`.`menu_id` AS `menu_id`,`sys_menu`.`key` AS `key`,`sys_menu`.`label` AS `label`,`sys_menu`.`icon` AS `icon`,`sys_menu`.`submenu_id` AS `submenu_id`,`sys_menu`.`order` AS `order`,`sys_permissions`.`keycloak_id` AS `keycloak_id`,`submenu`.`label` AS `submenu`,`sys_menu`.`menu_basic` AS `menu_basic` from ((`sys_permissions` join `sys_menu` on((`sys_permissions`.`menu_id` = `sys_menu`.`menu_id`))) left join `sys_menu` `submenu` on((`sys_menu`.`submenu_id` = `submenu`.`menu_id`))) where (`sys_menu`.`status` = 'alta') order by `sys_menu`.`order` */;
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

-- Dump completed on 2022-12-15 16:23:18