-- DROP DATABASE IF EXISTS instagram_clone_db;
-- CREATE DATABASE instagram_clone_db;

-- \c instagram_clone_db;

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

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    post_image_url VARCHAR,
    owner_id VARCHAR REFERENCES users(id) ON DELETE CASCADE,
    caption VARCHAR,
    time_stamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE hashtags (
    id SERIAL PRIMARY KEY,
    owner_id VARCHAR REFERENCES users(id) ON DELETE CASCADE,
    post_id INT REFERENCES posts(id) ON DELETE CASCADE,
    body VARCHAR
);

CREATE TABLE likes (
    id SERIAL PRIMARY KEY,
    liker_id VARCHAR REFERENCES users(id) ON DELETE CASCADE,
    post_id INT REFERENCES posts(id) ON DELETE CASCADE, 
    CONSTRAINT UC_like UNIQUE(liker_id, post_id)
);

