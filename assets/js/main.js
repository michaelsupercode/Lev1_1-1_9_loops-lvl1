//Lev1_1//
let hw = []
for (i = 0; i <= 10; i++) {
    console.log(`Hello World ` + i);
}

//Lev1_2//
let numarray = []
for (i = 0; i <= 10; i++) {
    console.log(i);
}

//Lev1_3//
let counter = 0
while (counter < 10) {
    counter++
    console.log(`Hello World ` + counter);
}

//Lev1_4//
let names = ["Eric", "Steffen", "Finn", "Simon", "Franzi", "Kim", "Sergio"]
for (let i = 0; i < 1; i++) {
    console.log(names);
}

//Lev1_5//
var apples = [apple1, apple2, apple3]
var apple1 = { color: "red", size: "big" };
var apple2 = { color: "green", size: "small" };
var apple3 = { color: "yellow", size: "big" };
//wtf..

//Lev1_6//
let retarray = []
for (let i = 1; i <= 100; i++) {
    console.log(`image_` + i + `.jpg`);
}

//Lev1_7//
let index = 0
do {
    console.log(index);
    index++
    console.log(`The number is  ` + index);
}
while (index < 5);

//Lev1_8//
let n = 0
do {
    n++
    if (n % 2 == 0) {
        console.log(n)
    }
} while (n <= 20);

//Lev1_9//
let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung']
let wz = document.getElementById("input");

function catc() {
    words.forEach(x => {
        if (x.length == wz.value) {
            console.log(x);
            document.getElementById('print').innerHTML += `<h6>${x}</h6><br>`;
        }
    });
};