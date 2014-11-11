/*
   dia 3: calculator with args

   ejer 4
*/

describe('calculatorWithArgs', function () {
    beforeEach(function () {

    })

    afterEach(function () {

    })

    it('calculator with args', function () {

        var calculator = CalculatorEj4(0);

        var fn = calculator(add, add, sub);

        var result = fn(3, 4, 1);
        expect(result).to.be.equal(6);
    })
})



