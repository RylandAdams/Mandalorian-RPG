import {player} from './main.js';

export default class Combat {
  constructor(){

  }
  attackPrompt() {
    console.log("Choose your weapon:");
    console.log("-----------------------------");
    console.log(`1. Melee Attack (${player.equippedMeleeWeapon.id})`);
    console.log(`2. Ranged Attack (${player.equippedRangedWeapon.id})`);
    console.log(`3. Ability (${player.equippedAbility.id})`);
  }

  checkForDeath(player, enemy) {
    if(player.health <= 0) {
      console.log("Player has died!");
    } else if(enemy.health <= 0) {
      console.log("Enemy has died!");
    } else {
      // return false;
    }
  }

  playerAttackFirst(player, enemy) {
    let newCombat = new Combat();
    console.log(player.health);
    console.log(enemy.health);
    newCombat.attackPrompt();
    let userInput = prompt();
    let weaponSelect = userInput;
    switch(weaponSelect) {
    case "1":
      if ((player.strength + (Math.floor(Math.random()* 20) + 1)) > enemy.armorTotal) {
        let damageDealt = (player.equippedMeleeWeapon.weaponStrength + (Math.floor(Math.random()* 20) + 1));
        enemy.health -= damageDealt;
        console.log(`You have dealt the ${enemy.id} ${damageDealt} damage! They appear to have ${enemy.health} health remaining.`);
      } else {
        console.log("You Missed.");
      }
      break;
    case "2":
      if ((player.precision + (Math.floor(Math.random()* 20) + 1)) > enemy.armorTotal) {
        console.log("You Hit them!");
        enemy.health -= (player.equippedRangedWeapon.weaponStrength + (Math.floor(Math.random()* 20) + 1));
      } else {
        console.log("You Missed.");
      }
      break;
    case "3":
      if ((player.intellect + (Math.floor(Math.random()* 20) + 1)) > enemy.armorTotal) {
        console.log("You Hit them!");
        enemy.health -= (player.equippedAbility.weaponStrength + (Math.floor(Math.random()* 20) + 1));
      } else {
        console.log("You Missed.");
      }
      break;
    }
    if (enemy.weaponStrength + (Math.floor(Math.random()* 20) + 1) > player.armorTotal) {
      console.log("You've been hit!");
      player.health -= (enemy.weaponStrength + (Math.floor(Math.random()* 20) + 1));
    } else {
      console.log("Enemies attack missed.");
    }
    newCombat.checkForDeath(player, enemy);
  }

  enemyAttackFirst(player, enemy) {
    let newCombat = new Combat();
    if (enemy.weaponStrength + (Math.floor(Math.random()* 20) + 1) > player.armorTotal) {
      console.log("You've been hit!");
      player.health -= (enemy.weaponStrength + (Math.floor(Math.random()* 20) + 1));
    } else {
      console.log("Enemies attack missed.");
    }
    newCombat.attackPrompt();
    let userInput = prompt();
    let weaponSelect = userInput;   
    switch(weaponSelect) {
    case "1":
      if ((player.strength + (Math.floor(Math.random()* 20) + 1)) > enemy.armorTotal) {
        console.log("You Hit them!");
        enemy.health -= (player.equippedMeleeWeapon.weaponStrength + (Math.floor(Math.random()* 20) + 1));
      } else {
        console.log("You Missed.");
      }
      break;
    case "2":
      if ((player.precision + (Math.floor(Math.random()* 20) + 1)) > enemy.armorTotal) {
        console.log("You Hit them!");
        enemy.health -= (player.equippedRangedWeapon.weaponStrength + (Math.floor(Math.random()* 20) + 1));
      } else {
        console.log("You Missed.");
      }
      break;
    case "3":
      if ((player.intellect + (Math.floor(Math.random()* 20) + 1)) > enemy.armorTotal) {
        console.log("You Hit them!");
        enemy.health -= (player.equippedAbility.weaponStrength + (Math.floor(Math.random()* 20) + 1));
      } else {
        console.log("You Missed.");
      }
      break;
    }    
    newCombat.checkForDeath(player, enemy);
  }

  // combat(player, enemy, userInput) { //CHANGE TO SWITCH CASES//
  //   Combat.attack(player, enemy, userInput); 
  //   let combatIsOver = Combat.checkForDeath(player, enemy);
  //   if(combatIsOver == false) {
  //     Combat.attack(enemy, player, userInput);
  //     combatIsOver = Combat.checkForDeath(player, enemy);
  //   }
  //   if(combatIsOver == false) {
  //     console.log("waiting");
  //   } else if(combatIsOver == "player") {
  //     console.log("You have died!");
  //   } else if(combatIsOver == "enemy") {
  //     console.log("You win!");
  //   } else {
  //     console.log("This should never be seen. It's a bug");
  //   }
  // }

}