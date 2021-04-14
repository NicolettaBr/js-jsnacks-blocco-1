

//ES:1
//Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza.
//Calcola la somma del peso di tutte le zucchine.

var zucchine = [
    {
        'varietà': 'fiorentina',
        'peso_gr': 50,
        'lunghezza_cm': 12
    },
    {
        'varietà': 'alberello',
        'peso_gr': 120,
        'lunghezza_cm': 17
    },
    {
        'varietà': 'tonda',
        'peso_gr': 150,
        'lunghezza_cm': 14
    },
    {
        'varietà': 'alberello',
        'peso_gr': 200,
        'lunghezza_cm': 23
    },
    {
        'varietà': 'fiorentina',
        'peso_gr': 74,
        'lunghezza_cm': 20
    },
    {
        'varietà': 'tonda',
        'peso_gr': 230,
        'lunghezza_cm': 26
    },
    {
        'varietà': 'alberello',
        'peso_gr': 78,
        'lunghezza_cm': 18
    },
    {
        'varietà': 'tonda',
        'peso_gr': 74,
        'lunghezza_cm': 15
    },
    {
        'varietà': 'alberello',
        'peso_gr': 52,
        'lunghezza_cm': 13
    },
    {
        'varietà': 'fiorentina',
        'peso_gr': 65,
        'lunghezza_cm': 12
    }
];

//console.log(zucchine);


var pesoTotaleZucchine = sommaZucchine(zucchine);
console.log(pesoTotaleZucchine);


//ES.2
//Crea 10 oggetti che rappresentano una zucchina.
//Dividi in due array separati le zucchine che misurano meno o più di 15cm. 
//Infine stampa separatamente quanto pesano i due gruppi di zucchine.

var zucchine = [
    {
        'varietà': 'fiorentina',
        'peso_gr': 50,
        'lunghezza_cm': 12
    },
    {
        'varietà': 'alberello',
        'peso_gr': 120,
        'lunghezza_cm': 17
    },
    {
        'varietà': 'tonda',
        'peso_gr': 150,
        'lunghezza_cm': 14
    },
    {
        'varietà': 'alberello',
        'peso_gr': 200,
        'lunghezza_cm': 23
    },
    {
        'varietà': 'fiorentina',
        'peso_gr': 74,
        'lunghezza_cm': 20
    },
    {
        'varietà': 'tonda',
        'peso_gr': 230,
        'lunghezza_cm': 26
    },
    {
        'varietà': 'alberello',
        'peso_gr': 78,
        'lunghezza_cm': 18
    },
    {
        'varietà': 'tonda',
        'peso_gr': 74,
        'lunghezza_cm': 15
    },
    {
        'varietà': 'alberello',
        'peso_gr': 52,
        'lunghezza_cm': 13
    },
    {
        'varietà': 'fiorentina',
        'peso_gr': 65,
        'lunghezza_cm': 12
    }
];

//console.log(zucchine);

arrayMaggiore15 = [];
console.log('arrayMaggiore15:', arrayMaggiore15);

arrayMinore15 = [];
console.log('arrayMinore15:', arrayMinore15);



for( var i = 0; i < zucchine.length; i++){
    thisZucchina = zucchine[i];
    //console.log(thisZucchina);

    if(thisZucchina.lunghezza_cm < 15){
        arrayMinore15.push(thisZucchina);
    }else if(thisZucchina.lunghezza_cm > 15){
        arrayMaggiore15.push(thisZucchina);
    }
};

var sommaPesoMag = sommaZucchine(arrayMaggiore15);
console.log(sommaPesoMag);


var sommaPesoMin = sommaZucchine(arrayMinore15);
console.log(sommaPesoMin)




//funzione che somma il peso delle zucchine in un array

function sommaZucchine (arrayZucchine){
    var sommaPeso = 0;

    for (var i = 0; i < arrayZucchine.length; i++){
        thisZucchina = arrayZucchine[i];

        var pesoZucchina = thisZucchina.peso_gr;
        //console.log(thisZucchina.peso_gr);

        sommaPeso = sommaPeso + pesoZucchina;
        
    };

    //console.log('peso totale zucchine:', sommaPeso);
    return sommaPeso;

}