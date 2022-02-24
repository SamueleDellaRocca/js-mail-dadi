let arrayEmail = ['henry@gmail', 'gabriel@gmail', 'mauro@gmail', 'totti@gmail', 'derossi@gmail', 'montella@gmail', 'candela@gmail', 'mexes@gmail'];

let emailUser = prompt('scrivi la tua email');

let divEmailPresente = document.createElement('div');

let body = document.querySelector('body');





for (let indiceArray = 0; indiceArray < arrayEmail.length; indiceArray++) {

    if (arrayEmail[indiceArray].toLocaleLowerCase() == emailUser.toLocaleLowerCase()) {
        console.log('la tua email è presente nella lista');
        divEmailPresente.innerHTML = 'la tua email è presente nella lista';
        break;
    } else {
        console.log('non sei il benvenuto nel club');
        divEmailPresente.innerHTML = 'non sei il benvenuto nel club';
    }

}


body.append(divEmailPresente);
