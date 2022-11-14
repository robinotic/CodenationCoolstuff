
let myFavHols = [
    "Venice, Italy",
    "Paris, France",
    "Jedi Towers, Corruscant",
    "Las Vegas, Nevada",
    "Monaco City, Monaco"
];

myFavHols[6]="Moonbase Alpha, The Moon";

for (i=0; i<myFavHols.length; i++) {
    j=i;
    do {
        console.log(myFavHols[j]);
        j++;
    } while (j<myFavHols.length);


};

let evenNumbers = [];
const maxi = 20;

for (i=0; i<maxi; i++) {

    if (i % 2 == 0) {
        evenNumbers.push(i);
    }
}

j=0;

while (evenNumbers[j] != null) {
    console.log(evenNumbers[j]);
    j++;
}
