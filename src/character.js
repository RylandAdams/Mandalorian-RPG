export default class Mandalorian {
  constructor (characterName, selectedClass) {
    this.name = characterName;
    this.class = selectedClass;

    this.totalHealth = 0;
    this.currentHealth = this.totalHealth;

      this.health = 0;
      this.strength = 0;
      this.precision = 0;
      this.intellect = 0;
      this.speed = 0;
      this.backpack = [];

    this.armorTotal
      this.equippedHelmet = [];
      this.equippedChest = [];
      this.equippedArms = [];
      this.equippedLegs = [];

    this.equippedMeleeWeapon = [];
    this.equippedRangedWeapon = [];
    this.equippedAbility = [];

    this.credits = 0;
    this.beskar = 0;
  }


  getStats(selectedClass) {
    if(selectedClass === 'Melee') {
      this.health = Math.floor((Math.random() * (40 - 30)) + 30);
      this.strength = Math.floor((Math.random() * (5 - 3)) + 3);
      this.precision = Math.floor((Math.random() * (6 - 2)) + 2);
      this.intellect = Math.floor((Math.random() * (10 - 4)) + 4);
      this.speed = Math.floor((Math.random() * (3 - 1)) + 1);   
    } else if(selectedClass === 'Ranged') {
      this.health = Math.floor((Math.random() * (35 - 25)) + 25);
      this.strength = Math.floor((Math.random() * (5 - 2)) + 2);
      this.precision = Math.floor((Math.random() * (14 - 5)) + 5);
      this.intellect = Math.floor((Math.random() * (6 - 2)) + 2);
      this.speed = Math.floor((Math.random() * (12 - 7)) + 7); 
    } else if(selectedClass === 'Balanced') {
      this.health = Math.floor((Math.random() * (35 - 25)) + 25);
      this.strength = Math.floor((Math.random() * (10 - 6)) + 6);
      this.precision = Math.floor((Math.random() * (6 - 2)) + 2);
      this.intellect = Math.floor((Math.random() * (10 - 4)) + 4);
      this.speed = Math.floor((Math.random() * (3 - 1)) + 1); 
    }
  }
}