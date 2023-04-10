let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
//funciones de conversión
const fromEuroToDollar = function(euro) {
    let dollar = euro * oneEuroIs.USD;
    return Number(dollar.toFixed(2));
}

const fromDollarToYen = function(dollar) {
    let yen = dollar * (oneEuroIs.JPY / oneEuroIs.USD);
    return Number(yen.toFixed(2));
}

const FromYenToPound = function(yen) {
    let pound = yen * (oneEuroIs.GBP / oneEuroIs.JPY);
    return Number(pound.toFixed(2));
}

//exportacion de funciones para usarla en otros archivos
module.exports = {
    fromEuroToDollar,
    fromDollarToYen,
    FromYenToPound
};