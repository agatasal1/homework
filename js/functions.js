// Zadania do zrobienia w domu z tematu funkcji

// 1. Stworz tablice obiektów, zawierającą Twoje ulubione filmy. Kazdy film niech posiada takie wlasciwosci jak tytul, rok produkcji i ocena (number od 1 do 10). Nastepnie napisz program (bez uzycia funkcji), ktory wypisze w konsoli, ktore filmy maja ocene powyzej 8.

// Przyklad w konsoli
// Film Ojciec Chrzestny ma wg mnie ocene 10
// Film Rozowa Pantera ma wg mnie ocene 9
// Dla filmu z ocena 2, nie wyswietl nic

const movies = [
    {
        title: 'Killer',
        yearProduction: 1997,
        rating: 9,
    },
    {
        title: 'Avatar',
        yearProduction: 2009,
        rating: 7
    },
    {
        title: 'Marsjanin',
        yearProduction: 2015,
        rating: 10,
    },
    {
        title: 'Lejdis',
        yearProduction: 2005,
        rating: 2
    },
    {
        title: 'Enola Holmes',
        yearProduction: 2020,
        rating: 6
    },
    {
        title: 'Interstellar',
        yearProduction: 2020,
        rating: 10
    },
]

movies.forEach(movie => {

    if (movie.rating > 8) {
        // console.log(`Film ${movie.title} ma wg mnie ocenę ${movie.rating}.`)
    }
})



/////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Napisz funkcje multiply, ktora przyjmie dwie liczby a nastepnie wyswietli w konsoli wynik mnozenia

const multiply = () => {
    const firstNumber = prompt('Enter the first number.')
    const secondNumber = prompt('Enter the second number.')
    const result = firstNumber * secondNumber;

    console.log(result)
}

// multiply()

/////////////////////////////////////////////////////////
// 3. Napisz funkcje o nazwie whoIsTaller, ktorej zadanie jest nastepujace:
// - funkcja ma pobrac wzrost pierwszego uzytkownika
// - funkcja ma pobrac wzrost drugiego uzytkownika
// - funkcja ma wyswietlic informacje, kto jest wyzszy

const whoIsTaller = () => {
    const firstUserHeight = prompt('Enter the height of the first user');
    const secondUserHeight = prompt('Enter the height of the second user');

    if (firstUserHeight > secondUserHeight) {
        console.log('First user is higher.')
    } else if (firstUserHeight < secondUserHeight) {
        console.log('Second user is higher.')
    } else {
        console.log('Users are the same height.')
    }

}

// whoIsTaller()

///////////////////////////////////////////////////////////////////////////////////////
// 4. Napisz funkcje o nazwie findTheBestMovie, ktora przyjmie jako parametr liste Twoich ulubionych filmow i nastepnie zwroci napis "Moim ulubionym filmem jest Ojciec Chrzestny z ocena 10".


const findTheBestMovie = (listOfMovies) => {

    const ratings = listOfMovies.map(movie => {
        return movie.rating
    })
    console.log(ratings)
    const bestOne = Math.max(...ratings)

    for (let movie of listOfMovies) {
        if (movie.rating === bestOne) {
            console.log(`Moim ulubiony filmem jest ${movie.title} z oceną ${movie.rating}.`)
        }
    }


}


// findTheBestMovie(movies)