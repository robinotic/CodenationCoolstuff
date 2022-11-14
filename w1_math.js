for (i=0; i<10; i++) {
    num1 = Math.random()*100;
    num1 = Math.floor(num1);
    console.log(`Throw ${i} is ${num1}`);
}

console.log("\nAnd for my next trick...\n");
console.log(`Random number less than 100 is ${Math.floor(Math.random()*100)}`);

// Just checking that these lines don't work
//
//console.log(100.66.floor);
//console.log(Math.random().floor());

