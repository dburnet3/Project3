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

CREATE TABLE activities (
    id INT NOT NULL AUTO_INCREMENT,
    activity_1 VARCHAR (255) NOT NULL,
    activity_2 VARCHAR (255) NOT NULL,
    activity_3 VARCHAR (255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE timeslots (s
    id INT NOT NULL AUTO_INCREMENT,
    morning VARCHAR (255) NOT NULL,
    afternoon VARCHAR (255) NOT NULL,
    evening VARCHAR (255) NOT NULL,
    PRIMARY KEY (id)
)