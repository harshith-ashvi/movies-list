const sortBy = (movies, order) => {
    if (order === "original" || order === "") {
        return [...movies]
    } else if (order === "acending") {
        return [...movies].sort((a, b) => a.ranking - b.ranking)
    } else if (order === "decending") {
        return [...movies].sort((a, b) => b.ranking - a.ranking)
    }
}

export default sortBy
