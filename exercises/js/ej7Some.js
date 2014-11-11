/*
   dia 4: Some

   ejer 7
*/

var ejer7 = {};

ejer7.some = function(items, someFn) {
    for (var i = 0; i < items.length; i++) {
        if (someFn(items[i])) {
            return true;
        }
    }

    return false;
}
