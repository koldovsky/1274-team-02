// https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
  return num < 0 ? num : num * -1;
}

//https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
function move(position, roll) {
  return roll * 2 + position;
}

//https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

//https://www.codewars.com/kata/keep-hydrated-1/train/javascript
function litres(time) {
  return parseInt(time / 2);
}

//https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
function lovefunc(flower1, flower2) {
  return (flower1 % 2 === 0 && flower2 % 2 === 0) ||
    (flower1 % 2 === 1 && flower2 % 2 === 1)
    ? false
    : true;
}

//https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
String.prototype.toJadenCase = function () {
    return this.split(' ').map(word =>word.charAt(0).toUpperCase() + word.slice(1)).join(' ');                 
};
