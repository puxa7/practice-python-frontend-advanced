function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

function createArray(min, max) {
    let tab = [];
    for (let i = 0; i < 20; i++) {
        tab.push(randomNumber(min, max));
    }
    return tab;
}

function getLargest(arr) {
    let newArray = arr.slice();
    newArray.sort((a, b) => b - a).splice(-10, 10);
    return newArray;
}

function getAvg(arr) {
    let sum = 0;
    arr.forEach((element) => {
        sum += element;
    });
    if (arr.length > 0) {
        return sum / arr.length;
    } else {
        return null
    }
}


const arr = createArray(10, 200);
console.log(arr);

const largest = getLargest(arr);
console.log(largest);

const avg = getAvg(largest);
console.log(avg);