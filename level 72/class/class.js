function lomii(str) {
    return str.toUpperCase() + str.indexOf('A');
}

console.log(lomii("დათა")); 

function makeAllLower(list) {
  for (let i = 0; i < list.length; i++) {
      list[i].toLowerCase();
    }
  }
  return list;


  function toupperCase(str) {
  let result = "";
  let word = "";

  for (let i = 0; i < str.length; i++) {
    if (i === 0 , st [i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}
  