"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    Book.prototype.gettitle = function () {
        return this.title;
    };
    Book.prototype.settitle = function (title) {
        this.title = title;
    };
    Book.prototype.getnPages = function () {
        return this.nPages;
    };
    Book.prototype.setnPages = function (nPages) {
        this.nPages = nPages;
    };
    Book.prototype.getisbn = function () {
        return this.isbn;
    };
    Book.prototype.setisbn = function (isbn) {
        this.isbn = isbn;
    };
    Book.prototype.getauthor = function () {
        return this.author;
    };
    Book.prototype.setauthor = function (author) {
        this.author = author;
    };
    Book.prototype.geteditorial = function () {
        return this.editorial;
    };
    Book.prototype.seteditorial = function (editorial) {
        this.editorial = editorial;
    };
    Book.prototype.printDireccion = function () {
        console.log(this.toString());
    };
    Book.prototype.toString = function () {
        return "Title - Introducion a Java script\n" +
            "Number of Pages - 233\n" +
            "ISBN - 2344433 - BC2333\n" +
            "Autor - Josep Smiths\n" +
            "Editorial - Now Editions\n";
    };
    return Book;
}());
exports.Book = Book;
