"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    Library.prototype.getaddress = function () {
        return this.address;
    };
    Library.prototype.setaddress = function (address) {
        this.address = address;
    };
    Library.prototype.getmanager = function () {
        return this.manager;
    };
    Library.prototype.setmanager = function (manager) {
        this.manager = manager;
    };
    Library.prototype.printDireccion = function () {
        console.log(this.toString());
    };
    Library.prototype.toString = function () {
        return "Book1:\n" +
            "Title - Introducion a Java script\n" +
            "Number of Pages - 233\n" +
            "ISBN - 2344433 - BC2333\n" +
            "Autor - Josep Smiths\n" +
            "Editorial - Now Editions\n";
    };
    Library.prototype.getNumberofBooks = function () {
        return this.books.length;
    };
    Library.prototype.findByAuthor = function (author) {
        var arrayLibros = [];
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].getauthor() == author) {
                arrayLibros.push(this.books[i]);
            }
        }
        return arrayLibros;
    };
    return Library;
}());
exports.Library = Library;
