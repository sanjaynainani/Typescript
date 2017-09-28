"use strict";

interface Printable {
  print () : void;
}

class Book {

  constructor (public title : string, 
               public length : number, // Printable pages
               public author : string,
               public text : string) { }

  print () : void {
    console.log(this.text);
  }

}


let printable : Printable
printable = new Book('Eugene Onegin', 132, 'Alexander Pushkin', 'Not planning fun . . . ');


const book : Book = new Book('1984', 222, 'Orwell', 'Perhaps one did not want to be love so much as understood.'),
  new_printable = <Printable> book;