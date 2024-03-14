/* Crea un oggetto persona con le seguenti caratteristiche:
nome
cognome
eta'
un metodo che permetta di salutare
*/

let ragazzo = {
    'nome': 'marco',
    'cognome': 'panzan',
    'eta': 28,
    'saluta': function () {
        return `ciao a tutti sono marco`;
    }
}

console.log(ragazzo);
console.log(ragazzo.saluta());

/* Traccia 2:
Crea un oggetto agenda con una proprietà che comprenda una lista di contatti con un nome e un numero di telefono, ed abbia diverse funzionalità tra cui:
mostrare tutti i contatti dell’agenda
chiamare un contatto
eliminare un contatto dall’agenda
aggiungere un nuovo contatto
modificare un contatto esistente
*/

let rubrica = {
    'contacts': [
        { 'name': 'Nicola', 'telefono': '3331111111' },
        { 'name': 'Lorenzo', 'telefono': '3332222222' },
        { 'name': 'Paola', 'telefono': '3333333333' },
        { 'name': 'Jenny', 'telefono': '3334444444' }
    ],
    /* mostrare tutti i contatti */
    'mostraContatti': function () {
        this.contacts.forEach(contact => console.log(`Nome :${contact.name} numero : ${contact.telefono}`))
    },
    /* chiamare un contatto */

    'chiama_contatti': function (contactname) {
        let isfound = false;
        this.contacts.forEach(contact => {
            if (contact.name.toLowerCase() == contactname.toLowerCase()) {
                contact.name = contactname;
                isfound = true;
                console.log(`stai chiamando ${contact.name}`)
            };
        })
        if (isfound == false) {
            console.log(`non è stato trovato il contatto, chiamata non eseguita`)
        };
    },
    /* eliminare un contatto */
    'eliminareuncontatto': function (contattoeliminato) {
        let filtered = this.contacts.filter(contact => contact.name !== contattoeliminato);
        console.log(filtered);
    },
    'addcontatto': function (nuovoNome, nuovoNumero) {
        this.contacts.push({ 'name': nuovoNome, 'telefono': nuovoNumero })
        console.log('contatto aggiunto', nuovoNome, 'numero aggiunto', nuovoNumero)

    },
    'modContatto': function (contactname, nuovonumero) {
        this.contacts.forEach(contact => {
            if (contact.name == contactname) {
                contact.telefono = nuovonumero;
            };
            if (contact.name !== contactname) {
                console.log('contatto non presente in rubrica');
            }

        })

    },



}

/* mostrare contatti */

rubrica.chiama_contatti(`jenny`);
/* eliminare un contatto */
rubrica.eliminareuncontatto('Paola');
/* aggiungere un contatto */
rubrica.addcontatto('marco', '3420666666');
/* modifica contatto */
rubrica.modContatto('Nicola', '98988888');
/* mostrare contatti */
rubrica.mostraContatti();








