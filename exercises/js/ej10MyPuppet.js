/*
   dia 7: My puppet

   ejer 10
*/

var ejer10 = {};

var person = {
        name: 'Pepa',
        age: 34,
        sayHi: function() {
            return "Hi!, I'm' " + this.name;
        },
        sayAge: function() {
            return "I am " + this.age + " years old";
        }
    };

// var myPuppet = puppet(person);
//
// var sayHi = myPuppet('sayHi');
// sayHi();
//
// var sayAge = myPuppet('sayAge');
// sayAge();

function puppet(person) {

    return function(method) {
        return person[method].bind(person);
    }
}
