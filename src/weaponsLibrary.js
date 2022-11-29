class Weapons {
	constructor(id, type, weaponStrength, damageMulti, value) {
		this.id = id;
		this.type = type;
		this.weaponStrength = weaponStrength;
		this.damageMulti = damageMulti;
		this.value = value;
	}
}

// - Weapons Library - //

let starterBlaster = new Weapons('Starting Blaster', 'ranged', 10, 1, 1);
let e11Blaster = new Weapons('E-11 Blaster', 'ranged', 15, 1, 50);
let arcCaster = new Weapons('Arc Caster', 'ranged', 20, 1, 60);
let se14Blaster = new Weapons('SE-14 Blaster', 'ranged', 25, 1, 70);
let e5Blaster = new Weapons('E-5 Blaster', 'ranged', 10, 1, 40);
let dualWristBlaster = new Weapons('Dual Wrist Blaster', 'ranged', 20, 1, 60);
let tuskenCyclerRifle = new Weapons('Tusken Cycler Rifle', 'ranged', 25, 1, 50);
let acpArrayGun = new Weapons('ACP Array Gun', 'ranged', 15, 1, 40);
let dlt20ABlaster = new Weapons('DLT 20A Blaster', 'ranged', 20, 1, 50);
let starterDagger = new Weapons('Starting Dagger', 'melee', 10, 1, 1);
let gaderffii = new Weapons('Gaderffii', 'melee', 15, 1, 50);
let gamoreanBattleAxe = new Weapons('Gamorean Battle Axe', 'melee', 20, 1, 60);
let vibroBlades = new Weapons('Vibro Blades', 'melee', 25, 1, 70);
let rodianCryogenWhip = new Weapons('Rodian Cryogen Whip', 'melee', 10, 1, 40);
let starterAbility = new Weapons('Starter Ability', 'ability', 15, 1, 1);
let thermalDetonator = new Weapons('Thermal Detonator', 'ability', 20, 1, 50);
let flameThrower = new Weapons('Flame Thrower', 'ability', 25, 1, 60);
let whistlingBirds = new Weapons('Whistling Birds', 'ability', 35, 1, 80);

// - Weapons Array - //
export default class WeaponsArr {
	constructor() {
		this.blasters = [
			e11Blaster,
			arcCaster,
			se14Blaster,
			e5Blaster,
			dualWristBlaster,
			tuskenCyclerRifle,
			acpArrayGun,
			dlt20ABlaster,
			gaderffii,
			gamoreanBattleAxe,
			vibroBlades,
			rodianCryogenWhip,
			thermalDetonator,
			flameThrower,
			whistlingBirds,
		];
		this.starterAbility = starterAbility;
		this.starterDagger = starterDagger;
		this.starterBlaster = starterBlaster;
	}
}
