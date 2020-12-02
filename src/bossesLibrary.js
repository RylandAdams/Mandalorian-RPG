export default function Bosses (id, health, armorTotal, weaponStrength, strength, precision, speed) {
  this.id = id;
  this.health = health;
  this.armorTotal = armorTotal;
  this.weaponStrength = weaponStrength;
  this.strength = strength;
  this.precision = precision;
  this.speed = speed;
}

let ig88 = new Bosses ("IG-88", 50, 20, 25, 6, 7, 6);
let sithInquistor = new Bosses ("Sith Inquistor", 60, 15, 30, 5, 7, 8);

// Boss array
let bossArray = [ig88, sithInquistor];