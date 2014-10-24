DIA 2

strict


function strictVar() {
    'use strict';
    globalVar = 3;
}

strictVar() // error

function strictFunc() {
    'use strict';
        if (true) {
            function () {
            }
        }
}

strictVar(); //error

1. Todos los parametros primitivos se pasan por valor

2. Todos los parametros que son objetos se pasan por referencia.


LOOPS

for-in
recorre las claves de un objeto

Usar:
for

o

forEach

IIFE -- Inmediate Invoque Function


SCOPE : son las funciones






