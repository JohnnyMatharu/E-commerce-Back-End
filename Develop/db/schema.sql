-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

USE ecommerce_db;

-- test, Database has been created on mysql, mock table is here to test
-- file seeded and sourced, mysql> source develop/db/schema.sql
-- mysql> SELECT * FROM test;      Empty set (0.00 sec)
CREATE TABLE test (
  roles_id INTEGER AUTO_INCREMENT PRIMARY KEY,
  job_title VARCHAR(30) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  salary INTEGER(30) NOT NULL
);