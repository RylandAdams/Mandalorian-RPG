function Enemies(id, health, armortotal, weaponstrength, strength, precision, speed) {
  this.id = id;
  this.health = health;
  this.armortotal = armortotal;
  this.weaponstrength = weaponstrength;
  this.strength = strength;
  this.precision = precision;
  this.speed = speed;
}

let stormTrooper = new Enemies ("Stormtrooper", 20, 5, 15, 2, 1, 2);
let battleDroid = new Enemies ("Battle droid", 10, 10, 10, 3, 2, 1);
let darkTrooper = new Enemies ("Dark Trooper", 30, 10, 20, 3, 3, 3);
let superBattleDroid = new Enemies ("Super Battle Droid", 30, 15, 20, 5, 4, 3, );
let droidCommando = new Enemies ("Droid Commando", 35, 15, 20, 5, 6, 5);

function Bosses (id, health, armortotal, weaponstrength, strength, precision, speed) {
  this.id = id;
  this.health = health;
  this.armortotal = armortotal;
  this.weaponstrength = weaponstrength;
  this.strength = strength;
  this.precision = precision;
  this.speed = speed;
}

let ig88 = new Bosses ("IG-88", 50, 20, 25, 6, 7, 6);
let sithInquistor = new Bosses ("Sith Inquistor", 60, 15, 30, 5, 7, 8);

function Locations (id, description) {
  this.id = id;
  this.description = description;
}

let shipBridge = new Locations("Bridge", "You enter the bridge of a YJX-1200 Heavy Freighter, it is surprisingly devoid of crew members. The control panels indicate it is running on auto-pilot");
let shipCargoBay = new Locations("Cargo Bay", "Stepping into the cargo bay, you immediately notice that something feels off. The bay is mostly open aside from a few shipping containers, you scan for threats");
let shipEngineering = new Locations("Engineering", "Everything appears to be functioning normally. There are a few places to take cover here, better check to see if anyone else had the same idea");
let shipMessHall = new Locations("Mess Hall", "It's not meal time now, so the mess hall is quiet.... to quiet");
let shipNarrowCorridor = new Locations("Narrow Corridor", "No where to hide here. Better move quickly, lest you get caught in a close quarters fight");
let shipWideCorridor = new Locations("Wide Corridor", "Well lit and plenty of room to move around here in a fight. Still... no cover. Best not to linger");
let shipMedbay = new Locations("Medbay", "Seemingly empty, surprising for a ship of this size. But lots of places for an enemy to hide");
let shipCrewQuarters = new Locations("Crew Quarters", "Where is everyone? The crew quarters should at least have a few crew members sleeping. Wait... whats in that bunk!?");

let baseControlRoom = new Locations("Control Room", "A good place to gauge what's going on in this base");
let baseStorage = new Locations("Storage", "Nothing here but carefully organized crates of supplies. Better scan for threats, just in case");
let baseArmory = new Locations("Armory", "Guns, lots of guns. You'd have to be a fool to take on a Mandolorian with this old junk. Definitely a bad place to get into a firefight though");
let baseRange = new Locations("Range", "A firing range? With my accuracy there's no need to practice. Still I could shot a few targets while I'm here to let off some steam");
let baseVehicleLot = new Locations("Vehicle Lot", "Just a few basic speeders laying around. Wait... is that an AT-ST back there?");
let baseWatchTower = new Locations("Watch Tower", "Oh the things you could hit with a sniper rifle from up here. Hopefully no one else had the same idea");
let baseWall = new Locations("Wall", "The perimeter wall. But no cameras, or weaponary? Why would they leave themselves open to attack. Hmmm suspicious");
let baseBarracks = new Locations("Barracks", "At first glance you see no ones here...but where ever they went they sure were in a hurry");

let hideoutEntrance = new Locations("Entrance", "The entrance has a looming presence, you could fit a whole Rancor through it.");
let hideoutDarkCorridor = new Locations("Dark Corridor", "Better kick on the lights, luckily your visor can see through many spectrums, cutting through the darkness.");
let hideoutHumidHall = new Locations("Humid Hall", "As you enter your lense briefly fogs up. Why would anyone willingly sit in a hot wet room?");
let hideoutStorage = new Locations("Storage", "The shelfing spans from floor to ceiling...What could be contained within all these boxes");
let hideoutArmory = new Locations("Armory", "This crude attempt at an armory looks to be more like a scrap yard for unwanted weapons parts. Its hard to imagine any of these weapons work.");
let hideoutLargeChamber = new Locations("Large Chamber", "Taking a glance around its hard to say with any certainty this chamber is empty. There are to many possible hidding spots.");
let hideoutSmallChamber = new Locations("Small Chamber", "This chamber doesnt seem to be very large. The single glowing lamp in the center lights it sufficiently enough.");
let hideoutSeceretTunnel = new Locations("Secret Tunnel", "Perhaps this is a way out, or perhaps it leads to hidden treasures. As long as its not a cave spider nest.");

let wildsSwamp = new Locations("Swamp", "Watch you step, this is not the place to be bogged down.");
let wildsThickFoliage = new Locations("Thick Foliage", "The dense vegitation could hide a myriad of surprises.");
let wildsRiverCrossing = new Locations("River Crossing",  "This looks as good a point as any to cross. Though youll be exposed for a little.");
let wildsTallGrass = new Locations("Tall Grass", "The Tall grass sways in the wind... it will do well to hide your, or anyone elses movements.");
let wildsRockOutcropping = new Locations("Rock Outcropping", "The rock formations present many great spots for cover. Perhaps they also conceal a threat ready to pounce.");
let wildsOpenMeadow = new Locations("Open Meadow", "Before you lays an open patch...theres no cover here...better tread lightly.");
let wildsBeach = new Locations("Beach", "The sand crunchs beneath your boots. The gentle wave crashing almost pulls you from the moment.");
let wildsTallPeak = new Locations("Tall Peak", "Having made your way to the top of a nearby Mountain, you scan the horizon for your target.");

function Weapons (id, weaponstrength, damagemulti, value) {
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
let tuskenCycleRifle = new Weapons("Tusken Cycle Rifel", 25, 1, 50);
let acpArrayGun = new Weapons("ACP Array Gun", 15, 1, 40);
let dlt20Blaster = new Weapons("DLT 20 Blaster", 20, 1, 50);
let gaderffii = new Weapons("Gaderffii", 15, 1, 50);
let gamoreanBattleAxe = new Weapons("Gamorean Battle Axe", 20, 1, 60);
let vibroBlades = new Weapons("Vibro Blades", 25, 1, 70);
let rodianCryogenWhip = new Weapons("Rodian Cryogen Whip", 10, 1, 40);
let thermalDetonator = new Weapons("Thermal Detonator", 20, 1, 50);
let flameThrower = new Weapons("Flame Thrower", 25, 1, 60);
let whistlingBirds = new Weapons("Whistling Birds", 35, 1, 80);

function Armor (id, armorrate, value) {
  this.id = id;
  this.armorrate = armorrate;
  this.value = value;
}

let plastoid = new Armor ("Plastoid", 5, 50);
let phrikPlating = new Armor ("Phrik plating", 10, 100);
let baktoid = new Armor ("Baktoid", 10, 100);
let reenforcedBaktoid = new Armor ("Re-Enforced Baktoid", 15, 150);
let beskarPlate = new Armor ("Beskar Plate", 25, 250);



// "index": {
//   "creatures": [
//     "npc": [],
//     "enemies": [
//       "tier1": [
//         {
//           "id": stormtrooper,
//           "health": 20,
//           "armortotal": 5,
//           "weaponstrength": 15,
//           "strength": 2,
//           "precision": 1,
//           "speed": 2
//         },
//         {
//           "id": battledroid,
//           "health": 10,
//           "armortotal": 10,
//           "weaponstrength": 10,
//           "strength": 3,
//           "precision": 2,
//           "speed": 1
//         }
//       ],
//       "tier2": [
//         {
//           "id": darktrooper,
//           "health": 30,
//           "armortotal": 10,
//           "weaponstrength": 20,
//           "strength": 3,
//           "precision": 3,
//           "speed": 3
//         },
//         {
//           "id": superbattledroid,
//           "health": 30,
//           "armortotal": 15,
//           "weaponstrength": 20,
//           "strength": 5,
//           "precision": 4,
//           "speed": 3
//         }
//       ],
//       "tier3": [
//         {
//           "id": imperial-officer,
//           "health": 30,
//           "armortotal": 5,
//           "weaponstrength": 25,
//           "strength": 2,
//           "precision": 4,
//           "speed": 4
//         }, {
//           "id": droid-commando,
//           "health": 35,
//           "armortotal": 15,
//           "weaponstrength": 20,
//           "strength": 5,
//           "precision": 6,
//           "speed":5
//         }
//       ]
//     ],
//     "bosses": [
//       {
//         "id": ig-88,
//         "health": 50,
//         "armortotal": 20,
//         "weaponstrength": 25,
//         "strength": 6,
//         "precision": 7,
//         "speed": 6
//       },
//       {
//         "id": sith-inquistor,
//         "health": 60,
//         "armortotal": 15,
//         "weaponstrength": 30,
//         "strength": 5,
//         "precision": 7, 
//         "speed": 8
//       }
//     ]
//   ],
//   "locations": [
//     "ship": [
//       {
//         "id": bridge,
//         "description": "You enter the bridge of a YJX-1200 Heavey Freighter, it is surprsingly devoid of crew members. The control panels indicate it is running on auto-pilot"
//       },
//       {
//         "id": cargo-bay,
//         "description": "Stepping into the cargo bay, you immediately notice that something feels off. The bay is mostly open aside from a few shipping containers, you scan for threats"
//       },
//       {
//         "id": engineering,
//         "description": "Everything appears to be functioning normally. There are a few places to take cover here, better check to see if anyone else had the same idea"
//       },
//       {
//         "id": mess-hall,
//         "description": "It's not meal time now, so the mess hall is quiet.... to quiet"
//       },
//       {
//         "id": narrow-corridor,
//         "description":  "No where to hide here. Better move quickly, lest you get caught in a close quarters fight"
//       },
//       {
//         "id": wide-corridor,
//         "description": "Well lit and plenty of room to move around here in a fight. Still... no cover. Best not to linger"
//       },
//       {
//         "id": medbay,
//         "description": "Seemingly empty, surprising for a ship of this size. But lots of places for an enemy to hide"
//       },
//       {
//         "id": crew-quarters,
//         "description": "Where is everyone? The crew quarters should at least have a few crew members sleeping. Wait... whats in that bunk!?"
//       }
//     ],
//     "base": [
//       {
//         "id": control-room,
//         "description": "A good place to gauge what's going on in this base"
//       },
//       {
//         "id": storage,
//         "description": "Nothing here but carefully organized crates of supplies. Better scan for threats, just in case"
//       },
//       {
//         "id": armory,
//         "description": "Guns, lots of guns. You'd have to be a fool to take on a Mandolorian with this old junk. Definitely a bad place to get into a firefight though"
//       },
//       {
//         "id": range,
//         "description": "A firing range? With my accuracy there's no need to practice. Still I could shot a few targets while I'm here to let off some steam"
//       },
//       {
//         "id": vehicle-lot,
//         "description": "Just a few basic speeders laying around. Wait... is that an AT-ST back there?"
//       },
//       {
//         "id": watch-tower,
//         "description": "Oh the things you could hit with a sniper rifle from up here. Hopefully no one else had the same idea"
//       },
//       {
//         "id": wall,
//         "description": "The perimeter wall. But no cameras, or weaponary? Why would they leave themselves open to attack. Hmmm suspicious"
//       },
//       {
//         "id": barracks,
//         "description": "At first glance you see no ones here...but where ever they went they sure were in a hurry"
//       }
//     ],
//     "hideout": [
//       {
//         "id": entrance,
//         "description": "The entrance has a looming presence, you could fit a whole Rancor through it."
//       },
//       {
//         "id": dark-corridor,
//         "description": "Better kick on the lights, luckily your visor can see through many spectrums, cutting through the darkness."
//       },
//       {
//         "id": humid-hall,
//         "description": "As you enter your lense briefly fogs up. Why would anyone willingly sit in a hot wet room? "
//       },
//       {
//         "id": storage,
//         "description": "The shelfing spans from floor to ceiling...What could be contained within all these boxes"
//       },
//       {
//         "id": armory,
//         "description": "This crude attempt at an armory looks to be more like a scrap yard for unwanted weapons parts. Its hard to imagine any of these weapons work."
//       },
//       {
//         "id": large-chamber,
//         "description": "Taking a glance around its hard to say with any certainty this chamber is empty. There are to many possible hidding spots."
//       },
//       {
//         "id": small-chamber,
//         "description": "This chamber doesnt seem to be very large. The single glowing lamp in the center lights it sufficiently enough."
//       },
//       {
//         "id": secret-tunnel,
//         "description": "Perhaps this is a way out, or perhaps it leads to hidden treasures. As long as its not a cave spider nest."
//       }
//     ],
//     "wilds": [
//       {
//         "id": swamp,
//         "description": "Watch you step, this is not the place to be bogged down."
//       },
//       {
//         "id": thick-foliage,
//         "description": "The dense vegitation could hide a myriad of surprises."
//       },
//       {
//         "id": river-crossing,
//         "description": "This looks as good a point as any to cross. Though youll be exposed for a little."
//       },
//       {
//         "id": tall-grass,
//         "description": "The Tall grass sways in the wind... it will do well to hide your, or anyone elses movements."
//       },
//       {
//         "id": rock-outcropping,
//         "description": "The rock formations present many great spots for cover. Perhaps they also conceal a threat ready to pounce."
//       },
//       {
//         "id": open-meadow,
//         "description": "Before you lays an open patch...theres no cover here...better tread lightly."
//       },
//       {
//         "id": beach,
//         "description": "The sand crunchs beneath your boots. The gentle wave crashing almost pulls you from the moment."
//       },
//       {
//         "id": tall-peak,
//         "description": "Having made your way to the top of a nearby Mountain, you scan the horizon for your target."
//       }
//     ]
//   ],
//   "gear":[
//     "common": [
//       {
//         "armor": [
//           {
//             "id": plastoid,
//             "armorrate": 2,
//             "value": 50
//           },
//           {
//             "id": phrik-plating,
//             "armorrate": 5,
//             "value": 100
//           },
//           {
//             "id": baktoid,
//             "armorrate": 5,
//             "value": 100
//           },
//           {
//             "id": reenforced-baktoid,
//             "armorrate": 8,
//             "value": 150
//           },
//           {
//             "id": beskar-plate,
//             "armorrate": 15,
//             "value": 250
//           } 
//         ],
//         "ranged": [
//           {
//             "id": e-11-blaster,
//             "weaponstrength": 15,
//             "damagemulti": 1,
//             "value": 50
//           },
//           {
//             "id": arc-caster,
//             "weaponstrength": 20,
//             "damagemulti": 1,
//             "value": 60
//           },
//           {
//             "id": se-14-blaster,
//             "weaponstrength": 25,
//             "damagemulti": 1,
//             "value": 70
//           },
//           {
//             "id": e-5-blaster,
//             "weaponstrength": 10,
//             "damagemulti": 1,
//             "value": 40
//           },
//           {
//             "id": dual-wrist-blaster,
//             "weaponstrength": 20,
//             "damagemulti": 1,
//             "value": 60
//           },
//           {
//             "id": tusken-cycle-rifle,
//             "weaponstrength": 25,
//             "damagemulti": 1,
//             "value": 50
//           },
//           {
//             "id": acp-arraygun,
//             "weaponstrength": 15,
//             "damagemulti": 1,
//             "value": 40
//           },
//           {
//             "id": dlt-20-blaster,
//             "weaponstrength": 20,
//             "damagemulti": 1,
//             "value": 50
//           }
//         ],
//         "melee": [
//           {
//             "id": gaderffii,
//             "weaponstrength": 15,
//             "damagemulti": 1,
//             "value": 50
//           },
//           {
//             "id": Gamoreanbattleaxe,
//             "weaponstrength": 20,
//             "damagemulti": 1,
//             "value": 60
//           },
//           {
//             "id": vibroblades,
//             "weaponstrength": 25,
//             "damagemulti": 1,
//             "value": 70
//           },
//           {
//             "id": rodiancryogenwhip,
//             "weaponstrength": 10,
//             "damagemulti": 1,
//             "value": 40
//           }
//         ],
//         "ability": [
//           {
//             "id": thermaldetonator,
//             "weaponstrength": 20,
//             "damagemulti": 1,
//             "value": 50
//           },
//           {
//             "id": flamethrower,
//             "weaponstrength": 25,
//             "damagemulti": 1,
//             "value": 60
//           },
//           {
//             "id": whistlingbirds,
//             "weaponstrength": 35,
//             "damagemulti": 1,
//             "value": 80
//           }
//         ]
//       }
//     ],
//     "rare": [
//       {
//         "armor": [
//           {
//             "id": plastoid,
//             "armorrate": 3,
//             "value": 50
//           },
//           {
//             "id": phrik-plating,
//             "armorrate": 7,
//             "value": 100
//           },
//           {
//             "id": baktoid,
//             "armorrate": 7,
//             "value": 100
//           },
//           {
//             "id": reenforced-baktoid,
//             "armorrate": 12,
//             "value": 150
//           },
//           {
//             "id": beskar-plate,
//             "armorrate": 20,
//             "value": 250
//           }
//         ],
//         "ranged": [
//           {
//             "id": e-11-blaster,
//             "weaponstrength": 15,
//             "damagemulti": 2,
//             "value": 100
//           },
//           {
//             "id": arc-caster,
//             "weaponstrength": 20,
//             "damagemulti": 2,
//             "value": 120
//           },
//           {
//             "id": se-14-blaster,
//             "weaponstrength": 25,
//             "damagemulti": 2,
//             "value": 140
//           },
//           {
//             "id": e-5-blaster,
//             "weaponstrength": 10,
//             "damagemulti": 2,
//             "value": 80
//           },
//           {
//             "id": dual-wrist-blaster,
//             "weaponstrength": 20,
//             "damagemulti": 2,
//             "value": 120
//           },
//           {
//             "id": tusken-cycle-rifle,
//             "weaponstrength": 25,
//             "damagemulti": 2,
//             "value": 100
//           },
//           {
//             "id": acp-arraygun,
//             "weaponstrength": 15,
//             "damagemulti": 2,
//             "value": 80
//           },
//           {
//             "id": dlt-20-blaster,
//             "weaponstrength": 20,
//             "damagemulti": 2,
//             "value": 100
//           }
//         ],
//         "melee": [
//           {
//             "id": gaderffii,
//             "weaponstrength": 15,
//             "damagemulti": 2,
//             "value": 100
//           },
//           {
//             "id": Gamoreanbattleaxe,
//             "weaponstrength": 20,
//             "damagemulti": 2,
//             "value": 120
//           },
//           {
//             "id": vibroblades,
//             "weaponstrength": 25,
//             "damagemulti": 2,
//             "value": 140
//           },
//           {
//             "id": rodiancryogenwhip,
//             "weaponstrength": 10,
//             "damagemulti": 2,
//             "value": 80
//           }
//         ],
//         "ability": [
//           {
//             "id": thermaldetonator,
//             "weaponstrength": 20,
//             "damagemulti": 1,
//             "value": 100
//           },
//           {
//             "id": flamethrower,
//             "weaponstrength": 25,
//             "damagemulti": 1,
//             "value": 120
//           },
//           {
//             "id": whistlingbirds,
//             "weaponstrength": 35,
//             "damagemulti": 1,
//             "value": 160
//           }
//         ]
//       }
//     ],
//     "legendary": [
//       {
//         "armor": [
//         {
//           "id": plastoid,
//           "armorrate": 5,
//           "value": 50
//         },
//         {
//           "id": phrik-plating,
//           "armorrate": 10,
//           "value": 100
//         },
//         {
//           "id": baktoid,
//           "armorrate": 10,
//           "value": 100
//         },
//         {
//           "id": reenforced-baktoid,
//           "armorrate": 15,
//           "value": 150
//         },
//         {
//           "id": beskar-plate,
//           "armorrate": 25,
//           "value": 250
//         }
//       ],
//         "ranged": [
//           {
//             "id": e-11-blaster,
//             "weaponstrength": 15,
//             "damagemulti": 3,
//             "value": 150
//           },
//           {
//             "id": arc-caster,
//             "weaponstrength": 20,
//             "damagemulti": 3,
//             "value": 180
//           },
//           {
//             "id": se-14-blaster,
//             "weaponstrength": 25,
//             "damagemulti": 3,
//             "value": 210
//           },
//           {
//             "id": e-5-blaster,
//             "weaponstrength": 10,
//             "damagemulti": 3,
//             "value": 120
//           },
//           {
//             "id": dual-wrist-blaster,
//             "weaponstrength": 20,
//             "damagemulti": 3,
//             "value": 180
//           },
//           {
//             "id": tusken-cycle-rifle,
//             "weaponstrength": 25,
//             "damagemulti": 3,
//             "value": 150
//           },
//           {
//             "id": acp-arraygun,
//             "weaponstrength": 15,
//             "damagemulti": 3,
//             "value": 120
//           },
//           {
//             "id": dlt-20-blaster,
//             "weaponstrength": 20,
//             "damagemulti": 3,
//             "value": 150
//           }
//         ],
//         "melee": [
//           {
//             "id": gaderffii,
//             "weaponstrength": 15,
//             "damagemulti": 1,
//             "value": 150
//           },
//           {
//             "id": Gamoreanbattleaxe,
//             "weaponstrength": 20,
//             "damagemulti": 1,
//             "value": 180
//           },
//           {
//             "id": vibroblades,
//             "weaponstrength": 25,
//             "damagemulti": 1,
//             "value": 210
//           },
//           {
//             "id": rodiancryogenwhip,
//             "weaponstrength": 10,
//             "damagemulti": 1,
//             "value": 120
//           }
//         ],
//         "ability": [
//           {
//             "id": thermaldetonator,
//             "weaponstrength": 20,
//             "damagemulti": 1,
//             "value": 150
//           },
//           {
//             "id": flamethrower,
//             "weaponstrength": 25,
//             "damagemulti": 1,
//             "value": 180
//           },
//           {
//             "id": whistlingbirds,
//             "weaponstrength": 35,
//             "damagemulti": 1,
//             "value": 240
//           }
//         ]
//       }
//     ],
//     "loot": []
//   ]
// }