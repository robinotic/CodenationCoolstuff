/*
const add = (num1) => {
    return (num2) => {
        console.log(`num1 is ${num1} and num2 is ${num2}`);
        return num1 + num2;
    }
}

console.log(add(3)(2));
*/

/*
const add = (num1, num2) => {return () => {return num1 + num2;}};
console.log(add(2,3)());
*/

//
//  ACTIVITY ONE
//

f1 = (p) => {
    //console.log("Running f1()");
    console.log(p);
}
f1("Hello Code Nation first time");

// Treat the parameter as a function then call it with a parameter built-in to f2().
// You could just replace 'p' with 'console.log' instead.
f2 = (p) => {for (i=0; i<5; i++) p(`Hello Code Nation for the ${i}th time`);}
f2(f1);

// Pass the parameter on to a function built-in to f3(), the return value is ignored.
// You could replace 'f1(p)' with 'console.log(p)'.
f3 = (p) => {return f1(p)};
f3("BOOO!");

// Rewrite f3() to take a function parameter as well.
// Put a loop in f5() (the 'simple' function) which calls f4() (the 'higer order' function?).
f4 = (p1,p2) => {return p1(p2);}
f5 = (p1) => {for (i=0; i<5; i++) {f4(console.log,`${p1}, just to say that i=${i}`);}}
f5("Hello Code Nation");

// My comprehension of reality has now officially been obfuscated!

// I think I need to actually call the return value of a function,
// as another function in its own right, to finish the activity. So...
f6 = (ignored) => {return (p) => {for (i=0; i<5; i++) p(`Hello Code Nation for the ${i}th time`)};}
console.log("Confused yet? I am!");
f6()(f1);

