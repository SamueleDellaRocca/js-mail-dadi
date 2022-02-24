let arrayEmail = ['henry@gmail', 'gabriel@gmail', 'mauro@gmail', 'totti@gmail', 'derossi@gmail', 'montella@gmail', 'candela@gmail', 'mexes@gmail'];

let emailUser = prompt('scrivi la tua email');

let divEmailPresente = document.createElement('div');

let body = document.querySelector('body');



let accettato = false;

for (let indiceArray = 0; indiceArray < arrayEmail.length; indiceArray++) {


    if (arrayEmail[indiceArray].toLocaleLowerCase() == emailUser.toLocaleLowerCase()) {

        accettato = true;
    }

    if (accettato == true) {
        console.log('la tua email è presente nella lista');
        divEmailPresente.innerHTML = `${emailUser} la tua email è presente nella lista`;

    } else if (accettato == false) {
        console.log('non sei il benvenuto nel club');
        divEmailPresente.innerHTML = `${emailUser} non sei il benvenuto nel club`;
    }

}


body.append(divEmailPresente);

