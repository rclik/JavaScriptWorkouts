# JavaScript Types

Iki cesit object tipi vardir.

1. Value Types
2. Reference Types

Bunlarin birbirinden fakli durumlari vardir.

## 1- Value Types

Bunlar **primitive** tiplerdir. Object creation islemi icin `new` keyword unu kullanmamiza gerek yoktur.

Number, String, Boolean, undefined ve null gibi.

## 2- Reference Types

`new` keyword u ile initialize edilen object lerdir.

Object, Function ve Array gibi.

Bu iki type in birbirlerinden farki vardir. Mesela assignment islemi;

```javascript
let x = 10;
let y = x;

x = 20;
console.log(x);
console.log(y);
```

Bu ekranin ciktisi, `20, 10` olacaktir, cunku value types assignment islemi sirasida value kopyalanir.

Benzer sekilde soyle bir ornegimiz olsun;

```javascript
    let x = new Circle(10);
    let y = x;

    x.radius = 20;

    console.log('x radius: ' + x.radius);
    console.log('y radius: ' + y.radius);
```

Bu durumda ise reference kopyalandigi icin sonuc, `20. 20` olarak alinacaktir.

Java daki mantik ile ayni sekilde dusunebilirsin.

O zaman su kodu deneyelim;

```javascript
    let x = new Circle(10);
    let y = x;

    x.radius = 20;

    console.log('they are equal ? ',  x==y);
```

Sonucun `true` cikmasi lazim, cunku reference lari aynidir.

Java daki gibi bir `equals` method u JS de yoktur. Yaklasim olarak tabiki eklenebilir ama buna yonlendiren bir sorumluluk yoktur.