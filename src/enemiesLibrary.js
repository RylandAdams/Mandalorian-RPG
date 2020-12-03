class Enemies {
  constructor (id, health, armorTotal, weaponStrength, strength, precision, speed) {
    this.id = id;
    this.health = health;
    this.armorTotal = armorTotal;
    this.weaponStrength = weaponStrength;
    this.strength = strength;
    this.precision = precision;
    this.speed = speed;
  }
}

let stormTrooper = new Enemies ("Stormtrooper", 20, 5, 15, 2, 1, 2);
let battleDroid = new Enemies ("Battle droid", 10, 10, 10, 3, 2, 1);
let darkTrooper = new Enemies ("Dark Trooper", 30, 10, 20, 3, 3, 3);
let superBattleDroid = new Enemies ("Super Battle Droid", 30, 15, 20, 5, 4, 3);
let droidCommando = new Enemies ("Droid Commando", 35, 15, 20, 5, 6, 5);
let gaggleOfEwoks = new Enemies ("Gaggle of Ewoks", 10, 10, 10, 3, 2, 1);
let zabrak = new Enemies ("Zabrak", 30, 10, 20, 3, 3, 3);
let geonosian = new Enemies ("Geonosian", 30, 15, 20, 5, 4, 3, );
let dave = new Enemies ("Dave the Destroyer", 35, 15, 20, 5, 6, 7);
let ryland = new Enemies ("Ryland da Ripper", 45, 15, 20, 5, 6, 5);
let harrison = new Enemies ("Hardcore Harrison", 35, 15, 20, 8, 6, 5);
let joey = new Enemies ("Joey", 35, 15, 20, 5, 10, 5);
let taylor = new Enemies ("Taylor the Tenacious", 35, 15, 20, 5, 10, 5);
let jerrod = new Enemies ("Jerrod the Jarring", 35, 15, 20, 5, 10, 5);

// Enemies array
export default class EnemiesArr {
  constructor(){
    this.jerks = [stormTrooper, battleDroid, darkTrooper, superBattleDroid, droidCommando, dave, ryland, harrison, joey, taylor, jerrod, gaggleOfEwoks, zabrak, geonosian];
  }
}