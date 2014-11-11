function CalculatorEj4(initial) {
    var initialValue = initial;
    var list = []

    // calculator
    return function() {

        // fn
        return function() {

            var list = [];
            for (var i = 0; i < operations.length; i++) {
                list.push(operations[i](initialValue, 5));
            }

            return list;
        }
    }
}


function add(initial, factor) {
        return initial + factor;
}

function sub(initial, factor) {
        return initial - factor;
}


