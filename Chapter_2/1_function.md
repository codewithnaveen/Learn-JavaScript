### Function

Functions allow you to group togther a code, give it a name, and resue it later, addressing it by the name you gave it. Let's consider the following code as an example:

```
function sum(a, b){
    var c = a + b;
    return c;
}
// function declaration
```
The parts that make up the function are shown as follows:

+ The **function** keyword.
+ The name of the funtion; in this case, sum.
+ The function parameter; in this case, a and b. A function can take any number of parameters, or no parameters, seperated by commas.
+ A code block, also called the body of the fuction.
+ The **return** statement. A function always returns a value. If it doesn't return a value explicitly, it implicitly returns the value undefined.

---


### Calling a function

In order to make a use of function, you will need to call it. You can call a function simply using its name, optionally, followed by any number of values in parentheses.

Let's call the sum() function, passing two arguments and assigning the value that a function returns to the varaiable result:

```
> var  result = sum(1, 2);
> result;
3
```

---


### Parameters

When defining a function, you can specifiy what parameters the function expects to recevie when it's called. A function may not require any parameter, but if does, and you forget to pass them, JavaScript will assign undefined value to the ones you skipped.

Parameters are defined together with function, while arguments are passed to the function when it's called.

```
> function sum(a, b){
    return a + b;
}
> sum(1, 2);
```

Here, a and b are parameters, while 1 and 2 are arguments.


If you pass arguments more than the function expects, the extra ones will be ignored.


You can create functions that are felexible about the numbers of parameters they accept. This is possible thanks to the special value **arguments** that are created automatically inside each ffunction.

```
> function args(){
    return arguments;
  }
> args();
[]
> args( 1, 2, 3, 4, true, 'javascript');
[1, 2, 3, 4, true, "javascript"]
```


Using arguments you can imporve the the sum() function to accept any number of arguments and add them all up.

```
function sumOnSteroids(){
    var i,
    res = 0,
    number_of_params = arguments.length;
    for(i = 0; i < number_of_params; i++){
        res +=  arguments[i];
    }
    return res;
}

> sumOnSteroids(1, 2, 3, 4, 4, 3, 2, 1);
20
```
 The **arguments.length** expression returns the number of arguments passed when the function was passed.

 ---

 ### Default parameters

 Function parameters can be assigned default values. While calling the function, if a parameter is omitted, the default value assigned to the parameter is used:

 ```
 function render(fog_level = 0, spark_level = 100){
     console.log(`Fog Level: ${fog_level} and Spark Level: ${spark_level});
 }
 ```
 ```
 render(10); // Fog Level: 10 and Spark Level: 100
 
 In the above example, we omitting the spark_level parametr, and hence the default value assigned to the parameter is used.
 ```

 ```
render(undefined, 10);  //  Fog Level: 0 and Spark Level: 10

In the above example, undefined is consider as absence of parameter.
```

Suppose if this is the case :
```
var scope = "outer_scope";
function scoper(val = scope){
    var scope = "inner_scope";
    console.log(val);  // outer_scope
} 

scoper();
```
 
In the above example, you may expect **val** get shadowed by their inner defination of 
 the scope variable, but the default parameter have their own scope, the value assigned to val is unaffected by the inner scope.

 ---

 ### Rest parameters
 
 ES6 introduces rest parameters. Rest parameters allow us to send an arbitrary number of parameters to a function in form of array. Rest parameter can only be the last one in the list of parameters, and there can be only be one rest parameter.

 Putting a rest operator(...) before the last formal parameter indicates that parameter is rest parameter.
 Let's take one example:
 ```
 function sayThings(stack, ...desc){
     console.log(`Stack is ${$stack} and it contains ${desc});
 }

sayThings("MERN", "MongoDB", "ExpressJs", "ReactJs", "NodeJs"); 

// Output:
// Stack is MERN it contains MongoDB,ExpressJs,ReactJs,NodeJs
```
The first parametert passed to the function is recevied in stack, while the rest parameters are recevied as an array.

---

### Spread operator

A spread operator looks exactly like a rest operator but performs the exact oppisite function. Spread operator are used while providing arguments while calling a function or defining an array.
The spread operator takes an array and splits its elements into individual variables.


```
function sumAll(a, b, c){
    return a + b +c;
}

var numbers = [6, 7, 8];

//ES5 way to pass an array as an argument of a function

console.log(sumAll.apply(null,numbers)); // 21

// ES6 spread operator 

console.log(...numbers); // 21
```

we can use spread operator for defining an array:

```
var midweek = ['Wed', 'Thu];
var weekend = ['Sat', 'Sun'];
var week = ['Mon', 'Tue', ...midweek, 'Fri', ...weekend];
console.log(week);

// [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ]
```