/**
 * Execute this file from the command line by typing:
 *   mysql -u root < schema.sql
 */

DROP DATABASE IF EXISTS howdy;
CREATE DATABASE howdy;

USE howdy;

-- CREATE TABLE items (
--   id int NOT NULL AUTO_INCREMENT,
--   name varchar(255) NOT NULL,
--   description varchar(50) NOT NULL,
--   PRIMARY KEY (id)
-- );
CREATE TABLE users (
  id int PRIMARY KEY AUTO_INCREMENT,
  name varchar(255),
  location varchar(255),
  character_id int
);

CREATE TABLE messages (
  id int PRIMARY KEY AUTO_INCREMENT,
  user_id int,
  message varchar(255),
  created_at timestamp,
  room_id int
);

CREATE TABLE rooms (
  id int PRIMARY KEY AUTO_INCREMENT,
  name varchar(60),
  host_id int,
  location varchar(255),
  radius int,
  details varchar(255),
  date date,
  start time,
  end time
);
 
CREATE TABLE characters (
  id int PRIMARY KEY AUTO_INCREMENT,
  name varchar(255)
 );

-- ALTER TABLE rooms FOREIGN KEY (user_id) REFERENCES users (id);
-- ALTER TABLE rooms FOREIGN KEY (id) REFERENCES messages (room_id);
-- ALTER TABLE rooms FOREIGN KEY (host_id) REFERENCES users (id);
-- ALTER TABLE messages FOREIGN KEY (user_id) REFERENCES users (id);
-- ALTER TABLE users FOREIGN KEY (location) REFERENCES rooms (host_location);
-- ALTER TABLE users FOREIGN KEY (character_id) REFERENCES characters (id);

INSERT INTO messages (message) VALUES ('hi');
INSERT INTO rooms (name, host_id, location, radius, details, date, start, end) VALUES ('Pokemon Party', 1, 'New Orleans', 500, 'This is a detail of Pokemon Party', '2020-07-20', '00:00:00', '23:59:59');
INSERT INTO rooms (name, host_id, location, radius, details, date, start, end) VALUES ('League Party', 2, 'Summoners Rift', 400, 'This is a detail of League Party', '2020-06-20', '00:00:00', '23:59:59');