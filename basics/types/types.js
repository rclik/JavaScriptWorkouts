const valueTypesTest = function () {
    let x = 10;
    let y = x;

    x = 20;

    console.log('x: ' + x);
    console.log('y: ' + y);
}

import { Circle } from '../objectCreation/constructorMehtod.js';

const referenceTypesTest = function () {
    let x = new Circle(10);
    let y = x;

    x.radius = 20;

    console.log('x radius: ' + x.radius);
    console.log('y radius: ' + y.radius);
}

const referenceTypesEqualsTest = function () {
    let x = new Circle(10);
    let y = x;

    x.radius = 20;

    console.log('they are equal ? ',  x==y);
}

export { valueTypesTest, referenceTypesTest, referenceTypesEqualsTest };