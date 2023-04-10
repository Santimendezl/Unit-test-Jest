//funciones de conversión
const fromEuroToDollar = function(euro) {
    let dollar = euro * 1.20;
    return roundToTwo(dollar);
}

const fromDollarToYen = function(dollar) {
    let yen = dollar * 106.58;
    return roundToTwo(yen);
}

const FromYenToPound = function(yen) {
    let pound = yen * 0.006;
    return roundToTwo(pound);
}

//función de redondeo a 2 decimales
function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}

//exportacion de funciones para usarla en otros archivos
module.exports = {
    fromEuroToDollar,
    fromDollarToYen,
    FromYenToPound
};