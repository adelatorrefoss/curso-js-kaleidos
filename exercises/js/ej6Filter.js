/*
   dia 4: Filter

   ejer 6
*/

var ejer6 = {};

ejer6.filter = function(names, filterFn) {
    var filtered = [];
    for (var i = 0; i < names.length; i++) {
        if (filterFn(names[i])) {
            filtered.push(names[i]);
        }
    }
    return filtered ;
}
