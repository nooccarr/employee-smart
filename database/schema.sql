CREATE DATABASE employee_smart;

\c employee_smart;

DROP TABLE IF EXISTS employees CASCADE;

CREATE TABLE employees(
  id serial PRIMARY KEY NOT NULL UNIQUE,
  name varchar(50) NOT NULL,
  age integer NOT NULL,
  department varchar(20) NOT NULL
);

INSERT INTO employees(name, age, department)
VALUES
  ('Beyonce Knowles', 39, 'Music'),
  ('Ryan Reynolds', 44, 'Film'),
  ('Anne Hathaway', 38, 'Film'),
  ('Ki Hong Lee', 34, 'Film'),
  ('David Beckham', 45, 'Sports'),
  ('Camila Cabello', 23, 'Music'),
  ('LeBron James', 36, 'Sports'),
  ('Tiger Woods', 45, 'Sports'),
  ('Bruno Mars', 25, 'Music'),
  ('Robert De Niro', 77, 'Film'),
  ('Ariana Grande-Butera', 27, 'Music'),
  ('Serena Williams', 39, 'Sports');

-- psql < schema.sql