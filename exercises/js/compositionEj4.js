/*
   dia 3: calculator with args

   ejer 4
*/

function CalculatorEj4(initial) {
    var initialValue = initial;

    // calculator
    return function() {
        var operations = arguments

        // fn
        return function() {
            var operands = arguments
            var sum = initialValue;

            for (var i = 0; i < operations.length; i++) {
                console.log(">>>>" + sum);
                sum = operations[i](sum, operands[i]);
            }

            return sum;

        }
    }
}


function add(initial, factor) {
        return initial + factor;
}

function sub(initial, factor) {
        return initial - factor;
}


