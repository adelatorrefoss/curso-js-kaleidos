/*
   dia 7: Clases

   ejer 11
*/

describe.only('classes - hero', function () {
    beforeEach(function () {
    })

    afterEach(function () {
    })

    // it('hero', function () {

    //     var superRamiro = Hero();


    //     var expected = superRamiro.power('invisible');
    //     expect(expected).to.be.equal("soy invisible");
    // })

    it('hero', function () {

        var ramiro = {
            name: 'ramiro'
        }

        var superRamiro = Hero(ramiro, {'readMind': powers.readOwnMine, 'invisible': powers.invisible});


        var expected = superRamiro.power('invisible');
        expect(expected).to.be.equal("ramiro puede volverse invisible cuando nadie mira");

        superRamiro.power('readMind');
        expect(expected).to.be.equal("ramiro puede volverse invisible cuando nadie mira");
    })

})



