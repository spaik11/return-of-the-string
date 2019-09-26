function capitalize(str) {
  return str.toUpperCase();
}

function exclaim(str) {
  return `${str}!`;
}

function firstCharacter(str) {
  return str[0];
}

function lastCharacter(str) {
  return str[str.length -1];
}

function oneCharacter(str, i) {
  return str[i];
}

function twoCharacters(str, index1, index2) {
  return oneCharacter(str, index1) + oneCharacter(str, index2);
}

function initials(str) {
  return `${firstCharacter(str)}.${str[str.indexOf(' ') + 1]}.`;
}

function yeller(str) {
  return `${capitalize(str)}!!!`;
}


module.exports = {
  capitalize,
  exclaim,
  firstCharacter,
  lastCharacter,
  oneCharacter,
  twoCharacters,
  initials,
  yeller,
};