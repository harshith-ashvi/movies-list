import React, { useState } from "react";
import { Button, TextField, Typography, Grid } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";
import { startAddMovie } from "../actions/moviesAction";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

const MoviesForm = (props) => {
    const [ name, setName ] = useState("")
    const [ ranking, setRanking ] = useState("")
    const [ formErrors, setFormErrors ] = useState({})
    const errors = {}

    const dispatch = useDispatch()

    const textfield = {
        mb: (theme) => {
            return theme.spacing(2)
        }
    }

    const runValidation = () => {
        //Name Validate
        if ( name.trim().length === 0 ) {
            errors.name = "Movie Name cannot be empty"
        }

        //Rating validate
        if ( ranking.trim().length === 0 ) {
            errors.ranking = "Ranking cannot be empty"
        } else if (isNaN(ranking.trim())) {
            errors.ranking = "Ranking should be in number"
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        runValidation()

        if ( Object.keys(errors).length === 0 ) {
            setFormErrors({})
            const data = {
                id: uuidv4(),
                name: name,
                ranking: Number(ranking)
            }
            dispatch(startAddMovie(data))
            
            setName("")
            setRanking("")
        } else {
            setFormErrors(errors)
        }


    }

    return (
        <Grid item xs={8}>
            <Typography variant="h6" gutterBottom>Add Movie</Typography>
            <form 
                noValidate 
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <TextField
                    variant="outlined"
                    color="primary"
                    label="Movie Name"
                    sx={textfield}
                    required
                    fullWidth
                    error={ formErrors.hasOwnProperty("name") }
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    helperText={ formErrors.name && formErrors.name }
                />

                <TextField
                    variant="outlined"
                    color="primary"
                    label="IMDB Ranking"
                    sx={textfield}
                    required
                    fullWidth
                    error={ formErrors.hasOwnProperty("ranking") }
                    value={ranking}
                    onChange={(e) => setRanking(e.target.value)}
                    helperText={ formErrors.ranking && formErrors.ranking }
                />

                <Button 
                    type="submit"
                    color="primary"
                    variant="contained"
                    endIcon={<KeyboardArrowRightOutlinedIcon/>}
                >Add</Button>
            </form>
        </Grid>
    )
}

export default MoviesForm