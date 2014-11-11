/*
   dia 4: Some

   ejer 7
*/

describe.only('some', function () {
    beforeEach(function () {

    })

    afterEach(function () {

    })

    it('some ok', function () {

        var result = ejer7.some([2,3,5], function(item){
                return item !== 2;
        });

        console.log(result);

        expect(result).to.be.equal(true);
    })

    it('some false', function () {

        var result = ejer7.some([2,2,2], function(item){
                return item !== 2;
        });

        console.log(result);

        expect(result).to.be.equal(false);
    })

    it('some false 2', function () {

        var result = ejer7.some([2,5,6], function(item){
                return item !== 1;
        });

        console.log(result);

        expect(result).to.be.equal(true);
    })
})



