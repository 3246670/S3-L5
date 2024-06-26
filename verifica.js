/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let nmin = 10;
let nmax = 20;
let sum = Math.floor(Math.random() * (nmax-nmin + 1))+ nmin;
console.log(sum)

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random() *21 );
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
let ME ={
   name  : "Andrè",
   surname : "Pipitone", 
   age  : 21
}
console.log(ME)

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete ME.age
console.log( ME)


/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
ME.skills=[];
ME.skills.push("html","css","JavaScript");
console.log("con skill aggiunte",ME);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
ME.skills.push("good player")
console.log("nuova skill", ME)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
let removeskill = ME.skills.pop();
console.log(ME);




// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice () {
    let randomNumber = Math.floor(Math.random() *6 ) +1;
    return randomNumber;
}
console.log("funzione dice",dice());
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger(num1,num2) {
    if(num1 > num2){
        return num1;
    }else{
        return num2; 
    }
}
console.log(whoIsBigger(10, 5));
console.log(whoIsBigger(3,7));
console.log(whoIsBigger(4,4))

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
function splitMe(str) {
    let Array = str.split(" ");
    return Array;
}
console.log(splitMe("I Love This Game "));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
function deleteOne(str,isfrist) {
    if (isfrist){
        return str.substring(1);
    } else {   
     return str.substring(0,str.length - 1);
    }
}
console.log(deleteOne("Ciao",true));
console.log(deleteOne("Ciao",false ));


/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
function onlyLetters(str) {
    
    return str.replace(/[0-9]/g, "");
}
console.log(onlyLetters("I have 2 Horse"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
function isThisAnEmail(email) {
    const atIndex = email.indexOf("@");
    let dotIndex = email.indexOf(".",atIndex);
    return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
}
console.log(isThisAnEmail,("pipitone@gmail.com"));
console.log( isThisAnEmail,("pipitone.com"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt() {
    const daysOFWeek = ["Sunday","Monday","Tuesday","Wednesday","Thurday","Friday","Saturday"];
    const currentDate = new Date();
    const dayIndex = currentDate.getDay();
    return daysOFWeek[dayIndex];
}
console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
function rollTheDices(numRoll) {
    let values = [];
    let sum = 0;
    for (let i = 0 ; i < numRoll; i++){
      let roll = dice ();
      values.push(roll);
      sum+=roll;
    }
     
    return{
        sum:sum,
        values:values
    }
}
console.log(rollTheDices(3));


/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
function howManyDays(date) {
    let currentDate = new Date();
    let deteMilliseconds = date.getTime();
    let currentmilliseconds = currentDate.getTime();
    let difference = currentmilliseconds - deteMilliseconds
    let daysDifferece = Math.floor(difference /  (1000* 60* 60* 24));
    return daysDifferece;
}
let startDate = new Date("2024-01-10")
console.log(howManyDays(startDate))



/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
function isTodayMyBirthday(birthday) {
    let currentDayDate = new Date ();
    let currentday = currentDayDate.getDate();
    let currentMonth = currentDayDate.getMonth() +1;
    let birthdayDay = birthday.getDay();
    let birthdayDayMounth = birthday.getMonth();
    return currentday === birthdayDay && currentMonth === birthdayDayMounth;
}
let myBirthday = new Date ("2024-03-10");
console.log(isTodayMyBirthday(myBirthday));
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
/*  function newestMovie(movies) {
 let newestDate = new Date(movies[0].Year);
 let newestMovie = movies[0];
 for (let i = 1; i < movies.length; i++){
    let currentmovieDate = new Date(movies[i].Year);
    if ( currentmovieDate > newestDate){
        newestDate = currentmovieDate;
        newestMovie = movies[i];
    }
 }
 return newestMovie;
}
console.log(newestMovie(movies)); */

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
/*  function countMovies(movies) {
    return movies.length;
}
console.log(countMovies(movies)); */
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
/*function onlyTheYears(movies) {
    return movies.map(movie=> movie.Year);
}
console.log(onlyTheYears(movies))/*

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
/*function onlyInLastMillennium(movies) {
  return movies.filter(movie=>movie.Year< '2000');
  
}
console.log(onlyInLastMillennium(moviees))


/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
/*function sumAllTheYears(movies) {
  return movies.reduce((sum, movie) => sum + Number(movie.Year), 0);
}/*

// Test della funzione "sumAllTheYears"
console.log(sumAllTheYears(moviees)); // Output: somma di tutti gli anni di produzione dei film


/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
/*function searchAndDivide(moviees) {
  const match = moviees.filter (moviees => moviees.Title.toLowerCase().includes(searchstring.toLowerCase()))
  const unmatch = moviees.filter(moviees=> moviees.title.toLowerCase().includes(searchstring.toLowerCase()))
return{
  match:match,
  unmatch: unmatch
};
}
console.log(searchAndDivide("Lord"));
console.log(searchAndDivide("Avengers"));/*



/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function selectContainerElement() {
  // Seleziona l'elemento con id "container"
  const containerElement = document.getElementById('container');
  
  // Verifica se l'elemento è stato trovato
  if (containerElement) {
    console.log('Elemento con id "container" trovato:', containerElement);
  } else {
    console.log('Elemento con id "container" non trovato.');
  }
}

// Chiamata alla funzione
selectContainerElement();


/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function selectTdElements() {
  // Seleziona tutti gli elementi <td>
  const tdElements = document.querySelectorAll('td');
  
  // Verifica se sono stati trovati elementi <td>
  if (tdElements.length > 0) {
    console.log('Elementi <td> trovati:', tdElements);
  } else {
    console.log('Nessun elemento <td> trovato.');
  }
}

// Chiamata alla funzione
selectTdElements();


/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function printTdText() {
  // Seleziona tutti gli elementi <td>
  const tdElements = document.querySelectorAll('td');
  
  // Itera su ogni elemento <td>
  tdElements.forEach(function(td) {
    // Stampare il testo contenuto in ogni elemento <td>
    console.log("printed td non trovato",td.textContent);
  });
}

// Chiamata alla funzione
printTdText();





/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function addRedBackgroundToLinks() {
  // Seleziona tutti gli elementi <a>
  const linkElements = document.querySelectorAll('a');
  
  // Itera su ogni elemento <a>
  linkElements.forEach(function(link) {
    // Aggiungi il background rosso
    link.style.backgroundColor = 'red';
  });
}

// Chiamata alla funzione
addRedBackgroundToLinks();




/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
/* function addNewListItem() {
  // Crea un nuovo elemento <li>
  const addnewListItem = document.createElement('li');
  
  // Crea un nodo di testo da inserire nell'elemento <li>
  const textNode = document.createTextNode('Nuovo elemento');
  
  // Aggiungi il nodo di testo all'elemento <li>
  addnewListItem.appendChild(textNode);
  
  // Seleziona la lista non ordinata con id "myList"
  const myList = document.getElementById('myList');
  
  // Aggiungi il nuovo elemento alla lista non ordinata
  myList.appendChild(newListItem);
}

// Chiamata alla funzione
addNewListItem()/*



/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
/*function emptyList() {
  // Seleziona la lista non ordinata con id "myList"
  const myList = document.getElementById('myList');
  
  // Rimuovi tutti i figli della lista
  myList.innerHTML = '';
}

// Chiamata alla funzione
emptyList();/*




/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function addClassToTrElements() {
  // Seleziona tutti gli elementi <tr>
  const trElements = document.querySelectorAll('tr');
  
  // Itera su ogni elemento <tr>
  trElements.forEach(function(tr) {
    // Aggiungi la classe CSS "test" all'elemento <tr>
    tr.classList.add('test');
  });
}

// Chiamata alla funzione
addClassToTrElements();



// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const moviees = [
    {
      Title: 'The Lord of the Rings: The Fellowship of the Ring',
      Year: '2001',
      imdbID: 'tt0120737',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
    },
  
    {
      Title: 'The Lord of the Rings: The Return of the King',
      Year: '2003',
      imdbID: 'tt0167260',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
      Title: 'The Lord of the Rings: The Two Towers',
      Year: '2002',
      imdbID: 'tt0167261',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of War',
      Year: '2005',
      imdbID: 'tt0399295',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
      Title: 'Lords of Dogtown',
      Year: '2005',
      imdbID: 'tt0355702',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
      Title: 'The Lord of the Rings',
      Year: '1978',
      imdbID: 'tt0077869',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of the Flies',
      Year: '1990',
      imdbID: 'tt0100054',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
    },
    {
      Title: 'The Lords of Salem',
      Year: '2012',
      imdbID: 'tt1731697',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
    },
    {
      Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
      Year: '1984',
      imdbID: 'tt0087365',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of the Flies',
      Year: '1963',
      imdbID: 'tt0057261',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
    },
    {
      Title: 'The Avengers',
      Year: '2012',
      imdbID: 'tt0848228',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    },
    {
      Title: 'Avengers: Infinity War',
      Year: '2018',
      imdbID: 'tt4154756',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
    },
    {
      Title: 'Avengers: Age of Ultron',
      Year: '2015',
      imdbID: 'tt2395427',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
    },
    {
      Title: 'Avengers: Endgame',
      Year: '2019',
      imdbID: 'tt4154796',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    },
  ]
  