"use strict";


class Book {

  constructor (public title : string, 
               public length : number, // Printable pages
               public author : string) { }

}

class Article {

  constructor (public title : string,
               public length : number,
               public author : string) { }

}


let x : Book;
x = new Article('From JavaScript to TypeScript III', 6, 'Peleke')