{
  "common": {
    "results": [
      {
        "index": "E-11 blaster",
        "name": "<span class Gold> E-11 blaster </span>",
        "damage": 15,
        "damage-multi": 1.3,
        "value": 60,
      },
    ]
  },

  "uncommon": {

  },

  "creatures": {

  },

  "boss": {

  },

  "events": {

  },

  "rooms": {

  },
}

//lodash.js _.range() function

_.range(10);
 => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
_.range(1, 11);
 => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
_.range(0, 30, 5);
 => [0, 5, 10, 15, 20, 25]
_.range(0, -10, -1);

// [
//   creatures { ant [health, attack, possible gold value, ect ]};

//   armor{ .............
//         name, str, value 
//     }

//   weapons{[Name and rarity, damage, value, weaponClass]
//           [<span class "GOLD"> AO blaster </span>, 15, 25, Ranged]
//           [<span class "GOLD"> AO blaster </span>, 15, 25, Ranged]
//           [<span class "GOLD"> AO blaster </span>, 15, 25, Ranged]
//           [<span class "GOLD"> AO blaster </span>, 15, 25, Ranged]
//           [<span class "GOLD"> AO blaster </span>, 15, 25, Ranged]
//           [<span class "GOLD"> AO blaster </span>, 15, 25, Ranged]
//           [<span class "GOLD"> AO blaster </span>, 15, 25, Ranged]
//           [<span class "GOLD"> AO blaster </span>, 15, 25, Ranged]
//           [<span class "GOLD"> AO blaster </span>, 15, 25, Ranged]
//           [<span class "GOLD"> AO blaster </span>, 15, 25, Ranged]
//           }

//   bosses{.................}

//   events {.....}
// ]
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
//   Phlutdroid  Bountry Hunter
//   Ewoks (bonus)
// }

// Bosses (health, armorTotal, strength, precision, speed, exp, credits, loot){
//   Armored Hutt
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
//   E-11 blaster
//   ARC caster
//   SE-14 blaster
//   E-5 blaster
//   Dual wrist blaster
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
