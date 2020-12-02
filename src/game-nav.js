export default function startGame() {
  let userInput = "2"; // placeholder
  let creed = "This is the way...";
  let intro = "You are a Mandalorian, a warrior and a pilgrim. There are others, but none quite like you. Some fight for glory and honor, some fight for profit and power, but you fight for something else... Something important... Something lost...";
  let howToPlay = "Stahr Whars: The Maladorian (copywrite pending) is a text based role playing game. The role you play is of a Mandelorian bounty hunter. As you play you will read from your screen a description of the area, room, or 'scene' that is being set. Based on that description you will then be prompted to select an option from the console by typing in and entering the number value for that option. (Example: for option 1, you would type '1' into the console and press 'enter'). Once you have selected that option you will progress through that event, whether it's moving to a new location or launching an attack on an enemy.";
  let tutorialCombat = "You've travelled many lightyears searching for purpose... searching for home. But even the hardest warrior must stop for fuel and to ";

  if (this.currentLocation === "tutorial"){
    console.log(creed);
    console.log(intro);
    console.log(howToPlay);
    console.log(tutorialCombat);
  } else if(this.currentLocation === "cantina"){
    console.log(`You walk into a nearly empty cantina. There is a bartender behind the counter, wiping a glass. A bounty board with several faces, some familiar, hangs on the back wall. There are tables and chairs throughout the room, none of which look all that comfortable, but the booze looks like it drinks well.`);
    console.log(`What would you like to do?`);
    console.log("-----------------------------");
    console.log("1. Approach the man behind the bar and ask about rumors and news. (Story Mission)");
    console.log("2. Checkout the bounty board. (Bounty Mission)");
    console.log("3. Gather your things and step out to explore. (Journey Mission)");
    if (userInput === "1") {
      this.currentLocation = "story";
    } else if (userInput === "2") {
      this.currentLocation = "bounty";
    } else if (userInput === "3") {
      this.currentLocation = "journey";
    }
  } else if(this.currentLocation === "journey"){
    
    if (this.currentLocation === "easy-journey"){
      console.log("journeyMissionEasy");
    } else if(this.currentLocation === "med-journey"){
      console.log("journeyMissionMed");
    } else if(this.currentLocation === "hard-journey"){
      console.log("journeyMissionHard");
    }else if(this.currentLocation === "market"){
      console.log("Under Construction! *hard hat*");
    } else if(this.currentLocation === "bounty"){
      console.log("bountyMission");
    } else if(this.currentLocation === "story"){
      if(this.beskar >= 50){
        console.log("storyMission");
      } else {
        console.log ("you dont have enough beskar");
      }
    }
  }
}
