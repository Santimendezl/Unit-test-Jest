//importación de funciones del archivo app.js
const {
    fromEuroToDollar,
    fromDollarToYen,
    FromYenToPound
} = require('./app.js');

//pruebas de test
test("One euro should be 1.20 dollars", () => {
    expect(fromEuroToDollar(3.5)).toBe(4.20);
})

test("One dollar should be 106.58 yens", () => {
    expect(fromDollarToYen(2)).toBe(213.17);
})


test("One yen should be 0.006 pounds", () => {
    expect(FromYenToPound(600)).toBe(3.75);
})