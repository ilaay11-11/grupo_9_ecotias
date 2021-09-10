CREATE DATABASE ecotias;
USE ecotias;

CREATE TABLE category(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(60) NOT NULL
);
CREATE TABLE maker(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(60) NOT NULL
);
CREATE TABLE productos(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    description VARCHAR(200) NOT NULL,
    category_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (category_id) REFERENCES category(id),
    image VARCHAR(200),
    price DOUBLE DEFAULT 0 NOT NULL,
    maker_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (maker_id) REFERENCES maker(id)   
);
CREATE TABLE usuarios(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(40) NOT NULL,
    password VARCHAR(30) NOT NULL,
    image VARCHAR(200)
    
);
CREATE TABLE carrito(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    num_items INT UNSIGNED NOT NULL,
    precio_total DOUBLE DEFAULT 0 NOT NULL
);

CREATE TABLE producto_carrito(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    carrito_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (carrito_id) REFERENCES carrito(id),
    producto_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);