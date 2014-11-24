/*
   dia 4: Hi!

   ejer 5
*/

function mapEj5(names, fnhi) {
    var listHi = [];
    for (var i = 0; i < names.length; i++) {
        listHi.push(fnhi(names[i]));
    }
    return listHi;
}
