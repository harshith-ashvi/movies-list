const findTopMovie = (movies) => {
    let highestRanked = movies[0]
    for (let i = 1; i < movies.length; i++) {
        if (highestRanked.ranking > movies[i].ranking) {
            highestRanked = movies[i]
        }
    } 
    return highestRanked
}

export default findTopMovie