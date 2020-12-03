// import Weapons from './weaponsLibrary.js';
// import Enemies from './enemiesLibrary.js';
// import Bosses from './bossesLibrary.js';
// import Armor from './armorLibrary.js';
import EnemiesArr from './enemiesLibrary.js';
import JourneyArr from './locationsLibrary.js';
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
    if (this.difficulty === 'easy') { // this is all the code for EASY Journey ---------------------
      let journeyArray = new JourneyArr();
      let pick1 = Math.floor((Math.random() * (journeyArray.all.length - 0)) + 0);
      let room1 = journeyArray.all[pick1];
      let enemiesArray = new EnemiesArr();
      let dudes1 = Math.floor((Math.random() * (enemiesArray.jerks.length - 0)) + 0);
      let enemy1 = enemiesArray.jerks[dudes1];
      console.log(room1.id);
      console.log(room1.description);
      console.log(enemy1.id);
      console.log("choices");
      //all the other actions in room 
      //leave to go to next room 
      let pick2 = Math.floor((Math.random() * (journeyArray.all.length - 0)) + 0);
      let room2 = journeyArray.all[pick2];
    
      let dudes2 = Math.floor((Math.random() * (enemiesArray.jerks.length - 0)) + 0);
      let enemy2 = enemiesArray.jerks[dudes2];

      console.log(room2.id);
      console.log(room2.description);
      console.log(enemy2.id);
      console.log("choices");
      //all the other actions in room 
      //leave to go to next room
      
      let pick3 = Math.floor((Math.random() * (journeyArray.all.length - 0)) + 0);
      let room3 = journeyArray.all[pick3];
    
      let dudes3 = Math.floor((Math.random() * (enemiesArray.jerks.length - 0)) + 0);
      let enemy3 = enemiesArray.jerks[dudes3];

      console.log(room3.id);
      console.log(room3.description);
      console.log(enemy3.id);
      console.log("choices");

    } 
    else if (this.difficulty === 'med') { // this is all the code for MED Journey ---------------------
      let journeyArray = new JourneyArr();
      let pick1 = Math.floor((Math.random() * (journeyArray.all.length - 0)) + 0);
      let room1 = journeyArray.all[pick1];

      console.log(room1.id);
      console.log(room1.description);
      console.log("choices");
      //all the other actions in room 
      //leave to go to next room 
      let pick2 = Math.floor((Math.random() * (journeyArray.all.length - 0)) + 0);
      let room2 = journeyArray.all[pick2];

      console.log(room2.id);
      console.log(room2.description);
      console.log("choices");
      //all the other actions in room 
      //leave to go to next room
      
      let pick3 = Math.floor((Math.random() * (journeyArray.all.length - 0)) + 0);
      let room3 = journeyArray.all[pick3];

      console.log(room3.id);
      console.log(room3.description);
      console.log("choices");
      //all the other actions in room 
      //leave to go to next room
      
      let pick4 = Math.floor((Math.random() * (journeyArray.all.length - 0)) + 0);
      let room4 = journeyArray.all[pick4];

      console.log(room4.id);
      console.log(room4.description);
      console.log("choices");
      //all the other actions in room 
      //leave to go to next room
      
      let pick5 = Math.floor((Math.random() * (journeyArray.all.length - 0)) + 0);
      let room5 = journeyArray.all[pick5];

      console.log(room5.id);
      console.log(room5.description);
      console.log("choices");
      //all the other actions in room 
      //leave to go to next room
      
    } else if (this.difficulty === 'hard') { // this is all the code for HARD Journey ---------------------
      let journeyArray = new JourneyArr();
      let pick1 = Math.floor((Math.random() * (journeyArray.all.length - 0)) + 0);
      let room1 = journeyArray.all[pick1];

      console.log(room1.id);
      console.log(room1.description);
      console.log("choices");
      //all the other actions in room 
      //leave to go to next room 
      let pick2 = Math.floor((Math.random() * (journeyArray.all.length - 0)) + 0);
      let room2 = journeyArray.all[pick2];

      console.log(room2.id);
      console.log(room2.description);
      console.log("choices");
      //all the other actions in room 
      //leave to go to next room
      
      let pick3 = Math.floor((Math.random() * (journeyArray.all.length - 0)) + 0);
      let room3 = journeyArray.all[pick3];

      console.log(room3.id);
      console.log(room3.description);
      console.log("choices");
      //all the other actions in room 
      //leave to go to next room
      
      let pick4 = Math.floor((Math.random() * (journeyArray.all.length - 0)) + 0);
      let room4 = journeyArray.all[pick4];

      console.log(room4.id);
      console.log(room4.description);
      console.log("choices");
      //all the other actions in room 
      //leave to go to next room
      
      let pick5 = Math.floor((Math.random() * (journeyArray.all.length - 0)) + 0);
      let room5 = journeyArray.all[pick5];

      console.log(room5.id);
      console.log(room5.description);
      console.log("choices");

      let pick6 = Math.floor((Math.random() * (journeyArray.all.length - 0)) + 0);
      let room6 = journeyArray.all[pick6];

      console.log(room6.id);
      console.log(room6.description);
      console.log("choices");
      //all the other actions in room 
      //leave to go to next room
      
      let pick7 = Math.floor((Math.random() * (journeyArray.all.length - 0)) + 0);
      let room7 = journeyArray.all[pick7];

      console.log(room7.id);
      console.log(room7.description);
      console.log("choices");
    }
  }
}