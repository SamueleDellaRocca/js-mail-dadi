let arrayEmail = ['henry@gmail', 'gabriel@gmail', 'mauro@gmail', 'totti@gmail', 'derossi@gmail', 'montella@gmail', 'candela@gmail', 'mexes@gmail'];


// console.log(emailUser);
// let emailUser = prompt('scrivi l email');


let divEmailPresente = document.createElement('div');

let body = document.querySelector('body');

let btn = document.querySelector('#btn');












btn.addEventListener('click', laFunzione);

function laFunzione() {
    let emailUser = document.getElementById('email').value;
    let accettato = false;

    for (let indiceArray = 0; indiceArray < arrayEmail.length; indiceArray++) {
        if (arrayEmail[indiceArray].toLocaleLowerCase() == emailUser.toLocaleLowerCase()) {
            accettato = true;
            console.log(emailUser);
        }
    }


    if (accettato) {
        divEmailPresente.innerHTML = 'email presente';
    } else {
        divEmailPresente.innerHTML = 'email NON presente nella lista';
    }

};


body.append(divEmailPresente);

