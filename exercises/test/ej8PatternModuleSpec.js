/*
   dia 5: Pattern Module

   ejer 8
*/

describe('pattern', function () {
    beforeEach(function () {
    })

    afterEach(function () {
    })

    // List.add(1);
    // List.add(3); //list.push(val);
    // List.print(); //[1, 3]
    // List.find(1); // Index: 0 // list.indexOf(3);
    // List.find(7); // Not found
    // List.remove(0); //list.splice(valPosition, 1);
    // List.removeItem(3);
    // List.add(5);
    // List.reset();
    // List.print(); // [])

    it('add', function () {
        ejer8.List.value = [];

        ejer8.List.add(1);
        ejer8.List.add(3); //list.push(val);

        var expected = ejer8.List.value;

        expect(expected).to.be.eql([1, 3]);
    })

    it('print', function () {
        ejer8.List.value = [1,3];

        var p1 = ejer8.List.print(); //[1, 3]

        expect(p1).to.be.eql([1, 3]);
    })

    it('find', function () {
        ejer8.List.value = [1,3];

        var expected = ejer8.List.find(1); // Index: 0 // list.indexOf(3);
        expect(expected).to.be.equal(0);

        expected = ejer8.List.find(7); // Not found
        expect(expected).to.be.equal(-1);
    })

    it('remove', function () {
        ejer8.List.value = [1,3];

        ejer8.List.remove(0); //list.splice(valPosition, 1);

        expect(ejer8.List.value).to.be.eql([3]);

        ejer8.List.remove(5); //list.splice(valPosition, 1);

        expect(ejer8.List.value).to.be.eql([3]);
    })

    it('removeItem', function () {
        ejer8.List.value = [1,3];

        ejer8.List.removeItem(3);

        expect(ejer8.List.value).to.be.eql([1]);

        ejer8.List.removeItem(7);

        expect(ejer8.List.value).to.be.eql([1]);
    })

    it('reset', function () {
        ejer8.List.value = [1,3];

        ejer8.List.reset();

        expect(ejer8.List.value).to.be.eql([]);
    })
})



