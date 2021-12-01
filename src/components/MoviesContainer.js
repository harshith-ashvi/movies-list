import { TextField, Select, MenuItem, InputLabel, FormControl, Grid, Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startGetMovies } from "../actions/moviesAction";
import MovieCard from "./MovieCard";
import MoviesForm from "./MoviesForm";
import MoviesStat from "./MoviesStats";
import searchMovies from "../Helper Function/searchMovies";
import sortBy from "../Helper Function/sortBy";
import LoadingSpinner from "./LoadingSpinner";
import AppPagination from "./AppPagination";

const MoviesConatiner = (props) => {
    const [ search, setSearch ] = useState("")
    const [ order, setOrder ] = useState("")
    const [ currentPage, setCurrentpage ] = useState(1)
    const moviesPerPage = 9

    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.movies.isLoading)
    const movies = useSelector(state => state.movies.data)
    const newMovieList = sortBy(movies, order)
    const filteredMovies = searchMovies(newMovieList, search)

    const textfield = {
        mb: (theme) => {
            return theme.spacing(2)
        }
    }

    useEffect(() => {
        dispatch(startGetMovies())
    }, [])

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleOrderBy = (e) => {
        const input = e.target.value
        setOrder(input)
    }

    const handlePageUpdate = (page) => {
        setCurrentpage(page)
    }

    //get current movies
    const indexOfLastMovie = currentPage * moviesPerPage
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage
    const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie)

    return (
        <Container>
            <div>
                <Grid container>
                    <Grid item xs={4}>
                        <TextField 
                            variant="outlined"
                            color="primary"
                            label="Search Movie"
                            sx={textfield}
                            fullWidth
                            value={search}
                            onChange={handleSearch}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl fullWidth>
                            <InputLabel>Order By</InputLabel>
                            <Select
                                label="Order By"
                                value={order}
                                onChange={handleOrderBy}
                            >
                                <MenuItem value="original">Original</MenuItem>
                                <MenuItem value="acending">Acending Order</MenuItem>
                                <MenuItem value="decending">Decending Order</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    {/* <Grid item xs={8}>
                        <MoviesForm/>
                    </Grid> */}
                </Grid>
                
                <Grid container>
                    <Grid item xs={6}>
                            <MoviesForm/>
                    </Grid>
                    <Grid item xs={6}>
                        { isLoading? (
                            <LoadingSpinner />
                        ) : (
                            <MoviesStat movies={movies}/>
                        ) }
                    </Grid>
                </Grid>
                
                <br/>
                { isLoading? (
                    <LoadingSpinner />
                ) : (
                    <Grid container>
                        { currentMovies.map((movie) => {
                            return <MovieCard key={movie.id} {...movie}/>
                        }) }
                    </Grid>
                ) }

                <AppPagination movies={filteredMovies} moviesPerPage={moviesPerPage} handlePageUpdate={handlePageUpdate}/>
            </div>
        </Container>
        
    )
}

export default MoviesConatiner