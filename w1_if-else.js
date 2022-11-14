let food = "Chip Bap";
let drink = "Tango";
let hungry = true;
let thirsty = true;

if (hungry == true) {
    console.log(`Hmmm, I think I'll eat a ${food}.`);
}
else if (thirsty == true) {
    console.log(`Hey! A drink of ${drink} might be nice!`);
}
else {
    console.log(`I think I'll pass for now.`);
};

if (hungry && thirsty) {
    console.log(`Yumm! ${food} and ${drink} for me!`);
}
else if (hungry || thirsty) {
    console.log(`Well as long as I get something.`);
}
else {
    console.log("I feel fine right now!");
};


let music;

music = "disco";

if (music == "classical") {
    console.log("Oh how relaxing.");
}
else if (music === "disco") {
    console.log("Where are my dancing shoes?");
}
else if (music == "dance") {
    console.log("Where's the party?");
}
else {
    console.log("Oi! Turn it down!");
};


if (4 === 4){
    console.log(true);
}
else {
    console.log(false);
};

if (4 === '4'){
    console.log(true);
}
else {
    console.log(false);
};

if (4 != "4"){
    console.log(true);
}
else {
    console.log(false);
};

if (4 !== "4"){
    console.log(true);
}
else {
    console.log(false);
};
