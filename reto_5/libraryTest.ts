import { Book } from '../reto_1/book';  
import { Library } from '../reto_3/Library';  

 let book1 = new Book("Introduccion a JavaScript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");


let libreria = new Library([book1], "Calle Mayor 72", "Jesús Martínez");



console.log(libreria.getaddress());
console.log()
console.log(libreria.getmanager());
console.log()
libreria.printDireccion()
console.log
console.log("numero de libros: ", libreria.getNumberofBooks());
console.log()

libreria.setaddress("Calle Villanueva de Gallego, nº 23");
libreria.setmanager("José Luis García");
console.log()

console.log("Nueva dirección: ", libreria.getaddress());
console.log("Nuevo nombre de bibliotecario: ", libreria.getmanager());





