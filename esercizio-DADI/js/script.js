let body = document.querySelector('body');

let arrayNumeriDado = [1, 2, 3, 4, 5, 6];

let container = document.createElement('div');

body.append(container);


let numeroRandomUser = generateRandomIntegerInRange(1, 6);
console.log(numeroRandomUser);

let numeroRandomComputer = generateRandomIntegerInRange(1, 6);
console.log(numeroRandomComputer);


container.innerHTML = `il numero dell utente è ${numeroRandomUser} <br>`;
container.innerHTML += `il numero del computer è ${numeroRandomComputer} <br>`;







function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



if (numeroRandomUser > numeroRandomComputer) {

    console.log('l utente ha vinto');
    container.innerHTML += 'l utente ha vinto';


} else if (numeroRandomUser == numeroRandomComputer) {

    console.log('è un pareggio');
    container.innerHTML += 'è un pareggio';

} else {

    console.log('il computer ha vinto')
    container.innerHTML += 'il computer ha vinto';
}

