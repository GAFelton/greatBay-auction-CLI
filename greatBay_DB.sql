DROP DATABASE IF EXISTS greatBay_DB;

CREATE DATABASE greatBay_DB;

USE greatBay_DB;

CREATE TABLE auctions (
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(45) NOT NULL,
  bid INT(10) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO auctions (item, bid)
VALUES ("rower", 200), ("blender", 30), ("Big Book of Facts", 55);