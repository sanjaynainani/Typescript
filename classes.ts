class Fish {

    constructor (public name : string) { }

   
    cook () : void { }

}

class SushiFish extends Fish {

    constructor ( name : string, cooked : boolean = false ) {
        super(name);
    }

  cook () : void { 
      console.log('Let Me Cook something')
  }

}

class CookedFish extends Fish {

  constructor (name : string, cooked : boolean = true) {
      super (name);
  }

}

const tuna = new Fish('Tuna');
const dinner = new CookedFish('Halibut');

tuna.cook(); 
dinner.cook(); 
