const moviesListInitialState = {
    isLoading: true,
    data: [],
    errors: {}
}

const moviesReducer = (state = moviesListInitialState, action) => {
    switch (action.type) {
        case "TOGGLE_LOADING" : {
            return { ...state, isLoading: !state.isLoading }
        }

        case "SET_MOVIES" : {
            return { ...state, data: [...action.payload] }
        }

        case "ADD_MOVIE" : {
            return { ...state, data: [...state.data, {...action.payload}] }
        }

        case "REMOVE_MOVIE" : {
            const removed = state.data.filter((movie) => movie.id !== action.payload)
            return { ...state, data: [...removed] }
        }

        default : {
            return { ...state }
        }
    }
}

export default moviesReducer