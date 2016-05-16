var drink_up = require('../drink_up');
var assert = require('assert');


var Monday = [
   {
       "person": "Mdu",
       "coffee": 5,
       "tea": 0,
       "water": 3
   },
   {
       "person": "Brenda",
       "coffee": 1,
       "tea": 3,
       "water": 1
   },
   {
       "person": "Lesego",
       "coffee": 0,
       "tea": 4,
       "water": 2
   }
];

var Tuesday = [
   {
       "person": "Lesego",
       "tea": 3,
       "water": 1,
       "coffee": 1
   },
   {
       "person": "Mdu",
       "tea": 0,
       "water": 5,
       "coffee": 7
   },
   {
       "person": "Brenda",
       "tea": 4,
       "water": 0,
       "coffee": 2
   }
];

var Wednesday = [
   {
       "person": "Brenda",
       "water": 4,
       "coffee": 3,
       "tea": 2
   },
   {
       "person": "Lesego",
       "water": 4,
       "coffee": 0,
       "tea": 3
   },
   {
       "person": "Mdu",
       "water": 9,
       "coffee": 8,
       "tea": 2
   }
];


var Thursday = [
  {
      "person": "Mdu",
      "tea": 0,
      "coffee": 5,
      "water": 3
  },
  {
      "person": "Brenda",
      "coffee": 1,
      "water": 1,
      "tea": 3
  },
  {
      "person": "Lesego",
      "water": 2,
      "coffee": 0,
      "tea": 4
  }
];


var Friday = [
  {
      "person": "Brenda",
      "tea": 3,
      "coffee": 1,
      "water": 1
  },
  {
      "person": "Lesego",
      "tea": 4,
      "water": 2,
      "coffee": 0
  },
  {
      "person": "Mdu",
      "water": 3,
      "tea": 0,
      "coffee": 5
  }
];



describe('data one drink_up',function(){
  it('should return How many coffees were drunk on Monday',function(){
    result = drink_up.drinks(Monday,"coffee");
    assert.equal(result,6);
  });
  it('should return How many teas were drunk on Tuesday', function(){
    result = drink_up.drinks(Tuesday,"tea");
    assert.equal(result,7);
  });
  it("should return How many waters were drunk on Wednesday", function(){
    result = drink_up.drinks(Wednesday,"water");
    assert.equal(result,17);
  });
  it('should return  Who drank the least coffee on Monday', function(){
    result = drink_up.leastCoffe(Monday);
    assert.equal(result,"Lesego");
  });
it('should return Who drank the most tea on Tuesday', function(){
  result = drink_up.mostTea(Tuesday);
  assert.equal(result,"Brenda");
});
it('should return Who drank the least water on Wednesday',function(){
  result= drink_up.leastWater(Wednesday);
    assert.deepEqual(result,["Brenda","Lesego"]);
});
it('should return How many coffees were drunk on Thursday', function(){
result = drink_up.drinks(Thursday,"coffee");
assert.equal(result,6);
});
it('should return How many teas were drunk on Thursday', function(){
  result = drink_up.drinks(Monday,"tea");
  assert.equal(result,7);
});
it('should return How many waters were drunk on Thursday', function(){
  result = drink_up.drinks(Thursday,"water");
  assert.equal(result,6);

});
it('should return How many coffees did Lesego drink on Monday', function(){
  result = drink_up.personal(Monday,"Lesego","coffee");
  assert.equal(result,0);
});
it('should return How many teas did Brenda drink on Tuesday', function(){
  result = drink_up.personal(Tuesday,"Brenda","tea");
  assert.equal(result,4);
});
// it('should return Who drank the least water on Thursday')

});
