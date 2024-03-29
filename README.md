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
        + expr1 && expr2 returns expr1 if this expression can be converted to false. Otherwise, it returns expr2.
        + expr1 || expr2 renvoie expr1 if this expression can be converted to true. Otherwise, it returns expr2.
    
    In JavaScript, a value or an expression that can be converted to false is said to be falsy. If, on the contrary, it can be converted to true, it is so-called truthy. All values are considered truthy except for the following falsy ones:
        + false (obviously!)
        + undefined
        + null
        + NaN (Not A Number)
        + 0
        + "" or ''
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
+ The *reduce()* method can take several parameters:
    + The first one is the function associated to *reduce()* and called for each array element. It takes two parameters: the first is an **accumulator** which contains the accumulated value previously returned by the last invocation of the function. The other function parameter is the array element.
    + The second one is the initial value of the accumulator (often 0).

## Document Object Model ("DOM")
+ The structured representation of a web page is called **DOM**, short for *Document Object Model*. The DOM defines the structure of a page and a way to interact with it. This means it’s a programming interface, or **API** (*Application Programming Interface*). JavaScript is the language of choice for interacting with the DOM. Through a [World Wide Web Consortium](https://w3c.org/) (**W3C**) effort, the first version of a unified DOM was created in **1998**. Nowadays, all recent browsers use a standardized DOM.
+ A web page is a set of nested tags. You can represent a web page in a hierarchical form called a tree. The `<html>` element sets up your document as HTML and contains two sub-elements, `<head>` and `<body>`, which themselves contain several sub-elements.
+ Since they use CSS selectors, *querySelectorAll()* and *querySelector()* could cover all your needs, but they might perform **slower** than the others. Here are the general rules of thumb that you should follow.
    
    ||Number of items to get|Selection criterion|Method to use|
    | ---:| :---: | :--- | :--- |
    |1|Many |By tag |getElementsByTagName()|
    |2|Many |By class |getElementsByClassName()|
    |3|Many |Not by class or tag |querySelectorAll()|
    |4|Only one |By ID |getElementById()|
    |5|Only one (the first) |Not by ID |querySelector()|

+ It’s important to note that NodeList objects are not real JavaScript arrays, so not all array operations are applicable to them. To turn a NodeList object into an array, use the **Array.from()** method.
+ The *innerHTML* property returns the HTML content of an element. The *textContent* property returns its textual content without any HTML markup.
+ The *getAttribute()* and *hasAttribute()* methods allow access to element attributes. The `classList` property and its method **contains()** provides access to an element’s classes.
+ About **NodeList**: read more [here](https://developer.mozilla.org/en-US/docs/Web/API/NodeList).
+ Adding a new element to a web page can be broken into three steps:
    + Create the new element, by `createElement()`
    + Set element properties, by `setAttribute()`.
    + Insert the new element in the DOM, by `appendChild()`.
+ The `innerHTML`,`textContent` and `classList` properties,as well as the `setAttribute` method, let you modify a DOM element’s information.
+ You create new DOM nodes via methods `createTextNode()` (for, well, text nodes) and `createElement()` (for elements themselves).
+ The `appendChild()` method lets you insert a new node as the last child of a DOM element.
+ The `insertBefore()` and `insertAdjacentHTML()` methods are alternative possibilities for adding content.
+ You can replace existing nodes with the `replaceChild()` method or remove them with `removeChild()`.
+ The JavaScript style property represents the style attribute of a DOM node. It lets you modify the element’s style by defining values of its CSS properties. Note that: the style property used in JS code only represents the style attribute of the element. Using this property, you cannot access style declarations defined elsewhere, for example in a CSS stylesheet.
+ CSS properties that involve multiple words are written in **camelCase** when dealing with JavaScript. For example, `font-family` becomes `fontFamily`.
+ The style property is not intended to access an element’s style. You should use the `getComputedStyle()` function instead.
+ Manipulating the DOM with JavaScript should be done sparingly so that page performance doesn’t suffer.

## Manipulate forms
A form lets users input data through a web page. Inputted data is usually sent to a web server. Before data gets sent off, you can use JavaScript to interact with the form data and validate it.
+ Text zones (`input type="text">` or `<textarea>`) each have a value property to access the inputted value.
+ When a text field becomes the input target, this field has the focus. The `focus` and `blur` events are triggered when the field gets or loses the focus, respectively. The `focus()` and `blur()` methods can update the focus target programmatically.
+ Checkboxes, radio buttons, and dropdown lists generate change events whenever a user modifies their choice.
+ The DOM element that corresponds to the form has an elements property that lets you access its input fields programmatically.
+ Submitting a form triggers a submit event on the form DOM element. You can prevent the sending of form data to the server by using the `preventDefault()` method on the associated Event object.
+ Any modification of a text field triggers an input event, which can be used to validate its data as the user enters it.
+ A regular expression is a pattern to which strings can be compared. Regular expressions are often used to perform fine-grained validations of form data.

## Animate page elements
+ The `setInterval()` function **kicks off** a repeated action and is called at regular intervals.
+ The `clearInterval()` function **stops a repeated action** that was launched with `setInterval()`.
+ The `setTimeout()` function **trigger** an action once after a certain delay.
• The `requestAnimationFrame()` function asks the browser to execute a function that updates the animation as soon as possible. This works well for real-time animations.
+ The `cancelAnimationFrame()` function stops an in-progress animation that was launched with `requestAnimationFrame()`.
+ We can also create web animations via CSS, like that
    ```css
    #block-css {
        width: 20px;
        height: 40px;
        background: red;
        position: relative;
        margin-left: -20px;
        animation-name: cssMoveBlock;
        animation-duration: 7s;
        animation-fill-mode: forwards;
    }
    
    @keyframes cssMoveBlock {
        from {
            /* Initial position: to the left of the frame) */
            left: 20px;
        }
        to {
            /* Final position: within the right side of the frame) */
            left: 100%;
        }
    }
    ```