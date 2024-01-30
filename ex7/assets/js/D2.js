/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/*function maggiore(num1, num2) {
  if (num1 > num2) {
      return num1;
  } else {
      return num2;
  }
}
let numero1 = 46;
let numero2 = 16;
let risultato = maggiore(numero1, numero2);
console.log("Il numero intero piu grande tra " + numero1 + " e " + numero2 + " e " + risultato);

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/*function diverso(numero1) {

  if (numero1 !== 5) {
    console.log('not equal');
}
}
let numero2 = 7;
diverso(numero2);

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/*function divisibileper5(divisore) {
  if (divisore % 5 === 0) {
    console.log('divisibile per cinque');
  }
}
let dividendo = 35;
divisibileper5(dividendo);

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*function verifica8(num1, num2) {
  if (num1 === 8 || num2 === 8) {
    return true;
  }
  if (num1 + num2 === 8) {
    return true;
  }
  if ((num1 - num2 === 8) || (num2 - num1 === 8)) {
    return true;
  }
  return false;
}
let numero1 = 3;
let numero2 = 11;
if (verifica8(numero1, numero2)) {
  console.log("Uno dei numeri e 8 o la loro somma/differenza e 8");
} else {
  console.log("Nessun numero e 8 o la loro somma/differenza");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/*Carrello =85;
Costidispedizione = 10;
if (Carrello > 50) {
  Totale = Carrello;
  console.log('Totale (spedizione gratuita)= ' + Totale);
} else {
  Totale = Carrello + Costidispedizione;
  console.log('Totale (con spedizione)= ' + Totale);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/*Carrello = 85;
Costidispedizione = 10;
Scontoblackfriday = 0.2;
if (Carrello > 50) {
  Totale = Carrello;
  console.log('Totale (spedizione gratuita)= ' + Totale);
} else {
  Totale = Carrello + Costidispedizione;
  console.log('Totale (con spedizione)= ' + Totale);
}
Prezzoscontato = Totale * (1 - Scontoblackfriday);
console.log('Totale (sconto Black Friday + spedizione)= ' + Prezzoscontato);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/*numero1 = 33;
numero2 = 15;
numero3 = 46;
if (numero1 > numero2 && numero1 > numero3) {
 if (numero2 > numero3) {
   console.log(numero1, numero2, numero3);
 } 
 else {
   console.log(numero1, numero3, numero2);
 }
} 
else if (numero2 > numero1 && numero2 > numero3) {
 if (numero1 > numero3) {
   console.log(numero2, numero1, numero3);
 } else {
   console.log(numero2, numero3, numero1);
 }
} 
else {
 if (numero1 > numero2) {
   console.log(numero3, numero1, numero2);
 } 
 else {
   console.log(numero3, numero2, numero1);
 }
}

/* ESERCIZIO 8
 Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/*Valore = 136;
if (typeof Valore === 'number') {
  console.log('Il valore è un numero');
} else {
  console.log('Il valore non è un numero');
}
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/*var numero1 = 5215;
if (numero1 % 2 === 0) {
  console.log(numero1 + ' è un numero pari.');
} else {
  console.log(numero1 + ' è un numero dispari');
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
/*let val = 7;
if (val < 5) {
  console.log('Meno di 5');
} else if (val < 10) {
  console.log('Meno di 10');
} else {
  console.log('Uguale a 10 o maggiore');
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/*const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
*/

/*const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city:'Toronto'
}
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/*const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city:'Toronto'
}
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/*const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city:'Toronto'
}
delete me.lastName;
me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
