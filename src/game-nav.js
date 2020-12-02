import Journey from './journey.js';
export default function startGame(player) {
  if (player.currentLocation === "tutorial"){  
    console.log('creed');
    let difficulty = 'easy';
    let easyjourney = new Journey(difficulty);
    easyjourney.journeyMission();
    console.log('rules');
    console.log('options');
  } 
  // else if(this.currentLocation === "cantina"){
  //     console.log(`You walk into a nearly empty cantina. There is a bartender behind the counter, wiping a glass. A bounty board with several faces, some familiar, hangs on the back wall. There are tables and chairs throughout the room, none of which look all that comfortable, but the booze looks like it drinks well.`);
  //     console.log(`What would you like to do?`);
  //     console.log("-----------------------------");
  //     console.log("1. Approach the man behind the bar and ask about rumors and news. (Story Mission)");
  //     console.log("2. Checkout the bounty board. (Bounty Mission)");
  //     console.log("3. Gather your things and step out to explore. (Journey Mission)");
  //     // if (userInput === "1") {
  //     //   this.currentLocation = "story"; 
  //     // } else if (userInput === "2") {
  //     //   this.currentLocation = "bounty";
  //     // } else if (userInput === "3") {
  //     //   this.currentLocation = "journey";
  //     // }
  //   } else if(this.currentLocation === "journey"){
      
      // if (this.currentLocation === "easy-journey"){   //THIS CHUNK WORKS//
      //   let difficulty = 'easy';
      //   let easyjourney = new Journey(difficulty);
      //   easyjourney.journeyMission();
  //     } else if(this.currentLocation === "med-journey"){
  //       let difficulty = 'med';
  //       let medjourney = new Journey(difficulty);
  //       medjourney.journeyMission();
  //     } else if(this.currentLocation === "hard-journey"){
  //       let difficulty = 'hard';
  //       let hardjourney = new Journey(difficulty);
  //       hardjourney.journeyMission();
  //   }else if(this.currentLocation === "market"){
      
  //   } else if(this.currentLocation === "bounty"){
  //     bountyMission();
  //   } else if(this.currentLocation === "story"){
  //     if(beskar >= 50){
  //       storyMission();
  //     } else {
  //           console.log ("you dont have enough beskar");
  //     }
  //   }
  // }
}
