export default function Enemies (id, health, armorTotal, weaponStrength, strength, precision, speed) {
  this.id = id;
  this.health = health;
  this.armorTotal = armorTotal;
  this.weaponStrength = weaponStrength;
  this.strength = strength;
  this.precision = precision;
  this.speed = speed;
}

let stormTrooper = new Enemies ("Stormtrooper", 20, 5, 15, 2, 1, 2);
let battleDroid = new Enemies ("Battle droid", 10, 10, 10, 3, 2, 1);
let darkTrooper = new Enemies ("Dark Trooper", 30, 10, 20, 3, 3, 3);
let superBattleDroid = new Enemies ("Super Battle Droid", 30, 15, 20, 5, 4, 3, );
let droidCommando = new Enemies ("Droid Commando", 35, 15, 20, 5, 6, 5);

// Enemies array
let enemiesArray = [stormTrooper, battleDroid, darkTrooper, superBattleDroid, droidCommando];