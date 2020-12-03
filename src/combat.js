function combat(player, enemy) {
  attack(player, enemy);
  let combatIsOver = checkForDeath(player, enemy);
  if(combatIsOver == false) {
    attack(enemy, player);
    combatIsOver = checkForDeath(player, enemy);
  }
  if(combatIsOver == false) {
    console.log("waiting");
  } else if(combatIsOver == "player") {
    console.log("You have died!");
  } else if(combatIsOver == "enemy") {
    console.log("You win!");
  } else {
    console.log("This should never be seen. It's a bug");
  }
}

function attackPrompt() {
  console.log("Choose your weapon:");
  console.log(`1. Melee Attack (${player.equippedMeleeWeapon.id})`);
  console.log(`2. Ranged Attack (${player.equippedRangedWeapon.id})`);
  console.log(`3. Ability (${player.equippedAbility.id})`);
}

function attack(player, enemy) {
  let weaponSelect = userInput;
  if (player.speed >= enemy.speed) {
    switch(weaponSelect) {
      case "melee":
        if ((player.strength + (Math.floor(Math.random()* 20) + 1)) > enemy.armorTotal) {
          console.log("You Hit them!")
          enemy.health -= (player.equippedMeleeWeapon.weaponStrength + (Math.floor(Math.random()* 20) + 1))
        } else {
          console.log("You Missed.")
        }
        break;
      case "ranged":
        if ((player.precision + (Math.floor(Math.random()* 20) + 1)) > enemy.armorTotal) {
          console.log("You Hit them!")
          enemy.health -= (player.equippedRangedWeapon.weaponStrength + (Math.floor(Math.random()* 20) + 1))
        } else {
          console.log("You Missed.")
        }
        break;
      case "ability":
        if ((player.intellect + (Math.floor(Math.random()* 20) + 1)) > enemy.armorTotal) {
          console.log("You Hit them!")
          enemy.health -= (player.equippedAbility.weaponStrength + (Math.floor(Math.random()* 20) + 1))
        } else {
          console.log("You Missed.")
        }
        break;
    }
  } else {
    if (enemy.weaponStrength + (Math.floor(Math.random()* 20) + 1) > player.armorTotal) {
      console.log("You've been hit!")
      player.health -= (enemy.weaponStrength + (Math.floor(Math.random()* 20) + 1))
    } else {
      console.log("Enemies attack missed.")
    }
  }
}

function checkForDeath(player, enemy) {
  if(player.health <= 0) {
    console.log("Player has died!");
    return "player";
  } else if(enemy.health <= 0) {
    console.log("Enemy has died!");
    return "enemy";
  } else {
    return false;
  }
}

// stretch goal
// function searchRoom () {
//   if (player.speed >= enemy.speed) {
//     player is prompted to select action of either search or attack;
//     if (userInput === "1") {
//       attack();
//     } else if (userInput === "2") {
//       searchLoot();
//     }
//   } else {
//     attack();
//   }
// }