
function animalCount(depth) {
    let animal = 0;

    if (depth <= 10) {         // first 10km animal 50
        animal = depth * 50;

    }
    else if (depth <= 20) {       // second 10km animal 100
        let firstPart = 10 * 50;
        let remaining = depth - 10;
        let secondPart = remaining * 100;
        animal = firstPart + secondPart;

    }

    else {
        let firstPart = 10 * 50;       // 20km up animal 300
        let secondPart = 10 * 100;
        let remaining = depth - 20;
        let thirdPart = remaining * 300;
        animal = firstPart + secondPart + thirdPart;
    }
    return animal;
}

const result = animalCount(7)
console.log(result);