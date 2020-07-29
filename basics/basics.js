// console.log('**** Object Creation ****');

// import { circleFactory } from './objectCreation/factoryMethod.js';

// let circle = circleFactory(10);
// console.log('[factoryMethod] Circle is created: ' + circle.radius);

// import { Circle } from './objectCreation/constructorMehtod.js';

// let constructorCircle = new Circle(15);
// console.log('[constructorMethod] Circle is created: ' + constructorCircle.radius);


// let rahmanc = {};
// Circle.call(rahmanc, 1);
// console.log(rahmanc.radius);

// console.log('**** Object Creation ****');

// import { valueTypesTest, referenceTypesTest, referenceTypesEqualsTest } from './types/types.js';

// valueTypesTest();

// referenceTypesTest();

// referenceTypesEqualsTest();

import { Circle } from './objectCreation/constructorMehtod.js';

let circle = new Circle(10);

// circle.area = 100;
// console.log(circle.area);
// console.log(circle['area']);

// circle['area'] = 1000;
// console.log(circle.area);
// console.log(circle['area']);

// circle['full area'] = 1000;
// console.log('full area: ' + circle['full area']);
// console.log(circle.full area); // gives syntatic error

// circle['full area'] = 1000;

// let propertyName = 'full area';
// console.log('Full area inside programable property: ' + circle[propertyName]);

// circle['full area'] = 1000;

// let propertyName = 'full area';
// delete circle[propertyName]

// console.log(circle[propertyName]);

// circle.area = 1000;
// delete circle['area'];

// console.log(circle.area);

// circle.area = 100;
// circle['full area'] = 1000;

// console.log(Object.keys(circle));

// circle.area = 100;
// circle['full area'] = 1000;

// console.log( ('full area' in circle) + ', ' + ('radius' in circle) + ', ' + ('volume' in circle) );

circle.area = 100;
circle['full area'] = 1000;

// for (const key in circle) {
//     console.log(key);
// }