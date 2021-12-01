import React from "react";
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography, Grid,Box } from "@mui/material";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeMovie } from "../actions/moviesAction";

const MovieCard = (props) => {
    const { id, name, ranking, imgSRC } = props

    const dispatch = useDispatch()

    const cardDesign = {
        maxWidth: 275,
        mb: (theme) => {
            return theme.spacing(2)
        },
        display: "flex",
    }

    const handleMovieRemove = (id) => {
        axios.delete(`http://localhost:8000/movies/${id}`)
            .then(() => {
                dispatch(removeMovie(id))
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={cardDesign}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardMedia 
                        component="img"
                        height="300"
                        image={imgSRC}
                        alt={name}
                    />
                </Box>
                <Box>
                    <CardContent sx={{ flex: '1 0 auto', justifyContent: "center", alignItems: "center"}}>
                        <Typography variant="subtitle2" gutterBottom>{name}</Typography>
                        <Typography variant="subtitle2" gutterBottom>#{ranking}</Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1}}>
                    <CardActions>
                        <IconButton onClick={() => handleMovieRemove(id)}>
                            <DeleteOutlinedIcon/>
                        </IconButton>
                    </CardActions>
                    </Box>
                    
                </Box>
            </Card>
        </Grid>  
    )
}

export default MovieCard