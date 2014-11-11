
function comparador(startValue) {
    return function (word) {
        if (word.length > startValue.length) {
            return ("" + word + " tiene mas letras que " + startValue);
        } else {
            return ("" + word + " tiene menos letras que " + startValue);
        }
    };
}

