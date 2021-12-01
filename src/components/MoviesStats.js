import React from "react";
import { Typography, Grid, Card, CardContent } from "@mui/material";
import findTopMovie from "../Helper Function/findTopMovie";

const MoviesStat = (props) => {
    const { movies } = props

    return (
        <Grid item xs={6}>
            <Card sx={{bgcolor: "#FEF9EF", border: "1px solid"}}>
                <CardContent >
                    <Typography variant="h6" gutterBottom>Movies Stats</Typography>
                    <Typography variant="subtitle1" gutterBottom>Total Movies - {movies.length}</Typography>
                    <Typography variant="subtitle1" gutterBottom>Top Ranked Movie: </Typography>
                    <Typography variant="subtitle2" gutterBottom>{findTopMovie(movies)?.name}</Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default MoviesStat