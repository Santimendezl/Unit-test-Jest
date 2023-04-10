// // importar la función sum del archivo app.js
// const {
//     fromEuroToDollar,
//     fromDollarToYen,
//     FromYenToPound
// } = require('./app.js');

//Pruebas de test
test("One euro should be 1.20 dollars", function() {
    const {
        fromEuroToDollar
    } = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBe(4.20);
})


test("One dollar should be 106.58 yens", function() {
    const {
        fromDollarToYen
    } = require('./app.js')
    expect(fromDollarToYen(1.81)).toBe(192.91);
})

test("One yen should be 0.006 pounds", function() {
    const {
        FromYenToPound
    } = require('./app.js')
    expect(FromYenToPound(624)).toBe(3.74);
})