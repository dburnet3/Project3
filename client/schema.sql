-- Drops the provision db if it exists currently --
DROP DATABASE IF EXISTS provision_db;
-- Creates the "provision" database --
CREATE DATABASE provision_db;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    user_type VARCHAR (255) NOT NULL,
    user_name VARCHAR (255) NOT NULL,
    user_email VARCHAR (255) NOT NULL,
    user_password VARCHAR (255) NOT NULL,
    PRIMARY KEY (id)
);