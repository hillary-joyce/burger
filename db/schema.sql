
CREATE DATABASE donuts_db;
USE donuts_db;

CREATE TABLE donuts (
  id int NOT NULL AUTO_INCREMENT,
	donut_name VARCHAR(100) NOT NULL,
  devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
