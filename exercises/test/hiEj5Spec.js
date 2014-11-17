/*
   dia 4: Hi!

   ejer 5
*/

describe('hi', function () {
    beforeEach(function () {

    })

    afterEach(function () {

    })

    it('hi names', function () {

        var result = mapEj5(['Ramiro', 'Tere', 'Toño'], function(name){
                return "Hi I'm " + name;
        });


        expect(result).to.be.eql(["Hi I'm Ramiro", "Hi I'm Tere", "Hi I'm Toño"]);
    })
})



