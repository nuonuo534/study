function Animals(props) {
  this.name = props && props.name;
  this.child = {}
}

function say() {
  console.log(name)
}

Animals.prototype.say = function() {

}
Animals.male = function() {
  
}
Function.prototype.gender = function(gender) {
  return (new Animals())[gender]
}

Animals.prototype.gender = function(name) {
  return Animals.prototype[name] = [this]
}

var animalsA = new Animals({name: 'a'})
var animalsB = new Animals({name: 'b'})
animalsA.say = say
animalsB.gender('female')
animalsA.gender('male')
console.log(Animals.prototype)
// Animals.gender('male')
console.log(Animals.gender('male'))

// console.log(animalsA, animalsB)
// console.log(animalsA.say === animalsB.say)
// console.log(animalsA.__proto__.say === animalsB.__proto__.say)


