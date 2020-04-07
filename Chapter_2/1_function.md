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


### Calling a function

In order to make a use of function, you will need to call it. You can call a function simply using its name, optionally, followed by any number of values in parentheses.

Let's call the sum() function, passing two arguments and assigning the value that a function returns to the varaiable result:

```
> var  result = sum(1, 2);
> result;
3
```






