import { Book } from '../reto_1/book';  


let libro = new Book("Introducción a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");

console.log(libro.printDireccion());
console.log();

console.log("Título:", libro.gettitle());
console.log("Número de páginas:", libro.getnPages());
console.log("ISBN:", libro.getisbn());
console.log("Autor:", libro.getauthor());
console.log("Editorial:", libro.geteditorial());
console.log();

libro.settitle("Cambio de titulo");
libro.setnPages(2500);
libro.setisbn("978-1234567890");
libro.setauthor("Pedro Carrasco");
libro.seteditorial("Editorial Anaya");

console.log("Titulo nuevo:", libro.gettitle());
console.log("Numero de páginas:", libro.getnPages());
console.log("ISBN:", libro.getisbn());
console.log("Autor:", libro.getauthor());
console.log("Editorial:", libro.geteditorial());