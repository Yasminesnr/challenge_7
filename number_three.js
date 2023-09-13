// this variable recieves a random number between 0 and 3
let randomizer = Math.floor(Math.random() * 4);

// here are the fates:
switch (randomizer) {
  case 0:
    console.log("A certain victory");
    break;
  case 1:
    console.log("not so certain victory");
    break;
  case 2:
    console.log("an uneasy victory");
    break;
  default:
    console.log("Your fate is unclear, ô chosen undead");
}
