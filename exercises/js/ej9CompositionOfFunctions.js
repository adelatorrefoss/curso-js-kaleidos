/*
   dia 6: Composition of Functions

   ejer 9
*/

var ejer9 = {};

ejer9.calculator = (function(init) {

    var obj = {
        value : init,

        add:function (val) {
            obj.value += val;
            return obj;
        },

        sub:function (val) {
            obj.value -= val;
            return obj;
        },

        print:function () {
            return obj.value;
        },
    }
    return obj;

});
