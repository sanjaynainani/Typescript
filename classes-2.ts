"use strict";

interface User {
    
    name : string;
    email : string;
    avatar? : Object;

  
  print () : void;
}

class RegisteredUser implements User {

  constructor (public name : string, public email : string) { }

  print () : void {
    console.log(`Name: ${this.name} | Email: ${this.email} | No avatar.`);
  }

}

class ImageUser implements User {

  constructor (public name : string,
               public email : string,
               public avatar : Object) { }

  print () : void {
    console.log(`Name: ${this.name} | Email: ${this.email} | Has avatar.`);
  }

}

const user = new RegisteredUser('Sanjay', 'sanjay@gmail.com');
user.print();