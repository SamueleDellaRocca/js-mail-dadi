let arrayNumeriDado = [1, 2, 3, 4, 5, 6];




function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numeroRandomUser = generateRandomIntegerInRange(1, 6);
console.log(numeroRandomUser);


function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numeroRandomComputer = generateRandomIntegerInRange(1, 6);
console.log(numeroRandomComputer);


if (numeroRandomUser > numeroRandomComputer) {

    console.log('l utente ha vinto');

} else if (numeroRandomUser == numeroRandomComputer) {

    console.log('è un pareggio');

} else {

    console.log('il computer ha vinto')

}