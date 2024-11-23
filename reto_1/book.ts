export class Book {
    public title: string;
    public nPages: number;
    public isbn: string;
    public author: string;
    public editorial: string;


constructor(title: string, nPages: number, isbn: string, author: string, editorial: string) {
    this.title = title;
    this.nPages = nPages;
    this.isbn = isbn;
    this.author = author;
    this.editorial = editorial;
}

public gettitle(): string {
    return this.title;
}

public settitle(title:string):void{
    this.title = title;
}
 public getnPages(): number{
    return this.nPages;
 }

public setnPages(nPages:number):void{
      this.nPages = nPages;
}

public getisbn():string{
    return this.isbn;
}
public setisbn(isbn:string):void{
    this.isbn = isbn;
}

public getauthor(): string {
    return this.author;
}
public setauthor(author:string):void{
    this.author = author;
}

public geteditorial():string{
    return this.editorial;
}
public seteditorial(editorial:string):void{
    this.editorial = editorial;
}

public printDireccion ():void{
    console.log(this.toString())
}
private  toString():string{

    return "Title - Introducion a Java script\n" +
    "Number of Pages - 233\n" +
    "ISBN - 2344433 - BC2333\n" +
    "Autor - Josep Smiths\n" +
    "Editorial - Now Editions\n";
}



}

