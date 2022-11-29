class Armor {
	constructor(id, armorRate, value) {
		this.id = id;
		this.armorRate = armorRate;
		this.value = value;
	}
}

// - Armor Library - //

let starterArmor = new Armor('Starting Armor', 3, 1);
let plastoid = new Armor('Plastoid', 5, 50);
let phrikPlating = new Armor('Phrik plating', 10, 100);
let baktoid = new Armor('Baktoid', 10, 100);
let reenforcedBaktoid = new Armor('Re-Enforced Baktoid', 15, 150);
let beskarPlate = new Armor('Beskar Plate', 25, 250);

export default class ArmorArr {
	constructor() {
		this.armorArray = [
			plastoid,
			phrikPlating,
			baktoid,
			reenforcedBaktoid,
			beskarPlate,
		];
		this.starterArmor = starterArmor;
	}
}
