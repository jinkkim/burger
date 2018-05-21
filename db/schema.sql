CREATE SCHEMA `burgers_db` ;

CREATE TABLE `burgers_db`.`burger` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `burger_name` VARCHAR(45) NOT NULL,
  `devoured` TINYINT NOT NULL,
  PRIMARY KEY (`id`));


