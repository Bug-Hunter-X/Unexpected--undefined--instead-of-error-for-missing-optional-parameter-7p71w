This repository demonstrates a common yet subtle issue in TypeScript involving optional function parameters.  When an optional parameter is omitted during a function call, TypeScript does not throw an error; instead, it assigns the parameter the value `undefined`. This behavior can lead to unexpected results, especially when the function doesn't explicitly handle the `undefined` case.

The example showcases a simple function `printName`. Even though the parameter `name` is optional, omitting it during the call does not result in a compile-time or runtime error. Instead, the function prints 'undefined'. The solution demonstrates how to address this by either adding a default value or explicitly checking for undefined within the function.