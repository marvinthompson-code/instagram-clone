DROP DATABASE IF EXISTS instagram_clone_db;
CREATE DATABASE instagram_clone_db;

\c instagram_clone_db;

DROP TABLE IF EXISTS hashtags;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users;


CREATE TABLE users (
    id VARCHAR PRIMARY KEY,
    email VARCHAR UNIQUE,
    username VARCHAR,
    full_name VARCHAR,
    profile_picture VARCHAR,
    bio VARCHAR
);