let arrayEmail = ['henry@gmail', 'gabriel@gmail', 'mauro@gmail', 'totti@gmail', 'derossi@gmail', 'montella@gmail', 'candela@gmail', 'mexes@gmail'];

let emailUser = prompt('scrivi la tua email');

let divEmailPresente = document.createElement('div');

let body = document.querySelector('body');



emailUser.document.querySelector('#btn');
console.log(emailUser);







let accettato = false;

for (let indiceArray = 0; indiceArray < arrayEmail.length; indiceArray++) {


    if (arrayEmail[indiceArray].toLocaleLowerCase() == emailUser.toLocaleLowerCase()) {

        accettato = true;
        console.log(accettato);
    }

    if (accettato == true) {
        console.log('la tua email è presente nella lista');
        divEmailPresente.innerHTML = `${emailUser} la tua email è presente nella lista`;
        console.log(accettato);

    } else if (accettato == false) {
        console.log('non sei il benvenuto nel club');
        divEmailPresente.innerHTML = `${emailUser} non sei il benvenuto nel club`;
        console.log(accettato);
    }

}


body.append(divEmailPresente);

