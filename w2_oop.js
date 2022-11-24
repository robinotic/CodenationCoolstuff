/*
class Pet {
    constructor(name, age, type, breed, colour, time) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.breed = breed;
        this.colour = colour;
        this.lastFed = time;
    }
    feedPet (time) {
        this.lastFed = time;
        return `Last feed updated to: ${this.lastFed} for ${this.name}`;
    }
}

class PetMeds extends Pet {
    constructor(name, age, type, breed, colour, time, mtime) {
        super(name, age, type, breed, colour, time);
        this.lastMeds = mtime;
    }
    giveMeds (time) {
        this.lastMeds = time;
        return `Last meds updated to: ${this.lastMeds} for ${this.name}`;
    }
}

const Bella = new Pet("Bella", "Dog", "GS", "B&T", "08:00");
const Barney = new PetMeds("Barney", 4, "Cat", "Dom-Short", "B&G", "10:00", "13:00");
const Betty = new PetMeds("Betty", 4, "Dog", "SH", "White", "10:00");

console.log(Bella.feedPet("15:00"));
console.log(Barney.lastMeds);
console.log(Betty.lastMeds);
*/

// Activity One

class Rental {
    constructor(name, address, contactNum) {
        this.name = name;
        this.address = address;
        this.contactNum = contactNum;
        this.movies = ["Metropolis"]; // Placeholder to ensure the movies array is defined.
        this.prices = [1.99]; // Unfairly placed in the bargain bucket.
    }
    addMovie(movie, price) {
        this.movies[this.movies.length] = movie;
        this.prices[this.prices.length] = price;
    }
    removeMovie(movie) {
        for (let i=0; i<this.movies.length; i++) {
            if (this.movies[i] === movie) {
                this.movies[i] = "This movie is currently unavailable. We apologise for the inconvenience.";
                this.prices[i] = null;
            }
        }   
    }
}

// I know it's supposed to be called 'test', but I wanted to improvise!
let movieShop = new Rental("Wizzo Movies", "666 Elm Street, Mudertown", 666666666);

console.log();

console.log("Check it...")
console.log(movieShop);
console.log();

console.log(`I get my films from ${movieShop.name} on ${movieShop.address}. Phone number ${movieShop.contactNum}.`);
console.log(`They've got great movies in stock, like ${movieShop.movies[0]} for £${movieShop.prices[0]}`);
movieShop.addMovie("Alphaville", 2.99);
console.log(`And they sometimes get new stuff in, like ${movieShop.movies[movieShop.movies.length-1]} for £${movieShop.prices[movieShop.prices.length-1]}`);
console.log();

console.log("Check it...")
console.log(movieShop);
console.log();

movieShop.removeMovie("Metropolis");
console.log("Check it...")
console.log(movieShop);
console.log();

