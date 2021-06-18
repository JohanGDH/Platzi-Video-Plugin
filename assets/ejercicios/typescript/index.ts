

let muted:boolean = false;

// muted = 'callada'

//NUmber

let numerador:number = 42;
let denominador:number = 6;
let resultado = numerador / denominador;

//string
let nombre = "Johan";
let saludo = `Hola ${nombre}`;

//Arreglos

let personas :string[] = [];
personas = ['Isabel', 'Nicole', 'Raul'];

personas.push('Johan');

let peopleAndNumbers :Array<string | number> = [];
peopleAndNumbers.push("Ricardo");

//Enum
enum color {
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul'
}

let colorFavorito:color = color.Verde;
console.log(`Mi color favorito es ${colorFavorito}`);

// Funciones
function Add (a: number,b: number ): number {
    return a + b;
}

const sum = Add(8, 146);
console.log(sum);

function createAdder(a: number): (number) => number {
    return function(b: number) {
        return a + b;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(1345);


function fullName(firstName: string, lastName: string = 'Einstein'): string {
    return `${firstName} ${lastName}`;
}
const richard = fullName('Richard');
console.log(richard);


//Interfaces

enum Color {
    red = 'Rojo',
    blue = 'Azul',
    green = 'Verde'
}


interface Rectangle {
    ancho: number,
    largo: number,
    color: Color,     
}

let rect: Rectangle = {
    ancho: 45,
    largo: 68,
    color: Color.green,
}

function area(r: Rectangle) {
    return r.ancho * r.largo;
}

let areaR = area(rect);
console.log(areaR);

rect.toString = function () {
    return `Un rectangulo ${this.color}`
}

console.log(rect.toString())
