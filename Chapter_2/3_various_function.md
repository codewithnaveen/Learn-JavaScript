### Fuctions are data

Fuctions in JavaScript are actually data. This means that you can create a function and assign it to a variable.
```
var f = function (){
    return 1;
} ;
```
This way of defining a function is sometimes refferred to as **function literal notation**

The function () { return 1;}  part is a **function expression**. A function expression can optionally have a name, in which case it becomes a **named function expression(NFE)**.
```
var f = function myFunc(){
    return 1;
}
```

When you use typeof operator on a varaible that holds a function value, it returns the string "function".
```
> function define(){
    return 1;
}

> var express = function (){
    return 1;
}

> typeof define;
"function"

> typeof express;
"function"
```

So, JavaScript functions are data, but have a special kind of data with the following two important features:

+ They contain code
+ They are executable(they can be invoked)

---

### Anonymous functions
 
 As you know, there exists a function expression syntax where you can defined like the following:
 ```
 var f = function(a){
     return a;
 } ;
 ```
 This is also often called an anonymous function (as it doesn't have a name), especially when such a function expression is used even without assigning it to a variable.

 Two elegant uses for such anonymous functions:
 + You can pass an anonymous function as a parameter to another function. The receiving function can do something useful with the function that you pass.
 + You can define an anonymous function and execute it right away.

 ---

 ### Callback functions

 As a function is just like any other data assigned to a variable, it can be defined, copied, and also passed as an argument to other functions.

 Here's an example of a function that accepts two functions as a parameters, executes them, and returns the sum of what each of them returns:
 ```
 function invokeAdd(a, b){
     return a() + b();
 }
 ```

 Now, let's define two functions using function declaration pattern that only returns hardcoded values:
 ```
 function one(){
     return 1;
 }

 function two(){
     return 2;
 }
 ```

 Now you can pass those functions to the original function, invokeAdd(), and get the result:
 ```
 > invokeAdd(one,two);
 3
 ```

 Another example of passing a function as a parameter is to use of anonymous functions (function expressions). Instead of defining one() and two(), you can simply do the following:
 ```
 > invokeAdd(
     function(){ return 1 ; },
     function(){ return 2 ; }
 );

 3
 ```
 When you pass a function, A, to another function, B, and then B executes A, it's often said that A is a **callback** function. If A doesn,t have a name, then you can say that it's an anonymous callback function.

 When are callback functions useful? Let's see some examples that demonstrate the benifits of callback functions, namely:

 + They let you pass functions without the need to name them, which means there are fewer variables floating around.
 + You can delegate the responsibilty of calling a function to another function, which means there is less code to write.
 + They can help with performance by deferring the execution or by unblocking calls.


 ### Callback examples

 