/*
   dia 8: Hero

   ejer 11
*/

var ejer10 = {};

// var person = {
//         name: 'Pepa',
//         age: 34,
//         sayHi: function() {
//             return "Hi!, I'm' " + this.name;
//         },
//         sayAge: function() {
//             return "I am " + this.age + " years old";
//         }
//     };

// var myPuppet = puppet(person);
//
// var sayHi = myPuppet('sayHi');
// sayHi();
//
// var sayAge = myPuppet('sayAge');
// sayAge();

// function puppet(person) {
//
//     return function(method) {
//         return person[method].bind(person);
//     }
// }

var powers = {
    readOwnMine: function() {
        return this.name + ' puede leer su propia mente';
    },
    invisible: function() {
        return this.name + ' puede volverse invisible cuando nadie mira';
    },
    superEar: function () {
        return this.name + ' puede escuchar a grandes distancias cuando duerme';
    }

};


function Hero(civil, heroPowers) {
    return {
        power: function(powerName) {
            return heroPowers[powerName].apply(civil);
        }
    };
}

