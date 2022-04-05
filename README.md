# jsway
The JavaScript Way

## Environment setup
1. VS Code
2. [codepen.io](https://codepen.io/)
3. Extension: Prettier, ESLint

```html
// HTML template
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Code examples</title>
</head>
<body>
    <!-- HTML code goes here -->
    <script src="../js/examples.js"></script>
</body>
</html>
```

## Key moments
+ JavaScript is a **dynamically typed** language.
+ Usage with non-boolean values
    ```js
    The && and || operators can also be applied to non-boolean values. In these cases, they may not return a boolean value.
        +expr1 && expr2 returns expr1 if this expression can be converted to false. Otherwise, it returns expr2.
        +expr1 || expr2 renvoie expr1 if this expression can be converted to true. Otherwise, it returns expr2.
    
    In JavaScript, a value or an expression that can be converted to false is said to be falsy. If, on the contrary, it can be converted to true, it is so-called truthy. All values are considered truthy except for the following falsy ones:
        +false (obviously!)
        +undefined
        +null
        +NaN (Not A Number)
        +0
        +"" or ''
    Here are a few examples illustrating this JS-specific behaviour.
    
        console.log(true && "Hello");       // "Hello"
        console.log(false && "Hello");      // false
        console.log(undefined && "Hello");  // undefined
        console.log("" && "Hello");         // ""
        console.log("Hello" && "Goodbye")   // "Goodbye"
        console.log(true || "Hello");       // true
        console.log(false || "Hello");      // "Hello"
        console.log(undefined || "Hello");  // "Hello"
        console.log("" || "Hello");         // "Hello"
        console.log("Hello" || "Goodbye")   // "Hello"
    ```
+ In switch-case statement, if '**break;**' is omitted then the next block is also run!
+ An array represents a list of elements. A JavaScript array is an object that has special properties, like length to access its size (number of elements). The first element of an array will be index number 0 - not 1.
+ To iterate over an array (browsing it element by element), you can use the for loop, the **forEach()** method or the newer **for-of** loop.
    ```js
    for (let i = 0; i < myArray.length; i++) {
        // Use myArray[i] to access each array element one by one
    }

    myArray.forEach(myElement => {
        // Use myElement to access each array element one by one
    });

    for (const myElement of myArray) {
        // Use myElement to access each array element one by one
    }
    ```
+ The **push()** method adds an element at the end of an array. The **unshift()** method adds it at the beginning.
+ The **pop()** and **splice()** are used to remove elements from the array.
+ You can store different types of elements within an array, including strings, numbers, booleans and even objects
    ```js
    const elements = ["Hello", 7, { message: "Hi mom" }, true];
    ```
+ Although string values are primitive JavaScript types, some properties and methods may be applied to them just as if they were objects.
+ The length property returns the number of characters of the string.
+ JavaScript strings are **immutable**: once created, a string value never changes. String methods never affect the initial value and always return a new string.
+ The **toLowerCase()** and **toUpperCase()** methods respectively return new converted strings to lower and upper case.
+ String values may be compared using the === operator, which is case sensitive.
+ A string may be seen as an array of characters identified by their index. The index of the first character is 0 (not 1).
+ You may iterate over a string using either a **for** or the newer **for-of** loop.
+ The **Array.from()** method can be used to turn a string into an array that can be traversed letter by letter with the forEach() method.
+ Searching for values inside a string is possible with the **indexOf()**, **startsWith()** and **endsWith()** methods.
+ The **split()** method breaks a string into subparts delimited by a separator.
+ In JavaScript, a string is defined by placing text within *single quotes* ('I am a string') or *double quotes* ("I am a string").
+ The + operator concatenates (combines or adds) two or more strings.

## The JavaScript OOP
+ A JavaScript class is defined with the class keyword. It can only contain methods. The **constructor()** method, called during object creation, is used to initialize the object, often by giving it some data properties. Inside methods, the this keyword represents the object on which the method was called.
    ```js
    class SomeClass {
        constructor(param1, param2, ...) {
            this.property1 = param1;
            this.property2 = param2;
            // ...
        }
        method1(/* ... */) {
            // ...
        }
        method2(/* ... */) {
            // ...
        }
        // ...
    }

    const obj = new SomeClass(arg1, arg2, ...);
    ```
+ JavaScript’s OOP model is based on prototypes. Any JavaScript object has an internal property which is a link (a reference) to another object: its prototype. Prototypes are used to share properties and delegate behavior between objects.
+ When trying to access a property that does not exist in an object, JavaScript tries to find this property in the prototype chain of this object by first searching its prototype, then its prototype’s own prototype, and so on.
+ There are several ways to create and link JavaScript objects through prototypes. One is to use the **Object.create()** method.
    ```js
    // Create an object linked to myPrototypeObject
    const myObject = Object.create(myPrototypeObject);
    ```
+ The JavaScript *class* syntax is another, arguably more convenient way to create relationships between objects. It emulates the class-based OOP model found in languages like C++, Java or C#. It is, however, just syntactic sugar on top of JavaScript’s own prototype-based OOP model.