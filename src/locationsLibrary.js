class Locations {
	constructor(id, description) {
		this.id = id;
		this.description = description;
	}
}

// - Locations Library - //
let shipBridge = new Locations(
	'Bridge',
	'You enter the bridge of a YJX-1200 Heavy Freighter, it is surprisingly devoid of crew members. The control panels indicate it is running on auto-pilot'
);

let shipCargoBay = new Locations(
	'Cargo Bay',
	'Stepping into the cargo bay, you immediately notice that something feels off. The bay is mostly open aside from a few shipping containers, you scan for threats'
);

let shipEngineering = new Locations(
	'Engineering',
	'Everything appears to be functioning normally. There are a few places to take cover here, better check to see if anyone else had the same idea'
);

let shipMessHall = new Locations(
	'Mess Hall',
	"It's not meal time now, so the mess hall is quiet.... to quiet"
);

let shipNarrowCorridor = new Locations(
	'Narrow Corridor',
	'No where to hide here. Better move quickly, lest you get caught in a close quarters fight'
);

let shipWideCorridor = new Locations(
	'Wide Corridor',
	'Well lit and plenty of room to move around here in a fight. Still... no cover. Best not to linger'
);

let shipMedbay = new Locations(
	'Medbay',
	'Seemingly empty, surprising for a ship of this size. But lots of places for an enemy to hide'
);

let shipCrewQuarters = new Locations(
	'Crew Quarters',
	'Where is everyone? The crew quarters should at least have a few crew members sleeping. Wait... whats in that bunk!?'
);

let baseControlRoom = new Locations(
	'Control Room',
	"A good place to gauge what's going on in this base"
);

let baseStorage = new Locations(
	'Storage',
	'Nothing here but carefully organized crates of supplies. Better scan for threats, just in case'
);

let baseArmory = new Locations(
	'Armory',
	"Guns, lots of guns. You'd have to be a fool to take on a Mandolorian with this old junk. Definitely a bad place to get into a firefight though"
);

let baseRange = new Locations(
	'Range',
	"A firing range? With my accuracy there's no need to practice. Still I could shot a few targets while I'm here to let off some steam"
);

let baseVehicleLot = new Locations(
	'Vehicle Lot',
	'Just a few basic speeders laying around. Wait... is that an AT-ST back there?'
);

let baseWatchTower = new Locations(
	'Watch Tower',
	'Oh the things you could hit with a sniper rifle from up here. Hopefully no one else had the same idea'
);

let baseWall = new Locations(
	'Wall',
	'The perimeter wall. But no cameras, or weaponary? Why would they leave themselves open to attack. Hmmm suspicious'
);

let baseBarracks = new Locations(
	'Barracks',
	'At first glance you see no ones here...but where ever they went they sure were in a hurry'
);

let hideoutEntrance = new Locations(
	'Entrance',
	'The entrance has a looming presence, you could fit a whole Rancor through it.'
);

let hideoutDarkCorridor = new Locations(
	'Dark Corridor',
	'Better kick on the lights, luckily your visor can see through many spectrums, cutting through the darkness.'
);

let hideoutHumidHall = new Locations(
	'Humid Hall',
	'As you enter your lense briefly fogs up. Why would anyone willingly sit in a hot wet room?'
);

let hideoutStorage = new Locations(
	'Storage',
	'The shelfing spans from floor to ceiling...What could be contained within all these boxes'
);

let hideoutArmory = new Locations(
	'Armory',
	'This crude attempt at an armory looks to be more like a scrap yard for unwanted weapons parts. Its hard to imagine any of these weapons work.'
);

let hideoutLargeChamber = new Locations(
	'Large Chamber',
	'Taking a glance around its hard to say with any certainty this chamber is empty. There are too many possible hidding spots.'
);

let hideoutSmallChamber = new Locations(
	'Small Chamber',
	'This chamber doesnt seem to be very large. The single glowing lamp in the center lights it sufficiently enough.'
);

let hideoutSeceretTunnel = new Locations(
	'Secret Tunnel',
	'Perhaps this is a way out, or perhaps it leads to hidden treasures. As long as its not a cave spider nest.'
);

let wildsSwamp = new Locations(
	'Swamp',
	'Watch you step, this is not the place to be bogged down.'
);

let wildsThickFoliage = new Locations(
	'Thick Foliage',
	'The dense vegitation could hide a myriad of surprises.'
);

let wildsRiverCrossing = new Locations(
	'River Crossing',
	'This looks as good a point as any to cross. Though youll be exposed for a little.'
);

let wildsTallGrass = new Locations(
	'Tall Grass',
	'The Tall grass sways in the wind... it will do well to hide your, or anyone elses movements.'
);

let wildsRockOutcropping = new Locations(
	'Rock Outcropping',
	'The rock formations present many great spots for cover. Perhaps they also conceal a threat ready to pounce.'
);

let wildsOpenMeadow = new Locations(
	'Open Meadow',
	'Before you lays an open patch...theres no cover here...better tread lightly.'
);

let wildsBeach = new Locations(
	'Beach',
	'The sand crunchs beneath your boots. The gentle wave crashing almost pulls you from the moment.'
);

let wildsTallPeak = new Locations(
	'Tall Peak',
	'Having made your way to the top of a nearby Mountain, you scan the horizon for your target.'
);

// - Array Of Places - //

export default class JourneyArr {
	constructor() {
		this.all = [
			shipBridge,
			shipCargoBay,
			shipEngineering,
			shipMessHall,
			shipNarrowCorridor,
			shipWideCorridor,
			shipEngineering,
			shipMedbay,
			shipCrewQuarters,
			baseControlRoom,
			baseStorage,
			baseArmory,
			baseRange,
			baseVehicleLot,
			baseWatchTower,
			baseWall,
			baseBarracks,
			hideoutEntrance,
			hideoutDarkCorridor,
			hideoutHumidHall,
			hideoutStorage,
			hideoutArmory,
			hideoutLargeChamber,
			hideoutSmallChamber,
			hideoutSeceretTunnel,
			wildsSwamp,
			wildsThickFoliage,
			wildsRiverCrossing,
			wildsTallGrass,
			wildsRockOutcropping,
			wildsOpenMeadow,
			wildsBeach,
			wildsTallPeak,
		];
	}
}

// module.exports = journeyArray;

// Our bounty and story arrays//
// let shipArray = [shipBridge, shipCargoBay, shipEngineering, shipMessHall, shipNarrowCorridor, shipWideCorridor, shipMedbay, shipCrewQuarters];

// let baseArray = [baseControlRoom, baseStorage, baseArmory, baseRange, baseVehicleLot, baseWatchTower, baseWall, baseBarracks];

// let hideoutArray = [hideoutEntrance, hideoutDarkCorridor, hideoutHumidHall, hideoutStorage, hideoutArmory, hideoutLargeChamber, hideoutSmallChamber, hideoutSeceretTunnel];

// let wildsArray = [wildsSwamp, wildsThickFoliage, wildsRiverCrossing, wildsTallGrass, wildsRockOutcropping, wildsOpenMeadow, wildsBeach, wildsTallPeak];
