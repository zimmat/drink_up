exports.drinks = function(day,drink){
var total = 0;
day.forEach(function(person){
  total += Number(person[drink]);
});
return total;
}

  exports.leastCoffe = function(string){
    var minDrinker = "";
    var min = 20;
    string.forEach(function(str){
      if(str.water < min){
        minDrinker = str.person;
      }
    });
    return minDrinker;
  };
  exports.mostTea = function(string){
    var maxDrinker = "";
    var max = 0;
    string.forEach(function(str){
      if(str.tea > max){
        maxDrinker = str.person;
      }
    });
    return maxDrinker;
  };
  exports.leastWater = function(string){
    var minWater = "";
    var min = 5;
    var minDrinkers = [];
    string.forEach(function(str){
      if(str.water < min){
        minWater = str.person;
        minDrinkers.push(minWater);
      }
    });
    return minDrinkers;
  }
  exports.personal = function(day,name,type){
// console.log(type);
    var total = 0;
    day.forEach(function(people){
      if(people.person === name && people.type === type){
          total += Number(people[type]);
      }

    });
    return total;
    }
