import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Mandalorian from './character.js';
import startGame from './game-nav.js';
$;

// - CREATE CHARACTER - //
// SET NAME
let characterName = prompt(`What is your name?`);
let selectedClass;

// SELECT CLASS
console.log('1. Balanced ~ All around decent');
console.log('2. Ranged ~ More power in ranged situations');
console.log('3. Melee ~ More power in close combat');
let selectClassOption = prompt(
	`Well ${characterName}, what do you specialize in?`
);

if (selectClassOption === '1') {
	selectedClass = 'Balanced';
} else if (selectClassOption === '2') {
	selectedClass = 'Ranged';
} else if (selectClassOption === '3') {
	selectedClass = 'Melee';
}

let player = new Mandalorian(characterName, selectedClass);

console.log(player);

// export features declared earlier
export { player };

// Generates stats in a range based on class
player.getStats();

// Gives base equipment
player.getStarterEquip();

//module.exports.player = player;
startGame(player);
