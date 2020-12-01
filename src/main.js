import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import './src/character.js';

let characterName = "Mando";
let selectedClass = "Ranged"
let newCharacter = new Mandalorian (characterName,selectedClass);

newCharacter.getStats();