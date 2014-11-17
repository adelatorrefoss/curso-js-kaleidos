/*
   dia 5: Pattern Module

   ejer 8
*/

var ejer8 = {};

ejer8.List = (function() {
    var obj = {
        value : [],

        add:function (val) {
           obj.value.push(val);
        },

        print:function () {
            return obj.value;
        },

        find:function (val) {
            return obj.value.indexOf(val);
        },

        remove:function (valPosition) {
            obj.value.splice(valPosition, 1);
        },

        removeItem:function (val) {
            var pos = obj.find(val);
            if (pos >= 0) {
                obj.remove(pos);
            }
        },

        reset:function () {
            obj.value = [];
        }
    }
    return obj;
})();
