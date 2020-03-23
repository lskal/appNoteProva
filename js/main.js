/* import $ from './jQuery_3_4_1' */

let btnAddNote = document.querySelector('#addNewContent');
let inputNewNote = document.querySelector('#newContent');

btnAddNote.addEventListener('click', function () {
    AppNote(inputNewNote.value);
});

function AppNote(content) {
    let listNote = document.querySelector('.content');

        let newNote = document.createElement('li');
        newNote.textContent = content;
        listNote.appendChild(newNote);
        content.value = "";

        //Il return in genere lo usi quando una funzione deve finire il suo percorso ritornando un valore "preciso" o qualcosa che poi devi usare, quindi poi si ferma. In questo caso puoi anche usarlo ma non hai bisogno anche perché questa è una funzione generica che userai anche dopo 
}

/*let btnAddNote = document.querySelector('#addNewContent');
let inputNewNote = document.querySelector('#newContent')
let listNote = document.querySelector('.content')

btnAddNote.addEventListener('click', function () {
    addNote(inputNewNote.value);
});

function addNote(contentNote) {
    //aggiuni nota
    let newNote = document.createElement('li');
    newNote.textContent = contentNote;
    listNote.appendChild(newNote);
    inputNewNote.value = "";

    //rimuovi nota
    let btnRemoveNote = document.createElement('button');
    btnRemoveNote.setAttribute("id", "btnRemove");
    btnRemoveNote.textContent = 'Elimina';
    newNote.appendChild(btnRemoveNote);
    btnRemoveNote.addEventListener('click', function(){
        this.parentNode.remove();
    })
};*/

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