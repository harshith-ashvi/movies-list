import axios from "axios";

export const startGetMovies = () => {
    return (
        (dispatch) => {
            axios.get("http://localhost:8000/movies")
                .then((response) => {
                    const data = response.data
                    dispatch(toggleLoading())
                    dispatch(getMovies(data))
                })
                .catch((err) => {
                    alert(err.message)
                })
        }
    )
}

export const getMovies = (movies) => {
    return {
        type: "SET_MOVIES",
        payload: movies
    }
}

export const toggleLoading = () => {
    return {
        type: "TOGGLE_LOADING"
    }
}

export const startAddMovie = (movie) => {
    const movieName = movie.name.split(" ").join("%20")

    return (
        (dispatch) => {
            axios.request(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${movieName}`, {
                headers: {
                    "x-rapidapi-host" : "imdb-internet-movie-database-unofficial.p.rapidapi.com",
                    "x-rapidapi-key" : process.env.REACT_APP_API_KEY
                }
            })
                .then((response) => {
                    const imgLink = response.data?.titles[0].image
                    const movieUpdated = {...movie, imgSRC: imgLink}
                    axios.post("http://localhost:8000/movies", movieUpdated)
                        .then(() => {
                            dispatch(addMovies(movieUpdated))
                        })
                        .catch((err) => {
                            alert(err.message)
                            console.log("hi")
                        })
                    
                })
                .catch((err) => {
                    alert(err.message)
                })
        }
    )
}

export const addMovies = (movie) => {
    return {
        type: "ADD_MOVIE",
        payload: movie
    }
}

export const removeMovie = (id) => {
    return {
        type: "REMOVE_MOVIE",
        payload: id
    }
}