# php-to-nodejs

A simple method to  execute NodeJS scripts in PHP with sockets protocol


##Function
**sendScript** 



##Args 
* ip,port - Server of NodeJS
* timeout - Timeout to connection
* code - Javascript Code


##Example
```php
sendScript('var b = 1+3; console.log(b);');
```
