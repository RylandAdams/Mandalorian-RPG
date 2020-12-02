// import Weapons from './weaponsLibrary.js';
// import Enemies from './enemiesLibrary.js';
// import Bosses from './bossesLibrary.js';
// import Armor from './armorLibrary.js';
import Locations from './locationsLibrary.js';

export default class Journey {
  constructor (difficulty) {
    this.difficulty = difficulty;
    this.room1;
    this.room2;
    this.room3;
    this.room4;
    this.room5;
    this.room6;
    this.room7;
  }
  
  journeyMission() {
    if (this.difficulty === 'easy') {
      console.log("this is an easy journey");
      let pick = Math.floor((Math.random() * (32 - 0)) + 0);
      //console.log(pick);
     // let theRoom = Locations.journeyArray[pick];
      let check = Locations.journeyArray[pick].id;
      console.log(check);

    } 
    // else if (this.difficulty === 'med') {
    //   this.maxHealth = Math.floor((Math.random() * (35 - 25)) + 25);
    //   this.strength = Math.floor((Math.random() * (5 - 2)) + 2);
    //   this.precision = Math.floor((Math.random() * (14 - 5)) + 5);
    //   this.intellect = Math.floor((Math.random() * (6 - 2)) + 2);
    //   this.speed = Math.floor((Math.random() * (12 - 7)) + 7); 
    // } else if (this.difficulty === 'hard') {
    //   this.maxHealth = Math.floor((Math.random() * (35 - 25)) + 25);
    //   this.strength = Math.floor((Math.random() * (10 - 6)) + 6);
    //   this.precision = Math.floor((Math.random() * (6 - 2)) + 2);
    //   this.intellect = Math.floor((Math.random() * (10 - 4)) + 4);
    //   this.speed = Math.floor((Math.random() * (3 - 1)) + 1); 
    // }
    // this.currentHealth = this.maxHealth;
  }
}