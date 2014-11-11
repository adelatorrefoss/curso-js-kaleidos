/*
   dia 4: Filter

   ejer 6
*/

describe('filter', function () {
    beforeEach(function () {

    })

    afterEach(function () {

    })

    it('hi names', function () {

        var result = ejer6.filter(['Ramiro', 'Tere', 'Toño'], function(name){
                return name !== 'Ramiro';
        });

        console.log(result);

        expect(result).to.be.eql(["Tere", "Toño"]);
    })
})



