
Let's take a look at a simple object and examine its parts:

```
var hero = {
    breed : 'Trutle',
    occupation : 'Ninja'
};
```

You can see that:
+ The name of the variable that refers to the object is hero.
+ Instead of [ and ], which you use to define an array, you use { and } for objects.
+ You separate the elements (called properties) contained in the object with commas.
+ The key/value pairs are divided by colons, as in key:value.

The keys (name of the properties) can optionally be placed in quotation marks. For example:

```
var hero = {ocupatifon: 1};
var hero = {"ocupation": 1};
var hero = {'ocupation': 1};
```
It's recommended that you don't quote the names of the properties, but there are cases when you must use quotes. Some of the cases are stated here:
+ If the property name is one of the reserved words in JavaScript.
+ If it contains spaces, special characters.
+ If it starts with a number.

In other words, if the name you have chosen for a property is not valid for a varaible in JavaScript.

---

### Elements, properties, methods and ,members

When talking about arrays, you say it contain elements. When talking about objects, you say that they contain properties.

A property of an object can be a function, because functions are just data. Properties that point a functions are also called methods. In the following example, **talk** is a method.

```
var dog = {
name: 'Benji',
talk: function (){
    alert('Woof, woof!');
}
};
```

You can also see people using the word member to refer to the properties of an object, most often when it doesn't matter if the property is a function or not.

---

### Accessing an object's properties

There are two ways to access the property of an oject:
+ Using the square barcket notation, for example, hero['occupation']
+ Using the dot notation, for example, hero.occupation

The dot notation is not easier to read and write, but it cannot always be used. The same rules apply for quoting property names. If the name of the property is not a valid variable name, you cannot use dot notation.

Let's take the hero object again:

```
var hero = {
    breed : 'Trutle';
    occupation : 'Ninja';
};
```

Following is an example for accessing a property with the dot notation:
```
> hero.breed;
"Trutle"
```
Let's see an example for accessing a property with the bracket notation:
```
> hero['occupation'];
"Ninja"
```
Consider the following example for accessing the non-existing property returns undefined:
```
> hero.hair_color;
undefined
```

objects can contain any data, including other objects:

```
var book = {
    name: 'Catch-22',
    published: 1991,
    author = {
        firstname: 'Joseph',
        lastname: 'Heller'
    }
}
```

To get to the firstname property of the object contained in the author property of the book object, you can use the following code:
```
> book.autthor.firstname;
"Joseph"
```

Let see an example using the square bracket notation:
```
> bookt['author']['lastname'];
heller
```
It works even with mix both:
```
> book.author['lastname'];
"Heller"

> book['author'].lastname;
"Heller"
```

Another case where you need square brackets is when the name of the property you need access is not in known beforehand. During runtime, it's dynamically stored variable:

```
> var key = 'firstname';
> book.author[key];
"Joseph"
```

---

### Calling an object's methods

You know a method is just a property that happens to be function, so you access methods in the same way in which you would access the properties-using the dot notation or using square brackets.
Calling(invoking) a method is the same as calling any other function- you just add parentheses after the method name, which effectively says to Execute!:

```
> var hero = {
  bread: 'Trutle',
  occupation: 'Ninja',
  say: function (){
      return 'I am ' + hero.occupation;
  }
};

> hero.says();
"I am Ninja"
```
If there are any parameters that you want to pass to a method, you would proceed as you would with noraml functions:
```
> hero.say('a', 'b', 'c');
```
You can also use of square brackets to calling/invoke a method:
```
> hero['say']();
```

This is not a common practice, unless the method name is not known at the time of writing code, but instead defined at runtime:
```
 var method = 'say';
 hero['method']();
 ```

 ---


 ### Altering properties/methods

 JavaScript allows you to alter the properties and methods of existing objects at any time.
 This includes adding new properties or deleting them. you can start with a blank object and add properties later.

 An onject without properties is shown as follows:
 ```
 > var hero = {};
 ```

 #### 1. Following the code to access an non-existing property:
 ```
 > typeof hero.breed;
 "undefined"
 ```

 #### 2. Adding two properties and a method:
 ```
 > hero.breed = 'Trutle';
 > hero.name = 'Leonardo';
 > hero.sayName = function () {
      return hero.name;
 };
 ```

 #### 3. Calling the method:
 ```
 > hero.sayName();
 "Leonardo"
 ```

 #### 4. Deleting a property:
 ```
 > delete hero.name;
 true
 ```

 #### 5. If you call the method again, it will no longer find the delete name property:
 ```
 > hero.sayName();
 "undefined"
 ```

 ---
    

### Using the this value

In the previous example, the sayName() method used hero.name to access the **name** property of the hero object. When you're inside a method though, there is another way to access the object method belongs to. This method is using the special value **this**:

```
> var hero = {
    name: 'Rafaelo';
    sayName: function () {
        return this.name;
    }
};

>hero.sayName();
"Rafaelo"

So, when you say this, you're actually saying-this object or the current object.
```
---


### Constructor functions

There is another way to create objects-using constructor functions. Let's look at an example:
```
function Hero() {
  this.occupation = 'Ninja';   
}
```

In order to create an object using this function, you can use the **new** operator as follows:
```
> var hero = new Hero();
> hero.occupation;
"Ninja"
```

A benift of using constructor functions is that they accept parameters, which can be used when creating new objects. Let's modify the constructor function to accept one parameter and assign it to the name property:
```
function Hero(name){
this.name = name;
this.occupation = 'Ninja';
this.whoAreYou = function (){
    return "I'm " + 
        this.name +
        "and I'm a " +
        this.occupation;
};
}
```

Now, you can create different objects using the same constructor:

```
> var h1 = new Hero('Michelangelo');
> var h2 = new Hero('Donatello');
> h1.whoAreYou();
"I'm Michekangelo and I'm a Ninja"
> h2.whoAreYou();
"I'm Donatello and I'm a Ninja"
```

***Note***

By the convention, you should capitalize the first letter of your constructor functions so that you have a visual clue that they are not intended to be called as regular functions.

If you call a function that is designed to be constructor but you omit the **new** operator, it is not an error. However, it doesn't give you the expected result:

```
> var h = Hero('Leonardo');
> typeof h;
"undefined"
```

Waht happend here? There is no new  operator, so a new object is not created.
The function was called like any other function, so the varaible h contains the value that the function returns.

---