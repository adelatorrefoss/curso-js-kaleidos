function CountChar(names) {
    var list = [];

    for (var i = 0; i < names.length; i++) {

        list.push(addToArray(names[i]));
    }

    return list;
}


function addToArray(name) {

    return function(bool) {
        if (bool) {
            return name.length + ' characters';
        } else {
            return name.length
        }
    }
}

