var listA = ["Apple", "Orange", "Cucumber", "Kiwi", "Strawberry", "Banana", "Papaya"];
var listB = ["Pineapple", "Banana", "Blueberry", "Pumpkin", "Durian", "Strawberry"];

var commonFruits = [];

for (var i = 0; i < listA.length; i++) {
    for (var j = 0; j < listB.length; j++) {
        if (listA[i] === listB[j]) {
            commonFruits.push(listA[i]);
            break; // No need to continue checking for this fruit in listB
        }
    }
}

console.log("Common fruits:", commonFruits);
