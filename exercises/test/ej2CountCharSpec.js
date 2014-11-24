/*
   mocha & chai
*/

describe('countChar', function () {
    beforeEach(function () {

    })

    afterEach(function () {

    })

    it('count names', function () {
        var names = ['name1','name02','name003'];
        var countChar = CountChar(names);

        expect(countChar.length).to.be.equal(names.length);
        expect(countChar[0]()).to.be.equal(5);
        expect(countChar[1]()).to.be.equal(6);
        expect(countChar[0](true)).to.be.equal('5 characters');
    })
})



