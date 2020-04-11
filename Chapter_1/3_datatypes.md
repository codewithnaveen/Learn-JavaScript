### Data types

Any value that you use is of certain type.
These Data types are categories into three parts:

#### Primitive data type
+ Number
+ String
+ Boolean 

#### Composite data types
+ Array
+ Object

#### Special data types
+ Undefined 
+ Null

---

### Finding out he value type - the typeof operator


If you want to know the type of a varaible or a value, you can use the special **typeof** operator. This operator returns a string that represents the data type. The return values of using typeof are one of the following:

+ number
+ string
+ boolean
+ undefined
+ object
+ function

---

### Number Data Type

This include floating point numbers as well as integers. 

```
> var n = 1;
> typeof n;
"number"
```
```
// Numbers can also be floating point(decimals), for example:

> var n2 = 1.23;
> typeof n;
"number" 
```

```
// You can call typeof dirctly on the value without assigning it a varaible first, for example:

> typeof 123;
"number"
```

### Octal and hexadecimal numbers
```
// When a number starts with 0, it's considered an octal number. For example, the octal 0377 is the decimal 255.

> var n3 = 0377;
> typeof n3
"number"
> n3;
255
```

```
// In JavaScript, you can put 0x before a hexadecimal value, also called hex for short, for example:

> var n5 = 0xff;
> typeof n5;
"number"
> n5;
255
```

### Binary Literals

```
//Until ES6, if you needed binary representaion of a integer, you had to pass them to the **parseInt()** function as a string with a radix of 2, as follows:

 console.log(parseInt('111',2)); 
 //7

// In ES6 you can use 0b( or 0B) prefix to represent binary integers. For example:

 console.log(0b111);
 //7
 ```

 ### Infinity

 There is a special vsalue in javascript called infinity. It represents a number is too big for javascript to handle.

 ```
 > Infinity;
 Infinity
 > typeof Infinity;
 "number"
 > 1e309;
 Infinity
 >1e308;
 1e+308
```
```
// Dividing by zero gives you infinity, for example:

> var a = 6/0;
> a;
Infinity
```
```
> var i = -Infinity;
> i;
-Infinity
> typeof i;
"number"
```
```
//Note :

> Infinity + Infinity;
NaN

> -Infinity + Infinity;
NaN
```
Any other airthmetic operation with Infinity as one operands gives you Infinity.

### NaN - Not a number

You get NaN when you try to perform an operation that assumes numbers, but the opreation fails.
For example, if you try to multiply 10 by the charater 'f', the result is NaN.
```
> var a = 10 * "f";
> a;
NaN
```

### Number.isNaN

ES6 provides **Number.isNan()** method to test if something is Nan or not.
```
console.log(Number.isNaN('test'));  // false
console.log(Number.isNaN(123));  // false
console.log(Number.isNaN(Nan));  // true
console.log(Number.isNaN( 10/'test'));  // false
```

### Number.isInteger

This is the new method in ES6. It returns true if the number is finite and does not contain any decimal points.

```
console.log(Number.isInteger('test')) // false
console.log(Number.isInteger(Infinity)) // false
console.log(Number.isInteger(NaN)) // false
console.log(Number.isInteger(123)) // true
console.log(Number.isInteger(1.23)) // false
```


---
