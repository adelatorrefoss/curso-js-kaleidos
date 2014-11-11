/*
   dia 3: composition
*/

describe('composition', function () {
    beforeEach(function () {

    })

    afterEach(function () {

    })

    it('composition of two functions', function () {

        var fnAdd = add(3);
        var fnSub = sub(2);

        var result = calculator(100, [fnAdd, fnSub]);
        // [103, 98]
        expect(result[0]).to.be.equal(103);
        expect(result[1]).to.be.equal(98);
    })
})



