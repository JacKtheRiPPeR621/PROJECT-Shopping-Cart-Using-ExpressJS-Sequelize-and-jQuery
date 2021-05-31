create database shopdb1;
CREATE USER 'shopper1'@'localhost' IDENTIFIED WITH mysql_native_password BY 'shoppass1';
GRANT ALL ON `shopdb1`.* TO 'shopper1'@'localhost';
FLUSH PRIVILEGES;