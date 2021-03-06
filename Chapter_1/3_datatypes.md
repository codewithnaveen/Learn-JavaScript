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

## Number Data Type

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

## String Data Type

A String is a sequence of characters used to represent text. In JavaScript, any value placed between single and double quotes is considered a string. This means that 1 is a number, but "1" is a string.

```
> var s = "some character";
> typeof s;
string

> var s = 'some characters inckude 123';
> typeof s;
string

//
Here's an example of a number used in the string context:
> var s = '1';
> typeof s;
string

// If you put nothing in quotes, it's still a string(an empty string):
> var s = "";
> typeof s;
string
```

When you use the plus sign with string, this perform string concatenation.
```
> var s1 = 'Naveen';
> var s2 = 'Singh';
> Var s = s1 + s2;
> s;
Naveen Singh
> typeof s;
string
```

### String conversion


When you use a number-like a string, for example, "1", as a operand in airthmetic operation, the string is converted to be number bheind the scenes. This works for all the arithmetic operations except addition.

```
> var s = '1';
> s = s * 3;
> typeof s;
"number"
```

### Special string

\\ --> \ is the escape character

\n --> End of line

\t --> Tab

\u --> The \u followed by a character code allows you to use of unicode.

###  String template literals

ES6 introduced template literals. Template literals are enclosed by the back-tick(``) character instead of the usual double or single quotes.

```
> var a = 10;
> var b = 10;
> console.log('sum is ${a + b}`);
// sum is 20
```

### String methods

|Method|Deacription|
|------|-----------|
|charAt()| Returns the character at the specified index.|
|charCodeAt()| Returns a number indicating the Unicode value of the character at the given index.|
|concat()|Combines the text of two strings and returns a new string.|
|indexOf()|Returns the index within the calling String object of the first occurrence of the specified value, or -1 if not found.|
|lastIndexOf()| Returns the index within the calling String object of the last occurrence of the specified value, or -1 if not found.|
| match()|Used to match a regular expression against a string.|
| replace()| Used to find a match between a regular expression and a string, and to replace the matched substring with a new substring.|
|search()| Used to find a match between a regular expression and a string, and to replace the matched substring with a new substring.|
| slice()| Extracts a section of a string and returns a new string.|
| split()|Splits a String object into an array of strings by separating the string into substrings.|
| substr()|Returns the characters in a string beginning at the specified location through the specified number of characters.|
| substring()|Returns the characters in a string between two indexes into the string.|
| toString()|Returns a string representing the specified object.|
| toLowerCase()|Returns the calling string value converted to lower case.|
| toUppercase()|Returns the calling string value converted to uppercase.|
| valueOf()|Returns the primitive value of the specified object.|

---

