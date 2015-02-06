/*
   dia 8: Clases

   ejer 11
*/

describe('about classes', function () {
    beforeEach(function () {
    })

    afterEach(function () {
    })

    it('composition print', function () {
        // var expected = ejer9.calculator(2).add(4).sub(1).add(2).print(); //7
        //
        var myPuppet = puppet(person);

        var sayHi = myPuppet('sayHi');
        var expected = sayHi();
        expect(expected).to.be.equal("Hi!, I'm' Pepa");

        var sayAge = myPuppet('sayAge');
        expected = sayAge();
        expect(expected).to.be.equal("I am 34 years old");
    })

})



