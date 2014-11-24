/*
   dia 6: Composition of Functions

   ejer 9
*/

describe.only('functionsComposition', function () {
    beforeEach(function () {
    })

    afterEach(function () {
    })

    it('composition print', function () {
        // var expected = ejer9.calculator(2).add(4).sub(1).add(2).print(); //7
        //
        var expected = ejer9.calculator(2).print();
        expect(expected).to.be.equal(2);
    })

    it('composition add', function () {
        // var expected = ejer9.calculator(2).add(4).sub(1).add(2).print(); //7
        //
        var expected = ejer9.calculator(2).add(4).print();
        expect(expected).to.be.equal(6);
    })

    it('composition sub', function () {
        // var expected = ejer9.calculator(2).add(4).sub(1).add(2).print(); //7
        //
        var expected = ejer9.calculator(2).add(4).sub(3).print();
        expect(expected).to.be.equal(3);
    })

    it('composition all', function () {
        var expected = ejer9.calculator(2).add(4).sub(1).add(2).print(); //7
        expect(expected).to.be.equal(7);
    })
})



