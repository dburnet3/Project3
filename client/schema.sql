-- Drops the provision db if it exists currently --
DROP DATABASE IF EXISTS provision_db;
-- Creates the "provision" database --
CREATE DATABASE provision_db;

CREATE TABLE `users`
(
  `user_id` int PRIMARY KEY,
  `user_type` varchar(255),
  `user_name` varchar(255),
  `user_email` varchar(255),
  `password` varchar(255)
);

CREATE TABLE `activities`
(
  `activity_id` int PRIMARY KEY,
  `puc_id` int,
  `activity_1` varchar(255),
  `activity_2` varchar(255),
  `activity_3` varchar(255)
);

CREATE TABLE `timeslots`
(
  `timeslot_id` int PRIMARY KEY,
  `morning` varchar(255),
  `afternoon` varchar(255),
  `evening` varchar(255)
);

CREATE TABLE `puc`
(
  `puc_id` int PRIMARY KEY,
  `user_id` int,
  `activity_id` int,
  `puc_name` varchar(255)
);

CREATE TABLE `post`
(
  `post_id` int PRIMARY KEY,
  `user_id` int,
  `post_title` varchar(255),
  `post_body` varchar(255)
);

ALTER TABLE `timeslots` ADD FOREIGN KEY (`timeslot_id`) REFERENCES `activities` (`activity_id`);

ALTER TABLE `activities` ADD FOREIGN KEY (`activity_id`) REFERENCES `puc` (`puc_id`);

ALTER TABLE `puc` ADD FOREIGN KEY (`puc_id`) REFERENCES `users` (`user_id`);

ALTER TABLE `post` ADD FOREIGN KEY (`post_id`) REFERENCES `users` (`user_id`);
