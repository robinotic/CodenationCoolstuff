
const sandwich = {
    bread: "brown",
    butter: false,
    tiers: 2,
    fillings: ["cheese", "chicken", "tomato", "spinach"],
    sauces: ["mayonaise", "mustard"]
}

console.log(sandwich.bread);
console.log(sandwich["butter"]);
console.log(sandwich.tiers);
console.log(sandwich.sauces);
console.log(sandwich["fillings"]);
console.log(sandwich.fillings[2]);


for (i=0; i<sandwich.tiers; i++) {
    console.log(`Filling ${i} is ${sandwich.fillings[i]}`);
}
console.log();

const pet  = {
    petName: "Spot",
    typeOfPet: "Dog",
    age: 2,
    colour: "brown",
    eats: "Winalot",
    wags: "Tail",
    gender: ["He", "him"],
    superpowers: "Very good at controlling drones telepathically",
    badhabbits: "Attacking the postman with drones"
}

pet.colour = "indigo"

console.log(`My pet is a ${pet.colour} ${pet.typeOfPet} called ${pet.petName} who eats ${pet.eats} and wags a ${pet.wags}.`);
console.log(`${pet.gender[0]} also has superpowers, would you believe, which are "${pet.superpowers}".`);
console.log(`Also certain bad habbits which include "${pet.badhabbits}", but I love ${pet.gender[1]} all the same.`);
console.log();


const pet2  = {
    petName: "Spot",
    typeOfPet: "dog",
    age: 2,
    colour: "brown",
    eats: "Winalot",
    wags: "tail",
    gender: ["He", "him"],
    hobbies: ["flying", "eating", "tap dancing", "frisbee"],
    features: ["legs", "tail", "nose", "tounge", "hair"],
    isEating() {
        console.log(`${this.petName} the ${this.typeOfPet} is eating`);
    },
    isDrinking() {
        console.log(`${this.petName} the ${this.typeOfPet} is drinking`);
    },
    doesFrisbee(){
        for(i=0; i<this.hobbies.length; i++) {
            if (this.hobbies[i] == "frisbee") {
                console.log(`This ${this.typeOfPet} does frisbee!`);
                return (true);
            }
       }
    },
    likesShampoo(){
        let i=0;
        while (this.features[i]) {
            if (this.features[i] == "hair") {
                console.log(`A ${this.colour} ${this.typeOfPet} with hair needs shampoo!`);
                return (true);
            }
            i++;
        }
    }
}

pet2.colour = "indigo"

console.log(`My pet is a ${pet2.colour} ${pet2.typeOfPet} called ${pet2.petName} who eats ${pet2.eats} and wags a ${pet2.wags}.`);
pet2.isEating();
pet2.isDrinking();
pet2.doesFrisbee();
pet2.likesShampoo();
console.log();

const coffeeShop = {
    branch: "Chester",
    drinks: ["tea", "coffee", "hot chocolate", "Tango", "milkshake"],
    drinksPrices: [1.10, 1.80, 1.50, 1.35, 2.10],
    food: ["chicken sandwich", "tuna sandwich", "bronto burger", "chips"],
    foodPrices: [2.45, 2.65, 3.45, 1.50],
    feedMe() {
        console.log("What would you like to eat?");
        for (i=0; i<this.food.length; i++) {
            console.log(`Order no ${i+1} is ${this.food[i]} and costs £${this.foodPrices[i]}`);
        }
        console.log();
    },
    drinkMe() {
        console.log("What would you like to drink?");
        for (i=0; i<this.drinks.length; i++) {
            console.log(`Order no ${i+1} is ${this.drinks[i]} which is priced at £${this.drinksPrices[i]}`);
        }
        console.log();
    },
    foodOrdered(order) {
        console.log(`You have ordered ${order} which is ${this.food[order-1]} for £${this.foodPrices[order-1]}`)
    },
    drinksOrdered(order) {
        console.log(`You have ordered ${order} which is ${this.drinks[order-1]} for £${this.drinksPrices[order-1]}`)
    }

}

console.log(coffeeShop);
console.log();
coffeeShop.feedMe();
coffeeShop.drinkMe();
for (i=0;i<coffeeShop.food.length;i++) coffeeShop.foodOrdered(i+1);
console.log();
for (i=0;i<coffeeShop.drinks.length;i++) coffeeShop.drinksOrdered(i+1);
console.log();



