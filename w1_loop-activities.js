
let myFavFilms = [
    "Blade Runner",
    "The Empire Strikes Back",
    "Flash Gordon",
    "The Life of Brian"
]

for (i=0; i<myFavFilms.length; i++) {
    if (i==2) {
        if (myFavFilms[i]=="Ghostbusters") {
            console.log(`Film no.${i+1} is ${myFavFilms[i]} and it's Ghostbusters! Yay!`);
        }
        else {
            console.log(`Film no.${i+1} is ${myFavFilms[i]} but booooh! We want Ghostbusters!`);
        }
    }
    else console.log(`Film no.${i+1} is ${myFavFilms[i]}`);
}

myFavFilms[2] = "Ghostbusters";

console.log("\nGrrrr. I'm not happy. Let's try again!\n");

for (i=0; i<myFavFilms.length; i++) {
    if (i==2) {
        if (myFavFilms[i]=="Ghostbusters") {
            console.log(`Film no.${i+1} is ${myFavFilms[i]} and it's Ghostbusters! Yay!`);
        }
        else {
            console.log(`Film no.${i+1} is ${myFavFilms[i]} but booooh! We want Ghostbusters!`);
        }
    }
    else console.log(`Film no.${i+1} is ${myFavFilms[i]}`);
}


let foundNum = false;
i=6;
while (i) {
    let num = Math.ceil(Math.random()*29);
    //console.log(`i is ${i} and num is ${num}`);
    if (num && !(num % 7)) {
        console.log(`i is ${i} and num is ${num}`);
        foundNum = true;
    }
    i--;
}
if (!foundNum) console.log("Nothing found! Blimey!");


let petersFriends = [
    "Dave",
    "Diana",
    "Giles",
    "Gina"
]

let janesFriends = [
    "Dave",
    "Donna",
    "Gerome",
    "Gina"
]

for (i=0; petersFriends[i] != null; i++) {
    for (j=0; janesFriends[j] != null; j++) {
        if (petersFriends[i] == janesFriends[j]) {
            console.log(`${janesFriends[j]} is a mutual friend of both Peter and Jane. Hooray!`);
        }
    }
}

