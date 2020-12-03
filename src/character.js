import WeaponsArr from './weaponsLibrary.js';
import ArmorArr from './armorLibrary.js';

export default class Mandalorian {
  constructor (characterName, selectedClass) {
    // - Basic Stats - //
    this.charName = characterName;
    this.charClass = selectedClass;
    this.currentLocation;   
    this.health;
    
    // - Attributes - //
    this.maxHealth = 100;
    this.strength = 0;
    this.precision = 0;
    this.intellect = 0;
    this.speed = 0;
    this.armorTotal = 0;

    // - Inventory/Equipment - //
    this.backpack = [];

    this.equippedMeleeWeapon = [];
    this.equippedRangedWeapon = [];
    this.equippedAbility = [];
    this.equippedArmor = [];

    this.credits = 0;
    this.beskar = 0;
    this.story = 0;
  }

  getStats() {
    if(this.charClass === 'Melee') {
      this.strength = Math.floor((Math.random() * (5 - 3)) + 3);
      this.precision = Math.floor((Math.random() * (6 - 2)) + 2);
      this.intellect = Math.floor((Math.random() * (10 - 4)) + 4);
      this.speed = Math.floor((Math.random() * (3 - 1)) + 1);   
    } else if(this.charClass === 'Ranged') {
      this.strength = Math.floor((Math.random() * (5 - 2)) + 2);
      this.precision = Math.floor((Math.random() * (14 - 5)) + 5);
      this.intellect = Math.floor((Math.random() * (6 - 2)) + 2);
      this.speed = Math.floor((Math.random() * (12 - 7)) + 7); 
    } else if(this.charClass === 'Balanced') {
      this.strength = Math.floor((Math.random() * (10 - 6)) + 6);
      this.precision = Math.floor((Math.random() * (6 - 2)) + 2);
      this.intellect = Math.floor((Math.random() * (10 - 4)) + 4);
      this.speed = Math.floor((Math.random() * (3 - 1)) + 1); 
    }
  }

  getStarterEquip() {
    let starterWeapons = new WeaponsArr();
    let starterArmor = new ArmorArr();
    this.equippedMeleeWeapon = starterWeapons.starterDagger;
    this.equippedRangedWeapon = starterWeapons.starterBlaster;
    this.equippedAbility = starterWeapons.starterAbility;
    this.equippedArmor = starterArmor.starterArmor;
  }
}