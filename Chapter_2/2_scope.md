### Scope of variables
 The variables in JavaScript are not defined in a blockscope, but in a function scope. This means that if a varaible is defined inside a function, it's not visilbe outside of the function. However, if it's defined inside an if or a for code block, it's visible outside the block. 

 In the next example:
 + The f() function has access to the global variable.
 + Outside the f() function, the local variable doesn't exist.  

 ```
var global = 1;
function f() {
    var local = 2;
    global++;
    return global;
} 
```
Let's test this:
```
> f();
2
>f();
3
> local;
ReferenceError: local is not defined
```

Note :
It's also important to note that if you don't use var to declare a variable, this variable is automatically assigned a global scope.

---

### Variable hoistig

```
var a = 123;

function f(){
    alert(a);
    var a = 1;
    alert(a);

}

f();
```

You might expect that the first alert() function will display 123 (the value of the global variable a) and the second will display 1(the local variable a). But, this is not the case. The first alert will show undefined. This is because, inside the function, the local scope is more important than global scope. So, a local variable overwrites any global variable with the same name.

When your JavaScript program execuation enters a new function, all the variables decalred anywhere in the function are moved, elevated, or hoisted to the top of the function, this special bheaviour called **hosting**.

Only the decalration is hosited, meaning only the presence of the variable is moved to the top. Any assignments stay where they are.

---

### Block scope 

ES6 introduces the let and const keywords that allow us to declare a variable.

Variables declared with let are block-scoped.They exist only within the the current block. Variable declared with var are function scoped. The following example illustrates the block scope:

```
var a = 1;
{
    let a = 2;
    console.log(a);  // 2
}

console.log(a); // 1
```

Another keyword introduced in ES6  is const. A variable declared with the const keyword creates a read-only refrence to value. This does not mean that the value held by the reference is immutable. 

```
const car = {}
car.tyres = 4 ;

```
+ Use const where possible. Use them for all variables whose values don't change. 


  use  let

+ Avoid var


---




