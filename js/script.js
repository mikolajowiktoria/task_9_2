var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
var newName = 'Marian';
function pushNames() {
  if (allNames.indexOf(newName) === -1) {
  return allNames.push(newName);
  }
}
console.log(allNames);
console.log(pushNames());