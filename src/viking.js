// Soldier
class Soldier {
  constructor(h, s) {
    this.health = h;
    this.strength = s;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
  this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, h, s) {
    super(h, s);
    this.name = name;
  }
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(h,s) { 
      super(h,s); }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  /*should be a function
should receive 0 arguments
should make Saxon receiveDamage() equal to the strength of a Viking
should remove dead saxons from the army
should return result of calling receiveDamage() of a Saxon with the strength of a Viking*/

  vikingAttack() {
      //Aurélie's Code for personnal reminder & example
    ////pick a random viking
    //let aViking = Math.floor(Math.random() * this.vikingArmy.length);
    //let randomViking = this.vikingArmy[aViking];
    ////pick a random saxon
    //let aSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    //let randomSaxon = this.saxonArmy[aSaxon];
    //compare saxon.health vs viking.strength + remove dead saxon
    //let saxonDamage = randomSaxon.receiveDamage(randomViking.strength);
    //if (randomSaxon.health <= 0) {
    //  this.saxonArmy.splice(aSaxon, 1);
    //}
    //return saxonDamage;
  }

  saxonAttack() {}

  showStatus() {
    if ((war.this.saxonArmy = 0)) {
      return "Vikings have won the war of the century!";
    }
    /*should return "Vikings have won the war of the century!", if the Saxons array is empty
should return "Saxons have fought for their lives and survived another day...", if the Vikings array is empty
should return "Vikings and Saxons are still in the thick of battle.", if there are still both Vikings and Saxons*/
  }
}

// Saxon receiveDamage() equal to the strength of a Viking
