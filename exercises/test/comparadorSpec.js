/*
   mocha & chai
*/

describe('comparador', function () {
    beforeEach(function () {

    })

    afterEach(function () {

    })

    it('puedo comparar', function () {
        console.log(comparador);
        var comparadorMarta = comparador('marta');

        var result1 = comparadorMarta('luis'); // luis tiene menos letras que marta
        var result2 = comparadorMarta('antonio'); // antonio tiene mas letras que marta

        expect(result1).to.be.equal('luis tiene menos letras que marta');
        expect(result2).to.be.equal('antonio tiene mas letras que marta');
    })
})
