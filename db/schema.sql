CREATE database burgers_db

CREATE TABLE burgers (
  id INT (100) NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(255) NOT NULL,
  devoured BOOLEAN,
  PRIMARY KEY('id'));
  
);



DROP DATABASE burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id INT AUTO_INCREMENT,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP,
	primary key(id)
);