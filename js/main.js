// import $ from './jquery-3.4.1';

//global variables
const btnAddNote = document.querySelector('#addNewContent');
let inputNewNote = document.querySelector('#newContent');
const listNote = document.querySelector('.content');

//if you want the counter set 'true' swithCounterOnOff, else set 'false;
const swithCounterOnOff = false;
let counter = 0;

//set max number of characters in the input (max number before list start a new paragraph is: 98)
const maxCharacters = 64;

//set key to enter new message (13 = ENTER key)
const keyToEnter = 13;

//events
btnAddNote.addEventListener('click', function () {
    AppNote(inputNewNote.value);
});

inputNewNote.addEventListener("keydown", function (e) {
    if (e.keyCode === keyToEnter) {
        clickOnEnter(e);
    }
})

//function
function AppNote(content) {
    if (inputNewNote.value.length <= maxCharacters) {
        const newNote = document.createElement('li');
        newNote.setAttribute("onclick", "removeElement(this)")
        newNote.textContent = content;
        listNote.appendChild(newNote);
        inputNewNote.value = "";
        if (swithCounterOnOff) {
            counter++;
            newNote.setAttribute("class", "list-" + counter);
        }
        
        // append button delete
        let btnRemoveNote = document.createElement('button');
        btnRemoveNote.setAttribute("id", "btnRemove");
        btnRemoveNote.textContent = 'Elimina';
        newNote.appendChild(btnRemoveNote);
        btnRemoveNote.addEventListener('click', function(){
            this.parentNode.remove();
        })

        //Il return in genere lo usi quando una funzione deve finire il suo percorso ritornando un valore "preciso" o qualcosa che poi devi usare, quindi poi si ferma. In questo caso puoi anche usarlo ma non hai bisogno anche perché questa è una funzione generica che userai anche dopo 

    } else {
        alert("Text you written is too log, try to write a shorter one next. Text can't be longer that " + maxCharacters + " characters");
    }
}

function removeElement(el) {
    const element = el;
    element.remove();
}

function clickOnEnter(e) {
    e.preventDefault();
    btnAddNote.click();
}

// cose da fare:
/*
1. localstorege
2. use constants.js
3. ......
*/










/* Defining class using es6
class Vehicle {
    constructor(name, maker, engine) {
      this.name = name;
      this.maker =  maker;
      this.engine = engine;
    }
    getDetails(){
        return (`The name of the bike is ${this.name}.`)
    }
  }
  // Making object with the help of the constructor
  let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
  let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');

  console.log(bike1.name);    // Hayabusa
  console.log(bike2.maker);   // Kawasaki
  console.log(bike1.getDetails());
  */