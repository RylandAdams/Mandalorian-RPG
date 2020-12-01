function Enemies(id, health, armortotal, weaponstrength, strength, precision, speed) {
  this.id = id;
  this.health = health;
  this.armortotal = armortotal;
  this.weaponstrength = weaponstrength;
  this.strength = strength;
  this.precision = precision;
  this.speed = speed;
}

function Bosses (id, health, armortotal, weaponstrength, strength, precision, speed) {
  this.id = id;
  this.health = health;
  this.armortotal = armortotal;
  this.weaponstrength = weaponstrength;
  this.strength = strength;
  this.precision = precision;
  this.speed = speed;
}

function Locations (id, description) {
  this.id = id;
  this.description = description;
}

function Weapons (id, weaponstrength, damagemulti, value) {
  this.id = id;
  this.weaponstrength = weaponstrength;
  this.damagemulti = damagemulti;
  this.value = value;
}

function Armor (id, armorrate, value) {
  this.id = id;
  this.armorrate = armorrate;
  this.value = value;
}

"index": {
  "creatures": [
    "npc": [],
    "enemies": [
      "tier1": [
        {
          "id": stormtrooper,
          "health": 20,
          "armortotal": 5,
          "weaponstrength": 15,
          "strength": 2,
          "precision": 1,
          "speed": 2
        },
        {
          "id": battledroid,
          "health": 10,
          "armortotal": 10,
          "weaponstrength": 10,
          "strength": 3,
          "precision": 2,
          "speed": 1
        }
      ],
      "tier2": [
        {
          "id": darktrooper,
          "health": 30,
          "armortotal": 10,
          "weaponstrength": 20,
          "strength": 3,
          "precision": 3,
          "speed": 3
        },
        {
          "id": superbattledroid,
          "health": 30,
          "armortotal": 15,
          "weaponstrength": 20,
          "strength": 5,
          "precision": 4,
          "speed": 3
        }
      ],
      "tier3": [
        {
          "id": imperial-officer,
          "health": 30,
          "armortotal": 5,
          "weaponstrength": 25,
          "strength": 2,
          "precision": 4,
          "speed": 4
        }, {
          "id": droid-commando,
          "health": 35,
          "armortotal": 15,
          "weaponstrength": 20,
          "strength": 5,
          "precision": 6,
          "speed":5
        }
      ]
    ],
    "bosses": [
      {
        "id": ig-88,
        "health": 50,
        "armortotal": 20,
        "weaponstrength": 25,
        "strength": 6,
        "precision": 7,
        "speed": 6
      },
      {
        "id": sith-inquistor,
        "health": 60,
        "armortotal": 15,
        "weaponstrength": 30,
        "strength": 5,
        "precision": 7, 
        "speed": 8
      }
    ]
  ],
  "locations": [
    "ship": [
      {
        "id": bridge,
        "description": "You enter the bridge of a YJX-1200 Heavey Freighter, it is surprsingly devoid of crew members. The control panels indicate it is running on auto-pilot"
      },
      {
        "id": cargo-bay,
        "description": "Stepping into the cargo bay, you immediately notice that something feels off. The bay is mostly open aside from a few shipping containers, you scan for threats"
      },
      {
        "id": engineering,
        "description": "Everything appears to be functioning normally. There are a few places to take cover here, better check to see if anyone else had the same idea"
      },
      {
        "id": mess-hall,
        "description": "It's not meal time now, so the mess hall is quiet.... to quiet"
      },
      {
        "id": narrow-corridor,
        "description":  "No where to hide here. Better move quickly, lest you get caught in a close quarters fight"
      },
      {
        "id": wide-corridor,
        "description": "Well lit and plenty of room to move around here in a fight. Still... no cover. Best not to linger"
      },
      {
        "id": medbay,
        "description": "Seemingly empty, surprising for a ship of this size. But lots of places for an enemy to hide"
      },
      {
        "id": crew-quarters,
        "description": "Where is everyone? The crew quarters should at least have a few crew members sleeping. Wait... whats in that bunk!?"
      }
    ],
    "base": [
      {
        "id": control-room,
        "description": "A good place to gauge what's going on in this base"
      },
      {
        "id": storage,
        "description": "Nothing here but carefully organized crates of supplies. Better scan for threats, just in case"
      },
      {
        "id": armory,
        "description": "Guns, lots of guns. You'd have to be a fool to take on a Mandolorian with this old junk. Definitely a bad place to get into a firefight though"
      },
      {
        "id": range,
        "description": "A firing range? With my accuracy there's no need to practice. Still I could shot a few targets while I'm here to let off some steam"
      },
      {
        "id": vehicle-lot,
        "description": "Just a few basic speeders laying around. Wait... is that an AT-ST back there?"
      },
      {
        "id": watch-tower,
        "description": "Oh the things you could hit with a sniper rifle from up here. Hopefully no one else had the same idea"
      },
      {
        "id": wall,
        "description": "The perimeter wall. But no cameras, or weaponary? Why would they leave themselves open to attack. Hmmm suspicious"
      },
      {
        "id": barracks,
        "description": "At first glance you see no ones here...but where ever they went they sure were in a hurry"
      }
    ],
    "hideout": [
      {
        "id": entrance,
        "description": "The entrance has a looming presence, you could fit a whole Rancor through it."
      },
      {
        "id": dark-corridor,
        "description": "Better kick on the lights, luckily your visor can see through many spectrums, cutting through the darkness."
      },
      {
        "id": humid-hall,
        "description": "As you enter your lense briefly fogs up. Why would anyone willingly sit in a hot wet room? "
      },
      {
        "id": storage,
        "description": "The shelfing spans from floor to ceiling...What could be contained within all these boxes"
      },
      {
        "id": armory,
        "description": "This crude attempt at an armory looks to be more like a scrap yard for unwanted weapons parts. Its hard to imagine any of these weapons work."
      },
      {
        "id": large-chamber,
        "description": "Taking a glance around its hard to say with any certainty this chamber is empty. There are to many possible hidding spots."
      },
      {
        "id": small-chamber,
        "description": "This chamber doesnt seem to be very large. The single glowing lamp in the center lights it sufficiently enough."
      },
      {
        "id": secret-tunnel,
        "description": "Perhaps this is a way out, or perhaps it leads to hidden treasures. As long as its not a cave spider nest."
      }
    ],
    "wilds": [
      {
        "id": swamp,
        "description": "Watch you step, this is not the place to be bogged down."
      },
      {
        "id": thick-foliage,
        "description": "The dense vegitation could hide a myriad of surprises."
      },
      {
        "id": river-crossing,
        "description": "This looks as good a point as any to cross. Though youll be exposed for a little."
      },
      {
        "id": tall-grass,
        "description": "The Tall grass sways in the wind... it will do well to hide your, or anyone elses movements."
      },
      {
        "id": rock-outcropping,
        "description": "The rock formations present many great spots for cover. Perhaps they also conceal a threat ready to pounce."
      },
      {
        "id": open-meadow,
        "description": "Before you lays an open patch...theres no cover here...better tread lightly."
      },
      {
        "id": beach,
        "description": "The sand crunchs beneath your boots. The gentle wave crashing almost pulls you from the moment."
      },
      {
        "id": tall-peak,
        "description": "Having made your way to the top of a nearby Mountain, you scan the horizon for your target."
      }
    ]
  ],
  "gear":[
    "common": [
      {
        "armor": [
          {
            "id": plastoid,
            "armorrate": 2,
            "value": 50
          },
          {
            "id": phrik-plating,
            "armorrate": 5,
            "value": 100
          },
          {
            "id": baktoid,
            "armorrate": 5,
            "value": 100
          },
          {
            "id": reenforced-baktoid,
            "armorrate": 8,
            "value": 150
          },
          {
            "id": beskar-plate,
            "armorrate": 15,
            "value": 250
          } 
        ],
        "ranged": [
          {
            "id": e-11-blaster,
            "weaponstrength": 15,
            "damagemulti": 1,
            "value": 50
          },
          {
            "id": arc-caster,
            "weaponstrength": 20,
            "damagemulti": 1,
            "value": 60
          },
          {
            "id": se-14-blaster,
            "weaponstrength": 25,
            "damagemulti": 1,
            "value": 70
          },
          {
            "id": e-5-blaster,
            "weaponstrength": 10,
            "damagemulti": 1,
            "value": 40
          },
          {
            "id": dual-wrist-blaster,
            "weaponstrength": 20,
            "damagemulti": 1,
            "value": 60
          },
          {
            "id": tusken-cycle-rifle,
            "weaponstrength": 25,
            "damagemulti": 1,
            "value": 50
          },
          {
            "id": acp-arraygun,
            "weaponstrength": 15,
            "damagemulti": 1,
            "value": 40
          },
          {
            "id": dlt-20-blaster,
            "weaponstrength": 20,
            "damagemulti": 1,
            "value": 50
          }
        ],
        "melee": [
          {
            "id": gaderffii,
            "weaponstrength": 15,
            "damagemulti": 1,
            "value": 50
          },
          {
            "id": Gamoreanbattleaxe,
            "weaponstrength": 20,
            "damagemulti": 1,
            "value": 60
          },
          {
            "id": vibroblades,
            "weaponstrength": 25,
            "damagemulti": 1,
            "value": 70
          },
          {
            "id": rodiancryogenwhip,
            "weaponstrength": 10,
            "damagemulti": 1,
            "value": 40
          }
        ],
        "ability": [
          {
            "id": thermaldetonator,
            "weaponstrength": 20,
            "damagemulti": 1,
            "value": 50
          },
          {
            "id": flamethrower,
            "weaponstrength": 25,
            "damagemulti": 1,
            "value": 60
          },
          {
            "id": whistlingbirds,
            "weaponstrength": 35,
            "damagemulti": 1,
            "value": 80
          }
        ]
      }
    ],
    "rare": [
      {
        "armor": [
          {
            "id": plastoid,
            "armorrate": 3,
            "value": 50
          },
          {
            "id": phrik-plating,
            "armorrate": 7,
            "value": 100
          },
          {
            "id": baktoid,
            "armorrate": 7,
            "value": 100
          },
          {
            "id": reenforced-baktoid,
            "armorrate": 12,
            "value": 150
          },
          {
            "id": beskar-plate,
            "armorrate": 20,
            "value": 250
          }
        ],
        "ranged": [
          {
            "id": e-11-blaster,
            "weaponstrength": 15,
            "damagemulti": 2,
            "value": 100
          },
          {
            "id": arc-caster,
            "weaponstrength": 20,
            "damagemulti": 2,
            "value": 120
          },
          {
            "id": se-14-blaster,
            "weaponstrength": 25,
            "damagemulti": 2,
            "value": 140
          },
          {
            "id": e-5-blaster,
            "weaponstrength": 10,
            "damagemulti": 2,
            "value": 80
          },
          {
            "id": dual-wrist-blaster,
            "weaponstrength": 20,
            "damagemulti": 2,
            "value": 120
          },
          {
            "id": tusken-cycle-rifle,
            "weaponstrength": 25,
            "damagemulti": 2,
            "value": 100
          },
          {
            "id": acp-arraygun,
            "weaponstrength": 15,
            "damagemulti": 2,
            "value": 80
          },
          {
            "id": dlt-20-blaster,
            "weaponstrength": 20,
            "damagemulti": 2,
            "value": 100
          }
        ],
        "melee": [
          {
            "id": gaderffii,
            "weaponstrength": 15,
            "damagemulti": 2,
            "value": 100
          },
          {
            "id": Gamoreanbattleaxe,
            "weaponstrength": 20,
            "damagemulti": 2,
            "value": 120
          },
          {
            "id": vibroblades,
            "weaponstrength": 25,
            "damagemulti": 2,
            "value": 140
          },
          {
            "id": rodiancryogenwhip,
            "weaponstrength": 10,
            "damagemulti": 2,
            "value": 80
          }
        ],
        "ability": [
          {
            "id": thermaldetonator,
            "weaponstrength": 20,
            "damagemulti": 1,
            "value": 100
          },
          {
            "id": flamethrower,
            "weaponstrength": 25,
            "damagemulti": 1,
            "value": 120
          },
          {
            "id": whistlingbirds,
            "weaponstrength": 35,
            "damagemulti": 1,
            "value": 160
          }
        ]
      }
    ],
    "legendary": [
      {
        "armor": [
        {
          "id": plastoid,
          "armorrate": 5,
          "value": 50
        },
        {
          "id": phrik-plating,
          "armorrate": 10,
          "value": 100
        },
        {
          "id": baktoid,
          "armorrate": 10,
          "value": 100
        },
        {
          "id": reenforced-baktoid,
          "armorrate": 15,
          "value": 150
        },
        {
          "id": beskar-plate,
          "armorrate": 25,
          "value": 250
        }
      ],
        "ranged": [
          {
            "id": e-11-blaster,
            "weaponstrength": 15,
            "damagemulti": 3,
            "value": 150
          },
          {
            "id": arc-caster,
            "weaponstrength": 20,
            "damagemulti": 3,
            "value": 180
          },
          {
            "id": se-14-blaster,
            "weaponstrength": 25,
            "damagemulti": 3,
            "value": 210
          },
          {
            "id": e-5-blaster,
            "weaponstrength": 10,
            "damagemulti": 3,
            "value": 120
          },
          {
            "id": dual-wrist-blaster,
            "weaponstrength": 20,
            "damagemulti": 3,
            "value": 180
          },
          {
            "id": tusken-cycle-rifle,
            "weaponstrength": 25,
            "damagemulti": 3,
            "value": 150
          },
          {
            "id": acp-arraygun,
            "weaponstrength": 15,
            "damagemulti": 3,
            "value": 120
          },
          {
            "id": dlt-20-blaster,
            "weaponstrength": 20,
            "damagemulti": 3,
            "value": 150
          }
        ],
        "melee": [
          {
            "id": gaderffii,
            "weaponstrength": 15,
            "damagemulti": 1,
            "value": 150
          },
          {
            "id": Gamoreanbattleaxe,
            "weaponstrength": 20,
            "damagemulti": 1,
            "value": 180
          },
          {
            "id": vibroblades,
            "weaponstrength": 25,
            "damagemulti": 1,
            "value": 210
          },
          {
            "id": rodiancryogenwhip,
            "weaponstrength": 10,
            "damagemulti": 1,
            "value": 120
          }
        ],
        "ability": [
          {
            "id": thermaldetonator,
            "weaponstrength": 20,
            "damagemulti": 1,
            "value": 150
          },
          {
            "id": flamethrower,
            "weaponstrength": 25,
            "damagemulti": 1,
            "value": 180
          },
          {
            "id": whistlingbirds,
            "weaponstrength": 35,
            "damagemulti": 1,
            "value": 240
          }
        ]
      }
    ],
    "loot": []
  ]
}







//////////////
// {
//   "common": {
//     "results": [
//       {
//         "index": "E-11 blaster",
//         "name": "<span class Gold> E-11 blaster </span>",
//         "damage": 15,
//         "damage-multi": 1.3,
//         "value": 60,
//       },
//     ]
//   },

// Enemies (health, armorTotal, strength, precision, speed, exp, credits, loot){
//   Stormtroopers
//   DarkTroopers
//   ImperialOfficer
//   BattleDroid
//   SuperBattleDroid
//   Droid Commandos
//   Tusken Raider
//   Gammorean
//   Trandoshan Bountry Hunter
//   Rodian Bountry Hunter
//   Ewoks (bonus)
// }

// Bosses (health, armorTotal, strength, precision, speed, exp, credits, loot){
  //   Armored Hutt
  //   IG-88  Bountry Hunter
//   At-St
//   Sith Inquisitor
//   Rancore
// }

// Armor (armorRate, value){
//   plastoid(stormtrooper)
//   Phrik(DarkTroopers)
//   Officer Armor
//   Baktoid(b1)
//   Renforced Baktoid(superb2)
//   Durasteel enforced Baktoid(commando/ phlutdroid)
//   cloth
//   M'uhk'gfa(gammorean heavy plate)
//   Durasteel(trandoshan)
//   Stalker armor(rodian)
//   Hutt battle armor
//   beskar plate
// }

// rangedWeapons (weaponStrength, damageMultiplier, value){
// C  E-11 blaster
// R  ARC caster
// L  SE-14 blaster
// C  E-5 blaster
// R  Dual wrist blaster
//   tusken cycler rifle
//   trandoshan hunting rifle
//   ACP array gun
//   repulsor throwing razor
//   DLT-20A blaster
//   E-web heavy repeating blaster
//   88i twin light blaster cannon (atst)
//   missle launcher (atst)
// }

// meleeWeapons (weaponStrength, damageMultiplier, value){
//   gaderffii
//   Gamorean battleaxe
//   slaver blades
//   rodian cryogen whip
//   vibro blades
//   stone spear
//   rancore Claws
//   rancore bite
//   lightsaber
//   thermal detonator
//   flamethrower
// }