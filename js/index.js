// Zadanie domowe DOM

// 1. Stworz w HTML formularz, oraz liste. Formularz niech zawiera 2 pola input: author oraz message. Zrob obsluge formularza w taki sposob, aby pod formularzem wyswietlic w liscie tekst

// - Kurs ALX jest fajny - Damian
// - Dzis jest brzydka pogoda - Agnieszka

// 2. Pod formularzem, stworz przycisk Remove List, ktory po kliknieciu ma usunac wszystkie elementy listy.

// 3*. Zrob walidacje formularza w taki sposob, zeby nie mozna bylo wyslac wiadomosci jesli ktorykolwiek z inputow jest pusty.

// 4*. Ostyluj zadanie


const submitButton = document.getElementById('submitButton')
const removeButton = document.getElementById('removeButton')
const commentsList = document.getElementById('commentsList')


const createComment = (event) => {

    event.preventDefault();

    let authorInput = document.getElementById('author');
    let messageInput = document.getElementById('message');

    if (authorInput && messageInput) {
        commentsList.innerHTML += `<li>${messageInput.value} - ${authorInput.value}.</li>`;

        authorInput.value = '';
        messageInput.value = '';

    } else {
        alert('Fill in all fields.')
    }

}



submitButton.addEventListener('click', createComment)


const removeCommentsList = () => {
    commentsList.innerHTML = ''
}


removeButton.addEventListener('click', removeCommentsList)