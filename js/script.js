let arrayEmail = ['henry@gmail', 'gabriel@gmail', 'mauro@gmail', 'totti@gmail', 'derossi@gmail', 'montella@gmail', 'candela@gmail', 'mexes@gmail'];

let emailUser = prompt('scrivi la tua email')




for (let indiceArray = 0; indiceArray < arrayEmail.length; indiceArray++) {

    if (arrayEmail[indiceArray] == emailUser) {
        console.log('la tua email è presente nella lista');
    } else {
        console.log('non sei il benvenuto nel club')
    }

}