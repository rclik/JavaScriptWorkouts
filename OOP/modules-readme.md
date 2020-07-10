# JavaScript Modules

**Ecma Script 6** ile JavaScript e **module** kavramini getirdi.

**JS module**, *JS file larini daha kolay yonetebilmemizi saglar*. Her JS file inin kendi responsibility olmasi gerektigini dusunursek, bir project de birden fazla JS file imiz olacaktir. Bu durumda JS file larini yonetmemiz oldukca onemlidir. Yoksa karmasik kodlar, binlerce satirdan olusan JS file lariyla ugrasip dururuz.

JS module ler bize;

- Bir JS file inin hangi *property* leri **export** edicegi
- Bir JS file inin hangi *JS file* i **import** edebilecegi
- Import edilen file dan hangi *property* lerin alincagi

islemlerini yapabilmemizi kolaylastirir.

## Kullanilabilirlik

Ecma Script 6 i destekleyen browser lar, yani; IE 11 ve sonrasindaki Microsoft ve yeni modern browser lar da desteklenmektedir.

Browser lar destekliyor dedik, demek ki browser uzerinden JS file i kullanirken bunun **module** oldugunu soylememiz lazim. Yoksa browser js file in **module** oldugunu bilemeyecektir.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Object Oriented JavaScript Workouts</title>

    <script type="module" src="modules/mainModules.js" />
</head>
<body>
</body>
</html>
```

Dikkat edilmesi gerek nokta, script tag ine type olarak **module** degerinin verilmesidir. `type="module"`

Bu ana kadar yapmis oldugumuz degisikliklerle, browser in kullanacagi JS file in module olarak calistirmasini sagladik. Artik module seklinde tanimlanmis diger JS file larini kullanabiliriz.

---

## Exporting JS File Properies

Bu kisimi *exporting properties* olarak adlandirmamin sebebi JavaScript de her sey bir object olarak konumlanir. Bir function da aslinda bir object dir. Bu object ler file in property leri olarak adlandirilir. Bu durumda bir JS file dan function veya object leri disariya acabilecegimizdir.

**utils.js** JS file i icinde bir object olusturalim;

```JavaScript
const circleObject = {
    radius: 10
};
```

Bu object i export etmenin birden falza yontemi vardir.

### 1- Direk Export Etme

Export yapilan *property* leri kullanabilmek icin basit bir *import* kodu yazalim;

```JavaScript
import { circleObject } from "./utils.js";

console.log("Circle object is taken from utils.js with radius: " + circleObject.radius);
```

Simdi direk export edelim; bunun icin *property definition* ina `export` keyword u eklenir.

```JavaScript
export const circleObject = {
    radius: 10
};
```

Bu sekilde **export** yapmanin bir sorunu, export lari file icinde ortak biryerde yazmadigimizdan export edilen property leri bulmanin biraz daha zor olmasidir.

Bu durumda **export** edecegimiz property leri birlikte **export** edebiliriz.

### 2- Property leri Ortak Alandan Export Etme

Bu ornekte, birden fazla object ve function property **export** edilecek ve sonra basit bir sekilde import edilecekler;

```JavaScript
const rectangeObject = {
    verticalLine: 8,
    horizontalLine: 6
};

const squareObject = {
    line: 10
};

const sayHi = function () {
    console.log("-utils.js : Hello!")
};

export { rectangeObject, squareObject, sayHi};
```

Bu degisiklikleri utils.js JS file ina direk olarak ekleyebiliriz. Ilk ornekte ekledigimz `circleObject` in export edilmesinde herhangi bir sorun olmayacaktir.

```JavaScript
import { circleObject, rectangeObject, squareObject, sayHi } from "./utils.js";

console.log("Circle object is taken from utils.js with radius: " + circleObject.radius);
console.log("Rectangle object is taken from utils.js with verticalLine: " + rectangeObject.verticalLine);
console.log("Circle object is taken from utils.js with line: " + squareObject.line);

sayHi();
```

### 3- Default Export

Eger bi JS file inda sadece bir property export ediceksen ve isim vermek istemiyorsan **default export** u kullanabilirsin.

```javascript
export default function double(number){
    return 2 * number;
}
```

Bunu import edebilmen icin;

```javascript
import doubling from "./utils.js";
console.log("doubling 3 is " + doubling(3));
```

Default olarak export edilen **property nin ismi import edilen yerde verilir**. Yukaridaki ornekte de acikca goruluyor.

> Burada dikkat edilmesi gereken sey, bir JS file inda default export kullaniliyorsa o file dan sadece bir tane export property si yapilabilecegidir.

---

## Importing JS File

Property leri export ettik, simdi de import etmenin yontemlerine bakalim;

**Export** edilen property leri **import** etmenin yontemleri var.

1. Export edilen **tum property** lerden **istediklerimizi** import edebiliriz.
2. Export edilen property leri bir **genel property** olarak dusunup onlara **bir isim** verebiliriz.
3. Export edilen property leri **yeniden isimdilendirerek** alabilir.

Simdi bunlara ornekler verelim;

### 1- Export Edilen Tum Property lerden Istediklerimizi Import Etme

Yukardaki utils.js i goz onune alalim, orada export edilen `export { rectangeObject, squareObject, sayHi};` ve `export circleObject` olmak uzere 4 tane object var.

Bunlardan istediklerimizi su sekilde alabiliriz. Hepsini almamamiza gerek kalmadan;

```javascript
import { circleObject, rectangleObject } from "./utils.js";
```

Istediklerimizi aldik.

### 2- Export edilen property leri bir genel property olarak olarak alma

Buradaki yaklasim daha iyi olabilir. Cunku import edilen property lerin nereden geldigini daha kolay anlayabiliriz;

```javascript
import * as Utils from "./utils.js";

console.log("Circle object is taken from utils.js with radius: " + Utils.circleObject.radius);
console.log("Rectangle object is taken from utils.js with verticalLine: " + Utils.rectangeObject.verticalLine);
console.log("Circle object is taken from utils.js with line: " + Utils.squareObject.line);
```

Bu sekilde 'Utils' object inden istedigimiz property leri alabiliriz.

### 3- Export edilen property leri yeniden isimlendirme

Aslinda bunu bir onceki maddede yapmistik. Yaptigimiz sey `as` keyword uyle property ye yeni bir isim vermek.
`import * as Utils from "./utils.js";` su kisimda export edilen tum property lere Utils ismini verdik.

Bunu property bazinda da yapabiliriz;

```javascript
import {circleObject as circle} from "./utils.js";

console.log("Circle object is taken from utils.js with radius: " + circle.radius);
```

Bu kadar.
