import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Mandalorian from './character.js';
import startGame from './game-nav.js';
$;

let characterName = 'Mando';
let selectedClass = 'Ranged';
let player = new Mandalorian(characterName, selectedClass);

// export features declared earlier
export { player };

// Generates stats in a range based on class
player.getStats();
// Gives base equipment
player.getStarterEquip();

//module.exports.player = player;
startGame(player);
