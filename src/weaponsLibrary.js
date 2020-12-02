export default function Weapons (id, weaponstrength, damagemulti, value) {
  this.id = id;
  this.weaponstrength = weaponstrength;
  this.damagemulti = damagemulti;
  this.value = value;
}

let e11Blaster = new Weapons("E-11 Blaster", 15, 1, 50);
let arcCaster = new Weapons("Arc Caster", 20, 1, 60);
let se14Blaster = new Weapons("SE-14 Blaster", 25, 1, 70);
let e5Blaster = new Weapons("E-5 Blaster", 10, 1, 40);
let dualWristBlaster = new Weapons("Dual Wrist Blaster", 20, 1, 60);
let tuskenCyclerRifle = new Weapons("Tusken Cycler Rifle", 25, 1, 50);
let acpArrayGun = new Weapons("ACP Array Gun", 15, 1, 40);
let dlt20ABlaster = new Weapons("DLT 20A Blaster", 20, 1, 50);
let gaderffii = new Weapons("Gaderffii", 15, 1, 50);
let gamoreanBattleAxe = new Weapons("Gamorean Battle Axe", 20, 1, 60);
let vibroBlades = new Weapons("Vibro Blades", 25, 1, 70);
let rodianCryogenWhip = new Weapons("Rodian Cryogen Whip", 10, 1, 40);
let thermalDetonator = new Weapons("Thermal Detonator", 20, 1, 50);
let flameThrower = new Weapons("Flame Thrower", 25, 1, 60);
let whistlingBirds = new Weapons("Whistling Birds", 35, 1, 80);

// weapons array
let weaponsArray = [e11Blaster, arcCaster, se14Blaster, e5Blaster, dualWristBlaster, tuskenCyclerRifle, acpArrayGun, dlt20ABlaster, gaderffii, gamoreanBattleAxe, vibroBlades, rodianCryogenWhip, thermalDetonator, flameThrower, whistlingBirds];
