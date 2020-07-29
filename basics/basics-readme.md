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

`this` keyword u property nin sahibini belirler diyebiliriz. `new` ile birlikte kullanilmazsa, `this` keyword u global object i, yani **window** object ini gosterir. O zaman da eklenecek property global object e eklenir. 

Simdi biraz inceleme yapalim; `new` keyword u kullanildiginda 3 sey yapilir;
1. Bos bir object yaratilir
2. `this` degeri bu object e assign edilir.
3. constructor method u islemini bitirdiginde method un `this` ile iliskilendirilmis property lerini tutan object ini doner.

Ornegin; JavaScript engine i bu kodu gorunce;

```javascript
let circle = new Circle(10);
```

Bunu yapar;

```javascript
let circle = {}; // what new keyword does
Circle.call(circle, 10);
return circle;
```

Sonra `circle` object ini kullanabiliriz. 

Eger `new` i kullanmazsak, `let` ile olusturulan yeni object olusturulmuyor, onun yerine islemin kostugu object bu durumda **window** object i kullaniliyor. Ve sonra `radius` property si bu object e ekleniyor.

```javascript
let circle = new Circle(10);
```

```javascript
Circle.call(this, 10);
return this; // this is window object here
```

Sonrasinda sunu check edebiliriz;

```javascript
console.log(windows.radius); // should return 10 for above example
```
Bu sekilde JavaScript in object yaratma islemlerini OOP a gore yapabiliriz. JS file larini da kendilerine ozel file larda tutarak single responsibility prensibini, this keyword u ile  encapsulation prensibini uygulayabiliriz. Encapsulation icin daha iyi yontemler. Onlara da access modifier basligi altinda inceleyecegiz.

# Object Property Workouts

JavaScript de object ler **run-time** da degisebilirler (Run-time da dynamic). JavaScript in bu ozelligi developer lara esneklik saglarken, ayni zamanda isleri biraz daha karmasiklastirabiliyor. Onun icin dikkatli kullanmamiz gerekir.

## 1- Property Assignment
Mesela onceki `Circle` object imizi dusunelim. 

```javascript
let circle = new Circle(10);
```

Sonrasinda, Circle factory function inda olmayan bir property ekleyebiliriz bu object e eklenebilir;

```javascript
circle.area = 100;
```

Buna **normal property** kullanimi denir.

Bu sekilde object e property tanimlamak ve kullanmakta ozguruz;

```javascript
console.log(circle.area);
console.log(circle['area']);
```

Bu bize `100, 100` degerini dondurecektir. Ikinci line daki gibi de object lere property tanimlayabiliriz. Bu sekilde yapilan property islemlerine **bracket property** property kullanimi olarak adlandirabiliriz.

```javascript
circle['area'] = 1000;
console.log(circle.area);
console.log(circle['area']);
```

Bu ikisi de calisir. Bracket ile property eklemenin normal property eklemeye gore ustun olan yani ise;
1. Icinde special char lar bulunduran property leri ekleyebilmektir. Mesela;

```javascript
circle['full area'] = 1000;
console.log(circle['full area']);
console.log(circle.area); // does not work
```

2. Bracket ile property eklemenin bir diger ustun yani ise, property lerin de programlanabilir sekilde kullanilmasidir. Mesela;

```javascript
circle['full area'] = 1000;

let propertyName = 'full area';
console.log(circle[propertyName]);
```

## 2- Property Deletion

Run-time da object den property de silebiliriz. Bunun icin `delete` keyword unu kullaniriz;

```javascript
circle['full area'] = 1000;

let propertyName = 'full area';
delete circle[propertyName]

console.log(circle[propertyName]);
```

Bu `undefined` olarak ekrana basicaktir. Cunku **circle** object inin **propertyName** adinda bir property si yoktur.

Ayni sekilde sunu da yapabiliriz;

```javascript
circle.area = 1000;
delete circle['area'];

console.log(circle.area);
```
## 3- Geting all Properties of the Object

Object in tum property lerini gormek istiyorsak, `Object.keys` method unu kullanabiliriz.Bu method bize object property lerinin isimleri olan bir **array** donecektir;

```javascript
let circle = new Circle(10);
circle.area = 100;
circle['full area'] = 1000;

console.log(Object.keys(circle));
```

Sunu doner;

`(4) ["radius", "draw", "area", "full area"]`

Burada dikkat cekilmesi gereken bir nokta var. **draw** property si bir **function** olarak tanimlanmasina ragmen yine bir property olarak gelmistir. Yani JavaScript de hersey birer object olarak dusunulebilir.

## 3- Checking if an Object includes A Property

Bir object de bu property var mi diye bakilabilir. Onun icin `in` keyword u kullanilir;

```javascript
let circle = new Circle(10);
circle.area = 100;
circle['full area'] = 1000;

console.log( ('full area' in circle) + ', ' + ('radius' in circle) + ', ' + ('volume' in circle) );
```

Bu bize `true, true, false` donecektir.

Bir object in icindeki tum property leri donmek icin ise benzer bir sekilde `in` keyword u kullanilabilir;

```javascript
let circle = new Circle(10);
circle.area = 100;
circle['full area'] = 1000;

for (const key in circle) {
    console.log(key);
}
```

Bu method lari kullaniarak tum property ler uzerinde oynayabiliriz. Oldukca esnek degil mi?