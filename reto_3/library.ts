    import { Book } from '../reto_1/book';  


    export class Library {
        public books: Book[];
        public address: string;
        public manager: string;

        constructor(books: Book[], address: string, manager: string) {
            this.books = books;
            this.address = address;
            this.manager = manager;
        }

        public getaddress(): string {
            return this.address;
        }

        public setaddress(address: string): void {
            this.address = address;
        }
    
        public getmanager(): string {
        
            return this.manager;
        }
        
        public setmanager(manager: string): void {
            this.manager = manager;
        }

        public printDireccion ():void{
            console.log(this.toString())
        }
        private  toString():string{

            return "Book1:\n" +
            "Title - Introducion a Java script\n" +
            "Number of Pages - 233\n" +
            "ISBN - 2344433 - BC2333\n" +
            "Autor - Josep Smiths\n" +
            "Editorial - Now Editions\n";
        }

        public getNumberofBooks():number{
            return this.books.length;

        }
        public findByAuthor(author: string): Book[] {

            let arrayLibros : Book[] = [];

            for (let i = 0; i < this.books.length; i++) {
                if (this.books[i].getauthor() == author) {
                    arrayLibros.push(this.books[i]);
            }
            }
            return arrayLibros;
        }
        

    }
