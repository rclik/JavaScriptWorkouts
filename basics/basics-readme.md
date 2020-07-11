# Object Creation

JavaScript de hersey object dir. Bu object leri iki sekilde olusurabiliriz.

Aslinda JavaScript da `class` keyword u yoktur, ama OOP den gelen kisileri icin bu keyword olusturulmustur. Object ler vardir ama class gibi bir yapisi yoktur.

1. Factory Method
2. Constructor Function

Bunlari aciklayalim;

## 1- Factory Method

Object creation isini bir function ustlenir. Function isimlendirmesi camel casting ile yapilmasi gerekir (normal function gibi).

```javascript
const circleFactory = function (radius){
    // important thing is returning new object
    return {
        radius: radius,
        draw: function(){
            console.log("draw")
        }
    };
};

```

Sonrasinda bu method ile `circle` object i olusturulabilir;

```javascript
import { circleFactory } from './objectCreation/factoryMethod.js';

let circle = circleFactory(10);
console.log('Circle is created: ' + circle.radius);
```

Burada `factoryMethod` call edildiginde bir **object** olusturulur. `new` keyword une gerek yoktur.

## 2- Constructor Function

Bu yontem de aslinda bir JavaScript **function** i ile yapilir. Ama gorsel olarak OOP daki class yapisina daha yakindir. **Constructor** function bir **class** gibi dusunebiliriz. Isimlendirme PascalCasting ile yapilir.

```javascript
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    };
}
```

*Constructor function* i ile object create etmek icin `new` keyword u kullanilir.

```javascript
import { Circle } from './objectCreation/constructorMehtod.js';

let constructorCircle = new Circle(15);
console.log('[constructorMethod] Circle is created: ' + constructorCircle.radius);
```

*Constuctor function* in icinde `this` keyword unu goruyoruz ve sonra object olustururken `new` keyword unu goruyoruz. `new` keyword u kullanildiginda islemin scope unu `this` uzerinden constructor function a yonlendiriliyor. Bu sekilde `this` keyword u, object in property lerini belirliyor. Ve object uzerinden ulasilabilecek property leri bu sekilde olusturuyoruz. Bir bakima, bir **property** nin **access modifier** ini `public` etme seklidir.

`this` keyword u property nin sahibini belirler diyebiliriz.

`new` keyword u kullanildiginda 3 sey yapilir;
1- Bos bir object yaratilir
2- `this` degeri bu object e assing edilir.
3- constructor method u islemini bitirdiginde method un `this` ile iliskilendirilmis property lerini tutan object ini doner.

Eger `new` keyword unu kullanmazsak, global object e yani window object ine property lerimiz eklenir.

JavaScript engine bunu gorunce;

```javascript
let circle = new Circle(10);
```

bunu yapiyor;

```javascript
let circle = {};
Circle.call(circle, 10);
console.log(circle.radius);
```

Eger `new` i kullanmazsan, `circle` object i olusturulmuyor.

