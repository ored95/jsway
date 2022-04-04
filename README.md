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
        • expr1 && expr2 returns expr1 if this expression can be converted to false. Otherwise, it returns expr2.
        • expr1 || expr2 renvoie expr1 if this expression can be converted to true. Otherwise, it returns expr2.
    
    In JavaScript, a value or an expression that can be converted to false is said to be falsy. If, on the contrary, it can be converted to true, it is so-called truthy. All values are considered truthy except for the following falsy ones:
        • false (obviously!)
        • undefined
        • null
        • NaN (Not A Number)
        • 0
        • "" or ''
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