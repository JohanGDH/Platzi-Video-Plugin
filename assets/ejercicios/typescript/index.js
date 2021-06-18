var muted = false;
// muted = 'callada'
//NUmber
var numerador = 42;
var denominador = 6;
var resultado = numerador / denominador;
//string
var nombre = "Johan";
var saludo = "Hola " + nombre;
//Arreglos
var personas = [];
personas = ['Isabel', 'Nicole', 'Raul'];
personas.push('Johan');
var peopleAndNumbers = [];
peopleAndNumbers.push("Ricardo");
//Enum
var color;
(function (color) {
    color["Rojo"] = "Rojo";
    color["Verde"] = "Verde";
    color["Azul"] = "Azul";
})(color || (color = {}));
var colorFavorito = color.Verde;
console.log("Mi color favorito es " + colorFavorito);
// Funciones
function Add(a, b) {
    return a + b;
}
var sum = Add(8, 146);
console.log(sum);
function createAdder(a) {
    return function (b) {
        return a + b;
    };
}
var addFour = createAdder(4);
var fourPlus6 = addFour(1345);
function fullName(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Einstein'; }
    return firstName + " " + lastName;
}
var richard = fullName('Richard');
console.log(richard);
//Interfaces
var Color;
(function (Color) {
    Color["red"] = "Rojo";
    Color["blue"] = "Azul";
    Color["green"] = "Verde";
})(Color || (Color = {}));
var rect = {
    ancho: 45,
    largo: 68,
    color: Color.green
};
function area(r) {
    return r.ancho * r.largo;
}
var areaR = area(rect);
console.log(areaR);
rect.toString = function () {
    return "Un rectangulo " + this.color;
};
console.log(rect.toString());
