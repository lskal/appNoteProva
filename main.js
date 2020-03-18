let btnAddNote = document.querySelector('#addNewContent');
let inputNewNote = document.querySelector('#newContent')
let listNote = document.querySelector('.content')

btnAddNote.addEventListener('click', function() {
    addNote(inputNewNote.value);
});

function addNote(contentNote) {
    let newNote = document.createElement('li');
    newNote.textContent = contentNote;

    let btnRemoveNote = document.createElement('button');
    btnRemoveNote.setAttribute("id", "btnRemove");
    btnRemoveNote.textContent = 'Elimina';
    newNote.appendChild(btnRemoveNote);
    listNote.appendChild(newNote);
    inputNewNote.value = "";

    btnRemoveNote.addEventListener('click', function(){
        this.parentNode.remove();
    })
}