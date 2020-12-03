import Journey from './journey.js';

export default function startGame(player) {
  Journey;
  console.log('You are currently in the tutorial...');
  console.log("This is the way...");
  console.log("You are a Mandalorian, a warrior and a pilgrim. There are others, but none quite like you. Some fight for glory and honor, some fight for profit and power, but you fight for something else... Something important... Something lost...");
  console.log("Stahr Whars: The Maladorian (copywrite pending) is a text based role playing game. The role you play is of a Mandelorian bounty hunter. As you play you will read from your screen a description of the area, room, or 'scene' that is being set. Based on that description you will then be prompted to select an option from the console by typing in and entering the number value for that option. (Example: for option 1, you would type '1' into the console and press 'enter'). Once you have selected that option you will progress through that event, whether it's moving to a new location or launching an attack on an enemy.");
  console.log(`What would you like to do?`);
  console.log("-----------------------------");
  console.log('1 - Go to Cantina');
  player.currentLocation = prompt(`Where would you like to go ${player.charName}?`);
  switch(player.currentLocation) {
  case "1": {
    player.health = player.maxHealth;
    console.log(`You walk into a nearly empty cantina. There is a bartender behind the counter, wiping a glass. A bounty board with several faces, some familiar, hangs on the back wall. There are tables and chairs throughout the room, none of which look all that comfortable, but the booze looks like it drinks well.`);
    console.log(`What would you like to do?`);
    console.log("-----------------------------");
    console.log("1. Approach the man behind the bar and ask about rumors and news. (Story Mission)");
    console.log("2. Checkout the bounty board. (Bounty Mission)");
    console.log("3. Gather your things and step out to explore. (Journey Mission)");
    player.currentLocation = prompt(`What would you like to do next ${player.charName}?`);
  }
    switch(player.currentLocation) {
    case "1": {
      console.log("choice 1");
      break;
    }
    case "2": {
      console.log("choice 2");
      break;
    }
    case "3": {
      console.log('You venture back to your ship, to set out on a journey');
      console.log(`What would you like to do ${player.charName}?`);
      console.log("-----------------------------");
      console.log("1. A quick jot to a near star. (Easy Journey)");
      console.log("2. A journey for normally experienced bounty hunters. (Medium Journey)");
      console.log("3. A lengthy and grueling adventure, are you sure you're up to it? (Hard Journey)");
      player.currentLocation = prompt(`What difficulty do you want to choose, ${player.charName}?`);
      switch(player.currentLocation) {
      case "1": {
        let difficulty = 'easy';
        let easyjourney = new Journey(difficulty);
        easyjourney.journeyMission();
        break;
      }
      case "2":{
        let difficulty = 'med';
        let medjourney = new Journey(difficulty);
        medjourney.journeyMission();
        break;
      }
      case "3":{
        let difficulty = 'hard';
        let hardjourney = new Journey(difficulty);
        hardjourney.journeyMission();
        break;
      }
      }
    }
    }
  }
}