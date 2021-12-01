const searchMovies = (movies, term) => {
    const searchedMovies = movies.filter((movie) => {
        return movie.name.toLowerCase().includes(term.toLowerCase())
    })
    return searchedMovies
}

export default searchMovies